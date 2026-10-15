import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/content/site";
import "./globals.css";

// Inter, stored in the project so the build never needs to download fonts.
const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Web Design, Apps & Digital Marketing in Krugersdorp`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
    url: "/",
    title: `${site.name} | Building the next big company`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: `${site.name} | Building the next big company`, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/opengraph-image.jpg`,
  telephone: site.contact.phoneDisplay.replace(/\s/g, ""),
  email: site.contact.email,
  foundingDate: site.founded,
  founder: { "@type": "Person", name: "Kelvin van Wyk" },
  parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.region,
    addressCountry: site.contact.address.country,
  },
  areaServed: ["South Africa", "Worldwide"],
  sameAs: site.social.map((s) => s.href),
  knowsAbout: site.services.map((s) => s.title),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA" className={`${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
      </body>
    </html>
  );
}
