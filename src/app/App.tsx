import { useState, useCallback } from "react";
import { Slide1Cover } from "./components/Slide1Cover";
import { Slide2Intro } from "./components/Slide2Intro";
import { Slide3Lenin } from "./components/Slide3Lenin";
import { Slide4Moderna } from "./components/Slide4Moderna";
import { Slide5Support } from "./components/Slide5Support";
import { Slide7Impact } from "./components/Slide7Impact";
import { Slide9Lessons } from "./components/Slide9Lessons";
import { Slide10Conclusion } from "./components/Slide10Conclusion";
import { SlideNav } from "./components/SlideNav";

const SLIDE_TITLES = [
  "Trang bìa – Giới thiệu chủ đề",
  "Phần 1 – Mở đầu & Đặt vấn đề",
  "Phần 2 – Lý luận V.I. Lênin",
  "Phần 3 – Khái quát Case Moderna",
  "Phần 4 – Nhà nước Mỹ hỗ trợ Moderna",
  "Phần 5 – Tác động tích cực & tiêu cực",
  "Phần 6&7 – Bài học & Định hướng sinh viên",
  "Phần 8&9 – Kết luận & Tài liệu tham khảo",
];

const slides = [
  (onNext: () => void) => <Slide1Cover onNext={onNext} />,
  () => <Slide2Intro />,
  () => <Slide3Lenin />,
  () => <Slide4Moderna />,
  () => <Slide5Support />,
  () => <Slide7Impact />,
  () => <Slide9Lessons />,
  () => <Slide10Conclusion />,
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const goTo = useCallback((n: number) => setCurrent(n), []);

  return (
    <div
      className="size-full flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
      }}
      tabIndex={0}
    >
      {/* Slide area */}
      <div className="flex-1 overflow-hidden">
        {slides[current](goNext)}
      </div>

      {/* Navigation bar */}
      <SlideNav
        current={current}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
        onGoto={goTo}
        titles={SLIDE_TITLES}
      />
    </div>
  );
}
