// File: src/components/Card.jsx
export function Card({ children, className = '' }) {
return <div className={`rounded-2xl shadow-md bg-white ${className}`}>{children}</div>
}
export function CardContent({ children, className = '' }) {
return <div className={`p-6 ${className}`}>{children}</div>
}

// File: src/components/Footer.jsx
export default function Footer() {
return (
<footer className="bg-white border-t mt-8">
<div className="max-w-5xl mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
<p>© {new Date().getFullYear()} Nrityotkarsh. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:underline" href="/" aria-label="Home">Home</a>
<a className="hover:underline" href="/about" aria-label="About">About</a>
<a className="hover:underline" href="/gallery" aria-label="Gallery">Gallery</a>
<a className="hover:underline" href="/contact" aria-label="Contact">Contact</a>
</div>
</div>
</footer>
)
}