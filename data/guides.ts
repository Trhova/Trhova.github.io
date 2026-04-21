export type GuideStatus = "published" | "coming-soon";

export type GuideNavEntry = {
  slug: string;
  title: string;
  description: string;
  status: GuideStatus;
  order: number;
  tags: string[];
};

const guideEntries: GuideNavEntry[] = [
  {
    slug: "bulk-rna-seq",
    title: "Bulk RNA-seq",
    description:
      "An opinionated bulk RNA-seq guide for human and mouse studies, split into upstream work up to the count table and downstream analyses that help you extract more biology after differential expression.",
    status: "published",
    order: 1,
    tags: [
      "bulk RNA-seq",
      "human",
      "mouse",
      "DESeq2",
      "nf-core",
      "Nextflow",
      "transcriptomics"
    ]
  },
  {
    slug: "metagenomics",
    title: "Metagenomics",
    description:
      "Coming soon: guide-oriented workflows for shotgun metagenomics design, QC, assembly-free profiling, and interpretation.",
    status: "coming-soon",
    order: 2,
    tags: ["metagenomics", "microbiome"]
  },
  {
    slug: "phylogenomics",
    title: "Phylogenomics",
    description:
      "Coming soon: practical phylogenomics strategy for marker choice, tree building, QC, and defensible interpretation.",
    status: "coming-soon",
    order: 3,
    tags: ["phylogenomics", "evolution"]
  },
  {
    slug: "codex",
    title: "Codex",
    description:
      "Coming soon: how I structure Codex for research-heavy engineering, review loops, and reproducible analysis work.",
    status: "coming-soon",
    order: 4,
    tags: ["codex", "workflow", "automation"]
  }
];

export const guides = [...guideEntries].sort(
  (left, right) => left.order - right.order
);

export const publishedGuides = guides.filter(
  (guide) => guide.status === "published"
);
