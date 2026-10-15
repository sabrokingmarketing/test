import Image from "next/image";
import Link from "next/link";
import { site, whatsappHref } from "@/content/site";
import { Container } from "./ui";

export function Footer() {
  const c = site.contact;
  return (
    <footer className="border-t border-line-soft bg-surface text-[14px] text-muted">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex min-h-11 items-center gap-2.5" aria-label={`${site.name}, home`}>
              <Image src="/images/logo.png" alt="" width={600} height={402} className="h-7 w-auto" />
              <span className="text-[15px] font-semibold text-ink">{site.name}</span>
            </Link>
            <p className="mt-3 max-w-[34ch]">
              Websites, apps, branding and marketing for ambitious businesses. A division of{" "}
              <a href={site.parent.url} target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:underline">
                {site.parent.name}
              </a>
              .
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-3 text-[13px] font-semibold text-ink">Explore</h2>
            <ul className="space-y-1">
              {[{ label: "Home", href: "/" }, ...site.nav, { label: "Privacy Policy", href: "/privacy-policy" }].map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="inline-flex min-h-9 items-center hover:text-ink">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-3 text-[13px] font-semibold text-ink">Contact</h2>
            <ul className="space-y-1">
              <li>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center hover:text-ink">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={c.phoneHref} className="inline-flex min-h-9 items-center hover:text-ink">
                  {c.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${c.email}`} className="inline-flex min-h-9 items-center break-all hover:text-ink">
                  {c.email}
                </a>
              </li>
              <li>
                <a href={c.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center hover:text-ink">
                  {c.address.full}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-[13px] font-semibold text-ink">Follow</h2>
            <ul className="space-y-1">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center hover:text-ink">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:justify-between">
          <p>
            © {site.founded} {site.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-ink">
            Privacy Policy (POPIA)
          </Link>
        </div>
      </Container>
    </footer>
  );
}
