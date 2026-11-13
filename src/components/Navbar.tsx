"use client";

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, Clock, Instagram, Linkedin, Send, Menu, X, ChevronLeft } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '../data'

function LogoMark({ size = 46 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect width="64" height="64" rx="16" fill="#c9a227" />
      <rect x="3" y="3" width="58" height="58" rx="13.5" stroke="#0b2926" strokeOpacity="0.35" strokeWidth="2" />
      <g stroke="#0b2926" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 12v38" />
        <path d="M21.5 52h21" />
        <path d="M32 17.5 14.5 22M32 17.5l17.5 4.5" />
        <path d="M14.5 22l-7 15.5a9.2 9.2 0 0 0 14 0l-7-15.5z" fill="#0b2926" fillOpacity="0.18" />
        <path d="M49.5 22l-7 15.5a9.2 9.2 0 0 0 14 0l-7-15.5z" fill="#0b2926" fillOpacity="0.18" />
        <circle cx="32" cy="12.5" r="3.1" fill="#0b2926" stroke="none" />
      </g>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /** Determine if a nav link is active based on pathname */
  const isLinkActive = (to: string): boolean => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── top info bar ── */}
      <div className="hidden border-b border-white/5 bg-pine-950 text-[11px] text-cream/75 lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 transition hover:text-gold-300" dir="ltr">
              <Phone size={12} className="text-gold-400" /> {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 transition hover:text-gold-300" dir="ltr">
              <Mail size={12} className="text-gold-400" /> {CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <Clock size={12} className="text-gold-400" /> {CONTACT.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-bold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              پشتیبانی آنلاین ۲۴/۷ فعال است
            </span>
            <span className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/rahgosha.legal" target="_blank" rel="noreferrer" aria-label="اینستاگرام" className="transition hover:text-gold-300"><Instagram size={14} /></a>
              <a href="https://www.linkedin.com/company/rahgosha" target="_blank" rel="noreferrer" aria-label="لینکدین" className="transition hover:text-gold-300"><Linkedin size={14} /></a>
              <a href={`https://t.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" aria-label="تلگرام" className="transition hover:text-gold-300"><Send size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ── main nav bar ── */}
      <div
        className={`transition-all duration-500 ${
          scrolled || menuOpen
            ? 'border-b border-gold-500/20 bg-pine-950/90 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3" aria-label="گروه حقوقی راهگشا">
            <div className="transition-transform duration-500 group-hover:rotate-[6deg]">
              <LogoMark size={46} />
            </div>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[22px] font-bold text-cream">
                راهگشا
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400">
                Rahgosha Legal Group
              </span>
            </span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-7 xl:flex">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.to)
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`relative py-2 text-[13px] font-bold transition-colors duration-300 ${
                    active ? 'text-gold-300' : 'text-cream/85 hover:text-gold-200'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-center bg-gradient-to-l from-transparent via-gold-400 to-transparent transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group hidden items-center gap-2 rounded-xl bg-gold-500 px-5 py-2.5 text-[12px] font-extrabold text-pine-950 shadow-gold transition hover:bg-gold-400 sm:inline-flex"
            >
              مشاوره رایگان
              <ChevronLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-cream transition hover:border-gold-500/40 hover:text-gold-300 xl:hidden"
              aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── mobile menu ── */}
      <div
        className={`absolute inset-x-0 top-full origin-top overflow-hidden border-b border-gold-500/20 bg-pine-950/97 backdrop-blur-2xl transition-all duration-300 xl:hidden ${
          menuOpen ? 'max-h-[560px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-4 pb-6 pt-3">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.to)
            return (
              <Link
                key={link.to}
                href={link.to}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition ${
                  active ? 'bg-gold-500/15 text-gold-300' : 'text-cream/85 hover:bg-white/5 hover:text-gold-200'
                }`}
              >
                {link.label}
                <ChevronLeft size={16} className="text-gold-500/70" />
              </Link>
            )
          })}
          <a
            href={`tel:${CONTACT.phone}`}
            dir="ltr"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-gold-500/40 bg-gold-500/10 px-4 py-3 text-base font-black tracking-wider text-gold-300"
          >
            <Phone size={18} /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  )
}
