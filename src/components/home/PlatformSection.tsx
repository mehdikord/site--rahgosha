"use client";

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  MessageCircle, FolderLock, Video, Calculator, FileText, ArrowLeft, CheckCircle2,
  ChevronLeft, Inbox, UploadCloud, BadgeCheck, Globe, Loader2,
} from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '../SectionHeading'

const FEATURES = [
  { icon: MessageCircle, title: 'ارتباط آنلاین مستقیم با وکیل پرونده', desc: 'چت داخلی امن؛ پاسخ وکیل ظرف کمتر از ۳۰ دقیقه در ساعات کاری و گزارش روزانه پیشرفت پرونده.' },
  { icon: FolderLock, title: 'ارسال و مشاهده مدارک و پرونده در پنل امن', desc: 'بارگذاری هوشمند مدارک، آرشیو رمزگذاری‌شده و دسترسی لحظه‌ای به لوایح و مستندات پرونده شما.' },
  { icon: Video, title: 'مشاوره تخصصی آنلاین؛ چت و تصویری', desc: 'جلسات ۴۵ دقیقه‌ای با وکیل متخصص حوزه شما — بدون مراجعه حضوری، حتی از خارج از کشور.' },
  { icon: Calculator, title: 'ابزارهای محاسبه هزینه‌های مالی حقوقی', desc: 'محاسبه آنلاین حق‌الوکاله و هزینه دادرسی، مالیات نقل‌وانتقال و جریمه تأخیر قراردادی — همین پایین همین صفحه.' },
  { icon: FileText, title: 'مرجع کامل فرم‌های حقوقی و قضایی', desc: 'بیش از ۱۲۰ فرم آماده دادخواست، اظهارنامه و قرارداد تیپ؛ با پیش‌نمایش و دانلود رایگان.' },
]

const CHIPS = [1_000_000_000, 5_000_000_000, 20_000_000_000, 100_000_000_000]
const faMoney = (n: number) => `${Math.round(n).toLocaleString('fa-IR')} تومان`

type Tab = 'dadrasi' | 'transfer' | 'kharab'

