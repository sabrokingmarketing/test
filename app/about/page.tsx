import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { ClosingCta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { Container, Section, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta(
  "About Kelvin van Wyk & Our Digital Studio in Krugersdorp",
  "SA Broking Marketing was founded by Kelvin van Wyk in Krugersdorp to bring strategy, design, development and marketing under one roof. No layers, no middlemen.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="No layers. No middlemen." lede="Just direct, high-quality work that delivers, from a young, hungry South African studio." />

      <Section tone="white" labelledBy="founder-title">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="reveal">
              <Image
                src="/images/business-tablet.jpg"
                alt="Business person reviewing work on a tablet, in black and white"
                width={2000}
                height={1100}
                sizes="(min-width: 768px) 560px, 100vw"
                className="aspect-[4/5] w-full rounded-[28px] object-cover"
              />
            </div>
            <div className="reveal">
              <p className="mb-4 text-[15px] font-semibold text-brand">Our story</p>
              <h2 id="founder-title" className="headline text-[36px] sm:text-[44px] md:text-[52px]">
                {site.about.title}
              </h2>
              {site.about.body.map((p) => (
                <p key={p} className="lede mt-5 max-w-[52ch] text-[19px] text-muted">
                  {p}
                </p>
              ))}
              <p className="mt-6 text-[15px] text-muted">
                Founded {site.founded} · A division of {site.parent.name}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <section aria-label="Our numbers" className="bg-surface py-14 md:py-20">
        <Container>
          <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label} className="reveal text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="display text-[44px] md:text-[56px]">{s.value}</dd>
                <dd className="mt-1 text-[15px] text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Section tone="white" labelledBy="values-title">
        <Container>
          <SectionHeading id="values-title" eyebrow="What drives us" title="Four things we never compromise on." />
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-5">
            {site.values.map((v, i) => (
              <li key={v.title} className="reveal rounded-[28px] bg-surface p-8 md:p-10">
                <span className="text-[15px] font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="headline mt-3 text-[26px]">{v.title}</h3>
                <p className="mt-3 text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="dark" labelledBy="get-title">
        <Container>
          <SectionHeading id="get-title" eyebrow="What you get" title="A partner, not a supplier." dark />
          <ul className="reveal mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {["Direct team access", "Honest timelines", "Transparent pricing", "Unlimited revisions", "Long-term support"].map((x) => (
              <li key={x} className="inline-flex min-h-12 items-center rounded-full border border-line-dark px-5 text-[17px]">
                {x}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ClosingCta title="Let’s chat." lede="Not ready to commit? Drop us a message. We reply fast, and always personally." />
    </>
  );
}
