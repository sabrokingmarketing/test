import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { Check } from "lucide-react";
import { ClosingCta } from "@/components/cta";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { site, whatsappHref } from "@/content/site";

export const metadata: Metadata = pageMeta(
  "Services: Web Design, Apps, Marketing & Drone Video in Krugersdorp",
  "UI/UX design, web development, app development, digital marketing, drone photography and automated marketing systems from R780 a month. Based in Krugersdorp, working across South Africa.",
  "/services",
);

export default function ServicesPage() {
  const a = site.automation;
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One team for your whole digital presence."
        lede="Design, development, marketing and content, all under one roof. Pick one service or let us run the lot."
      >
        <nav aria-label="Services on this page">
          <ul className="flex flex-wrap gap-2">
            {[...site.services, { slug: "automated-marketing", title: "Automated Marketing" }].map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-[15px] transition-colors hover:border-brand hover:text-brand"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {site.services.map((s, i) => (
        <Section key={s.slug} id={s.slug} tone={i % 2 === 0 ? "white" : "grey"} labelledBy={`${s.slug}-title`} className="scroll-mt-16">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={`reveal ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon name={s.icon} className="size-6" />
                </span>
                {"isNew" in s && <p className="mt-6 text-[15px] font-semibold text-brand">New service</p>}
                <h2 id={`${s.slug}-title`} className="headline mt-4 text-[36px] sm:text-[44px] md:text-[52px]">
                  {s.title}
                </h2>
                <p className="lede mt-5 max-w-[50ch] text-[19px] text-muted">{s.body}</p>
                <ul className="mt-8 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <Check aria-hidden="true" strokeWidth={1.75} className="mt-1 size-5 shrink-0 text-brand" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`reveal ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  width={1200}
                  height={1500}
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="aspect-[4/5] w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* AUTOMATED MARKETING */}
      <Section id="automated-marketing" tone="dark" labelledBy="automated-title" className="scroll-mt-16">
        <Container>
          <SectionHeading id="automated-title" eyebrow="Automated marketing" title={a.title} lede={a.intro} dark />

          <ol className="reveal mx-auto mb-16 flex max-w-4xl flex-wrap justify-center gap-2">
            {a.steps.map((step, i) => (
              <li key={step} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-dark px-4 text-[15px]">
                <span className="text-brand-on-dark">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>

          <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 md:gap-5">
            {a.plans.map((p) => {
              const featured = "featured" in p;
              return (
                <li key={p.name} className={`reveal flex flex-col rounded-[28px] p-8 md:p-10 ${featured ? "bg-white text-ink" : "bg-secondary"}`}>
                  <h3 className="text-[19px] font-semibold">{p.name}</h3>
                  <p className="mt-4">
                    <span className="display text-[52px]">{p.price}</span>{" "}
                    <span className={featured ? "text-muted" : "text-muted-on-dark"}>{p.period}</span>
                  </p>
                  <p className={`mt-3 ${featured ? "text-muted" : "text-muted-on-dark"}`}>{p.summary}</p>
                  <ul className="mt-8 mb-10 space-y-3">
                    {p.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check aria-hidden="true" strokeWidth={1.75} className={`mt-1 size-5 shrink-0 ${featured ? "text-brand" : "text-brand-on-dark"}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={whatsappHref} external variant={featured ? "primary" : "light"} className="mt-auto w-full">
                    Get the {p.name}
                  </ButtonLink>
                </li>
              );
            })}
          </ul>

          <div className="reveal mx-auto mt-16 max-w-3xl text-center">
            <Eyebrow dark>Publish to</Eyebrow>
            <p className="text-[19px] text-muted-on-dark">{a.platforms.join(" · ")}</p>
          </div>
        </Container>
      </Section>

      <ClosingCta title="Not sure where to start?" lede="Tell us about your business. We’ll recommend the right service or system, with clear pricing upfront." />
    </>
  );
}
