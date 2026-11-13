"use client";

import { useState } from 'react'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { CalendarDays, Clock, Tag, Link2, Check, PhoneCall, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import CtaBanner from '@/components/CtaBanner'
import { ARTICLES, CONTACT } from '@/data'

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [copied, setCopied] = useState(false)
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) notFound()

  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)
  const fallback = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)
  const suggestions = related.length > 0 ? related : fallback

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      /* clipboard not available */
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={<span className="text-[1.65rem] leading-[1.6] sm:text-3xl sm:leading-[1.55]">{article.title}</span>}
        breadcrumb={[{ label: 'آموزش و مقالات', to: '/articles' }, { label: article.category }]}
      />

      <article className="bg-paper py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-12 lg:px-6">
          {/* ── متن مقاله ── */}
          <div className="lg:col-span-8">
            <img src={article.image} alt={article.title} className="h-60 w-full rounded-3xl object-cover sm:h-80 lg:h-96" />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-pine-900/10 pb-6">
              <div className="flex flex-wrap items-center gap-5 text-[11.5px] font-medium text-pine-800/65">
                <span className="flex items-center gap-1.5"><CalendarDays size={15} className="text-gold-600" /> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={15} className="text-gold-600" /> زمان مطالعه: {article.readTime}</span>
                <span className="flex items-center gap-1.5"><Tag size={15} className="text-gold-600" /> {article.tags.join(' · ')}</span>
              </div>
              <button
                onClick={copyLink}
                className="flex items-center gap-2 rounded-xl border border-pine-900/15 bg-white px-4 py-2 text-[11px] font-bold text-pine-800 transition hover:border-gold-500/60 hover:text-gold-700"
                aria-label="کپی لینک مقاله"
              >
                {copied ? <><Check size={14} className="text-emerald-600" /> کپی شد!</> : <><Link2 size={14} /> کپی لینک مقاله</>}
              </button>
            </div>

            <p className="mt-7 rounded-2xl border-r-4 border-gold-500 bg-gold-500/[0.08] p-5 text-[14px] font-bold leading-8 text-pine-900">
              {article.excerpt}
            </p>

            <div className="mt-7 space-y-6 text-[14.5px] leading-[2.15] text-pine-900/90">
              {article.content.map((para, i) => (
                <p key={i} className={i === 0 ? 'first-letter:font-display first-letter:text-3xl first-letter:font-bold first-letter:text-gold-700 first-letter:ml-1' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* اشتراک‌گذاری و بازگشت */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-pine-900/10 bg-white p-5 sm:flex-row">
              <p className="flex items-center gap-2 text-[12px] font-bold text-pine-800">
                <Share2 size={16} className="text-gold-600" /> این مقاله برای دوست حقوقی‌تان مفید بود؟
              </p>
              <button onClick={copyLink} className="flex items-center gap-2 rounded-xl bg-pine-900 px-5 py-2.5 text-[11.5px] font-bold text-cream transition hover:bg-pine-800">
                {copied ? <Check size={15} className="text-emerald-400" /> : <Link2 size={15} />}
                {copied ? 'لینک کپی شد' : 'اشتراک‌گذاری مقاله'}
              </button>
            </div>

            {/* مقالات مرتبط */}
            <h2 className="mt-12 font-display text-2xl font-bold text-pine-900">ادامه <span className="text-gold-gradient">مطالعه</span></h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {suggestions.map((a) => (
                <Link key={a.slug} href={`/articles/${a.slug}`} className="group overflow-hidden rounded-2xl border border-pine-900/10 bg-white">
                  <img src={a.image} alt={a.title} loading="lazy" className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4">
                    <span className="text-[9px] font-bold text-gold-700">{a.category}</span>
                    <h3 className="mt-1 line-clamp-2 text-[12px] font-bold leading-7 text-pine-900 transition-colors group-hover:text-gold-800">{a.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── سایدبار ── */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-3xl border border-gold-500/30 bg-pine-950 p-6 text-cream">
              <h3 className="font-display text-lg font-bold">درباره پرونده‌تان سوال دارید؟</h3>
              <p className="mt-2 text-[12px] leading-7 text-cream/75">این مقاله را خواندید؛ حالا یک تماس بگیرید تا وکیل متخصص دقیقاً وضعیت شما را بررسی کند. مشاوره اولیه رایگان است.</p>
              <a href={`tel:${CONTACT.phone}`} dir="ltr" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gold-500 py-3.5 text-base font-black tracking-wider text-pine-950 transition hover:bg-gold-400">
                <PhoneCall size={18} /> {CONTACT.phoneDisplay}
              </a>
              <Link href="/contact" className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/15 py-3 text-[11.5px] font-bold text-cream/85 transition hover:border-gold-400/50 hover:text-gold-200">
                فرم درخواست تماس <ArrowRight size={14} className="rotate-180" />
              </Link>
            </div>

            <div className="rounded-3xl border border-pine-900/10 bg-white p-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gold-700">آخرین مقالات</h3>
              <ul className="mt-3 divide-y divide-pine-900/8">
                {ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 5).map((a) => (
                  <li key={a.slug}>
                    <Link href={`/articles/${a.slug}`} className="group flex items-start justify-between gap-3 py-3">
                      <span className="text-[11.5px] font-bold leading-7 text-pine-800 transition-colors group-hover:text-gold-800">{a.title}</span>
                      <ArrowLeft size={13} className="mt-1.5 shrink-0 text-pine-800/35 transition-transform duration-300 group-hover:-translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-pine-900/10 bg-white p-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gold-700">خدمات مرتبط</h3>
              <ul className="mt-3 space-y-2.5 text-[12px] font-bold text-pine-800">
                <li><Link href="/services/melki-tesadof" className="flex items-center gap-2 transition hover:text-gold-700"><ArrowLeft size={13} className="text-gold-600" /> دعاوی ملکی و ثبتی</Link></li>
                <li><Link href="/services/gharardad-sakhtman" className="flex items-center gap-2 transition hover:text-gold-700"><ArrowLeft size={13} className="text-gold-600" /> قراردادهای ساختمانی و مشارکت</Link></li>
                <li><Link href="/services/tanzim-gharardad" className="flex items-center gap-2 transition hover:text-gold-700"><ArrowLeft size={13} className="text-gold-600" /> تنظیم و بازبینی قرارداد</Link></li>
                <li><Link href="/forms" className="flex items-center gap-2 transition hover:text-gold-700"><ArrowLeft size={13} className="text-gold-600" /> فرم‌های حقوقی آماده و رایگان</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <CtaBanner />
    </>
  )
}
