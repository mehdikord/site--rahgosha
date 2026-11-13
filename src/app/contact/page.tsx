"use client";

import { useState } from 'react'
import {
  Phone, Smartphone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2, MessageCircle, Headphones,
} from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { CONTACT, SERVICES } from '@/data'

const TOPICS = ['انتخاب موضوع…', ...SERVICES.map((s) => s.title), 'مشاوره عمومی / سایر']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', topic: TOPICS[0], message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const digits = form.phone.replace(/\D/g, '')
    if (form.name.trim().length < 3) { setError('نام و نام خانوادگی را کامل وارد کنید.'); return }
    if (!/^(09|\+989)\d{9}$/.test(digits.startsWith('98') ? `+${digits}` : form.phone.trim()) && digits.length < 10) {
      setError('شماره موبایل معتبر وارد کنید (مثال: ۰۹۱۲۷۶۵۴۳۲۱).')
      return
    }
    if (form.topic === TOPICS[0]) { setError('نوع خدمت موردنظر را انتخاب کنید.'); return }
    setStatus('sending')
    window.setTimeout(() => setStatus('done'), 1400)
  }

  const inputCls =
    'h-12 w-full rounded-xl border border-pine-900/15 bg-paper px-4 text-[13px] outline-none transition placeholder:text-pine-800/40 focus:border-gold-500/70 focus:bg-white'

  return (
    <>
      <PageHeader
        eyebrow="تماس با راهگشا"
        title={<>یک تماس؛ <span className="text-gold-gradient">یک مسیر روشن برای حق شما</span></>}
        subtitle="فرم زیر را تکمیل کنید تا کارشناس ارشد راهگشا در ساعات کاری ظرف ۱۵ دقیقه با شما تماس بگیرد؛ یا از راه‌های مستقیم زیر اقدام کنید."
        breadcrumb={[{ label: 'تماس با ما' }]}
      />

      <section className="bg-paper py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-12 lg:px-6">
          {/* ── راه‌های ارتباطی ── */}
          <div className="space-y-4 lg:col-span-4">
            <a href={`tel:${CONTACT.phone}`} dir="ltr" className="group flex items-center gap-4 rounded-2xl border border-pine-900/10 bg-white p-5 transition hover:border-gold-500/50">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-pine-900 p-3.5 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-pine-950"><Phone size={24} /></span>
              <span className="text-right">
                <span className="block text-[10px] font-bold text-pine-800/55">تلفن دفتر مرکزی</span>
                <span className="mt-0.5 block text-lg font-black tracking-wider text-pine-900">{CONTACT.phoneDisplay}</span>
              </span>
            </a>

            <a href={`tel:${CONTACT.mobile}`} dir="ltr" className="group flex items-center gap-4 rounded-2xl border border-pine-900/10 bg-white p-5 transition hover:border-gold-500/50">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-pine-900 p-3.5 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-pine-950"><Smartphone size={24} /></span>
              <span className="text-right">
                <span className="block text-[10px] font-bold text-pine-800/55">خط ویژه و واتساپ — ۲۴/۷</span>
                <span className="mt-0.5 block text-lg font-black tracking-wider text-pine-900">{CONTACT.mobileDisplay}</span>
              </span>
            </a>

            <a href={`mailto:${CONTACT.email}`} dir="ltr" className="group flex items-center gap-4 rounded-2xl border border-pine-900/10 bg-white p-5 transition hover:border-gold-500/50">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-pine-900 p-3.5 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-pine-950"><Mail size={24} /></span>
              <span className="text-right">
                <span className="block text-[10px] font-bold text-pine-800/55">ایمیل رسمی</span>
                <span className="mt-0.5 block text-[13px] font-bold text-pine-900">{CONTACT.email}</span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-pine-900/10 bg-white p-5">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-pine-900 p-3.5 text-gold-400"><MapPin size={24} /></span>
              <span>
                <span className="block text-[10px] font-bold text-pine-800/55">نشانی دفتر</span>
                <span className="mt-1 block text-[12.5px] font-bold leading-7 text-pine-900">{CONTACT.address}</span>
              </span>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-gold-500/30 bg-gold-500/[0.08] p-5">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gold-500 p-3.5 text-pine-950"><Clock size={24} /></span>
              <span>
                <span className="block text-[10px] font-bold text-gold-800">ساعات پاسخگویی</span>
                <span className="mt-1 block text-[12.5px] font-bold leading-7 text-pine-900">{CONTACT.hours}<br />پنجشنبه‌ها تا ۱۳:۰۰ · خط ویژه ۲۴ساعته برای پرونده‌های مهلت‌دار</span>
              </span>
            </div>
          </div>

          {/* ── فرم درخواست تماس ── */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-[2rem] border border-pine-900/10 bg-white p-6 shadow-sm sm:p-8">
              {status === 'done' ? (
                <div className="flex h-full min-h-[26rem] flex-col items-center justify-center gap-5 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle2 size={44} className="text-emerald-600" strokeWidth={1.8} />
                  </span>
                  <h2 className="font-display text-2xl font-bold text-pine-900">درخواست شما ثبت شد</h2>
                  <p className="max-w-md text-[13px] leading-8 text-pine-800/75">
                    {form.name.trim()} عزیز، {TOPICS.includes(form.topic) && form.topic !== TOPICS[0] ? `درخواست «${form.topic}» شما` : 'درخواست شما'} با موفقیت ثبت شد.
                    کارشناس ارشد راهگشا در ساعات کاری <strong>ظرف ۱۵ دقیقه</strong> با شماره <span dir="ltr" className="font-bold text-pine-900">{form.phone}</span> تماس می‌گیرد.
                  </p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', topic: TOPICS[0], message: '' }) }} className="mt-2 rounded-xl border border-pine-900/15 px-6 py-3 text-[12px] font-bold text-pine-800 transition hover:border-gold-500/60 hover:text-gold-700">
                    ثبت درخواست دیگر
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="flex h-full flex-col gap-5">
                  <div className="flex items-center gap-3 border-b border-pine-900/10 pb-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-700"><Headphones size={24} /></span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-pine-900">فرم درخواست تماس و مشاوره</h2>
                      <p className="text-[11px] font-medium text-pine-800/55">رایگان · محرمانه · بدون تعهد</p>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-[11px] font-bold text-pine-800">نام و نام خانوادگی *</label>
                      <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="مثال: علی رضایی" className={inputCls} required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-[11px] font-bold text-pine-800">شماره موبایل *</label>
                      <input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰" dir="rtl" inputMode="numeric" className={inputCls} required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="mb-1.5 block text-[11px] font-bold text-pine-800">نوع خدمت موردنظر *</label>
                    <select id="topic" value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} className={inputCls}>
                      {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="flex-1">
                    <label htmlFor="message" className="mb-1.5 block text-[11px] font-bold text-pine-800">توضیح کوتاه درباره موضوع پرونده</label>
                    <textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="مثال: یک واحد آپارتمان پیش‌خرید کرده‌ام و سازنده ۶ ماه است تحویل نمی‌دهد…" className="w-full resize-none rounded-xl border border-pine-900/15 bg-paper px-4 py-3 text-[13px] leading-8 outline-none transition placeholder:text-pine-800/40 focus:border-gold-500/70 focus:bg-white" />
                  </div>

                  {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[12px] font-bold text-red-600">{error}</p>}

                  <button type="submit" disabled={status === 'sending'} className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-gold-500 text-[15px] font-black text-pine-950 shadow-gold transition hover:bg-gold-400 disabled:opacity-70">
                    {status === 'sending' ? (
                      <><Loader2 size={20} className="animate-spin" /> در حال ثبت درخواست…</>
                    ) : (
                      <><Send size={19} /> ثبت درخواست تماس رایگان</>
                    )}
                  </button>
                  <p className="flex items-center justify-center gap-2 text-center text-[9.5px] font-medium text-pine-800/50"><MessageCircle size={12} /> اطلاعات شما نزد راهگشا محرمانه است و هرگز در اختیار شخص ثالث قرار نمی‌گیرد.</p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── نقشه ── */}
        <div className="mx-auto mt-8 max-w-7xl px-4 lg:px-6">
          <div className="overflow-hidden rounded-[2rem] border border-pine-900/12 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-pine-900/10 px-6 py-4">
              <p className="flex items-center gap-2 text-[12px] font-extrabold text-pine-900"><MapPin size={16} className="text-gold-600" /> موقعیت دفتر راهگشا روی نقشه — سعادت‌آباد، میدان سرو</p>
              <a
                href="https://www.openstreetmap.org/?mlat=35.7920&mlon=51.3580#map=16/35.7920/51.3580"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-bold text-gold-700 underline underline-offset-4 transition hover:text-gold-800"
              >
                باز کردن در نقشه بزرگ
              </a>
            </div>
            <iframe
              title="نقشه دفتر گروه حقوقی راهگشا"
              src={CONTACT.mapEmbed}
              className="h-72 w-full grayscale-[35%] sm:h-96"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
