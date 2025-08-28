// ---------- src/components/Footer.jsx
export default function Footer() {
return (
<footer className="bg-white border-t">
<div className="max-w-5xl mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
<p>© {new Date().getFullYear()} Nrityotkarsh. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:underline" href="/">Home</a>
<a className="hover:underline" href="/about">About</a>
<a className="hover:underline" href="/gallery">Gallery</a>
<a className="hover:underline" href="/contact">Contact</a>
</div>
</div>
</footer>
)
}