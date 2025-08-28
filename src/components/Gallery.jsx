// File: src/components/Gallery.jsx
function cn(...cls) { return cls.filter(Boolean).join(' ') }

export default function Gallery({ images = [], columns = { base: 2, md: 3 }, enableLightbox = true }) {
const [active, setActive] = useState(null)

const close = useCallback(() => setActive(null), [])
const next = useCallback(() => setActive((i) => (i === null ? 0 : (i + 1) % images.length)), [images.length])
const prev = useCallback(() => setActive((i) => (i === null ? 0 : (i - 1 + images.length) % images.length)), [images.length])

useEffect(() => {
function onKey(e) {
if (active === null) return
if (e.key === 'Escape') close()
if (e.key === 'ArrowRight') next()
if (e.key === 'ArrowLeft') prev()
}
window.addEventListener('keydown', onKey)
return () => window.removeEventListener('keydown', onKey)
}, [active, close, next, prev])

const baseCols = columns.base || 2
const mdCols = columns.md || baseCols

return (
<>
<div className={cn(
'grid gap-3',
`grid-cols-${Math.min(Math.max(baseCols,1),6)}`,
mdCols ? `md:grid-cols-${Math.min(Math.max(mdCols,1),6)}` : ''
)}>
{images.map((img, idx) => (
<button
key={idx}
type="button"
className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-blue-500"
onClick={enableLightbox ? () => setActive(idx) : undefined}
aria-label={img.alt || 'Open image'}
>
<img
src={img.src}
alt={img.alt || ''}
loading="lazy"
decoding="async"
className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
</button>
))}
</div>

{enableLightbox && active !== null && images[active] && (
<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true">
<button aria-label="Close" className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl" onClick={close}>×</button>
<button aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl" onClick={prev}>‹</button>
<img src={images[active].src} alt={images[active].alt || ''} className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl" />
<button aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl" onClick={next}>›</button>
</div>
)}
</>
)
}