// "use client";

// import { useEffect, useRef } from "react";

// export default function HorizontalScroll({ children }: any) {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = scrollRef.current;

//     let scrollAmount = 0;

//     const autoScroll = () => {
//       if (!container) return;

//       scrollAmount += 1;
//       container.scrollLeft = scrollAmount;

//       if (scrollAmount >= container.scrollWidth / 2) {
//         scrollAmount = 0;
//       }
//     };

//     const interval = setInterval(autoScroll, 20);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       ref={scrollRef}
//       className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth no-scrollbar"
//     >
//       {children}
//     </div>
//   );
// }


"use client";

import { useRef } from "react";

export default function HorizontalScroll({ children }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;

    ref.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full z-10"
      >
        ◀
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full z-10"
      >
        ▶
      </button>

      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto px-8 scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
}