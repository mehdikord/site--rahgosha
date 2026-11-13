"use client";

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ServiceFaq } from '../data'

export default function FaqAccordion({ items, defaultOpen = 0, dark = false }: { items: ServiceFaq[]; defaultOpen?: number; dark?: boolean }) {
  const [open, setOpen] = useState<number>(defaultOpen)
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen
                ? dark
                  ? 'border-gold-500/40 bg-pine-800/60'
                  : 'border-gold-500/50 bg-white shadow-[0_18px_40px_-24px_rgba(11,41,38,0.35)]'
                : dark
                  ? 'border-white/10 bg-white/[0.03]'
                  : 'border-pine-900/10 bg-white/70'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-right sm:px-6 sm:py-5 ${
                dark ? 'text-cream' : 'text-pine-900'
              }`}
              aria-expanded={isOpen}
            >
              <span className="text-[13px] font-bold leading-7 sm:text-sm">{item.q}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
              <div>
                <p className={`border-t px-5 py-4 text-[13px] leading-8 sm:px-6 ${
                  dark ? 'border-white/10 text-cream/75' : 'border-pine-900/10 text-pine-800/90'
                }`}>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
