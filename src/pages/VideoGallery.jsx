export default function VideoGallery() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Video Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <iframe 
          className="w-full aspect-video rounded-lg shadow"
          src="https://www.youtube.com/watch?v=HSnQXo57uSw"
          title="Dashavatara by Jayadeb"
          allowFullScreen
        />
        <iframe 
          className="w-full aspect-video rounded-lg shadow"
          src="https://www.youtube.com/watch?v=KXzW3tpSCeA"
          title="Mokshya"
          allowFullScreen
        />
      </div>
    </div>
  );
}
