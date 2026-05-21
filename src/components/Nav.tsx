"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Latest" },
  { href: "/contribute", label: "Contribute" },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--grey-300)] backdrop-blur-md transition-colors ${
        scrolled ? "bg-[var(--cream)]/97" : "bg-[var(--cream)]/85"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 flex items-center justify-between h-14">
        <Link href="/" className="flex items-baseline gap-0 no-underline">
          <span className="font-[var(--font-display)] font-display text-[19px] font-black text-[var(--ink)] tracking-tight">
            Global Innovation
          </span>
          <span className="font-ui text-[9px] font-semibold text-[var(--red)] tracking-[0.12em] uppercase ml-1.5">
            Magazine
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-ui text-[13px] no-underline pb-0.5 border-b-[1.5px] ${
                  active
                    ? "font-semibold text-[var(--ink)] border-[var(--red)]"
                    : "font-normal text-[var(--grey-600)] border-transparent hover:text-[var(--ink)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
