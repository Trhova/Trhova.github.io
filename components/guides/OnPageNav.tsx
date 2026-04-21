"use client";

import { useEffect, useMemo, useState } from "react";

import type { GuideHeading } from "@/lib/guides";

function useActiveHeading(headings: GuideHeading[]) {
  const [activeId, setActiveId] = useState(headings[0]?.slug ?? "");

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.slug))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              left.boundingClientRect.top - right.boundingClientRect.top
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: [0, 1]
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);

  return activeId;
}

function NavList({
  activeId,
  headings
}: {
  activeId: string;
  headings: GuideHeading[];
}) {
  return (
    <ol className="space-y-1.5">
      {headings.map((heading) => {
        const isActive = activeId === heading.slug;

        return (
          <li
            key={heading.slug}
            className={heading.depth === 3 ? "pl-4" : ""}
          >
            <a
              href={`#${heading.slug}`}
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById(heading.slug)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", `#${heading.slug}`);
              }}
              className={[
                "block rounded-lg px-2 py-1 text-sm leading-6 transition",
                isActive
                  ? "bg-surface2 font-medium text-text"
                  : "text-muted hover:bg-surface2 hover:text-text"
              ].join(" ")}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function OnPageNav({
  headings,
  mode
}: {
  headings: GuideHeading[];
  mode: "desktop" | "mobile";
}) {
  const items = useMemo(
    () => headings.filter((heading) => heading.depth <= 3),
    [headings]
  );
  const activeId = useActiveHeading(items);

  if (items.length === 0) return null;

  if (mode === "mobile") {
    return (
      <details className="guide-panel lg:hidden">
        <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          On this page
        </summary>
        <div className="border-t border-border px-4 pb-4 pt-2">
          <NavList activeId={activeId} headings={items} />
        </div>
      </details>
    );
  }

  return (
    <div className="guide-panel sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto p-4">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        On this page
      </div>
      <NavList activeId={activeId} headings={items} />
    </div>
  );
}
