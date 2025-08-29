// ---------- src/components/Footer.jsx
export default function Footer() {
return (
<footer className="bg-rose-900 text-rose-100 mt-8">
<div className="max-w-5xl mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
<p>© {new Date().getFullYear()} Nrityotkarsh. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-amber-300" href="/">Home</a>
<a className="hover:text-amber-300" href="/about">About</a>
<a className="hover:text-amber-300" href="/gallery">Gallery</a>
<a className="hover:text-amber-300" href="/blog">Blog</a>
<a className="hover:text-amber-300" href="/contact">Contact</a>
</div>
</div>
</footer>
)
}