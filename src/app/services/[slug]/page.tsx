"use client";

import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { CheckCircle2, ArrowRight, PhoneCall, ShieldCheck, Clock, FileText } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import FaqAccordion from '@/components/FaqAccordion'
import CtaBanner from '@/components/CtaBanner'
import { SERVICES, CONTACT } from '@/data'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) notFound()

  const Icon = service.icon
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 5)

  return (
    <>
      <PageHeader
        eyebrow={service.tagline}
        title={service.title}
        subtitle={service.short}
        breadcrumb={[{ label: 'خدمات', to: '/services' }, { label: service.title }]}
      />

      <section className="bg-paper py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-12 lg:px-6">
          {/* ── ستون اصلی ── */}
          <div className="lg:col-span-8">
            {/* تصویر شاخص */}
            <div className="relative h-56 overflow-hidden rounded-3xl sm:h-72 lg:h-80">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 to-transparent" />
              <span className="absolute bottom-5 right-6 flex items-center gap-3 rounded-2xl border border-gold-500/40 bg-pine-950/70 px-5 py-3 backdrop-blur-md">
                <Icon size={26} className="text-gold-400" />
                <span className="font-display text-lg font-bold text-cream">{service.title}</span>
              </span>
            </div>

            {/* توضیحات */}
            <div className="mt-8 space-y-5 text-[14px] leading-9 text-pine-800/90">
              {service.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* چه مواردی شامل می‌شود */}
            <div className="mt-8 rounded-3xl border border-pine-900/10 bg-white p-6 sm:p-7">
              <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-pine-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700"><CheckCircle2 size={19} /></span>
                این خدمت دقیقاً چه چیزهایی را پوشش می‌دهد؟
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 rounded-xl bg-cream/60 p-3.5 text-[12px] leading-7 text-pine-800">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* سوالات متداول خدمت */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-pine-900">سوالات متداول <span className="text-gold-gradient">این خدمت</span></h2>
              <p className="mt-2 text-[12px] leading-7 text-pine-800/70">پاسخ‌های مستقیم وکیل متخصص راهگشا در این حوزه.</p>
              <div className="mt-5">
                <FaqAccordion items={service.faq} />
              </div>
            </div>
          </div>

          {/* ── سایدبار ── */}
          <aside className="space-y-6 lg:col-span-4">
            {/* باکس مشاوره */}
            <div className="overflow-hidden rounded-3xl border border-gold-500/30 bg-pine-950 p-6 text-cream">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-pine-950"><ShieldCheck size={24} /></span>
              <h3 className="mt-4 font-display text-lg font-bold">پرونده شما در این حوزه است؟</h3>
              <p className="mt-2 text-[12px] leading-7 text-cream/75">مشاوره اولیه کاملاً رایگان؛ وکیل متخصص «{service.title}» مدارک و شانس موفقیت پرونده‌تان را بررسی و هزینه قطعی را اعلام می‌کند.</p>
              <a href={`tel:${CONTACT.phone}`} dir="ltr" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gold-500 py-3.5 text-base font-black tracking-wider text-pine-950 transition hover:bg-gold-400">
                <PhoneCall size={18} /> {CONTACT.phoneDisplay}
              </a>
              <Link href="/contact" className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/15 py-3 text-[12px] font-bold text-cream/85 transition hover:border-gold-400/50 hover:text-gold-200">
                فرم درخواست تماس <ArrowRight size={15} className="rotate-180" />
              </Link>
            </div>

            {/* تضمین‌ها */}
            <div className="rounded-3xl border border-pine-900/10 bg-white p-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gold-700">تعهد راهگشا</h3>
              <ul className="mt-4 space-y-3 text-[12px] leading-7 text-pine-800/85">
                <li className="flex items-start gap-2.5"><Clock size={16} className="mt-1 shrink-0 text-gold-600" /> برآورد کتبی زمان و هزینه پیش از هر اقدام</li>
                <li className="flex items-start gap-2.5"><ShieldCheck size={16} className="mt-1 shrink-0 text-gold-600" /> محرمانگی کامل پرونده و مدارک شما</li>
                <li className="flex items-start gap-2.5"><FileText size={16} className="mt-1 shrink-0 text-gold-600" /> قرارداد وکالت شفاف با مرحله‌بندی هزینه</li>
              </ul>
            </div>

            {/* سایر خدمات */}
            <div className="rounded-3xl border border-pine-900/10 bg-white p-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gold-700">سایر خدمات تخصصی</h3>
              <ul className="mt-3 divide-y divide-pine-900/8">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="flex items-center justify-between gap-3 py-3 text-[12.5px] font-bold text-pine-800 transition hover:text-gold-700">
                      {s.title}
                      <ArrowRight size={14} className="shrink-0 rotate-180 text-pine-800/40" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
