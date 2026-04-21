import type { MDXComponents } from "mdx/types";

import { GuideH2 } from "@/components/guides/GuideHeading";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: GuideH2,
    ...components
  };
}
