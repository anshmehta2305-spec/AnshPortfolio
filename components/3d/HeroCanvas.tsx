"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
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
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Root Group
    const cadGroup = new THREE.Group();
    scene.add(cadGroup);

    // 1. Industrial Outer Blueprint Polyhedron (Dodecahedron with wireframe)
    const polyGeo = new THREE.DodecahedronGeometry(6.5, 0);
    const wireframeGeo = new THREE.WireframeGeometry(polyGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0xd4ff00, // Acid Lime
      transparent: true,
      opacity: 0.35,
      linewidth: 1,
    });
    const cadWireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
    cadGroup.add(cadWireframe);

    // 2. Vertex Marker Points (CAD Points)
    const posAttribute = polyGeo.attributes.position;
    const vertexMat = new THREE.PointsMaterial({
      color: 0xff5500, // Signal Orange
      size: 0.28,
    });
    const vertexPoints = new THREE.Points(polyGeo, vertexMat);
    cadGroup.add(vertexPoints);

    // 3. Inner Technical Octahedron Core
    const innerGeo = new THREE.OctahedronGeometry(3.6, 0);
    const innerWireframe = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
    });
    const innerCore = new THREE.LineSegments(innerWireframe, innerMat);
    cadGroup.add(innerCore);

    // 4. Subtle CAD Horizon Grid Plane
    const gridHelper = new THREE.GridHelper(30, 20, 0xd4ff00, 0x222630);
    gridHelper.position.y = -7.5;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.25;
    scene.add(gridHelper);

    // Mouse tracking with smooth damping
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 1.5;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth lag interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      cadGroup.rotation.y = elapsed * 0.12 + currentMouseX * 0.5;
      cadGroup.rotation.x = currentMouseY * 0.4;
      cadGroup.rotation.z = elapsed * 0.04;

      innerCore.rotation.y = -elapsed * 0.18;
      innerCore.rotation.x = elapsed * 0.1;

      renderer.render(scene, camera);
    };

    animate();

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
      polyGeo.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      innerGeo.dispose();
      innerWireframe.dispose();
      innerMat.dispose();
      vertexMat.dispose();
      gridHelper.dispose();
      renderer.dispose();
    };
  }, []);

  if (isReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-75 z-0"
      aria-hidden="true"
    />
  );
}
