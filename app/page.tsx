import VideoCard from "@/components/VideoCard";
import Navbar from "@/components/Navbar";
import { mockVideos } from "@/data/mockVideos";

export default function Home() {
  return (
    <div className="bg-black">

      <Navbar />

      <main
        className="
          h-screen
          overflow-y-scroll
          snap-y
          snap-mandatory
          md:ml-64
        "
      >
        {mockVideos.map((video) => (
          <VideoCard
            key={video.id}
            videoUrl={video.videoUrl}
            authorName={video.authorName}
            description={video.description}
            likesCount={video.likesCount}
          />
        ))}
      </main>
    </div>
  );
}