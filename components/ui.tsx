import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Centred content column, max 1200px wide. */
export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-8 ${className}`}>{children}</div>;
}

const tones = {
  white: "bg-background text-ink",
  grey: "bg-surface text-ink",
  dark: "bg-night text-ink-on-dark",
} as const;

/** A full-width page section with Apple-style spacing and a background tone. */
export function Section({
  tone = "white",
  id,
  className = "",
  children,
  labelledBy,
}: {
  tone?: keyof typeof tones;
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 md:py-28 lg:py-36 ${className}`}>
      {children}
    </section>
  );
}

/** Small label above a headline. */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-4 text-[15px] font-semibold tracking-wide ${dark ? "text-brand-on-dark" : "text-brand"}`}>
      {children}
    </p>
  );
}

/** Section heading block: headline + one short supporting line. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  dark = false,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={`reveal mb-12 md:mb-16 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 id={id} className="headline text-[36px] sm:text-[44px] md:text-[56px]">
        {title}
      </h2>
      {lede && (
        <p
          className={`lede mt-5 text-[19px] md:text-[21px] ${align === "center" ? "mx-auto" : ""} max-w-[62ch] ${
            dark ? "text-muted-on-dark" : "text-muted"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

type ButtonVariant = "primary" | "light" | "dark-outline" | "outline";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  light: "bg-white text-ink hover:bg-surface",
  "dark-outline": "border border-white/30 text-white hover:bg-white/10",
  outline: "border border-line text-ink hover:bg-surface",
};

/** Pill button, at least 44px tall. */
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  external,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; external?: boolean }) {
  return (
    <Link
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[17px] font-medium transition-[background-color,transform] duration-200 hover:scale-[1.02] ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Secondary action: a text link that ends in "›". */
export function TextLink({
  dark = false,
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { dark?: boolean }) {
  return (
    <Link
      {...props}
      className={`group inline-flex min-h-11 items-center gap-1 text-[17px] font-medium ${
        dark ? "text-brand-on-dark" : "text-brand"
      } hover:underline underline-offset-4 ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        ›
      </span>
    </Link>
  );
}
