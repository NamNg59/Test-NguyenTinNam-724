import "./globals.css";

export const metadata = {
    title: "TikTok Clone",
    description: "Vertical video feed",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}