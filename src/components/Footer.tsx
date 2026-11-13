"use client";

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Linkedin, Send, MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck, Scale } from 'lucide-react'
import { CONTACT, SERVICES } from '../data'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const submitNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) return
    setSubscribed(true)
  }

  return (
    <footer className="relative overflow-hidden bg-pine-950 text-cream">
      {/* نگین تزئینی */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]" />
      <div className="gold-divider w-full" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* ── برند ── */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-3">
              <Scale size={34} className="text-gold-400" strokeWidth={1.6} />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-2xl font-bold">راهگشا</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400">Rahgosha Legal Group</span>
              </span>
            </Link>
            <p className="mt-4 text-[13px] leading-7 text-cream/70">
              گروه حقوقی راهگشا از سال ۱۳۸۱ با تمرکز تخصصی بر املاک، قراردادهای ساختمانی و انبوه‌سازی مسکن،
              راهِ حق را برای اشخاص و شرکت‌های ایرانی هموار می‌کند.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold-400" />
              <span className="text-[11px] font-bold text-gold-200/90">پروانه وکالت پایه یک · کانون وکلای دادگستری مرکز</span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {[
                { href: 'https://www.instagram.com/rahgosha.legal', icon: <Instagram size={17} />, label: 'اینستاگرام' },
                { href: 'https://www.linkedin.com/company/rahgosha', icon: <Linkedin size={17} />, label: 'لینکدین' },
                { href: 'https://t.me/rahgosha_legal', icon: <Send size={17} />, label: 'تلگرام' },
                { href: `https://wa.me/${CONTACT.whatsapp}`, icon: <MessageCircle size={17} />, label: 'واتساپ' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cream/80 transition hover:border-gold-500/50 hover:bg-gold-500/15 hover:text-gold-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── دسترسی سریع ── */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.22em] text-gold-400">دسترسی سریع</h4>
            <ul className="mt-4 space-y-2.5 text-[13px] text-cream/75">
              {[
                ['/', 'خانه'],
                ['/services', 'خدمات و وکالت'],
                ['/articles', 'آموزش و مقالات'],
                ['/forms', 'فرم‌های حقوقی'],
                ['/about', 'درباره راهگشا'],
                ['/contact', 'تماس با ما'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link href={to} className="transition hover:text-gold-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── خدمات ── */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.22em] text-gold-400">خدمات تخصصی</h4>
            <ul className="mt-4 space-y-2.5 text-[13px] text-cream/75">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition hover:text-gold-300">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── تماس و خبرنامه ── */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.22em] text-gold-400">ارتباط با راهگشا</h4>
            <ul className="mt-4 space-y-2.5 text-[12px] leading-6 text-cream/75">
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-1 shrink-0 text-gold-500" /> {CONTACT.address}</li>
              <li className="flex items-center gap-2" dir="ltr"><a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 font-bold text-cream transition hover:text-gold-300"><Phone size={15} className="text-gold-500" /> {CONTACT.phoneDisplay}</a></li>
              <li className="flex items-center gap-2" dir="ltr"><a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 transition hover:text-gold-300"><Mail size={15} className="text-gold-500" /> {CONTACT.email}</a></li>
            </ul>

            <form onSubmit={submitNewsletter} className="mt-5">
              <label htmlFor="newsletter" className="text-[11px] font-bold text-cream/60">خبرنامه حقوقی راهگشا — هر هفته یک نکته مهم</label>
              {subscribed ? (
                <p className="mt-2 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-[12px] font-bold text-emerald-300">
                  <CheckCircle2 size={16} /> عضویت شما در خبرنامه ثبت شد، ممنونیم!
                </p>
              ) : (
                <div className="mt-2 flex overflow-hidden rounded-xl border border-white/10 bg-white/5 focus-within:border-gold-500/50">
                  <input
                    id="newsletter"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    dir="ltr"
                    className="h-11 w-full bg-transparent px-4 text-left text-[13px] outline-none placeholder:text-cream/30"
                  />
                  <button type="submit" aria-label="عضویت در خبرنامه" className="flex w-12 shrink-0 items-center justify-center bg-gold-500 text-pine-950 transition hover:bg-gold-400">
                    <ArrowLeft size={18} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* ── نوار پایینی ── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-cream/50 md:flex-row">
          <p>© ۱۴۰۵ گروه حقوقی راهگشا — تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="transition hover:text-gold-300">درباره ما</Link>
            <Link href="/contact" className="transition hover:text-gold-300">حریم خصوصی و محرمانگی</Link>
            <Link href="/forms" className="transition hover:text-gold-300">فرم‌های حقوقی</Link>
          </div>
          <p dir="ltr">rahgosha.ir · Tehran, IR</p>
        </div>
      </div>
    </footer>
  )
}
