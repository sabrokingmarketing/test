import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/content/site";

/** Floating WhatsApp button, bottom right on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:scale-[1.05] md:right-6 md:bottom-6"
    >
      <MessageCircle strokeWidth={1.75} className="size-7" aria-hidden="true" />
    </a>
  );
}
