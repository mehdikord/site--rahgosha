"use client";

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Clock, CalendarDays, ArrowLeft, Newspaper, X } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import CtaBanner from '@/components/CtaBanner'
import { ARTICLES, ARTICLE_CATEGORIES, type ArticleCategory } from '@/data'

export default function ArticlesPage() {
  const [category, setCategory] = useState<ArticleCategory>('همه')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim()
    return ARTICLES.filter(
      (a) =>
        (category === 'همه' || a.category === category) &&
        (!q || a.title.includes(q) || a.excerpt.includes(q) || a.tags.some((t) => t.includes(q)))
    )
  }, [category, query])

  const [featured, ...rest] = filtered

  return (
    <>
      <PageHeader
        eyebrow="آموزش‌های حقوقی راهگشا"
        title={<>مجله حقوقی <span className="text-gold-gradient">راهگشا</span></>}
        subtitle="مقالات تخصصی و کاربردی درباره املاک، قراردادها و رویه قضایی؛ نوشته و بازبینی‌شده توسط وکلای پایه یک دادگستری."
        breadcrumb={[{ label: 'آموزش و مقالات' }]}
      />

      <section className="bg-paper py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* فیلتر و جستجو */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {ARTICLE_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-4 py-2 text-[11.5px] font-bold transition-all duration-300 ${
                    category === c
                      ? 'border-pine-900 bg-pine-900 text-gold-300 shadow-md'
                      : 'border-pine-900/15 bg-white text-pine-800 hover:border-gold-500/60 hover:text-gold-700'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative w-full max-w-sm">
              <Search size={17} className="absolute right-4 top-1/2 -translate-y-1/2 text-pine-800/45" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو در مقالات… مثال: سند، قولنامه، مشارکت"
                className="h-12 w-full rounded-2xl border border-pine-900/15 bg-white pe-11 ps-4 text-[13px] outline-none transition placeholder:text-pine-800/40 focus:border-gold-500/60"
                aria-label="جستجوی مقالات"
              />
              {query && (
                <button onClick={() => setQuery('')} aria-label="پاک کردن" className="absolute left-4 top-1/2 -translate-y-1/2 text-pine-800/50 hover:text-pine-900">
                  <X size={17} />
                </button>
              )}
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-pine-900/20 bg-white/60 py-16 text-center">
              <Newspaper size={44} className="text-pine-800/30" />
              <p className="font-display text-lg font-bold text-pine-900">مقاله‌ای با این مشخصات پیدا نشد</p>
              <p className="max-w-md text-[12px] leading-7 text-pine-800/65">عبارت دیگری جستجو کنید یا دسته‌بندی را تغییر دهید.</p>
              <button onClick={() => { setQuery(''); setCategory('همه') }} className="mt-1 rounded-xl bg-pine-900 px-6 py-3 text-[12px] font-bold text-cream transition hover:bg-pine-800">
                پاک کردن فیلترها
              </button>
            </div>
          ) : (
            <>
              {/* مقاله ویژه */}
              {featured && category === 'همه' && !query && (
                <motion.article
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group mt-8 grid overflow-hidden rounded-[2rem] border border-pine-900/10 bg-white shadow-sm lg:grid-cols-12"
                >
                  <Link href={`/articles/${featured.slug}`} className="relative h-60 overflow-hidden sm:h-80 lg:col-span-7 lg:h-auto">
                    <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.3s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/25 to-transparent" />
                    <span className="absolute right-5 top-5 rounded-full bg-gold-500 px-4 py-1.5 text-[11px] font-black text-pine-950">مقاله ویژه</span>
                  </Link>
                  <div className="flex flex-col gap-4 p-6 sm:p-9 lg:col-span-5">
                    <span className="w-max rounded-full bg-pine-900/[0.06] px-3 py-1 text-[10px] font-bold text-pine-700">{featured.category}</span>
                    <Link href={`/articles/${featured.slug}`}>
                      <h2 className="font-display text-xl font-bold leading-[1.7] text-pine-900 transition-colors hover:text-gold-800 sm:text-2xl">{featured.title}</h2>
                    </Link>
                    <p className="text-[12.5px] leading-8 text-pine-800/75">{featured.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-pine-900/10 pt-5">
                      <div className="flex items-center gap-4 text-[10.5px] font-medium text-pine-800/60">
                        <span className="flex items-center gap-1.5"><CalendarDays size={13} /> {featured.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={13} /> {featured.readTime}</span>
                      </div>
                      <Link href={`/articles/${featured.slug}`} className="group/link inline-flex items-center gap-1.5 text-[12px] font-extrabold text-gold-700 transition hover:text-gold-800">
                        ادامه <ArrowLeft size={14} className="transition-transform duration-300 group-hover/link:-translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )}

              {/* گرید مقالات */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {(category === 'همه' && !query ? rest : filtered).map((article) => (
                    <motion.article
                      key={article.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.35 }}
                    >
                      <Link href={`/articles/${article.slug}`} className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-pine-900/10 bg-white">
                        <div className="relative h-44 overflow-hidden">
                          <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.1s] group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-pine-950/10 to-transparent" />
                          <span className="absolute right-4 top-4 rounded-full bg-gold-500/95 px-3 py-1 text-[10px] font-black text-pine-950">{article.category}</span>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <div className="flex items-center gap-4 text-[10px] font-medium text-pine-800/55">
                            <span className="flex items-center gap-1.5"><CalendarDays size={11} /> {article.date}</span>
                            <span className="flex items-center gap-1.5"><Clock size={11} /> {article.readTime}</span>
                          </div>
                          <h3 className="mt-2 font-display text-[16px] font-bold leading-8 text-pine-900 transition-colors group-hover:text-gold-800">{article.title}</h3>
                          <p className="mt-1.5 line-clamp-2 text-[11px] leading-6 text-pine-800/68">{article.excerpt}</p>
                          <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-extrabold text-gold-700">
                            مطالعه مقاله <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
