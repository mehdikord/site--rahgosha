import { Star, Quote, ThumbsUp } from 'lucide-react'
import SectionHeading from '../SectionHeading'
import { TESTIMONIALS } from '../../data'

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure dir="rtl" className="flex w-[330px] shrink-0 flex-col rounded-3xl border border-white/10 bg-pine-800/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-gold-500/40 sm:w-[380px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5 text-gold-400">
          {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
        </div>
        <Quote size={26} className="text-gold-500/35" fill="currentColor" />
      </div>
      <blockquote className="mt-4 flex-1 text-[12px] leading-7 text-cream/85">«{t.text}»</blockquote>
      <figcaption className="mt-5 border-t border-white/10 pt-4">
        <p className="text-[13px] font-extrabold text-cream">{t.name}</p>
        <p className="mt-0.5 text-[10.5px] font-medium text-gold-300/85">{t.context}</p>
      </figcaption>
    </figure>
  )
}

export default function TestimonialsSection() {
  const rowA = TESTIMONIALS.slice(0, 4)
  const rowB = TESTIMONIALS.slice(4)

  return (
    <section className="relative overflow-hidden bg-pine-950 py-20 text-cream lg:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold-500/[0.07] blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-emerald-500/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="صدای موکلین ما"
          title={<>رضایتی که با <span className="text-gold-gradient">رأی دادگاه و اعتماد موکل</span> ثابت شده</>}
          subtitle="بیش از ۲٬۴۰۰ پرونده و ۲۴ سال کار در دادگستری؛ این یعنی چیزی بیشتر از شعار — اینجا چند نمونه از آن‌هاست."
        />
      </div>

      {/* ردیف اول — از راست به چپ */}
      <div dir="ltr" className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee flex w-max gap-5">
          {[...rowA, ...rowA].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
      {/* ردیف دوم — معکوس */}
      <div dir="ltr" className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee-reverse flex w-max gap-5">
          {[...rowB, ...rowB].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>

      {/* آمار رضایت */}
      <div className="relative mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4">
        {[
          { v: '۴٫۹ / ۵', l: 'میانگین امتیاز — ۸۶۰+ نظر ثبت‌شده' },
          { v: '٪۹۸', l: 'موکلینی که ما را به دیگران معرفی می‌کنند' },
          { v: '٪۹۴', l: 'نرخ موفقیت در دعاوی ملکی و ساختمانی' },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-3 rounded-2xl border border-gold-500/25 bg-gold-500/[0.07] px-6 py-4">
            <ThumbsUp size={20} className="text-gold-400" />
            <span>
              <span className="block font-display text-xl font-bold text-gold-300">{s.v}</span>
              <span className="block max-w-[220px] text-[10px] leading-5 text-cream/60">{s.l}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
