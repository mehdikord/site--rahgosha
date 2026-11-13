"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, PhoneCall } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import CtaBanner from '@/components/CtaBanner'
import { SERVICES, CONTACT } from '@/data'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="خدمات و وکالت"
        title={<>یک دفتر، <span className="text-gold-gradient">هشت دپارتمان تخصصی</span></>}
        subtitle="هر خدمت، با جزئیات کامل، دامنه پوشش، سوالات متداول و برآورد تقریبی هزینه ارائه می‌شود. روی هر خدمت بزنید تا همه‌چیز را بدانید."
        breadcrumb={[{ label: 'خدمات' }]}
      />

      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-4 lg:px-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const reversed = i % 2 === 1
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group grid overflow-hidden rounded-[2rem] border border-pine-900/10 bg-white shadow-sm transition-shadow hover:shadow-[0_35px_70px_-35px_rgba(11,41,38,0.45)] lg:grid-cols-12"
              >
                {/* تصویر */}
                <Link href={`/services/${service.slug}`} className={`relative h-56 overflow-hidden sm:h-64 lg:col-span-5 lg:h-auto ${reversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/25 to-transparent lg:bg-gradient-to-l ${reversed ? 'lg:from-transparent lg:via-pine-950/25 lg:to-pine-950/85' : ''}`} />
                  <span className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-pine-950 shadow-gold">
                    <Icon size={27} strokeWidth={1.9} />
                  </span>
                  <span aria-hidden className="absolute bottom-4 left-6 select-none font-display text-7xl font-bold text-white/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Link>

                {/* متن */}
                <div className={`flex flex-col gap-4 p-6 sm:p-8 lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gold-600">{service.tagline}</p>
                    <h2 className="mt-1.5 font-display text-2xl font-bold leading-snug text-pine-900">{service.title}</h2>
                  </div>
                  <p className="text-[12.5px] leading-8 text-pine-800/80">{service.description[0]}</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[11px] leading-6 text-pine-800/85">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-pine-900/10 pt-5">
                    <Link href={`/services/${service.slug}`} className="group/link inline-flex items-center gap-2 text-[13px] font-extrabold text-pine-900 transition hover:text-gold-700">
                      جزئیات کامل و سوالات متداول
                      <ArrowLeft size={16} className="transition-transform duration-300 group-hover/link:-translate-x-1.5" />
                    </Link>
                    <a href={`tel:${CONTACT.phone}`} dir="ltr" className="inline-flex items-center gap-2 text-[12px] font-black tracking-wide text-pine-800/70 transition hover:text-gold-700">
                      <PhoneCall size={14} /> {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
