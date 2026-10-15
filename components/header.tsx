"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site, whatsappHref } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  // Stop the page behind the menu from scrolling, and close on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/72 backdrop-blur-[20px] backdrop-saturate-150">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-6 md:h-16 md:px-8">
        <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label={`${site.name}, home`}>
          <Image src="/images/logo.png" alt="" width={600} height={402} className="h-6 w-auto md:h-7" preload />
          <span className="text-[15px] font-semibold tracking-tight text-ink">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[14px] transition-colors hover:text-ink ${active ? "text-ink font-medium" : "text-muted"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center rounded-full bg-brand px-5 text-[14px] font-medium text-white transition-colors hover:bg-brand-hover md:inline-flex"
          >
            Let&rsquo;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-ink md:hidden"
          >
            {open ? <X strokeWidth={1.5} className="size-6" /> : <Menu strokeWidth={1.5} className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-14 bottom-0 z-40 h-[calc(100dvh-3.5rem)] overflow-y-auto bg-white md:hidden">
          <nav aria-label="Mobile" className="px-6 pt-6 pb-10">
            <ul className="space-y-1">
              {[{ label: "Home", href: "/" }, ...site.nav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block py-3 text-[32px] font-semibold tracking-tight text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-7 text-[17px] font-medium text-white"
            >
              WhatsApp us
            </a>
            <a
              href={site.contact.phoneHref}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-line px-7 text-[17px] font-medium text-ink"
            >
              Call {site.contact.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
