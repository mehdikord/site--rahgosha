"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BadgeCheck, PhoneCall } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { TEAM, CONTACT } from '../../data'

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-l from-transparent via-gold-500/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="start"
            eyebrow="تیم حرفه‌ای راهگشا"
            title={<>وکلا و متخصصانی که<br /><span className="text-gold-gradient">صدای حق شما هستند</span></>}
            subtitle="شش وکیل و کارشناس ارشد با پروانه پایه یک از کانون وکلای مرکز — با پشتوانه پشتیبانی آنلاین ۲۴ساعته."
          />
          <div className="flex shrink-0 flex-col items-start gap-3 sm:flex-row sm:items-center">
            <span className="flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-2 text-[11px] font-black text-emerald-700">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-500" />
              پشتیبانی آنلاین ۲۴/۷
            </span>
            <Link href="/about" className="group inline-flex items-center gap-2 text-[13px] font-extrabold text-pine-800 transition hover:text-gold-700">
              درباره کل مجموعه
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-pine-900/10 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/45 hover:shadow-[0_30px_50px_-25px_rgba(11,41,38,0.4)]"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/10 to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-full bg-gold-500/95 px-2.5 py-1 text-[9px] font-black text-pine-950">{member.experience}</span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-[14px] font-bold leading-6 text-pine-900">{member.name}</h3>
                <p className="mt-0.5 text-[10px] font-extrabold text-gold-700">{member.role}</p>
                <p className="mt-1.5 line-clamp-2 min-h-[2.6rem] text-[9.5px] leading-5 text-pine-800/70">{member.specialty}</p>
                <p className="mt-2 flex items-center gap-1.5 border-t border-pine-900/8 pt-2 text-[9px] font-medium text-pine-800/55">
                  <BadgeCheck size={11} className="text-emerald-600" /> {member.bar}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* نوار تماس فوری */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold-600/25 bg-gradient-to-l from-gold-500/12 via-transparent to-gold-500/12 px-6 py-5 sm:flex-row">
          <p className="text-center text-[13px] font-bold leading-7 text-pine-900 sm:text-right">
            پرونده مهلت‌دار دارید و فرصت تلف‌کردن ندارید؟<br className="hidden sm:block" />
            <span className="text-gold-700">خط اضطراری وکلای راهگشا — حتی آخر هفته‌ها پاسخگوست.</span>
          </p>
          <a href={`tel:${CONTACT.mobile}`} dir="ltr" className="flex shrink-0 items-center gap-2.5 rounded-2xl bg-pine-900 px-6 py-3.5 font-sans text-lg font-black tracking-wider text-gold-300 transition hover:bg-pine-800">
            <PhoneCall size={19} />
            {CONTACT.mobileDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
