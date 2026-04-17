"use client";

import { ArrowUpRight, ChevronDown, ChevronUp, Github } from "lucide-react";
import { useMemo, useState } from "react";

import { ExternalLink } from "@/components/ExternalLink";
import { Pill } from "@/components/Pill";

type WritingPost = {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  body: string[];
  repoUrl?: string;
};

export function WritingCard({ post }: { post: WritingPost }) {
  const [expanded, setExpanded] = useState(false);
  const readMoreId = useMemo(() => `post-${post.id}`, [post.id]);

  return (
    <article className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-text">
          {post.title}
        </h3>
        {post.repoUrl ? (
          <ExternalLink
            href={post.repoUrl}
            ariaLabel="Repository link"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface2 px-3 py-1 text-xs font-medium text-text hover:bg-surface2/70"
          >
            <Github className="h-4 w-4" />
            Repo
            <ArrowUpRight className="h-4 w-4 opacity-60" />
          </ExternalLink>
        ) : (
          <span className="rounded-full border border-border bg-surface2 px-3 py-1 text-xs font-medium text-muted">
            Repo link: add in data
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-muted">{post.excerpt}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>

      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-text hover:text-text/80"
        aria-expanded={expanded}
        aria-controls={readMoreId}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? (
          <>
            Read less <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            Read more <ChevronDown className="h-4 w-4" />
          </>
        )}
      </button>

      <div
        id={readMoreId}
        className={`mt-4 space-y-3 text-sm text-muted ${
          expanded ? "block" : "hidden"
        }`}
      >
        {post.body.map((p) => (
          <p key={p.slice(0, 28)}>{p}</p>
        ))}
      </div>
    </article>
  );
}
