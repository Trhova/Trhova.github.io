"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { guides } from "@/data/guides";

const triggerClassName =
  "rounded-md px-3 py-2 text-muted hover:bg-surface2 hover:text-text";

export function GuidesMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget as Node | null;
        if (!nextTarget || !rootRef.current?.contains(nextTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          (rootRef.current?.querySelector("button") as HTMLButtonElement | null)?.focus();
        }
      }}
    >
      <div className="flex items-center">
        <Link href="/guides" className={triggerClassName}>
          Guides
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-haspopup="menu"
          className="rounded-md p-2 text-muted hover:bg-surface2 hover:text-text"
          onClick={() => setOpen((current) => !current)}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
          <span className="sr-only">Toggle guides menu</span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Guides"
          className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-border/80 bg-surface p-2 shadow-soft"
        >
          {guides.map((guide) =>
            guide.status === "published" ? (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                role="menuitem"
                className="block rounded-xl px-4 py-3 hover:bg-surface2"
              >
                <div className="text-sm font-semibold text-text">
                  {guide.title}
                </div>
                <div className="mt-1 text-xs leading-5 text-muted">
                  {guide.description}
                </div>
              </Link>
            ) : (
              <div
                key={guide.slug}
                className="rounded-xl px-4 py-3 text-muted/90"
                aria-disabled="true"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-text/80">
                    {guide.title}
                  </div>
                  <span className="rounded-full border border-border bg-surface2 px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    Coming soon
                  </span>
                </div>
                <div className="mt-1 text-xs leading-5 text-muted">
                  {guide.description}
                </div>
              </div>
            )
          )}
        </div>
      ) : null}
    </div>
  );
}
