import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ClosingCta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui";
import { site, whatsappHref } from "@/content/site";

export const metadata: Metadata = pageMeta(
  "Contact Us | WhatsApp, Call or Visit in Krugersdorp",
  "Talk to SA Broking Marketing about your website, app or marketing. WhatsApp or call +27 66 220 2498, email kelvin@sabroking.co.za, or visit 282 Voortrekker Road, Krugersdorp.",
  "/contact",
);

type Item = { icon: LucideIcon; label: string; value: string; href?: string; external?: boolean; note?: string };

export default function ContactPage() {
  const c = site.contact;
  const items: Item[] = [
    { icon: MessageCircle, label: "WhatsApp", value: "Send us a message", href: whatsappHref, external: true, note: "The fastest way to reach us." },
    { icon: Phone, label: "Phone", value: c.phoneDisplay, href: c.phoneHref },
    { icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` },
    { icon: MapPin, label: "Office", value: c.address.full, href: c.mapsUrl, external: true, note: "Open in Google Maps" },
  ];
  if (c.hours) items.push({ icon: Clock, label: "Hours", value: c.hours });

  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s talk." lede="Got an idea, a brand or a brief? Drop us a line. We reply fast, and always personally." />

      <Section tone="white" labelledBy="contact-title" className="!pt-12 md:!pt-20">
        <Container>
          <h2 id="contact-title" className="sr-only">
            Contact details
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-5">
            {items.map((it) => {
              const Ico = it.icon;
              const inner = (
                <>
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Ico aria-hidden="true" strokeWidth={1.5} className="size-6" />
                  </span>
                  <span className="mt-6 block text-[15px] text-muted">{it.label}</span>
                  <span className="mt-1 block break-words text-[22px] font-semibold tracking-tight md:text-[26px]">{it.value}</span>
                  {it.note && <span className="mt-2 block text-[15px] text-brand">{it.note}</span>}
                </>
              );
              return (
                <li key={it.label} className="reveal">
                  {it.href ? (
                    <a
                      href={it.href}
                      {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="block h-full rounded-[28px] bg-surface p-8 transition-transform duration-200 hover:scale-[1.02] md:p-10"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-[28px] bg-surface p-8 md:p-10">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="reveal mt-12 grid gap-8 rounded-[28px] border border-line-soft p-8 md:grid-cols-2 md:p-10">
            <div>
              <h3 className="text-[19px] font-semibold">What happens next</h3>
              <ol className="mt-4 space-y-3 text-muted">
                {site.process.map((p) => (
                  <li key={p.step}>
                    <span className="font-semibold text-ink">{p.step}</span> {p.title}: {p.body}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-[19px] font-semibold">Follow along</h3>
              <ul className="mt-4 space-y-1">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-brand hover:underline underline-offset-4">
                      {s.label} <span aria-hidden="true">&nbsp;›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <ClosingCta title="Ready when you are." />
    </>
  );
}
