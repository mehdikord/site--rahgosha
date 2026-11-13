import type { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  align?: 'center' | 'start'
  tone?: 'light' | 'dark'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', tone = 'light' }: Props) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-right'
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <span className="inline-flex items-center gap-3">
        <span className="h-px w-10 bg-gold-500" />
        <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gold-600">{eyebrow}</span>
        {align === 'center' && <span className="h-px w-10 bg-gold-500" />}
      </span>
      <h2 className={`font-display text-3xl font-bold leading-[1.35] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.3] ${tone === 'light' ? 'text-pine-900' : 'text-cream'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-sm leading-8 sm:text-base ${tone === 'light' ? 'text-pine-800/80' : 'text-cream/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
