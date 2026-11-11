import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_INFO.portfolioDomain),
  title: {
    default: `${PERSONAL_INFO.name} — Full-Stack Developer & Software Engineer`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.bio,
  keywords: [
    "Ansh Mehta",
    "Full-Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "Next.js 14",
    "React",
    "TypeScript",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Prisma",
    "Three.js",
    "WebGL",
    "Portfolio",
    "Parul University",
    "Gujarat",
  ],
  authors: [{ name: PERSONAL_INFO.fullName, url: PERSONAL_INFO.portfolioDomain }],
  creator: PERSONAL_INFO.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PERSONAL_INFO.portfolioDomain,
    title: `${PERSONAL_INFO.name} — Full-Stack Developer & Software Engineer`,
    description: PERSONAL_INFO.bio,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — Full-Stack Developer`,
    description: "Production-grade full-stack architectures, 3D WebGL, and modern cloud systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* Anti-flash inline script to restore theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var storedTheme = localStorage.getItem('ansh-theme');
                if (storedTheme === 'light') {
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className="font-sans antialiased cad-grid selection:bg-brand-lime/30 selection:text-black"
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
