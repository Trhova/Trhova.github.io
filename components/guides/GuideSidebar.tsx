"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { guides } from "@/data/guides";

function SidebarContent({
  onNavigate
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Guides
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">
          Browse published guides and planned chapters.
        </p>
      </div>

      <div className="space-y-2">
        {guides.map((guide) => {
          const href = `/guides/${guide.slug}`;
          const isActive = pathname === `${href}/` || pathname === href;

          if (guide.status === "published") {
            return (
              <Link
                key={guide.slug}
                href={href}
                onClick={onNavigate}
                className={[
                  "block rounded-2xl border px-4 py-3 transition",
                  isActive
                    ? "border-accent/30 bg-accent/10 text-text"
                    : "border-border bg-surface hover:bg-surface2 text-text"
                ].join(" ")}
              >
                <div className="text-sm font-semibold">{guide.title}</div>
                <div className="mt-1 text-xs leading-5 text-muted">
                  {guide.description}
                </div>
              </Link>
            );
          }

          return (
            <div
              key={guide.slug}
              className="rounded-2xl border border-border bg-surface px-4 py-3 opacity-85"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-text">
                  {guide.title}
                </div>
                <span className="rounded-full border border-border bg-surface2 px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  Soon
                </span>
              </div>
              <div className="mt-1 text-xs leading-5 text-muted">
                {guide.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function GuideSidebar({ mode }: { mode: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false);

  if (mode === "desktop") {
    return (
      <aside className="hidden lg:block">
        <div className="guide-panel sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain p-4">
          <SidebarContent />
        </div>
      </aside>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-text shadow-soft lg:hidden"
      >
        <Menu className="h-4 w-4" />
        Chapters
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[88vw] max-w-sm border-r border-border bg-surface p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Guide navigation
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-border bg-surface2 p-2 text-text"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close guide navigation</span>
              </button>
            </div>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
