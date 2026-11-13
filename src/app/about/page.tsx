"use client";

import { motion } from 'framer-motion'
import { ShieldCheck, Scale, Lock, Eye, BadgeCheck, PhoneCall, Target } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import CtaBanner from '@/components/CtaBanner'
import { TEAM, STATS, CONTACT } from '@/data'

const VALUES = [
  { icon: Scale, title: 'تخصص به‌جای عمومیت', desc: 'ما همه‌چیز را قبول نمی‌کنیم؛ اما آنچه قبول می‌کنیم، در آن متخصص‌ایم. دپارتمان اختصاصی املاک و ساختمان، قلب راهگشاست.' },
  { icon: ShieldCheck, title: 'تعهد به نتیجه', desc: 'تعهد ما فقط «تلاش» نیست؛ برآورد صادقانه شانس موفقیت پیش از قبول پرونده و پیگیری بی‌وقفه تا اجرای حکم است.' },
  { icon: Lock, title: 'محرمانگی مطلق', desc: 'اطلاعات و مدارک شما با رمزنگاری و قرارداد محرمانگی محافظت می‌شود؛ حتی نوع پرونده‌تان نزد ما محفوظ می‌ماند.' },
  { icon: Eye, title: 'شفافیت کامل هزینه', desc: 'هزینه دادرسی، حق‌الوکاله و هزینه‌های جانبی — همه قبل از شروع، کتبی و مرحله‌به‌مرحله اعلام می‌شود. بدون هزینه پنهان.' },
]

