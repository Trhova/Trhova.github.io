"use client";

import { useEffect, useMemo, useState } from "react";

import type { GuideHeading } from "@/lib/guides";

function useActiveHeading(headings: GuideHeading[]) {
  const [activeId, setActiveId] = useState(headings[0]?.slug ?? "");

  useEffect(() => {
    const items = headings
      .map((heading) => ({
        heading,
        element: document.getElementById(heading.slug)
      }))
      .filter(
        (item): item is { element: HTMLElement; heading: GuideHeading } =>
          Boolean(item.element)
      );

    if (items.length === 0) return;

    const updateActiveHeading = () => {
      const offset = 160;
      const nearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 48;

      if (nearPageBottom) {
        setActiveId(items[items.length - 1]?.heading.slug ?? "");
        return;
      }

      let nextActiveId = items[0]?.heading.slug ?? "";

      for (const item of items) {
        if (item.element.getBoundingClientRect().top <= offset) {
          nextActiveId = item.heading.slug;
        } else {
          break;
        }
      }

      setActiveId(nextActiveId);
    };

    updateActiveHeading();

    const observer = new IntersectionObserver(
      () => updateActiveHeading(),
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 1]
      }
    );

    items.forEach((item) => observer.observe(item.element));
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    window.addEventListener("resize", updateActiveHeading);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("resize", updateActiveHeading);
    };
  }, [headings]);

  return activeId;
}

type WorkflowStep = {
  children: GuideHeading[];
  heading: GuideHeading;
};

function buildWorkflowSteps(headings: GuideHeading[]) {
  const steps: WorkflowStep[] = [];
  let currentStep: WorkflowStep | null = null;

  for (const heading of headings) {
    if (heading.depth === 2) {
      currentStep = {
        heading,
        children: []
      };
      steps.push(currentStep);
      continue;
    }

    if (heading.depth === 3 && currentStep) {
      currentStep.children.push(heading);
    }
  }

  return steps;
}

function scrollToHeading(slug: string) {
  document.getElementById(slug)?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  window.history.replaceState(null, "", `#${slug}`);
}

function StepList({
  activeId,
  steps
}: {
  activeId: string;
  steps: WorkflowStep[];
}) {
  const activeStepIndex = steps.findIndex(
    (step) =>
      step.heading.slug === activeId ||
      step.children.some((child) => child.slug === activeId)
  );

  return (
    <ol className="relative space-y-4 before:absolute before:bottom-2 before:left-3.5 before:top-2 before:w-px before:bg-border">
      {steps.map((step, index) => {
        const isActiveStep =
          index === (activeStepIndex === -1 ? 0 : activeStepIndex);
        const isCompletedStep =
          activeStepIndex !== -1 && index < activeStepIndex;

        return (
          <li key={step.heading.slug} className="relative pl-10">
            <span
              aria-hidden="true"
              className={[
                "absolute left-[0.35rem] top-2.5 flex h-6 w-6 items-center justify-center rounded-full border-2 transition",
                isActiveStep
                  ? "border-accent bg-surface"
                  : isCompletedStep
                    ? "border-accent bg-accent"
                    : "border-border bg-surface2"
              ].join(" ")}
            >
              <span
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  isActiveStep
                    ? "bg-accent"
                    : isCompletedStep
                      ? "bg-accent"
                      : "bg-transparent"
                ].join(" ")}
              />
            </span>
            <a
              href={`#${step.heading.slug}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToHeading(step.heading.slug);
              }}
              className={[
                "block rounded-xl px-3 py-2 text-sm leading-6 transition",
                isActiveStep
                  ? "bg-surface2 font-medium text-text"
                  : "text-muted hover:bg-surface2 hover:text-text"
              ].join(" ")}
            >
              {step.heading.text}
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
  const steps = useMemo(() => buildWorkflowSteps(items), [items]);
  const activeId = useActiveHeading(items);

  if (steps.length === 0) return null;

  if (mode === "mobile") {
    return (
      <details className="guide-panel lg:hidden">
        <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Analysis workflow
        </summary>
        <div className="border-t border-border px-4 pb-4 pt-2">
          <StepList activeId={activeId} steps={steps} />
        </div>
      </details>
    );
  }

  return (
    <div className="guide-panel sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain p-4">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Analysis workflow
      </div>
      <StepList activeId={activeId} steps={steps} />
    </div>
  );
}
