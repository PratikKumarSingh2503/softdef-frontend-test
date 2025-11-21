const SectionTitle = ({ title, className = '' }) => (
  <div className={`space-y-2 ${className}`.trim()}>
    <p className="inline-flex items-center gap-2 rounded-full border border-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#cfd8cf]/70">
      <span className="h-1 w-1 rounded-full bg-[#c8ff4f]" />
      curated
      <span className="h-1 w-6 rounded-full bg-white/20" />
    </p>
    <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
  </div>
)

export default SectionTitle





