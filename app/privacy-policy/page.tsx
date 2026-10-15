import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ClosingCta } from "@/components/cta";
import { Container } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = pageMeta(
  "Privacy Policy (POPIA)",
  "How SA Broking Marketing collects, uses and protects your personal information under South Africa's Protection of Personal Information Act (POPIA).",
  "/privacy-policy",
);

export default function PrivacyPage() {
  const c = site.contact;
  return (
    <>
      <section className="bg-background py-16 md:py-28">
        <Container>
          <article className="mx-auto max-w-[68ch] text-[17px] leading-relaxed text-ink [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-[24px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_li]:mt-2 [&_p]:mt-4 [&_p]:text-muted [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted">
            <p className="!mt-0 text-[15px] font-semibold !text-brand">Legal</p>
            <h1 className="display mt-3 text-[40px] md:text-[64px]">Privacy Policy</h1>
            {/* TODO: set the date this policy takes effect */}
            <p>
              {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), a division of {site.parent.name}, respects your privacy. This policy explains how we
              handle your personal information in line with the Protection of Personal Information Act 4 of 2013 (POPIA).
            </p>

            <h2>What we collect</h2>
            <p>This website does not use forms, accounts or tracking cookies. We only receive personal information when you contact us yourself, for example:</p>
            <ul>
              <li>your name, phone number and email address when you WhatsApp, call or email us;</li>
              <li>details about your business and project that you choose to share.</li>
            </ul>

            <h2>Why we use it</h2>
            <ul>
              <li>to reply to you and discuss your project;</li>
              <li>to prepare quotes, deliver services and send invoices;</li>
              <li>to meet our legal and accounting obligations.</li>
            </ul>
            <p>We do not sell your personal information, and we do not send marketing messages without your consent.</p>

            <h2>Who we share it with</h2>
            <p>
              We only share your information with service providers who help us run our business (such as email, messaging and hosting providers), and only
              where needed. Some of these providers may store information outside South Africa. When that happens we take reasonable steps to make sure your
              information stays protected, as POPIA requires.
            </p>

            <h2>How we protect it</h2>
            <p>We take reasonable technical and organisational steps to keep your information safe and only keep it for as long as we need it.</p>

            <h2>Your rights under POPIA</h2>
            <ul>
              <li>ask what personal information we hold about you;</li>
              <li>ask us to correct or delete your information;</li>
              <li>object to us using your information;</li>
              <li>
                lodge a complaint with the Information Regulator of South Africa (
                <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4">
                  inforegulator.org.za
                </a>
                ).
              </li>
            </ul>

            <h2>Contact us</h2>
            <p>
              For any privacy request, email{" "}
              <a href={`mailto:${c.email}`} className="text-brand underline underline-offset-4">
                {c.email}
              </a>
              , call{" "}
              <a href={c.phoneHref} className="text-brand underline underline-offset-4">
                {c.phoneDisplay}
              </a>{" "}
              or write to us at {c.address.full}.
            </p>
          </article>
        </Container>
      </section>
      <ClosingCta title="Questions? Just ask." />
    </>
  );
}