export default function PlatformSection() {
  const [tab, setTab] = useState<Tab>('dadrasi')
  const [khasteh, setKhasteh] = useState(5_000_000_000)
  const [arzesh, setArzesh] = useState(8_000_000_000)
  const [motahed, setMotahed] = useState(3_000_000_000)
  const [rate, setRate] = useState(0.05)
  const [days, setDays] = useState(45)

  const dadrasi = useMemo(() => {
    const rateD = khasteh <= 10e9 ? 0.035 : khasteh <= 50e9 ? 0.045 : 0.05
    const feeD = khasteh * rateD
    const rateV = khasteh <= 5e9 ? 0.06 : khasteh <= 20e9 ? 0.04 : 0.025
    const feeV = Math.max(khasteh * rateV, 30_000_000)
    const stamps = 2_000_000
    return { rateD, feeD, rateV, feeV, stamps, total: feeD + feeV + stamps }
  }, [khasteh])

  const transfer = useMemo(() => {
    const tax = arzesh * 0.05
    const registry = arzesh * 0.005
    const tahrir = 30_000_000
    return { tax, registry, tahrir, total: tax + registry + tahrir }
  }, [arzesh])

  const kharab = useMemo(() => motahed * (rate / 100) * days, [motahed, rate, days])

  const tabs: { id: Tab; label: string }[] = [
    { id: 'dadrasi', label: 'هزینه دادرسی و حق‌الوکاله' },
    { id: 'transfer', label: 'مالیات نقل‌وانتقال و حق‌الثبت' },
    { id: 'kharab', label: 'جریمه تأخیر قراردادی' },
  ]

  return (
    <section className="relative overflow-hidden bg-pine-900 py-20 text-cream lg:py-24">
      <div aria-hidden className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent 0 14px, #e6cd8b 14px 15px)' }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="پلتفرم راهگشا"
          title={<>دفتر وکالت شما، <span className="text-gold-gradient">همیشه در جیب شما</span></>}
          subtitle="یک پلتفرم یکپارچه برای ارتباط آنلاین با وکلا، مدیریت مدارک و پرونده‌ها، مشاوره تخصصی و ابزارهای محاسبه — هر آنچه در دفاتر سنتی ساعت‌ها طول می‌کشد، اینجا چند ثانیه است."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* ستون ویژگی‌ها */}
          <div className="space-y-3 lg:col-span-5">
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-gold-500/35 hover:bg-white/[0.06]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-pine-950">
                    <Icon size={22} strokeWidth={1.9} />
                  </span>
                  <span>
                    <h3 className="text-[13.5px] font-extrabold leading-6 text-cream">{f.title}</h3>
                    <p className="mt-1 text-[11px] leading-6 text-cream/60">{f.desc}</p>
                  </span>
                </motion.div>
              )
            })}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-5 py-3 text-[12px] font-black text-pine-950 transition hover:bg-gold-400">
                درخواست دسترسی به پنل موکلین
                <ArrowLeft size={16} />
              </Link>
              <Link href="/forms" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-[12px] font-bold text-cream/85 transition hover:border-gold-400/50 hover:text-gold-200">
                فرم‌های حقوقی رایگان
                <ChevronLeft size={16} />
              </Link>
            </div>
          </div>

          {/* ستون ماکت داشبورد */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-white/12 bg-[#0d2622] shadow-[0_50px_90px_-40px_rgba(0,0,0,0.8)]"
            >
              {/* نوار مرورگر */}
              <div className="flex items-center gap-3 border-b border-white/8 bg-[#081f1c] px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex h-7 flex-1 items-center justify-center gap-2 rounded-lg bg-white/5 text-[10px] font-medium text-cream/55" dir="ltr">
                  <Globe size={11} className="text-emerald-400" /> panel.rahgosha.ir
                </div>
              </div>

              <div className="grid sm:grid-cols-12">
                {/* سایدبار */}
                <div className="hidden border-l border-white/8 p-4 sm:col-span-4 sm:block">
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-cream/40">پرونده‌های من</p>
                  <div className="mt-3 space-y-2">
                    {[
                      { t: 'الزام به تنظیم سند رسمی', s: 'در جریان — شعبه ۳ حقوقی', active: true },
                      { t: 'افراز ملک مشاع پدری', s: 'رأی بدوی صادر شد', active: false },
                      { t: 'مشاوره قرارداد مشارکت', s: 'تکمیل‌شده', active: false },
                    ].map((c) => (
                      <div key={c.t} className={`rounded-xl border p-3 ${c.active ? 'border-gold-500/40 bg-gold-500/10' : 'border-white/8 bg-white/[0.03]'}`}>
                        <p className="text-[10.5px] font-bold leading-5 text-cream/90">{c.t}</p>
                        <p className={`mt-1 text-[9px] ${c.active ? 'text-gold-300' : 'text-cream/45'}`}>{c.s}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                    <div className="rounded-xl bg-white/[0.04] p-2.5"><p className="font-display text-lg font-bold text-gold-300">۱۲</p><p className="text-[8.5px] text-cream/50">مدرک بارگذاری‌شده</p></div>
                    <div className="rounded-xl bg-white/[0.04] p-2.5"><p className="font-display text-lg font-bold text-gold-300">۳</p><p className="text-[8.5px] text-cream/50">پیام خوانده‌نشده</p></div>
                  </div>
                </div>

                {/* محتوای اصلی */}
                <div className="p-4 sm:col-span-8 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gold-400">پرونده ۲۴۱۷</p>
                      <h3 className="mt-1 font-display text-base font-bold text-cream">الزام به تنظیم سند رسمی — پلاک ثبتی ۱۲۳۴/۵۶</h3>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1.5 text-[9px] font-black text-emerald-300">
                      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" /> فعال
                    </span>
                  </div>

                  {/* مراحل رسیدگی */}
                  <ol className="mt-4 space-y-0">
                    {[
                      { t: 'ثبت دادخواست و تأمین خواسته (توقیف پلاک)', done: true },
                      { t: 'جلسه اول دادرسی و دفاع از اعتبار مبایعه‌نامه', done: true },
                      { t: 'اخذ نظر کارشناس رسمی درباره ثمن معامله', done: true },
                      { t: 'صدور رأی بدوی و تجدیدنظرخواهی احتمالی', done: false, active: true },
                    ].map((step, i) => (
                      <li key={i} className="relative flex gap-3 pb-4 last:pb-0">
                        {i < 3 && <span aria-hidden className="absolute right-[7px] top-4 h-full w-px bg-white/12" />}
                        <span className={`relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${step.done ? 'bg-emerald-400 text-pine-950' : 'border-2 border-gold-400 bg-transparent'}`}>
                          {step.done && <CheckCircle2 size={12} strokeWidth={3} />}
                        </span>
                        <span className={`text-[10.5px] leading-6 ${step.done ? 'text-cream/75' : 'font-bold text-gold-200'}`}>{step.t}</span>
                      </li>
                    ))}
                  </ol>

                  {/* نوار پیشرفت */}
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-cream/55">
                      <span>پیشرفت پرونده</span>
                      <span className="text-gold-300">٪۷۵</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        initial={{ width: '8%' }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-l from-gold-300 to-gold-600"
                      />
                    </div>
                  </div>

                  {/* اکشن‌ها */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="flex items-center gap-1.5 rounded-lg bg-gold-500 px-3 py-2 text-[10px] font-black text-pine-950 transition hover:bg-gold-400"><UploadCloud size={13} /> بارگذاری مدرک</button>
                    <button className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-[10px] font-bold text-cream/80 transition hover:border-gold-400/50 hover:text-gold-200"><MessageCircle size={13} /> پیام به وکیل شریفی</button>
                    <button className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-[10px] font-bold text-cream/80 transition hover:border-gold-400/50 hover:text-gold-200"><BadgeCheck size={13} /> دریافت گواهی پیشرفت</button>
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="mt-3 flex items-center justify-center gap-2 text-[10px] font-medium text-cream/40">
              <Inbox size={12} /> نمایش نمونه — اطلاعات پرونده واقعی در پنل شخصی شما رمزنگاری و محرمانه است
            </p>
          </div>
        </div>

        {/* ── ابزارهای محاسبه آنلاین ── */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-gold-500/25 bg-[#0c2621] shadow-deep">
          <div className="flex flex-col gap-3 border-b border-white/8 bg-black/20 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-pine-950 shadow-gold">
                <Calculator size={24} strokeWidth={2.2} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-cream">ابزارهای محاسبه آنلاین راهگشا</h3>
                <p className="text-[11px] text-cream/55">هزینه‌های مالی حقوقی پرونده‌تان را همین‌جا برآورد کنید</p>
              </div>
            </div>
            <span className="w-max rounded-full border border-gold-500/35 bg-gold-500/10 px-3 py-1.5 text-[10px] font-bold text-gold-300">رایگان · بدون ثبت‌نام</span>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-white/8 px-5 pt-4">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-t-xl border-b-2 px-4 py-2.5 text-[11px] font-extrabold transition-all duration-300 sm:text-[12px] ${
                  tab === t.id ? 'border-gold-400 bg-gold-500/10 text-gold-300' : 'border-transparent text-cream/55 hover:text-cream'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 p-5 md:grid-cols-2 md:p-6">
            {/* ورودی‌ها */}
            <div className="space-y-5">
              {tab === 'dadrasi' && (
                <>
                  <label className="block text-[11px] font-bold text-cream/70" htmlFor="khasteh">مبلغ خواسته (تومان)</label>
                  <input id="khasteh" type="number" min={0} value={khasteh} onChange={(e) => setKhasteh(Math.max(0, Number(e.target.value) || 0))} className="h-12 w-full rounded-xl border border-white/12 bg-white/5 px-4 text-left text-[15px] font-bold text-gold-200 outline-none transition focus:border-gold-500/60" dir="ltr" />
                  <div className="flex flex-wrap gap-2">
                    {CHIPS.map((c) => (
                      <button key={c} onClick={() => setKhasteh(c)} className={`rounded-lg border px-3 py-1.5 text-[10.5px] font-bold transition ${khasteh === c ? 'border-gold-500 bg-gold-500/15 text-gold-300' : 'border-white/12 text-cream/60 hover:border-gold-500/40 hover:text-cream'}`}>
                        {(c / 1e9).toLocaleString('fa-IR')} میلیارد
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] leading-6 text-cream/45">نرخ هزینه دادرسی بدوی مطابق تعرفه: تا ۱۰ میلیارد ۳٫۵٪ · تا ۵۰ میلیارد ۴٫۵٪ · مازاد ۵٪</p>
                </>
              )}
              {tab === 'transfer' && (
                <>
                  <label className="block text-[11px] font-bold text-cream/70" htmlFor="arzesh">ارزش معاملاتی ملک (تومان)</label>
                  <input id="arzesh" type="number" min={0} value={arzesh} onChange={(e) => setArzesh(Math.max(0, Number(e.target.value) || 0))} className="h-12 w-full rounded-xl border border-white/12 bg-white/5 px-4 text-left text-[15px] font-bold text-gold-200 outline-none transition focus:border-gold-500/60" dir="ltr" />
                  <div className="flex flex-wrap gap-2">
                    {CHIPS.map((c) => (
                      <button key={c} onClick={() => setArzesh(c)} className={`rounded-lg border px-3 py-1.5 text-[10.5px] font-bold transition ${arzesh === c ? 'border-gold-500 bg-gold-500/15 text-gold-300' : 'border-white/12 text-cream/60 hover:border-gold-500/40 hover:text-cream'}`}>
                        {(c / 1e9).toLocaleString('fa-IR')} میلیارد
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] leading-6 text-cream/45">ارزش معاملاتی را کمیسیون تقویم املاک تعیین می‌کند و معمولاً کمتر از قیمت بازار است (ماده ۵۹ ق.م.م).</p>
                </>
              )}
              {tab === 'kharab' && (
                <>
                  <label className="block text-[11px] font-bold text-cream/70" htmlFor="motahed">مبلغ تعهد (تومان)</label>
                  <input id="motahed" type="number" min={0} value={motahed} onChange={(e) => setMotahed(Math.max(0, Number(e.target.value) || 0))} className="h-12 w-full rounded-xl border border-white/12 bg-white/5 px-4 text-left text-[15px] font-bold text-gold-200 outline-none transition focus:border-gold-500/60" dir="ltr" />
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1.5 block text-[11px] font-bold text-cream/70" htmlFor="rate">نرخ جریمه روزانه (٪)</label>
                      <input id="rate" type="number" min={0} step={0.01} value={rate} onChange={(e) => setRate(Math.max(0, Number(e.target.value) || 0))} className="h-11 w-full rounded-xl border border-white/12 bg-white/5 px-3 text-left text-[13px] font-bold text-gold-200 outline-none focus:border-gold-500/60" dir="ltr" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[11px] font-bold text-cream/70">روزهای تأخیر: <span className="text-gold-300">{days.toLocaleString('fa-IR')} روز</span></label>
                      <input type="range" min={0} max={365} value={days} onChange={(e) => setDays(Number(e.target.value))} className="gold-range mt-2.5 w-full" style={{ '--fill': `${(days / 365) * 100}%` } as React.CSSProperties} aria-label="روزهای تأخیر" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* نتایج */}
            <div className="flex flex-col justify-center rounded-2xl border border-gold-500/20 bg-black/25 p-5">
              {tab === 'dadrasi' && (
                <dl className="space-y-2.5 text-[12px]">
                  <Row label={`هزینه دادرسی بدوی (${(dadrasi.rateD * 100).toLocaleString('fa-IR')}٪)`} value={faMoney(dadrasi.feeD)} />
                  <Row label={`حق‌الوکاله تقریبی قراردادی (${(dadrasi.rateV * 100).toLocaleString('fa-IR')}٪)`} value={faMoney(dadrasi.feeV)} />
                  <Row label="تمبر و اوراق قضایی (مقطوع)" value={faMoney(dadrasi.stamps)} />
                  <div className="my-2 border-t border-gold-500/25" />
                  <Row big label="برآورد کل تقریبی" value={faMoney(dadrasi.total)} />
                </dl>
              )}
              {tab === 'transfer' && (
                <dl className="space-y-2.5 text-[12px]">
                  <Row label="مالیات نقل‌وانتقال قطعی (۵٪)" value={faMoney(transfer.tax)} />
                  <Row label="حق‌الثبت انتقال (۰٫۵٪)" value={faMoney(transfer.registry)} />
                  <Row label="حق‌التحریر دفترخانه (تقریبی)" value={faMoney(transfer.tahrir)} />
                  <div className="my-2 border-t border-gold-500/25" />
                  <Row big label="برآورد کل تقریبی انتقال" value={faMoney(transfer.total)} />
                </dl>
              )}
              {tab === 'kharab' && (
                <dl className="space-y-2.5 text-[12px]">
                  <Row label="مبلغ تعهد" value={faMoney(motahed)} />
                  <Row label="نرخ جریمه روزانه" value={`${rate.toLocaleString('fa-IR')}٪`} />
                  <Row label="مدت تأخیر" value={`${days.toLocaleString('fa-IR')} روز`} />
                  <div className="my-2 border-t border-gold-500/25" />
                  <Row big label="جریمه تأخیر قابل مطالبه" value={faMoney(kharab)} />
                </dl>
              )}
              <p className="mt-4 flex items-start gap-2 text-[9px] leading-5 text-cream/40">
                <Loader2 size={11} className="mt-1 shrink-0" /> محاسبه تقریبی و غیرالزام‌آور است؛ تعرفه قطعی پس از بررسی مدارک و پیچیدگی پرونده توسط وکیل اعلام می‌شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value, big = false }: { label: string; value: string; big?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className={big ? 'text-[12px] font-extrabold text-gold-200' : 'text-cream/65'}>{label}</dt>
      <dd className={`whitespace-nowrap font-sans font-black tabular-nums ${big ? 'text-lg text-gold-300' : 'text-[12.5px] text-cream'}`} dir="rtl">
        {value}
      </dd>
    </div>
  )
}
