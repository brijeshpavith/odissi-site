// ---------- src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import VideoGallery from './pages/VideoGallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
return (
<div className="bg-gray-50 min-h-screen flex flex-col">
<nav className="bg-white shadow p-4">
<div className="max-w-5xl mx-auto flex items-center gap-6 text-sm md:text-base">
<Link className="hover:text-blue-600" to="/">Home</Link>
<Link className="hover:text-blue-600" to="/about">About Us</Link>
<Link className="hover:text-blue-600" to="/gallery">Video Gallery</Link>
<Link className="hover:text-blue-600" to="/contact">Contact Us</Link>
</div>
</nav>

<main className="flex-1 max-w-5xl mx-auto w-full p-6 md:p-8">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/gallery" element={<VideoGallery />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>

<Footer />
</div>
)
}