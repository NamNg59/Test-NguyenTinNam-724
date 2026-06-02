"use client";

import { useEffect, useRef, useState } from "react";
import {
    Heart,
    MessageCircle,
    Share2,
    Play,
} from "lucide-react";

type Props = {
    videoUrl: string;
    authorName: string;
    description: string;
    likesCount: number;
};

export default function VideoCard({
    videoUrl,
    authorName,
    description,
    likesCount,
}: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] =
        useState(false);

    // trạng thái like
    const [liked, setLiked] =
        useState(false);

    const [likeCount, setLikeCount] =
        useState(likesCount);

    // user tự pause
    const [manualPause, setManualPause] =
        useState(false);

    // Play/Pause khi click video
    const handlePlayPause = () => {
        const video = videoRef.current;

        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
            setManualPause(false);
        } else {
            video.pause();
            setIsPlaying(false);
            setManualPause(true);
        }
    };

    // Like button
    const handleLike = () => {
        if (liked) {
            setLikeCount((prev) => prev - 1);
        } else {
            setLikeCount((prev) => prev + 1);
        }

        setLiked(!liked);
    };

    // Auto play / pause khi scroll
    useEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;

        if (!video || !container) return;

        const observer =
            new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        // chỉ auto play nếu user không tự pause
                        if (!manualPause) {
                            video
                                .play()
                                .then(() => {
                                    setIsPlaying(true);
                                })
                                .catch(() => { });
                        }
                    } else {
                        // scroll khỏi màn hình
                        video.pause();
                        setIsPlaying(false);

                        // reset manual pause
                        setManualPause(false);
                    }
                },
                {
                    threshold: 0.7,
                }
            );

        observer.observe(container);

        return () => {
            observer.disconnect();
        };
    }, [manualPause]);

    return (
        <section
            ref={containerRef}
            className="
                h-screen
                w-full
                snap-start
                flex
                items-center
                justify-center
                bg-black
            "
        >
            <div
                className="
                    relative
                    h-screen
                    aspect-[9/16]
                    max-w-[420px]
                    bg-black
                    overflow-hidden
                "
            >
                {/* Video */}
                <video
                    ref={videoRef}
                    src={videoUrl}
                    className="
                        h-full
                        w-full
                        object-contain
                        bg-black
                        cursor-pointer
                "
                    loop
                    muted
                    playsInline
                    onClick={handlePlayPause}
                />

                {/* Gradient */}
                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        w-full
                        h-48
                        bg-gradient-to-t
                        from-black/80
                        to-transparent
                    "
                />

                {/* Info */}
                <div
                    className="
                        absolute
                        bottom-8
                        left-4
                        text-white
                        z-10
                    "
                >
                    <h2 className="font-bold text-lg">
                        @{authorName}
                    </h2>

                    <p className="text-sm max-w-[250px]">
                        {description}
                    </p>
                </div>

                {/* Buttons */}
                <div
                    className="
                        absolute
                        right-4
                        bottom-24
                        flex
                        flex-col
                        gap-6
                        text-white
                        z-10
                    "
                >
                    {/* Like */}
                    <button
                        onClick={handleLike}
                        className="
                            flex
                            flex-col
                            items-center
                        "
                    >
                        <Heart
                            size={32}
                            className={`
                                transition-all
                                duration-300
                ${liked
                                    ? "fill-red-500 text-red-500 scale-110"
                                    : "text-white"
                                }
              `}
                        />

                        <span>{likeCount}</span>
                    </button>

                    {/* Comment */}
                    <button>
                        <MessageCircle size={32} />
                    </button>

                    {/* Share */}
                    <button>
                        <Share2 size={32} />
                    </button>
                </div>

                {/* Pause icon */}
                {!isPlaying && (
                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            pointer-events-none
                            z-20
                        "
                    >
                        <div
                            className="
                                bg-black/50
                                backdrop-blur-sm
                                rounded-full
                                p-5
                            "
                        >
                            <Play
                                size={48}
                                className="text-white fill-white"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}