"use client";

import {
    House,
    Compass,
    User,
} from "lucide-react";

export default function Navbar() {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className="
                    hidden
                    md:flex
                    fixed
                    left-0
                    top-0
                    h-screen
                    w-64
                    bg-zinc-950
                    border-r
                    border-zinc-800
                    flex-col
                    p-6
                    text-white
                    z-50
                    "
            >
                <h1 className="text-2xl font-bold mb-10">
                    TikTok Clone
                </h1>

                <nav className="flex flex-col gap-5">

                    <button
                        className="
                            flex
                            items-center
                            gap-4
                            p-3
                            rounded-xl
                            hover:bg-zinc-800
                            transition
                            "
                    >
                        <House />
                        <span>Trang chủ</span>
                    </button>

                    <button
                        className="
                            flex
                            items-center
                            gap-4
                            p-3
                            rounded-xl
                            hover:bg-zinc-800
                            transition
                            "
                    >
                        <Compass />
                        <span>Khám phá</span>
                    </button>

                    <button
                        className="
                            flex
                            items-center
                            gap-4
                            p-3
                            rounded-xl
                            hover:bg-zinc-800
                            transition
                            "
                    >
                        <User />
                        <span>Hồ sơ</span>
                    </button>
                </nav>
            </aside>

            {/* Mobile Bottom Nav */}
            <nav
                className="
                    md:hidden
                    fixed
                    bottom-0
                    left-0
                    w-full
                    bg-black/90
                    backdrop-blur-md
                    border-t
                    border-zinc-800
                    flex
                    justify-around
                    items-center
                    py-3
                    text-white
                    z-50
                    "
            >
                <button
                    className="
                        flex
                        flex-col
                        items-center
                        text-sm
                    "
                >
                    <House size={24} />
                    Trang chủ
                </button>

                <button
                    className="
                        flex
                        flex-col
                        items-center
                        text-sm
                    "
                >
                    <Compass size={24} />
                    Khám phá
                </button>

                <button
                    className="
                        flex
                        flex-col
                        items-center
                        text-sm
                    "
                >
                    <User size={24} />
                    Hồ sơ
                </button>
            </nav>
        </>
    );
}