"use client";

export type LedgerEntry = {
  _key: string;
  sourceTitle: string;
  leadInstitution: string;
  keyDataPoint: string;
  year: number;
  link?: string;
  categoryTag: "Economic" | "Environmental" | "Technical" | "Policy";
};

export default function ResearchLedger({ entries }: { entries: LedgerEntry[] }) {
  if (!entries || entries.length === 0) return null;

  return (
    <section className="-mt-8 border-t border-white/[0.06] pt-6 pb-24">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8a8f98]/60 font-mono">
          References
        </span>
        <h3 className="mt-2 text-[24px] font-medium text-[#F8FAFC] tracking-[-0.02em]">
          Research Ledger
        </h3>
        <p className="mt-1 text-[13px] text-[#8a8f98]">
          {entries.length} source{entries.length !== 1 ? "s" : ""} cited in this article.
        </p>
      </div>

      {/* Ledger table */}
      <div className="flex flex-col divide-y divide-white/[0.06]">

        {/* Desktop column headers */}
        <div className="hidden md:grid md:grid-cols-[2fr_1fr_3fr_80px] gap-x-6 pb-3 mb-1">
          {["Source", "Institution", "Key Data Point", "Year"].map((h) => (
            <span key={h} className="text-[10px] font-semibold uppercase tracking-widest text-[#8a8f98]/40 font-mono">
              {h}
            </span>
          ))}
        </div>

        {entries.map((entry, i) => (
          <div
            key={entry._key}
            className="grid grid-cols-1 md:grid-cols-[2fr_1fr_3fr_80px] gap-x-6 gap-y-2 py-5 hover:bg-white/[0.02] transition-colors duration-200 -mx-4 px-4 rounded-[2px]"
          >
            {/* Index + Source Title */}
            <div className="flex items-start gap-3">
              <span className="font-mono text-[11px] text-[#8a8f98]/30 pt-0.5 shrink-0 w-5 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-[#F8FAFC] hover:text-[#D4B996] transition-colors leading-snug underline-offset-2 hover:underline font-mono"
                  >
                    {entry.sourceTitle}
                  </a>
                ) : (
                  <span className="text-[14px] font-medium text-[#F8FAFC] leading-snug font-mono">
                    {entry.sourceTitle}
                  </span>
                )}
              </div>
            </div>

            {/* Lead Institution */}
            <div className="pl-8 md:pl-0 flex items-start">
              <span className="text-[13px] text-[#8a8f98] font-mono leading-snug">
                {entry.leadInstitution}
              </span>
            </div>

            {/* Key Data Point */}
            <div className="pl-8 md:pl-0">
              <p className="text-[13px] text-[#8a8f98] leading-[1.75]">
                {entry.keyDataPoint}
              </p>
            </div>

            {/* Year */}
            <div className="pl-8 md:pl-0 flex items-start">
              <span className="font-mono text-[13px] text-[#8a8f98]">
                {entry.year}
              </span>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}
