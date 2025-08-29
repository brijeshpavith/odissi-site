// ---------- src/pages/Home.jsx
import HeroCarousel from '../components/HeroCarousel'

export default function Home() {
const heroImages = [
{ src: '/photos/recital-1.jpg', alt: 'Group performance at annual recital' },
{ src: '/photos/recital-2.jpg', alt: 'Solo abhinaya moment' },
{ src: '/photos/recital-3.jpg', alt: 'Practice session at the studio' },
{ src: '/photos/recital-4.jpg', alt: 'Practice session at the studio' },
{ src: '/photos/recital-5.jpg', alt: 'Practice session at the studio' },
]

return (
<div>
<HeroCarousel images={heroImages} />

<section className="mt-8 text-center">
{/* Place your logo at public/logo.png (512x512 recommended) */}
<img src="/logo.png" alt="Nrityotkarsh logo" className="h-20 w-auto mx-auto mb-4" loading="eager" />
<h1 className="text-4xl font-bold text-rose-900 mb-3">Welcome to Nrityotkarsh</h1>
<p className="text-lg text-gray-700">A classical Odissi dance school nurturing tradition, grace, and discipline since 2019.</p>
</section>
</div>
)
}