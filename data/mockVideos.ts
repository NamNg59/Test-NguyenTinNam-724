import { Video } from "@/types/video";

export const mockVideos: Video[] = [
    {
        id: 1,
        videoUrl: "/videos/video1.mp4",
        authorName: "Nam Nguyen",
        description: "Video đầu tiên",
        likesCount: 1200,
    },
    {
        id: 2,
        videoUrl: "/videos/video2.mp4",
        authorName: "John Dev",
        description: "Next.js vertical feed",
        likesCount: 950,
    },
    {
        id: 3,
        videoUrl: "/videos/video3.mp4",
        authorName: "Frontend Guy",
        description: "TikTok clone demo",
        likesCount: 2000,
    },
];