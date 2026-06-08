"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Latest" },
  { href: "/get-featured", label: "Get Featured" },
  { href: "/contribute", label: "Contribute" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(252,250,247,0.97)" : "rgba(252,250,247,0.85)",
      backdropFilter: "blur(12px)", borderBottom: "1px solid #e8e4dc",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px,4vw,40px)",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 56,
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "baseline", textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 19, fontWeight: 900, color: "#1a1a1a", letterSpacing: "-0.02em" }}>Global Innovation</span>
          <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 9, fontWeight: 600, color: "#c0392b", letterSpacing: "0.12em", textTransform: "uppercase", marginLeft: 6 }}>Magazine</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {links.map(l => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, textDecoration: "none",
                paddingBottom: 2, borderBottom: active ? "1.5px solid #c0392b" : "1.5px solid transparent",
                fontWeight: active ? 600 : 400,
                color: l.href === "/get-featured" ? "#c0392b" : active ? "#1a1a1a" : "#888",
              }}>{l.label}</Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
