"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-blue-600">
          DualApps
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home">Home</a>
          <a href="#apps">Apps</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Get Apps
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-sm font-medium">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#apps" onClick={() => setOpen(false)}>Apps</a>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Get Apps
          </button>
        </div>
      </div>
    </nav>
  );
}