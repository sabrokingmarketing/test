import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-surface py-28 md:py-40">
      <Container className="text-center">
        <p className="text-[15px] font-semibold text-brand">404</p>
        <h1 className="display mt-3 text-[44px] md:text-[72px]">This page doesn&rsquo;t exist.</h1>
        <p className="mt-5 text-[19px] text-muted">It may have moved. Let&rsquo;s get you back on track.</p>
        <div className="mt-10">
          <ButtonLink href="/">Go to the home page</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
