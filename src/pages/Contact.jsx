export default function Contact() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <form className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4"></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
      <div className="mt-8">
        <iframe 
          className="w-full h-64 rounded-lg shadow"
          src="https://www.google.com/maps/embed?...your_location..."
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
