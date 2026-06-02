# TikTok Vertical Video Feed

Ứng dụng mô phỏng giao diện xem video dạng cuộn dọc (TikTok/Reels) được xây dựng bằng **Next.js (App Router)** và **TypeScript**.

## Tính năng

- Vertical Scroll Feed
- Auto Play/Pause khi cuộn
- Click video để Play/Pause
- Like button đổi màu và tăng/giảm số lượng
- Responsive Navigation (Mobile Bottom Nav / Desktop Sidebar)

## Logic Play/Pause khi cuộn trang

Ứng dụng sử dụng **Intersection Observer API** để theo dõi video nào đang nằm trong vùng nhìn thấy (**viewport**).

- Khi video xuất hiện đủ trong màn hình (`threshold: 0.7`), video sẽ tự động **play()**.
- Khi người dùng cuộn sang video khác và video cũ không còn trong viewport, video sẽ tự động **pause()**.
- Ngoài ra, người dùng có thể click trực tiếp vào video để **Play/Pause thủ công**.

Ví dụ logic chính:

```ts
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  },
  {
    threshold: 0.7,
  }
);
```

## Công nghệ sử dụng

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons