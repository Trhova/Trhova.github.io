"use client";

import {
  Children,
  isValidElement,
  useMemo,
  useState,
  type ReactNode
} from "react";

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (isValidElement(node)) {
    return extractText(node.props.children);
  }

  return "";
}

export function GuideCodeBlock({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false);

  const rawText = useMemo(() => extractText(children), [children]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(rawText.trimEnd());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  const childArray = Children.toArray(children);
  const codeChild = childArray.find((child) => isValidElement(child));

  return (
    <div className="not-prose my-6">
      <div className="guide-code-block relative">
        <button
          type="button"
          onClick={handleCopy}
          className="absolute right-4 top-4 z-10 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted transition hover:border-accent/30 hover:text-text"
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <pre {...props} className="guide-code-pre">
          {codeChild && isValidElement(codeChild) ? codeChild : children}
        </pre>
      </div>
    </div>
  );
}
