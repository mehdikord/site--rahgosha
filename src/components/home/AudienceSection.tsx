"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scale, Building2, GraduationCap, Quote, ArrowLeft } from 'lucide-react'
import SectionHeading from '../SectionHeading'

const AUDIENCES = [
  {
    icon: Scale,
    title: 'عموم متقاضیان خدمات حقوقی و وکالت',
    desc: 'از اختلاف چک و سفته و قراردادهای روزمره تا طلاق، ارث و پرونده‌های کیفری؛ هر مسئله حقوقی شما — هرچقدر هم کوچک به نظر برسد — با دقت، محرمانگی و نرخ شفاف رسیدگی می‌شود.',
    chips: ['دعاوی عمومی', 'خانواده و ارث', 'چک و سفته', 'مشاوره اولیه رایگان'],
  },
  {
    icon: Building2,
    title: 'فعالان حوزه املاک و ساختمان',
    desc: 'سازندگان، انبوه‌سازان، پیمانکاران، مهندسین مشاور و بنگاه‌های معاملاتی؛ از خرید زمین و اخذ مجوز تا فروش، تحویل و تسویه حساب — دپارتمان تخصصی املاک راهگشا کنار شماست.',
    chips: ['انبوه‌سازان', 'پیمانکاران', 'مشاورین املاک', 'سرمایه‌گذاران ساختمانی'],
  },
  {
    icon: GraduationCap,
    title: 'علاقه‌مندان به آموزش حقوقی',
    desc: 'اگر می‌خواهید «حقوق‌تان را بدانید» پیش از اینکه به آن نیاز پیدا کنید؛ مقالات تخصصی، چک‌لیست‌ها، راهنمای قراردادها و پاسخ کارشناسان به سوالات پرتکرار کاربران — رایگان و همیشه در دسترس.',
    chips: ['مقالات تخصصی', 'چک‌لیست قرارداد', 'پاسخ به سوالات', 'خبرنامه هفتگی'],
  },
]

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:gap-16 lg:px-6">
        {/* تصویر */}
        <div className="relative lg:col-span-5">
          <div aria-hidden className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] border-2 border-gold-500/40" />
          <motion.img
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            src="/images/consultation.jpg"
            alt="جلسه مشاوره حضوری موکل با وکیل راهگشا"
            className="relative h-[480px] w-full rounded-[2rem] object-cover object-[70%_center] shadow-deep sm:h-[560px]"
          />
          {/* نقل‌قول شناور */}
          <div className="absolute -bottom-6 right-6 left-6 rounded-2xl border border-gold-500/30 bg-pine-950/92 p-5 backdrop-blur-xl sm:right-10 sm:left-auto sm:w-96">
            <Quote size={22} className="text-gold-400" fill="currentColor" />
            <p className="mt-2 font-display text-[15px] leading-8 text-cream">حق شما ساخته نمی‌شود؛ مگر آنکه اول بدانیدش، بعد بخواهیدش.</p>
            <p className="mt-2 text-[11px] font-bold text-gold-300">دکتر کیانوش راهگشا — بنیان‌گذار</p>
          </div>
        </div>

        {/* محتوا */}
        <div className="lg:col-span-7">
          <SectionHeading
            align="start"
            eyebrow="جامعه هدف"
            title={<>راهگشا برای<br /><span className="text-gold-gradient">چه کسانی است؟</span></>}
            subtitle="سه گروه اصلی از ما خدمت می‌گیرند؛ هر کدام با نیاز و زبان حقوقی خاص خود."
          />

          <div className="mt-10 space-y-5">
            {AUDIENCES.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-4 rounded-2xl border border-pine-900/10 bg-white p-5 transition-all duration-300 hover:border-gold-500/50 hover:shadow-[0_20px_45px_-28px_rgba(11,41,38,0.4)] sm:gap-5 sm:p-6"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream text-pine-800 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-pine-950">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <span>
                    <h3 className="font-display text-base font-bold text-pine-900 sm:text-lg">{item.title}</h3>
                    <p className="mt-1.5 text-[12px] leading-7 text-pine-800/78">{item.desc}</p>
                    <span className="mt-2.5 flex flex-wrap gap-1.5">
                      {item.chips.map((chip) => (
                        <span key={chip} className="rounded-full bg-pine-900/[0.06] px-2.5 py-1 text-[10px] font-bold text-pine-700">{chip}</span>
                      ))}
                    </span>
                  </span>
                </motion.div>
              )
            })}
          </div>

          <Link href="/about" className="group mt-7 inline-flex items-center gap-2 text-[13px] font-extrabold text-pine-800 transition hover:text-gold-700">
            بیشتر درباره مأموریت و تاریخچه راهگشا
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
