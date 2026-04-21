import type { ReactNode } from "react";

type CalloutTone = "default" | "warning" | "success";

const tones: Record<CalloutTone, string> = {
  default: "border-teal-300/25 bg-teal-300/10",
  warning: "border-amber-300/25 bg-amber-300/10",
  success: "border-emerald-300/25 bg-emerald-300/10"
};

export function Callout({
  children,
  title,
  tone = "default"
}: {
  children: ReactNode;
  title: string;
  tone?: CalloutTone;
}) {
  return (
    <section className={`not-prose my-6 rounded-3xl border px-5 py-5 ${tones[tone]}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </p>
      <div className="space-y-3 text-sm leading-7 text-slate-100">{children}</div>
    </section>
  );
}
