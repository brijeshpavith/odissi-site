// ---------- src/pages/VideoGallery.jsx
// Replace the IDs with your real ones (only the ID part)
const videoIds = [
  // Paste your full YouTube URLs here; IDs will be parsed automatically
  'https://youtu.be/FJExW0RLwTo',
  'https://youtu.be/qsCRfumhwko',
  'https://youtu.be/KXzW3tpSCeA',
  'https://youtu.be/n7Jw_DXD8W4',
  'https://youtu.be/HSnQXo57uSw',
  'https://youtu.be/KbZSGtbiFKk',
  'https://youtu.be/M7wrwoS6v-8',
  'https://youtu.be/M-qA2wnrWG8',
  'https://youtu.be/Wrp-efnfRvM',
  'https://youtu.be/6ZNAx_ynLCY',
  'https://youtu.be/e4TsMf47B5c',
  'https://youtu.be/ZryMxAnmgDw',
  'https://youtu.be/mNihkfaNz2g',
  'https://youtu.be/oZl7F2pHmOo',
  'https://youtu.be/4giRe9h113I',
  'https://youtu.be/b5bE1mngUNw',
  'https://youtu.be/44lDfjLZoB4',
  'https://youtu.be/U_O7_xpiOiQ',
]

export default function VideoGallery() {
return (
<div>
<h2 className="text-2xl md:text-3xl font-semibold mb-6">Video Gallery</h2>
<div className="grid gap-6 md:grid-cols-2">
{videoIds.map((id) => (
<iframe
key={id}
className="w-full aspect-video rounded-2xl shadow"
src={`https://www.youtube.com/embed/${id}`}
title={`YouTube ${id}`}
allowFullScreen
loading="lazy"
/>
))}
</div>
</div>
)
}