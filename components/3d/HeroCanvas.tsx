"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setIsReducedMotion(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group for mouse reaction
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Central Geometric Data Core (Wireframe Icosahedron)
    const coreGeometry = new THREE.IcosahedronGeometry(7, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    worldGroup.add(coreMesh);

    // Secondary inner wireframe octahedron
    const innerGeometry = new THREE.OctahedronGeometry(4, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    worldGroup.add(innerMesh);

    // 2. Particle Constellation Field
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 35;

      velocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.22,
      transparent: true,
      opacity: 0.65,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    worldGroup.add(particles);

    // Mouse tracking with smooth damping
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      worldGroup.rotation.y = elapsedTime * 0.08 + currentMouseX * 0.4;
      worldGroup.rotation.x = currentMouseY * 0.3;

      coreMesh.rotation.x = elapsedTime * 0.05;
      coreMesh.rotation.z = elapsedTime * 0.03;

      innerMesh.rotation.y = -elapsedTime * 0.1;
      innerMesh.rotation.x = elapsedTime * 0.08;

      // Particle floating drift
      const posAttr = particleGeometry.attributes.position;
      const array = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        array[i3] += velocities[i].x;
        array[i3 + 1] += velocities[i].y;
        array[i3 + 2] += velocities[i].z;

        // Boundaries wrap
        if (Math.abs(array[i3]) > 25) array[i3] = -array[i3];
        if (Math.abs(array[i3 + 1]) > 20) array[i3 + 1] = -array[i3 + 1];
        if (Math.abs(array[i3 + 2]) > 20) array[i3 + 2] = -array[i3 + 2];
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (isReducedMotion) {
    return (
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-cyan/10 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-85 z-0"
      aria-hidden="true"
    />
  );
}
