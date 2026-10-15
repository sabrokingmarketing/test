import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { ClosingCta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta(
  "Our Work: Websites, Apps & Marketing for South African Businesses",
  "Recent websites, apps and marketing by SA Broking Marketing for Pro-Plan Consulting Engineers, One Property Holdings, SA Broking Services and FireMatic Africa.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow="Work" title="Live in the market. Driving growth." lede="Every project here is launched and working for the business behind it." />

      <Section tone="white" labelledBy="projects-title" className="!pt-12 md:!pt-20">
        <Container>
          <h2 id="projects-title" className="sr-only">
            Projects
          </h2>
          <ul className="space-y-16 md:space-y-24">
            {site.work.map((w, i) => (
              <li key={w.slug} className="reveal">
                <figure>
                  <div className="overflow-hidden rounded-[28px] bg-surface">
                    <Image
                      src={w.image}
                      alt={w.alt}
                      width={1416}
                      height={1020}
                      sizes="(min-width: 1200px) 1136px, 100vw"
                      preload={i === 0}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-6 flex flex-col gap-1 px-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="headline text-[28px] md:text-[36px]">{w.client}</span>
                    <span className="text-[17px] text-muted">
                      {w.type} · {w.year}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <section aria-label="Clients" className="bg-surface py-16 md:py-24">
        <Container>
          <p className="text-center text-[15px] text-muted">Brands we&rsquo;ve worked with</p>
          <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {site.clients.map((c) => (
              <li key={c.name} className="flex h-14 items-center justify-center">
                <Image src={c.logo} alt={c.name} width={160} height={56} className="h-auto max-h-12 w-auto max-w-[140px] object-contain opacity-70 grayscale" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta title="Your project could be next." />
    </>
  );
}
