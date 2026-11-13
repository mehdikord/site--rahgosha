"use client";

import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { CONTACT } from '../data'

export default function FloatingActions() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0)
      setShowTop(doc.scrollTop > 480)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* نوار پیشرفت اسکرول */}
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-l from-gold-300 via-gold-500 to-gold-700 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* دکمه‌های شناور */}
      <div className="fixed bottom-5 left-4 z-50 flex flex-col items-center gap-3">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="بازگشت به بالا"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/40 bg-pine-900/90 text-gold-300 shadow-deep backdrop-blur-md transition hover:bg-pine-800"
          >
            <ArrowUp size={20} />
          </button>
        )}
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('سلام؛ نیاز به مشاوره حقوقی دارم.')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="گفتگو در واتساپ"
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-[0_14px_35px_-8px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400"
        >
          <span aria-hidden className="absolute inline-flex h-full w-full animate-ping rounded-2xl bg-emerald-500/40 group-hover:hidden" />
          <MessageCircle size={26} fill="currentColor" className="relative" />
        </a>
      </div>
    </>
  )
}
