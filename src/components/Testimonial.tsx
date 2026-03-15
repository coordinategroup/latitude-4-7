export default function Testimonial() {
  return (
    <section className="bg-[#08090A] py-32 border-t border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24 items-start">

          {/* Attribution sidebar */}
          <div className="flex flex-col gap-2 md:pt-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#939DB8]/50">
              Client Perspective
            </span>
            <span className="text-[15px] font-semibold text-[#F8FAFC] mt-2">
              Hargreaves Lansdown
            </span>
            <cite className="not-italic text-[15px] text-[#939DB8]/70 font-medium leading-snug">
              David Espley<br />Chief Technology Officer
            </cite>
          </div>

          {/* Quote */}
          <blockquote className="text-[28px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.35]">
            &ldquo;Luke helped me immensely during my time in HL by working with
            his fantastic team to deliver a change project that had a meaningful
            impact on how our customers perceived and used our services.&rdquo;
          </blockquote>

        </div>
      </div>
    </section>
  );
}
