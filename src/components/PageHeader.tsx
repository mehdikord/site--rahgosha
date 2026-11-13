import Link from 'next/link'
import { ChevronLeft, Home } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  breadcrumb?: { label: string; to?: string }[]
}

export default function PageHeader({ eyebrow, title, subtitle, breadcrumb = [] }: Props) {
  return (
    <section className="relative overflow-hidden bg-pine-950 pb-14 pt-32 sm:pt-36 lg:pb-20">
      <img src="/images/hero-justice.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover object-[60%_30%] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-l from-pine-950/95 via-pine-950/70 to-pine-950/40" />
      <div aria-hidden className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        {/* بردکرامب */}
        <nav aria-label="مسیر صفحه" className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-cream/55">
          <Link href="/" className="flex items-center gap-1 transition hover:text-gold-300"><Home size={12} /> خانه</Link>
          {breadcrumb.map((b) => (
            <span key={b.label} className="flex items-center gap-1.5">
              <ChevronLeft size={12} className="text-gold-500/60" />
              {b.to ? <Link href={b.to} className="transition hover:text-gold-300">{b.label}</Link> : <span className="text-gold-300">{b.label}</span>}
            </span>
          ))}
        </nav>
        <span className="mt-6 inline-flex items-center gap-3">
          <span className="h-px w-10 bg-gold-500" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gold-400">{eyebrow}</span>
        </span>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.35] text-cream sm:text-4xl lg:text-5xl lg:leading-[1.3]">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-[13px] leading-8 text-cream/75 sm:text-sm">{subtitle}</p>}
      </div>
    </section>
  )
}
