export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  const alignCls = align === 'left' ? 'text-left' : 'text-center mx-auto'
  const eyebrowColor = dark ? 'text-sun-400' : 'text-sun-600'
  const titleColor = dark ? 'text-white' : 'text-ocean-950'
  const subtitleColor = dark ? 'text-ocean-100' : 'text-slate-600'
  return (
    <div className={'max-w-3xl ' + alignCls + ' mb-12'}>
      {eyebrow && (
        <p className={'mb-3 text-xs font-bold uppercase tracking-[0.2em] ' + eyebrowColor}>{eyebrow}</p>
      )}
      <h2 className={'text-3xl md:text-4xl font-bold ' + titleColor}>{title}</h2>
      {subtitle && (
        <p className={'mt-4 text-base md:text-lg leading-relaxed ' + subtitleColor}>{subtitle}</p>
      )}
    </div>
  )
}
