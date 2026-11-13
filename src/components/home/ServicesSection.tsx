"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { SERVICES } from '../../data'

export default function ServicesSection() {
  return (
    <section id="services" className="persian-pattern relative overflow-hidden bg-cream py-20 lg:py-24">
      {/* دایره تزئینی */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full border border-gold-500/20" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full border border-pine-700/15" />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="start"
            eyebrow="خدمات ما"
            title={<>خدمات حقوقیِ <span className="text-gold-gradient">تخصصی و پایان‌به‌پایان</span></>}
            subtitle="از مشاوره اولیه تا اجرای حکم؛ هشت دپارتمان تخصصی راهگشا، کنار شما در هر مرحله از پرونده هستند."
          />
          <Link href="/services" className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-pine-800/15 bg-white/60 px-5 py-3 text-[13px] font-extrabold text-pine-800 transition hover:border-gold-500 hover:text-gold-700">
            همه خدمات و جزئیات
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-pine-900/10 bg-white p-6"
                >
                  <span aria-hidden className="pointer-events-none absolute -left-2 top-3 select-none font-display text-6xl font-bold text-pine-900/[0.055] transition-colors duration-500 group-hover:text-gold-500/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-pine-900 text-gold-400 transition-all duration-500 group-hover:rotate-[8deg] group-hover:bg-gold-500 group-hover:text-pine-950">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <h3 className="relative mt-5 font-display text-[1.15rem] font-bold leading-snug text-pine-900">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 flex-1 text-[12px] leading-7 text-pine-800/75">
                    {service.short}
                  </p>
                  <span className="relative mt-5 inline-flex items-center gap-2 border-t border-pine-900/10 pt-4 text-[12px] font-extrabold text-pine-800 transition-colors group-hover:text-gold-700">
                    جزئیات و سوالات متداول
                    <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
