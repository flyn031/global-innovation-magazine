import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Global Innovation Magazine — 10 Things I Know",
  description:
    "Innovation-focused interviews with founders, leaders and innovators. Est. 2013, Leicester, UK.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Global Innovation Magazine",
    description: "10 Things I Know — interviews with the people shaping innovation.",
    siteName: "Global Innovation Magazine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&family=IBM+Plex+Sans:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--cream)] min-h-screen">
        <Nav />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
