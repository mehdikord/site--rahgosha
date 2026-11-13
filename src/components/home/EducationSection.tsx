"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, CalendarDays, Headphones, Sparkles } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import FaqAccordion from '../FaqAccordion'
import { ARTICLES, HOME_FAQS, CONTACT } from '../../data'

export default function EducationSection() {
  const latest = ARTICLES.slice(0, 3)

  return (
    <section className="persian-pattern bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* ── مقالات ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="start"
            eyebrow="آموزش حقوقی راهگشا"
            title={<>حق‌تان را <span className="text-gold-gradient">قبل از دادگاه بدانید</span></>}
            subtitle="مقالات، راهنماها و پاسخ کارشناسان به سوالات پرتکرار شما؛ به زبان ساده و با پشتوانه آرای رویه‌ای."
          />
          <Link href="/articles" className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-pine-800/15 bg-white px-5 py-3 text-[13px] font-extrabold text-pine-800 transition hover:border-gold-500 hover:text-gold-700">
            همه مقالات و آموزش‌ها
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latest.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <Link href={`/articles/${article.slug}`} className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-pine-900/10 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-pine-950/15 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-black text-pine-950">{article.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-4 text-[10px] font-medium text-pine-800/60">
                    <span className="flex items-center gap-1.5"><CalendarDays size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> مطالعه {article.readTime}</span>
                  </div>
                  <h3 className="mt-2.5 font-display text-[17px] font-bold leading-8 text-pine-900 transition-colors group-hover:text-gold-700">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[11.5px] leading-6 text-pine-800/70">{article.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-extrabold text-gold-700">
                    ادامه مطلب <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* ── سوالات متداول ── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gold-500" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gold-600">سوالات متداول</span>
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-[1.4] text-pine-900 sm:text-3xl">پاسخ صریح به<br />پرسش‌های <span className="text-gold-gradient">پرتکرار شما</span></h3>
              <p className="mt-3 text-[13px] leading-7 text-pine-800/75">
                پرتکرارترین سوالاتی که موکلین قبل از سپردن پرونده می‌پرسند — پاسخ مستقیم و بدون پیچیدگی از وکلای راهگشا.
              </p>
              <a
                href={`tel:${CONTACT.mobile}`}
                dir="ltr"
                className="group mt-6 inline-flex items-center gap-3 rounded-2xl bg-pine-900 px-6 py-4 text-cream transition hover:bg-pine-800"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500 text-pine-950 transition group-hover:scale-110">
                  <Headphones size={20} />
                </span>
                <span className="text-right">
                  <span className="block text-[10px] font-bold text-gold-300">پاسخگویی آنلاین ۲۴ساعته</span>
                  <span className="block text-base font-black tracking-wider">{CONTACT.mobileDisplay}</span>
                </span>
              </a>
              <p className="mt-4 flex items-center gap-2 text-[10px] font-medium text-pine-800/55">
                <Sparkles size={12} className="text-gold-500" /> سوالتان در فهرست نیست؟ در چت آنلاین بپرسید.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={HOME_FAQS} />
          </div>
        </div>
      </div>
    </section>
  )
}
