"use client";

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, FileText, Download, Eye, X, CheckCircle2, Files, FileSignature, Scale, Building2,
} from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import CtaBanner from '@/components/CtaBanner'
import { LEGAL_FORMS, FORM_CATEGORIES, type FormCategory, type LegalForm } from '@/data'

const CATEGORY_ICONS: Record<Exclude<FormCategory, 'همه'>, typeof Scale> = {
  'فرم‌های قضایی': Scale,
  'فرم‌های ملکی': Building2,
  'فرم‌های قراردادی': FileSignature,
  'فرم‌های ثبتی و اجرایی': Files,
}

export default function FormsPage() {
  const [category, setCategory] = useState<FormCategory>('همه')
  const [query, setQuery] = useState('')
  const [preview, setPreview] = useState<LegalForm | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim()
    return LEGAL_FORMS.filter(
      (f) => (category === 'همه' || f.category === category) && (!q || f.title.includes(q) || f.description.includes(q))
    )
  }, [category, query])

  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(null), 3200)
    return () => window.clearTimeout(t)
  }, [toast])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPreview(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const download = (form: LegalForm) => {
    setToast(`دانلود فایل PDF «${form.title}» آغاز شد`)
  }

  return (
    <>
      <PageHeader
        eyebrow="مرجع فرم‌های حقوقی"
        title={<>فرم‌های آماده <span className="text-gold-gradient">قضایی و حقوقی</span></>}
        subtitle="دادخواست‌ها، اظهارنامه‌ها، قراردادهای تیپ و فرم‌های اجرایی؛ تهیه‌شده توسط دپارتمان حقوقی راهگشا مطابق آخرین قوانین و رویه قضایی. رایگان، با پیش‌نمایش آنلاین."
        breadcrumb={[{ label: 'فرم‌های حقوقی' }]}
      />

      <section className="bg-paper py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* نوار آمار و جستجو */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-bold text-pine-800">
              <span className="flex items-center gap-2 rounded-2xl border border-gold-500/35 bg-gold-500/10 px-4 py-2.5 text-gold-800"><FileText size={16} /> {LEGAL_FORMS.length} فرم آماده</span>
              <span className="hidden items-center gap-2 rounded-2xl border border-pine-900/10 bg-white px-4 py-2.5 text-pine-800 sm:flex"><CheckCircle2 size={16} className="text-emerald-600" /> به‌روزرسانی‌شده طبق قوانین ۱۴۰۵</span>
              <span className="hidden items-center gap-2 rounded-2xl border border-pine-900/10 bg-white px-4 py-2.5 text-pine-800 md:flex"><Download size={16} className="text-gold-600" /> بیش از ۱۰۰ هزار دانلود</span>
            </div>
            <label className="relative w-full max-w-sm">
              <Search size={17} className="absolute right-4 top-1/2 -translate-y-1/2 text-pine-800/45" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی فرم… مثال: سند، افراز، اظهارنامه"
                aria-label="جستجوی فرم‌ها"
                className="h-12 w-full rounded-2xl border border-pine-900/15 bg-white pe-11 ps-4 text-[13px] outline-none transition placeholder:text-pine-800/40 focus:border-gold-500/60"
              />
            </label>
          </div>

          {/* دسته‌بندی‌ها */}
          <div className="mt-5 flex flex-wrap gap-2">
            {FORM_CATEGORIES.map((c) => (
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

          {/* گرید فرم‌ها */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((form) => {
              const Icon = CATEGORY_ICONS[form.category]
              return (
                <article
                  key={form.id}
                  className="group flex flex-col rounded-3xl border border-pine-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-[0_28px_50px_-28px_rgba(11,41,38,0.4)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-pine-900 p-3 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-pine-950">
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <div className="text-left">
                      <span className="rounded-md bg-cream px-2 py-1 font-mono text-[9px] font-bold text-pine-800/70" dir="ltr">{form.id}</span>
                      <p className="mt-1.5 text-[9.5px] font-medium text-pine-800/55">به‌روزرسانی: {form.updated}</p>
                    </div>
                  </div>

                  <h2 className="mt-4 font-display text-[16.5px] font-bold leading-8 text-pine-900">{form.title}</h2>
                  <p className="mt-1.5 line-clamp-2 text-[11.5px] leading-7 text-pine-800/70">{form.description}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] font-medium text-pine-800/60">
                    <span>{form.pages.toLocaleString('fa-IR')} صفحه</span>
                    <span>·</span>
                    <span>{form.size}</span>
                    <span>·</span>
                    <span>{form.downloads} دانلود</span>
                    <span>·</span>
                    <span className="font-bold text-gold-700">PDF فارسی</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 border-t border-pine-900/10 pt-4">
                    <button
                      onClick={() => setPreview(form)}
                      className="flex items-center justify-center gap-2 rounded-xl border border-pine-900/15 py-2.5 text-[11px] font-bold text-pine-800 transition hover:border-gold-500/60 hover:text-gold-700"
                    >
                      <Eye size={15} /> پیش‌نمایش
                    </button>
                    <button
                      onClick={() => download(form)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-pine-900 py-2.5 text-[11px] font-extrabold text-gold-300 transition hover:bg-pine-800"
                    >
                      <Download size={15} /> دانلود PDF
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <p className="mt-14 text-center text-sm text-pine-800/60">فرمی با این مشخصات یافت نشد. عبارت دیگری جستجو کنید.</p>
          )}

          <p className="mt-10 rounded-2xl border border-pine-900/10 bg-white px-6 py-4 text-center text-[11px] leading-7 text-pine-800/65">
            فرم موردنظرتان را پیدا نکردید؟ دپارتمان راهگشا فرم‌های اختصاصی پرونده شما را تهیه می‌کند —{' '}
            <Link href="/contact" className="font-bold text-gold-700 underline underline-offset-4 hover:text-gold-800">با ما تماس بگیرید</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />

      {/* ── مودال پیش‌نمایش ── */}
      <AnimatePresence>
        {preview && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end justify-center bg-pine-950/75 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setPreview(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`پیش‌نمایش ${preview.title}`}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-paper p-0 shadow-deep sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* سربرگ سند */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gold-500/25 bg-pine-950 px-6 py-4">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-gold-400" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400">Rahgosha Legal Group</p>
                    <p className="text-[12px] font-extrabold text-cream">پیش‌نمایش فرم {preview.id}</p>
                  </div>
                </div>
                <button onClick={() => setPreview(null)} aria-label="بستن پیش‌نمایش" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 text-cream/80 transition hover:border-gold-400/50 hover:text-gold-300">
                  <X size={20} />
                </button>
              </div>

              {/* بدنه سند */}
              <div className="p-6 sm:p-8">
                <div className="rounded-2xl border border-pine-900/15 bg-white p-6 shadow-inner sm:p-8">
                  <div className="border-b-2 border-pine-900/80 pb-4 text-center">
                    <p className="font-display text-lg font-bold text-pine-950">جمهوری اسلامی ایران</p>
                    <p className="mt-0.5 text-[11px] font-bold text-pine-800/70">قوه قضائیه — نمونه فرم تهیه‌شده توسط گروه حقوقی راهگشا</p>
                  </div>
                  <h3 className="mt-6 text-center font-display text-xl font-bold leading-9 text-pine-950">{preview.title}</h3>
                  <p className="mt-4 text-[12px] leading-8 text-pine-900/85">ریاست محترم {preview.category === 'فرم‌های قضایی' ? 'شعبه محترم دادگاه عمومی حقوقی / کیفری' : 'مراجع ذی‌صلاح قضایی و ثبتی'}؛</p>
                  <p className="mt-2 text-[12px] leading-8 text-pine-900/85">با سلام و احترام؛ احتراماً به استحضار عالی می‌رساند: {preview.description}</p>
                  <div className="mt-5 space-y-3 text-[12px] leading-8 text-pine-900/85">
                    <p>خواهان/شاکی: <span className="text-pine-800/40">______________________</span></p>
                    <p>خوانده/مشتکی‌عنه: <span className="text-pine-800/40">______________________</span></p>
                    <p>خواسته/موضوع: <span className="text-pine-800/40">______________________</span></p>
                    <p>دلایل و منضمات: <span className="text-pine-800/40">______________________</span></p>
                  </div>
                  <p className="mt-6 border-t border-pine-900/15 pt-4 text-left text-[11px] leading-7 text-pine-800/60">امضا و اثر انگشت:<br /><span className="text-pine-800/35">______________________</span></p>
                </div>

                <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
                  <p className="text-[10px] leading-6 text-pine-800/55">این پیش‌نمایش صرفاً جهت آشنایی است؛ متن نهایی با توجه به شرایط پرونده شما تنظیم می‌شود.</p>
                  <button
                    onClick={() => { download(preview); setPreview(null) }}
                    className="flex shrink-0 items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 text-[12px] font-black text-pine-950 transition hover:bg-gold-400"
                  >
                    <Download size={16} /> دانلود نسخه PDF
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── توست دانلود ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24 }}
            className="fixed bottom-6 left-1/2 z-[80] flex w-[min(92vw,460px)] -translate-x-1/2 items-center gap-3 rounded-2xl border border-emerald-400/40 bg-pine-950/95 px-5 py-4 text-cream shadow-deep backdrop-blur-xl"
            role="status"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300"><CheckCircle2 size={22} /></span>
            <span className="text-[12px] font-bold leading-6">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
