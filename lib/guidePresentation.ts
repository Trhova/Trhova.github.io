export type GuideSectionPresentation = {
  intro?: string;
  label?: string;
};

export type GuidePresentation = {
  audience: "Beginner" | "Intermediate" | "Advanced";
  sections?: Record<string, GuideSectionPresentation>;
  summary: string;
  whatYoullLearn?: string[];
};

const guidePresentation: Record<string, GuidePresentation> = {
  "bulk-rna-seq": {
    audience: "Intermediate",
    summary:
      "A practical reference for moving from bulk RNA-seq experiment design to differential expression and layered biological interpretation.",
    whatYoullLearn: [
      "How to get from sample planning to a trustworthy count table",
      "How to interpret DESeq2 outputs without mixing inference and visualization",
      "When to move from genes to gene sets, sample states, and regulatory inference",
      "When transcript-aware or genome-aware analyses are worth the extra complexity"
    ],
    sections: {
      "differential-expression": {
        label: "Core DE"
      },
      "genome-aware--transcript-level-analysis": {
        label: "Genome-aware"
      },
      "gene-set-level": {
        label: "Biological interpretation"
      },
      "sample-level-pathway-activity": {
        label: "Sample state"
      },
      "regulatory--signaling-inference": {
        label: "Regulatory inference"
      },
      "tissue-composition": {
        label: "Composition"
      }
    }
  }
};

export function getGuidePresentation(slug: string) {
  return guidePresentation[slug];
}

export function getGuideSectionPresentation(slug: string, sectionSlug: string) {
  return guidePresentation[slug]?.sections?.[sectionSlug];
}
