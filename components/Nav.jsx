"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/offering", label: "Offering" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust", label: "Trust" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
            P
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Priority Experience
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-mist text-ink"
                  : "text-slate2 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/trust#cta" className="btn-primary ml-3 !px-4 !py-2">
            Get Early Access
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white md:hidden" aria-label="Mobile">
          <div className="wrap flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === link.href ? "bg-mist text-ink" : "text-slate2"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/trust#cta"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get Early Access
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
