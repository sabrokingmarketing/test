import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { ClosingCta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Icon } from "@/components/icons";
import { ButtonLink, Container, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui";
import { site, whatsappHref } from "@/content/site";

export default function HomePage() {
  const mainServices = site.services.filter((s) => !("isNew" in s));
  const drone = site.services.find((s) => s.slug === "drone-photography")!;

  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-night text-ink-on-dark">
        <Image
          src={site.hero.image.src}
          alt={site.hero.image.alt}
          fill
          preload
          fetchPriority="high"
          sizes="(min-width: 1200px) 1600px, 100vw"
          quality={60}
          className="-z-10 object-cover object-[70%_50%] opacity-80"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/30" />
        <Container className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-end pt-24 pb-16 md:min-h-[min(860px,calc(100svh-4rem))] md:pb-24">
          <div className="intro">
            <Eyebrow dark>{site.hero.eyebrow}</Eyebrow>
          </div>
          <h1 id="hero-title" className="display max-w-4xl text-[44px] sm:text-[64px] md:text-[88px] lg:text-[96px]">
            {site.hero.title}
          </h1>
          <p className="lede intro-2 mt-6 max-w-[54ch] text-[19px] text-muted-on-dark md:text-[21px]">{site.hero.subtitle}</p>
          <div className="intro-3 mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <ButtonLink href={whatsappHref} external>
              WhatsApp us
            </ButtonLink>
            <TextLink href="/work" dark>
              See our work
            </TextLink>
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <section aria-label="Results and clients" className="border-b border-line-soft bg-background py-14 md:py-20">
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
          <p className="mt-14 text-center text-[15px] text-muted">Trusted by growing businesses</p>
          <ul className="mx-auto mt-6 grid max-w-5xl grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
            {site.clients.map((c) => (
              <li key={c.name} className="flex h-14 items-center justify-center">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={160}
                  height={56}
                  className="h-auto max-h-12 w-auto max-w-[140px] object-contain opacity-70 grayscale transition-opacity duration-200 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* SERVICES */}
      <Section tone="grey" labelledBy="services-title">
        <Container>
          <SectionHeading
            id="services-title"
            eyebrow="What we do"
            title="Everything your brand needs. One team."
            lede="Strategy, design, development and marketing under one roof, so your business moves faster."
          />
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-5">
            {mainServices.map((s) => (
              <li key={s.slug} className="reveal">
                <Link
                  href={`/services#${s.slug}`}
                  className="group flex h-full flex-col rounded-[28px] bg-white p-8 transition-transform duration-200 hover:scale-[1.02] md:p-10"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="headline mt-6 text-[26px] md:text-[30px]">{s.title}</h3>
                  <p className="mt-3 max-w-[44ch] text-muted">{s.short}</p>
                  <span className="mt-auto pt-6 text-[17px] font-medium text-brand">
                    Learn more <span aria-hidden="true">›</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* WHY CHOOSE US */}
      <Section tone="dark" labelledBy="why-title">
        <Container>
          <SectionHeading
            id="why-title"
            eyebrow="Why us"
            title="Built on trust."
            lede="We don’t chase quick wins. We build long-term partnerships and do work that genuinely moves your business forward."
            dark
          />
          <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
            {site.reasons.map((r) => (
              <li key={r.title} className="reveal rounded-[28px] bg-secondary p-8 md:p-10">
                <Icon name={r.icon} className="size-8 text-brand-on-dark" />
                <h3 className="headline mt-6 text-[24px]">{r.title}</h3>
                <p className="mt-3 text-muted-on-dark">{r.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* WORK */}
      <Section tone="white" labelledBy="work-title">
        <Container>
          <SectionHeading id="work-title" eyebrow="Recent work" title="Work that’s live and growing." lede="Websites, apps and marketing for businesses across South Africa." />
          <ul className="grid gap-5 md:grid-cols-2 md:gap-6">
            {site.work.map((w) => (
              <li key={w.slug} className="reveal">
                <figure className="group">
                  <div className="overflow-hidden rounded-[28px] bg-surface">
                    <Image
                      src={w.image}
                      alt={w.alt}
                      width={1416}
                      height={1020}
                      sizes="(min-width: 768px) 588px, 100vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-4 flex flex-col gap-0.5 px-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <span className="text-[19px] font-semibold tracking-tight">{w.client}</span>
                    <span className="shrink-0 text-[15px] text-muted">
                      {w.type} · {w.year}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <TextLink href="/work">See all work</TextLink>
          </div>
        </Container>
      </Section>

      {/* DRONE */}
      <Section tone="grey" labelledBy="drone-title">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="reveal order-2 md:order-1">
              <Eyebrow>New service</Eyebrow>
              <h2 id="drone-title" className="headline text-[36px] sm:text-[44px] md:text-[56px]">
                Capture everything from above.
              </h2>
              <p className="lede mt-5 max-w-[48ch] text-[19px] text-muted">{drone.body}</p>
              <ul className="mt-8 space-y-3">
                {drone.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Check aria-hidden="true" strokeWidth={1.75} className="mt-1 size-5 shrink-0 text-brand" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <TextLink href="/services#drone-photography">Book a drone shoot</TextLink>
              </div>
            </div>
            <div className="reveal order-1 grid grid-cols-5 gap-4 md:order-2">
              <Image
                src="/images/drone-aerial.jpg"
                alt="Aerial drone photo of a house and pool among trees"
                width={800}
                height={1119}
                sizes="(min-width: 768px) 330px, 60vw"
                className="col-span-3 aspect-[3/4] h-full w-full rounded-[24px] object-cover"
              />
              <div className="col-span-2 grid gap-4">
                <Image
                  src="/images/drone.png"
                  alt="White camera drone"
                  width={900}
                  height={900}
                  sizes="(min-width: 768px) 220px, 40vw"
                  className="aspect-square w-full rounded-[24px] bg-white object-contain p-3"
                />
                <Image
                  src="/images/drone-coast.jpg"
                  alt="Aerial view of a coastline and calm sea"
                  width={1200}
                  height={675}
                  sizes="(min-width: 768px) 220px, 40vw"
                  className="aspect-square h-full w-full rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* AUTOMATION */}
      <Section tone="white" labelledBy="auto-title">
        <Container>
          <SectionHeading id="auto-title" eyebrow="Automations" title={site.automation.title} lede="We build the system. You run your whole company from it." />
          <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 md:gap-5">
            {site.automation.plans.map((p) => (
              <li
                key={p.name}
                className={`reveal flex flex-col rounded-[28px] p-8 md:p-10 ${"featured" in p ? "bg-night text-ink-on-dark" : "bg-surface"}`}
              >
                <h3 className="text-[19px] font-semibold">{p.name}</h3>
                <p className="mt-4">
                  <span className="display text-[48px]">{p.price}</span>{" "}
                  <span className={"featured" in p ? "text-muted-on-dark" : "text-muted"}>{p.period}</span>
                </p>
                <p className={`mt-3 ${"featured" in p ? "text-muted-on-dark" : "text-muted"}`}>{p.summary}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <TextLink href="/services#automated-marketing">See what’s included</TextLink>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="grey" labelledBy="reviews-title">
        <Container>
          <SectionHeading id="reviews-title" eyebrow="Client feedback" title="In our clients’ words." />
          <div className="reveal -mt-6 mb-12 flex items-center justify-center gap-2 md:-mt-10">
            <span className="flex text-brand" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} strokeWidth={1.5} className="size-5 fill-current" />
              ))}
            </span>
            <span className="text-[15px] font-medium">5.0 client rating</span>
          </div>
          <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
            {site.testimonials.map((t) => (
              <li key={t.name} className="reveal">
                <figure className="flex h-full flex-col rounded-[28px] bg-white p-8 md:p-10">
                  <blockquote className="text-[19px] leading-relaxed md:text-[21px]">{t.quote}</blockquote>
                  <figcaption className="mt-auto pt-8">
                    <span className="block font-semibold">{t.name}</span>
                    {t.role && <span className="block text-[15px] text-muted">{t.role}</span>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section tone="white" labelledBy="process-title">
        <Container>
          <SectionHeading id="process-title" eyebrow="How it works" title="Three steps to launch." />
          <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
            {site.process.map((p) => (
              <li key={p.step} className="reveal rounded-[28px] bg-surface p-8 md:p-10">
                <span className="text-[15px] font-semibold text-brand">{p.step}</span>
                <h3 className="headline mt-3 text-[26px]">{p.title}</h3>
                <p className="mt-3 text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="grey" id="faq" labelledBy="faq-title">
        <Container>
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions, answered." />
          <Faq />
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}
