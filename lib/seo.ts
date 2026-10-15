import type { Metadata } from "next";
import { site } from "@/content/site";

/** Builds full page metadata (title, description, canonical link and social sharing tags). */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      siteName: site.name,
      url: path,
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: `${site.name}: Building the next big company.` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: ["/opengraph-image.jpg"] },
  };
}
