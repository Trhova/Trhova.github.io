export function PipelineOverview() {
  return (
    <section className="not-prose my-8 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
        Pipeline overview
      </p>

      <div className="grid gap-5 xl:grid-cols-2">
        <div className="rounded-[1.5rem] border border-teal-300/20 bg-teal-300/10 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="m-0 font-[var(--font-guide-display)] text-2xl text-white">
              Upstream
            </h3>
            <span className="rounded-full border border-teal-300/30 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">
              Ends at count table
            </span>
          </div>

          <div className="grid gap-3">
            <StageCard
              title="1. Biological planning"
              description="Sample quality, replication, annotation choice, poly(A) versus rRNA depletion, strandedness, read geometry."
            />
            <StageCard
              title="2. FASTQ QC"
              description="FastQC + MultiQC first, then RNA-specific checks such as RSeQC, RNA-SeQC, or Picard when needed."
            />
            <StageCard
              title="3. Trim only if needed"
              description="Trim Galore or direct Cutadapt when adapters or quality tails are a real problem, not by reflex."
            />
            <StageCard
              title="4. Quantify or align"
              description="Salmon for expression-first work. STAR when you need genome-aware follow-up such as positional signal, regional analysis, or browser-style coverage inspection."
            />
            <StageCard
              title="5. Count table"
              description="This is the handoff point. If you do not trust this object, do not move downstream yet."
              emphasis="accent"
            />
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-amber-300/20 bg-amber-300/10 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="m-0 font-[var(--font-guide-display)] text-2xl text-white">
              Downstream
            </h3>
            <span className="rounded-full border border-amber-300/30 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
              Starts from count table
            </span>
          </div>

          <div className="grid gap-3">
            <StageCard
              title="1. Core analysis"
              description="Import carefully, inspect sample structure, set the design, normalize, assess batch, and run DESeq2 or a justified alternative."
            />
            <StageCard
              title="2. Enrichment analysis"
              description="Choose ORA, GSEA or fgsea, ssGSEA or GSVA, or PROGENy based on whether your question is about DEG over-representation, ranked shifts, sample-level programs, or pathway activity."
            />
            <StageCard
              title="3. Regulatory and tissue context"
              description="TF activity, cell composition or enrichment, targeted marker panels, network context, and coexpression modules when the data support them."
            />
            <StageCard
              title="4. Genome-aware interpretation"
              description="Regional signal mapping, coverage inspection, and chromosome-aware views that help interpret the same DE result in genomic space."
            />
            <StageCard
              title="5. Interpretation"
              description="The real endpoint is not a longer figure legend. It is a sharper answer to a biological question, with clear limits on what bulk RNA-seq can and cannot tell you."
              emphasis="warning"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
        Upstream is about generating trustworthy inputs. Downstream is about
        asking the right biological question of those inputs. The count table is
        the boundary between the two.
      </div>
    </section>
  );
}

function StageCard({
  description,
  emphasis = "default",
  title
}: {
  description: string;
  emphasis?: "accent" | "default" | "warning";
  title: string;
}) {
  const emphasisClassName =
    emphasis === "accent"
      ? "border-teal-300/25 bg-teal-300/10"
      : emphasis === "warning"
        ? "border-amber-300/25 bg-amber-300/10"
        : "border-white/10 bg-slate-950/60";

  return (
    <div className={`rounded-2xl border p-4 ${emphasisClassName}`}>
      <p className="m-0 text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 mb-0 text-sm leading-7 text-slate-200">
        {description}
      </p>
    </div>
  );
}