const TIMELINE = [
  { year: '۱۳۸۱', title: 'تأسیس راهگشا', desc: 'دکتر کیانوش راهگشا دفتر وکالت خود را با دو پرونده ملکی در سعادت‌آباد تأسیس کرد.' },
  { year: '۱۳۸۸', title: 'تولد دپارتمان ساختمان', desc: 'با رونق برج‌سازی تهران، دپارتمان تخصصی قراردادهای ساختمانی و مشارکت در ساخت راه‌اندازی شد.' },
  { year: '۱۳۹۵', title: 'ورود به انبوه‌سازی', desc: 'اولین قرارداد مشاوره حقوقی مستمر با یک هلدینگ انبوه‌سازی بزرگ — امروز ۱۲۰+ پروژه فعال.' },
  { year: '۱۴۰۰', title: 'راه‌اندازی پلتفرم آنلاین', desc: 'پنل آنلاین موکلین، مشاوره تصویری و ابزارهای محاسبه آنلاین راهگشا رونمایی شد.' },
  { year: '۱۴۰۵', title: 'امروز', desc: '۶ وکیل پایه یک، ۲٬۴۰۰+ پرونده مختومه و پشتیبانی ۲۴ساعته؛ راهگشا، نام مطمئن املاک ایران.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="درباره راهگشا"
        title={<>از یک میز کوچک در سعادت‌آباد،<br />تا <span className="text-gold-gradient">معتبرترین نام املاک تهران</span></>}
        subtitle="داستان موسسه‌ای که از دل دادگستری و بازار ساخت‌وساز تهران بیرون آمد و به خانه حقوقی سازندگان، مالکان و پیش‌خریداران تبدیل شد."
        breadcrumb={[{ label: 'درباره ما' }]}
      />

      {/* ── داستان موسسه ── */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:px-6">
          <div className="relative lg:col-span-5">
            <div aria-hidden className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-gold-500/40" />
            <img src="/images/courthouse.jpg" alt="سردر تاریخی دادگستری تهران" className="relative h-[430px] w-full rounded-[2rem] object-cover shadow-deep sm:h-[500px]" />
            <div className="absolute bottom-5 right-5 rounded-2xl bg-pine-950/85 px-5 py-3 backdrop-blur-md">
              <p className="font-display text-3xl font-bold text-gold-300">۱۳۸۱</p>
              <p className="text-[10px] font-bold text-cream/75">سال تأسیس گروه حقوقی راهگشا</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              align="start"
              eyebrow="داستان ما"
              title={<>وکیلی که <span className="text-gold-gradient">زبان ساختمان را هم می‌داند</span></>}
            />
            <div className="mt-6 space-y-5 text-[13.5px] leading-9 text-pine-800/90">
              <p>گروه حقوقی راهگشا در سال ۱۳۸۱ توسط دکتر کیانوش راهگشا، وکیل پایه یک دادگستری و دانش‌آموخته حقوق خصوصی، با یک باور ساده تأسیس شد: «پرونده ملکی را وکیلی باید ببرد که زبان قرارداد ساختمانی را بلد باشد، نه فقط زبان قانون را.»</p>
              <p>در دو دهه گذشته، راهگشا از یک دفتر دو نفره به شش وکیل پایه یک و کارشناس رسمی دادگستری رسیده است؛ اما تمرکز آن هرگز لغزیده نیست: <strong className="text-pine-900">املاک، قراردادهای ساختمانی و انبوه‌سازی مسکن.</strong> حاصل این تمرکز، پرونده‌سازی دقیق‌تر، نتیجه بهتر و هزینه و زمان کمتر برای موکل است.</p>
              <p>امروز راهگشا با پلتفرم آنلاین خود — پنل موکلین، مشاوره تصویری و ابزارهای محاسبه — تجربه‌ای را ارائه می‌دهد که هیچ دفتر سنتی ارائه نمی‌دهد: شفافیت کامل، دسترسی ۲۴ساعته و مستندات همیشه در دسترس.</p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-pine-900">{s.value}</p>
                  <p className="max-w-[110px] text-[9.5px] leading-5 text-pine-800/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ارزش‌های ما ── */}
      <section className="border-y border-gold-500/15 bg-pine-950 py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeading
            tone="dark"
            eyebrow="ارزش‌های ما"
            title={<>چهار ستونی که <span className="text-gold-gradient">راهگشا روی آن ایستاده</span></>}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-gold-500/40"
                >
                  <Icon size={30} strokeWidth={1.6} className="text-gold-400" />
                  <h3 className="mt-4 font-display text-lg font-bold text-gold-200">{v.title}</h3>
                  <p className="mt-2 text-[11.5px] leading-7 text-cream/70">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── مسیر راهگشا ── */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeading
            eyebrow="مسیر راهگشا"
            title={<>دو دهه <span className="text-gold-gradient">رو به جلو</span></>}
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {TIMELINE.map((item, i) => (
              <li key={item.year} className="relative rounded-3xl border border-pine-900/10 bg-white p-5 pt-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/45">
                <span className="absolute -top-4 right-1/2 translate-x-1/2 rounded-full border border-gold-500/40 bg-pine-950 px-4 py-1.5 font-display text-base font-bold text-gold-300">{item.year}</span>
                <span aria-hidden className="absolute left-3 top-3 font-display text-4xl font-bold text-pine-900/[0.06]">{i + 1}</span>
                <h3 className="font-display text-[15px] font-bold text-pine-900">{item.title}</h3>
                <p className="mt-2 text-[10.5px] leading-6 text-pine-800/70">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── تیم کامل ── */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="start"
              eyebrow="اعضای تیم"
              title={<>با <span className="text-gold-gradient">تیم راهگشا</span> آشنا شوید</>}
              subtitle="شش وکیل و کارشناس ارشد؛ هرکدام با یک امضای تخصصی و یک پرونده درخشان."
            />
            <a href={`tel:${CONTACT.mobile}`} dir="ltr" className="flex shrink-0 items-center gap-2 rounded-2xl bg-pine-900 px-6 py-3.5 font-sans text-base font-black tracking-wider text-gold-300 transition hover:bg-pine-800">
              <PhoneCall size={18} /> {CONTACT.mobileDisplay}
            </a>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <article key={member.name} className="group overflow-hidden rounded-3xl border border-pine-900/10 bg-white transition-all duration-300 hover:border-gold-500/45 hover:shadow-[0_30px_60px_-30px_rgba(11,41,38,0.4)]">
                <div className="grid grid-cols-5">
                  <div className="relative col-span-2 h-56 overflow-hidden">
                    <img src={member.image} alt={member.name} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-l from-white via-white/10 to-transparent" />
                  </div>
                  <div className="col-span-3 flex flex-col p-5">
                    <h3 className="font-display text-[15px] font-bold leading-7 text-pine-900">{member.name}</h3>
                    <p className="mt-1 text-[10px] font-extrabold text-gold-700">{member.role}</p>
                    <p className="mt-2 text-[10.5px] leading-6 text-pine-800/75">{(member as any).specialty}</p>
                    <div className="mt-auto space-y-1.5 border-t border-pine-900/10 pt-3 text-[9.5px] font-medium text-pine-800/60">
                      <p className="flex items-center gap-1.5"><Target size={11} className="text-gold-600" /> {(member as any).experience}</p>
                      <p className="flex items-center gap-1.5"><BadgeCheck size={11} className="text-emerald-600" /> {(member as any).bar}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
