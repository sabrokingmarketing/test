import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";

/** Questions and answers. Uses native <details>, so it works without JavaScript. */
export function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {site.faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-left text-[19px] font-semibold tracking-tight md:text-[21px]">
            {f.q}
            <ChevronDown aria-hidden="true" strokeWidth={1.5} className="faq-icon size-6 shrink-0 text-muted transition-transform duration-300" />
          </summary>
          <p className="max-w-[62ch] pb-6 text-[17px] text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
