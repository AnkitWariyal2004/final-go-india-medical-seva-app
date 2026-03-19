"use client";

import { useEffect, useRef } from "react";

export default function HorizontalScroll({ children }: any) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;

    let scrollAmount = 0;

    const autoScroll = () => {
      if (!container) return;

      scrollAmount += 1;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth no-scrollbar"
    >
      {children}
    </div>
  );
}