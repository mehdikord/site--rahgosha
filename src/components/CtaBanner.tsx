"use client";

import Link from 'next/link'
import { PhoneCall, ArrowLeft, ShieldCheck } from 'lucide-react'
import { CONTACT } from '../data'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-pine-950 py-16">
      <img src="/images/hero-justice.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-l from-pine-950/95 via-pine-950/60 to-pine-950/95" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center lg:flex-row lg:justify-between lg:text-right">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-[11px] font-bold text-gold-300">
            <ShieldCheck size={14} /> نخستین مشاوره کاملاً رایگان است
          </span>
          <h3 className="font-display text-2xl font-bold leading-snug text-cream sm:text-3xl lg:text-4xl">
            پرونده‌ی شما،<br />
            <span className="text-gold-gradient">همین امروز قابل بررسی است.</span>
          </h3>
          <p className="max-w-lg text-sm leading-7 text-cream/70">
            برای دریافت مشاوره رایگان و برآورد هزینه و زمان پرونده‌تان، همین حالا تماس بگیرید یا فرم درخواست تماس را تکمیل کنید.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row lg:flex-col lg:items-end">
          <a
            href={`tel:${CONTACT.phone}`}
            dir="ltr"
            className="flex items-center gap-3 rounded-2xl border border-gold-500/30 bg-gold-500/10 px-6 py-3 font-sans text-xl font-black tracking-wider text-gold-300 transition hover:bg-gold-500/20"
          >
            <PhoneCall size={22} className="text-gold-400" />
            {CONTACT.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gold-500 px-7 py-3.5 text-sm font-extrabold text-pine-950 shadow-gold transition hover:bg-gold-400"
          >
            درخواست تماس و مشاوره
            <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
