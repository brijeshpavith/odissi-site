// ---------- src/pages/Contact.jsx
export default function Contact() {
return (
<div>
<h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
<form className="space-y-4 max-w-md" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
<input type="hidden" name="form-name" value="contact" />
<p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>
<input name="name" type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
<input name="email" type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
<textarea name="message" placeholder="Message" className="w-full p-2 border rounded" rows="4" required></textarea>
<button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
</form>
<div className="mt-8">
<iframe
className="w-full h-64 rounded-2xl shadow"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
allowFullScreen
loading="lazy"
/>
</div>
</div>
)
}