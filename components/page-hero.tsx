import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";

/** Simple, calm hero used at the top of inner pages. */
export function PageHero({ eyebrow, title, lede, children }: { eyebrow: string; title: string; lede: string; children?: ReactNode }) {
  return (
    <section className="bg-surface pt-16 pb-16 md:pt-28 md:pb-24">
      <Container>
        <div className="max-w-4xl">
          <div className="intro">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="display intro text-[40px] sm:text-[56px] md:text-[80px]">{title}</h1>
          <p className="lede intro-2 mt-6 max-w-[58ch] text-[19px] text-muted md:text-[21px]">{lede}</p>
          {children && <div className="intro-3 mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
