"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

import { getGuideSectionPresentation } from "@/lib/guidePresentation";

type GuideH2Props = ComponentPropsWithoutRef<"h2"> & {
  children?: ReactNode;
};

function getGuideSlugFromPathname(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return parts[0] === "guides" ? parts[1] ?? "" : "";
}

export function GuideH2({ children, id, ...props }: GuideH2Props) {
  const pathname = usePathname();
  const guideSlug = getGuideSlugFromPathname(pathname);
  const sectionMeta = id
    ? getGuideSectionPresentation(guideSlug, id)
    : undefined;

  return (
    <div
      className="guide-section-block"
      data-guide-section={id}
      id={id ? `${id}__section` : undefined}
    >
      {sectionMeta?.label ? (
        <div className="guide-section-label">{sectionMeta.label}</div>
      ) : null}
      <h2 id={id} {...props}>
        {children}
      </h2>
      {sectionMeta?.intro ? (
        <p className="guide-section-intro">{sectionMeta.intro}</p>
      ) : null}
    </div>
  );
}
