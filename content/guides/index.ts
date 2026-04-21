import type { ComponentType } from "react";

import BulkRnaSeqGuide from "./bulk-rna-seq.mdx";

type GuideModule = {
  Component: ComponentType;
  eyebrow?: string;
  pageTitle?: string;
};

export const guideModules: Record<string, GuideModule> = {
  "bulk-rna-seq": {
    Component: BulkRnaSeqGuide,
    eyebrow: "Bulk RNA-seq handbook",
    pageTitle: "Bulk RNA-seq: from biological sample to interpretable signal"
  }
};
