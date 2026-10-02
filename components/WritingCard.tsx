import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
type WritingPost = {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  body: string[];
  repoUrl?: string;
  siteUrl?: string;
};
export function WritingCard({ post }: { post: WritingPost }) {
  return (
    <article className="writing-entry">
      <div>
        <p className="eyebrow">{post.tags.join(" / ")}</p>
        <h2>{post.title}</h2>
      </div>
      <div>
        <p>{post.excerpt}</p>
        <div className="writing-links">
          {post.siteUrl && (
            <Link className="text-link" href={new URL(post.siteUrl).pathname}>
              Read the guide <ArrowUpRight size={16} />
            </Link>
          )}
          {post.repoUrl && (
            <a
              className="text-link"
              href={post.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Code &amp; examples <ArrowUpRight size={16} />
            </a>
          )}
        </div>
        <details>
          <summary>More about this project</summary>
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </details>
      </div>
    </article>
  );
}
