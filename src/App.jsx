import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import VideoGallery from "./pages/VideoGallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
    <div className="bg-gray-50 min-h-screen">
      <nav className="flex justify-center space-x-6 p-4 bg-gray-100 shadow">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/gallery">Video Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<VideoGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}
