import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Global Innovation Magazine — 10 Things I Know",
  description: "Innovation-focused interviews with founders, leaders and innovators. Est. 2013, Leicester, UK.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,400&family=IBM+Plex+Sans:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: "#fcfaf7", minHeight: "100vh", margin: 0 }}>
        <Nav />
        <main style={{ paddingTop: 56 }}>{children}</main>
      </body>
    </html>
  );
}
