"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, Building, FileSignature, Hammer } from 'lucide-react'
import SectionHeading from '../SectionHeading'

const PILLARS = [
  { icon: Building, title: 'املاک و اسناد', desc: 'الزام به تنظیم سند، افراز، خلع ید، رفع تصرف و دعاوی ثبتی' },
  { icon: FileSignature, title: 'قراردادهای ساختمانی', desc: 'مشارکت در ساخت، پیش‌فروش، پیمان و جرایم تأخیر' },
  { icon: Hammer, title: 'انبوه‌سازی مسکن', desc: 'مشاوره مستمر پروژه‌ها؛ از پروانه تا پایان‌کار و تحویل' },
]

const CHECKS = [
  'بیش از ۱۲۰ پروژه انبوه‌سازی تحت مشاوره حقوقی راهگشا',
  'تنظیم و بازبینی ۳۰۰+ قرارداد مشارکت در ساخت',
  'نرخ موفقیت ۹۴٪ در دعاوی الزام به تنظیم سند',
]

export default function SpecialtySection() {
  return (
    <section className="relative overflow-hidden bg-pine-950 py-20 text-cream lg:py-24">
      {/* بافت و نور */}
      <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-emerald-500/[0.09] blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold-500/[0.08] blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:gap-20 lg:px-6">
        {/* متن */}
        <div>
          <SectionHeading
            align="start"
            tone="dark"
            eyebrow="تخصص اصلی ما"
            title={<>املاک، قراردادهای ساختمانی<br />و <span className="text-gold-gradient">انبوه‌سازی مسکن</span></>}
            subtitle="جایی که حق مالک و سازنده با دقت حقوقی میلی‌متری به هم می‌رسند. راهگشا، دپارتمان تخصصی ساختمان را برای این سه حوزه بنا کرده است؛ نه یک شعبه فرعی از یک دفتر وکالت عمومی."
          />

          <ul className="mt-8 space-y-3">
            {CHECKS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13px] leading-7 text-cream/85">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-gold-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-300 hover:border-gold-500/35">
                  <Icon size={22} className="text-gold-400" strokeWidth={1.7} />
                  <h3 className="mt-2.5 text-[12px] font-extrabold text-gold-200">{p.title}</h3>
                  <p className="mt-1.5 text-[10.5px] leading-6 text-cream/65">{p.desc}</p>
                </div>
              )
            })}
          </div>

          <Link
            href="/services/anbuh-sazi"
            className="group mt-8 inline-flex items-center gap-2 rounded-2xl border border-gold-500/45 bg-gold-500/10 px-6 py-3.5 text-[13px] font-extrabold text-gold-300 transition hover:bg-gold-500 hover:text-pine-950"
          >
            خدمات دپارتمان انبوه‌سازی را ببینید
            <ArrowLeft size={17} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
          </Link>
        </div>

        {/* تصویر کمانی */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border-2 border-gold-500/40"
          >
            <img src="/images/towers.jpg" alt="برج‌های نوساز مسکونی" className="h-[520px] w-full object-cover sm:h-[600px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="font-display text-lg font-bold text-cream sm:text-xl">از خرید زمین تا کلید نهایی</p>
              <p className="mt-1 text-[11px] font-bold text-gold-300">مشارکت در ساخت · پیش‌فروش · پایان‌کار · تحویل</p>
            </div>
          </motion.div>
          {/* آمار شناور */}
          <div className="absolute -left-3 top-24 rounded-2xl border border-gold-500/35 bg-pine-900/90 px-4 py-3 backdrop-blur-md sm:-left-8">
            <p className="font-display text-2xl font-bold text-gold-300">۴۰٪</p>
            <p className="text-[10px] font-bold text-cream/70">پرونده‌های ما ملکی و ساختمانی است</p>
          </div>
        </div>
      </div>
    </section>
  )
}
