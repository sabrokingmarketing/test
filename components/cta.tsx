import { Phone } from "lucide-react";
import { site, whatsappHref } from "@/content/site";
import { ButtonLink, Container } from "./ui";

/** The one clear call to action that ends every page. */
export function ClosingCta({
  title = "Let’s build what’s next.",
  lede = "Got an idea, a brand or a brief? Send us a message. We reply fast, and always personally.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-night py-20 text-ink-on-dark md:py-32">
      <Container className="text-center">
        <h2 id="cta-title" className="display reveal mx-auto max-w-3xl text-[40px] sm:text-[56px] md:text-[72px]">
          {title}
        </h2>
        <p className="lede reveal mx-auto mt-5 max-w-[52ch] text-[19px] text-muted-on-dark md:text-[21px]">{lede}</p>
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={whatsappHref} external variant="primary">
            WhatsApp us
          </ButtonLink>
          <ButtonLink href={site.contact.phoneHref} variant="dark-outline">
            <Phone aria-hidden="true" strokeWidth={1.5} className="size-[18px]" />
            Call {site.contact.phoneDisplay}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
