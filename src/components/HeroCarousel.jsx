// ---------- src/components/HeroCarousel.jsx
import { useEffect, useRef, useState, useCallback } from 'react'

export default function HeroCarousel({ images = [], interval = 5000 }) {
const [index, setIndex] = useState(0)
const [lightbox, setLightbox] = useState(false)
const timer = useRef(null)

const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])
const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])

useEffect(() => {
if (!images.length) return
timer.current = setInterval(next, interval)
return () => clearInterval(timer.current)
}, [images.length, interval, next])

const pause = () => { if (timer.current) clearInterval(timer.current) }
const resume = () => { timer.current = setInterval(next, interval) }

useEffect(() => {
function onKey(e) {
if (!lightbox) return
if (e.key === 'Escape') setLightbox(false)
if (e.key === 'ArrowRight') next()
if (e.key === 'ArrowLeft') prev()
}
window.addEventListener('keydown', onKey)
return () => window.removeEventListener('keydown', onKey)
}, [lightbox, next, prev])

if (!images.length) return null
const current = images[index]

return (
<div className="relative rounded-2xl overflow-hidden shadow" onMouseEnter={pause} onMouseLeave={resume}>
<img
src={current.src}
alt={current.alt || ''}
className="w-full h-[40vh] md:h-[56vh] object-cover"
loading="eager"
onClick={() => setLightbox(true)}
style={{ cursor: 'zoom-in' }}
/>

{/* Gradient caption overlay (optional alt text) */}
{current.alt && (
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-rose-50">
<p className="text-sm md:text-base">{current.alt}</p>
</div>
)}

{/* Controls */}
<button
aria-label="Previous"
onClick={prev}
className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full grid place-items-center"
>
‹
</button>
<button
aria-label="Next"
onClick={next}
className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full grid place-items-center"
>
›
</button>

{/* Dots */}
<div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
{images.map((_, i) => (
<button
key={i}
aria-label={`Go to slide ${i + 1}`}
onClick={() => setIndex(i)}
className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-amber-300' : 'bg-white/70 hover:bg-white'}`}
/>
))}
</div>

{/* Lightbox */}
{lightbox && (
<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true">
<button aria-label="Close" className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl" onClick={() => setLightbox(false)}>×</button>
<button aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl" onClick={prev}>‹</button>
<img src={current.src} alt={current.alt || ''} className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl" />
<button aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl" onClick={next}>›</button>
</div>
)}
</div>
)
}