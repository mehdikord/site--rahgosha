"use client";

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Play, ShieldCheck, FileCheck2, Sparkles, Star } from 'lucide-react'
import { CONTACT, STATS } from '../../data'

gsap.registerPlugin(ScrollTrigger)

const MARQUEE = [
  'الزام به تنظیم سند رسمی', 'قرارداد مشارکت در ساخت', 'انبوه‌سازی مسکن', 'افراز ملک مشاع',
  'دعاوی پیمانکاری', 'داوری تخصصی', 'پیش‌فروش ساختمان', 'تنظیم و بازبینی قرارداد', 'مالیات نقل‌وانتقال',
]

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const cardARef = useRef<HTMLDivElement>(null)
  const cardBRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── انیمیشن ورود ──
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-badge', { y: 26, opacity: 0, duration: 0.7 })
        .from('.hero-line-inner', { yPercent: 115, duration: 1.0, stagger: 0.14, ease: 'power4.out' }, '-=0.35')
        .from('.hero-sub', { y: 26, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-cta-el', { y: 22, opacity: 0, duration: 0.6, stagger: 0.12 }, '-=0.55')
        .from('.hero-trust', { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
        .from('.hero-visual-el', { scale: 1.12, opacity: 0, duration: 1.5, ease: 'power2.out' }, 0.15)
        .from('.hero-float-card', { x: -48, opacity: 0, duration: 0.9, stagger: 0.18 }, '-=1.0')
        .from('.hero-stat', { y: 24, opacity: 0, duration: 0.6, stagger: 0.09 }, '-=0.9')

      // ── واکنش به اسکرول: محو و حرکت محتوا ──
      gsap.to('.hero-inner', {
        y: -110, opacity: 0.15, ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: '88% top', scrub: true },
      })
      gsap.to('.hero-visual-el', {
        y: 90, scale: 1.06, ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, rootRef)

    // ── واکنش به حرکت ماوس ──
    const quick = [
      { el: visualRef.current, fx: 18, fy: 14 },
      { el: glowRef.current, fx: -34, fy: -26 },
      { el: cardARef.current, fx: 30, fy: 22 },
      { el: cardBRef.current, fx: 44, fy: 34 },
      { el: ringRef.current, fx: 54, fy: 40 },
    ].map(({ el, fx, fy }) => ({
      x: gsap.quickTo(el, 'x', { duration: 1.1, ease: 'power3' }),
      y: gsap.quickTo(el, 'y', { duration: 1.1, ease: 'power3' }),
      fx, fy,
    }))

    const onMouseMove = (e: MouseEvent) => {
      const rect = rootRef.current?.getBoundingClientRect()
      if (!rect) return
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      quick.forEach(({ x, y, fx, fy }) => {
        x(nx * fx)
        y(ny * fy)
      })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={rootRef} className="relative min-h-[112vh] overflow-hidden bg-pine-950">
      {/* ── پس‌زمینه ── */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-justice.jpg"
          alt="تالار عدالت با ترازوی طلایی"
          className="h-full w-full object-cover object-[62%_center] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-pine-950 via-pine-950/72 to-pine-950/5" />
        <div className="hero-vignette absolute inset-0" />
        <div ref={glowRef} aria-hidden className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold-500/25 blur-[130px]" />
        {/* واژه تزئینی عظیم */}
        <span aria-hidden className="outline-text pointer-events-none absolute bottom-24 left-0 hidden select-none font-display text-[11rem] font-bold leading-none opacity-70 lg:block">
          RAHGOSHA
        </span>
      </div>

      {/* ── محتوا ── */}
      <div className="hero-inner relative mx-auto flex min-h-[calc(112vh_-_72px)] max-w-7xl flex-col justify-center px-4 pb-40 pt-28 sm:pt-32 lg:grid lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-6 lg:pb-36">
        {/* ستون متن */}
        <div className="z-10 flex max-w-2xl flex-col items-start gap-5 lg:col-span-7">
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-gold-500/35 bg-gold-500/10 py-1.5 pe-4 ps-2 text-[11px] font-bold text-gold-300 backdrop-blur-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-pine-950">
              <Sparkles size={13} strokeWidth={2.5} />
            </span>
            وکیل پایه یک دادگستری · نخستین مشاوره رایگان است
          </span>

          <h1 className="font-display font-bold leading-[1.18]">
            <span className="block overflow-hidden pb-2">
              <span className="hero-line-inner block text-[clamp(3rem,9vw,6.2rem)] text-cream">راهِ حق،</span>
            </span>
            <span className="block overflow-hidden pb-3">
              <span className="hero-line-inner text-gold-gradient block text-[clamp(3rem,9vw,6.2rem)]">با راهگشا</span>
            </span>
          </h1>

          <p className="hero-sub max-w-xl text-[15px] leading-8 text-cream/85 sm:text-lg sm:leading-9">
            گروه حقوقی راهگشا؛ وکالت، مشاوره حقوقی، تنظیم قرارداد و رسیدگی تخصصی به پرونده‌ها —
            با تمرکز ویژه بر <span className="font-bold text-gold-300">املاک، قراردادهای ساختمانی و انبوه‌سازی مسکن</span>.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="hero-cta-el group inline-flex items-center gap-2.5 rounded-2xl bg-gold-500 px-6 py-4 text-sm font-black text-pine-950 shadow-gold transition hover:bg-gold-400 sm:px-8 sm:text-base"
            >
              درخواست مشاوره رایگان
              <ArrowLeft size={19} strokeWidth={2.6} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
            </Link>
            <a
              href="#services"
              className="hero-cta-el group inline-flex items-center gap-2.5 rounded-2xl border border-cream/25 bg-white/5 px-6 py-4 text-sm font-bold text-cream backdrop-blur-sm transition hover:border-gold-400/60 hover:text-gold-200"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500/90 text-pine-950 transition group-hover:scale-110">
                <Play size={11} fill="currentColor" className="-translate-x-[1px]" />
              </span>
              خدمات ما را ببینید
            </a>
          </div>

          {/* اعتمادسازی */}
          <div className="hero-trust mt-2 flex items-center gap-4">
            <div className="flex -space-x-3 -space-x-reverse">
              {['/images/team-1.jpg', '/images/team-2.jpg', '/images/team-4.jpg', '/images/team-5.jpg', '/images/team-6.jpg'].map((src, i) => (
                <img key={i} src={src} alt="وکلای راهگشا" className="h-11 w-11 rounded-full border-2 border-pine-900 object-cover object-top" />
              ))}
            </div>
            <div className="text-[11px] leading-5 text-cream/75">
              <span className="flex items-center gap-1.5 font-black text-cream">
                <span className="flex items-center gap-0.5 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                </span>
                ۴٫۹ / ۵
              </span>
              بیش از <span className="font-bold text-gold-300">۲٬۴۰۰ موکل</span> به ما اعتماد کرده‌اند
            </div>
          </div>
        </div>

        {/* ستون تصویر و کارت‌ها (موبایل: زیر محتوا) */}
        <div className="relative z-10 mt-10 hidden h-[460px] lg:col-span-5 lg:mt-0 lg:block">
          <div ref={ringRef} aria-hidden className="absolute -right-8 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-gold-500/25" />
          <div ref={visualRef} className="hero-visual-el absolute right-0 top-1/2 h-[440px] w-[92%] -translate-y-1/2 overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-2 border-gold-500/45 shadow-deep">
            <img src="/images/courthouse.jpg" alt="سردر دادگستری — عدالت" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/10 to-transparent" />
            <div className="absolute bottom-5 right-5 left-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400">از سال ۱۳۸۱ تا امروز</p>
              <p className="mt-1 font-display text-lg font-bold leading-snug text-cream">دو دهه دفاع از حق، روی پله‌های همین دادگستری</p>
            </div>
          </div>

          {/* کارت شناور ۱ — رأی موفق */}
          <div ref={cardARef} className="hero-float-card absolute -right-2 top-8 w-64 rounded-2xl border border-white/15 bg-pine-900/85 p-3.5 shadow-deep backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <FileCheck2 size={22} />
              </span>
              <div>
                <p className="text-[10px] font-bold text-cream/60">پرونده ۲۴۱۷ · الزام به تنظیم سند</p>
                <p className="mt-0.5 text-[12px] font-extrabold leading-5 text-emerald-300">رأی به نفع موکل صادر شد ✓</p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-cream/55">
              <span>شعبه ۳ حقوقی · سعادت‌آباد</span>
              <span className="font-bold text-gold-300">۴ ماه و ۷ روز</span>
            </div>
          </div>

          {/* کارت شناور ۲ — پشتیبانی آنلاین */}
          <div ref={cardBRef} className="hero-float-card absolute -left-4 bottom-14 w-60 rounded-2xl border border-white/15 bg-pine-900/85 p-3.5 shadow-deep backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-extrabold text-cream">پنل موکل راهگشا</p>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[9px] font-black text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                آنلاین ۲۴/۷
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5">
              {['بارگذاری مدارک و لوایح', 'پیام مستقیم با وکیل پرونده', 'گزارش مرحله‌به‌مرحله رسیدگی'].map((t) => (
                <p key={t} className="flex items-center gap-2 text-[10px] leading-5 text-cream/75">
                  <ShieldCheck size={12} className="shrink-0 text-gold-400" /> {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── نوار آمار پایین ── */}
      <div className="absolute inset-x-0 bottom-10 z-10 border-y border-gold-500/15 bg-pine-950/55 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 md:divide-x md:divide-x-reverse md:divide-white/5 lg:px-6">
          {STATS.map((s) => (
            <div key={s.label} className="hero-stat flex flex-col items-center gap-1 px-2 py-4">
              <span className="font-display text-2xl font-bold text-gold-300 sm:text-3xl">{s.value}</span>
              <span className="text-[9px] font-medium text-cream/65 sm:text-[10px]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── نوار متحرک کلیدواژه‌ها ── */}
      <div dir="ltr" className="absolute bottom-0 left-0 z-20 flex w-full overflow-hidden border-t border-gold-500/25 bg-gold-500 py-1.5">
        <div className="animate-marquee flex w-max shrink-0 items-center whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="mx-5 flex items-center gap-5 text-[11px] font-black text-pine-950">
              {item} <span className="text-pine-800/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
