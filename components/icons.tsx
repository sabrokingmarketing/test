import {
  BadgeCheck,
  Camera,
  Code2,
  Handshake,
  InfinityIcon,
  Megaphone,
  PenTool,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  Camera,
  Code2,
  Handshake,
  InfinityIcon,
  Megaphone,
  PenTool,
  Smartphone,
};

/** Renders a thin-line lucide icon by name (names are set in content/site.ts). */
export function Icon({ name, className = "size-7" }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? BadgeCheck;
  return <Cmp aria-hidden="true" strokeWidth={1.5} className={className} />;
}
