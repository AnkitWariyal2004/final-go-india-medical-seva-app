"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg"></div>
          <h1 className="font-semibold text-lg tracking-wide">
            Turebuddy
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">

          <a href="#home" className="hover:text-black transition">
            Home
          </a>

          <a href="#apps" className="hover:text-black transition">
            Apps
          </a>

          <a href="#about" className="hover:text-black transition">
            About
          </a>

          <a href="#why" className="hover:text-black transition">
            Why Us
          </a>

        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">

          <button className="bg-[#0f172a] text-white px-5 py-2 rounded-full text-sm hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-6 text-center text-gray-700">

          <a onClick={() => setOpen(false)} href="#home">
            Home
          </a>

          <a onClick={() => setOpen(false)} href="#apps">
            Apps
          </a>

          <a onClick={() => setOpen(false)} href="#about">
            About
          </a>

          <a onClick={() => setOpen(false)} href="#why">
            Why Us
          </a>

          <button className="bg-[#0f172a] text-white px-6 py-3 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}