// ---------- src/pages/Blog.jsx
export default function Blog() {
// Replace with real posts by Ratna Bharati Acharya.
const posts = [
{
slug: 'reverence-to-guru',
title: 'In Reverence to the Guru: Learning and Living the Deba Prasad Parampara',
date: '2025-07-15',
excerpt: 'This is from around 1990. I had just started learning Odissi',
content: 'This is from around 1990. I had just started learning Odissi... <a href="https://mindfulmusings25.blogspot.com/2025/07/in-reverence-to-guru-learning-and.html">Read more </a>',
},
{
slug: 'echo-of-jayadev',
title: 'Echoes of Jayadeva',
date: '2025-06-02',
excerpt: 'First Segment – Shabad Kirtan',
content: 'The first day of the event featured a rich and diverse array of performances, offering much to absorb and appreciate. The program began with an insightful speech by Dr. Charan Singh, focused on the revered poet Kabi Jayadeva. His talk shed light on many lesser-known facts, such as how Jayadeva... <a href="https://mindfulmusings25.blogspot.com/2025/06/echoes-of-jayadeva.html">Read more </a>',
},
]

return (
<div>
<h1 className="text-3xl md:text-4xl font-bold text-rose-900 mb-6">Blogs — by Ratna Bharati Acharya</h1>
<ul className="space-y-6">
{posts.map((p) => (
<li key={p.slug} className="bg-white rounded-2xl shadow p-5">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
<h2 className="text-2xl font-semibold">{p.title}</h2>
<span className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</span>
</div>
<p className="text-gray-700 mb-3">{p.excerpt}</p>
<details>
<summary className="cursor-pointer text-rose-800 hover:text-rose-600">Read more</summary>
<div className="mt-3 whitespace-pre-line text-gray-800">{p.content}</div>
</details>
</li>
))}
</ul>
</div>
)
}