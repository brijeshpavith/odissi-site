// ---------- src/App.jsx
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import VideoGallery from './pages/VideoGallery'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Footer from './components/Footer'

function NavLink({ to, children }) {
  const { pathname } = useLocation()
  const active = pathname === to
  return (
    <Link
      to={to}
      className={`px-2 py-1 rounded-md transition-colors ${
        active ? 'bg-rose-700 text-white' : 'text-rose-50 hover:text-amber-300'
      }`}
    >
      {children}
    </Link>
  )
};

export default function App() {
return (
<div className="bg-rose-50 min-h-screen flex flex-col">
<header className="bg-gradient-to-r from-rose-800 to-rose-700 text-rose-50">
<div className="max-w-5xl mx-auto w-full px-4">
<nav className="flex items-center gap-4 py-3">
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About Us</NavLink>
<NavLink to="/gallery">Video Gallery</NavLink>
<NavLink to="/blog">Blog</NavLink>
<NavLink to="/contact">Contact Us</NavLink>
</nav>
</div>
</header>

<main className="flex-1 max-w-5xl mx-auto w-full p-6 md:p-8">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/gallery" element={<VideoGallery />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>

<Footer />
</div>
)
}