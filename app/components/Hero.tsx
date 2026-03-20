import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          {/* BADGE */}
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
            🚀 Digital Ecosystem Platform
          </span>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Powering
            <span className="block text-blue-600">Travel & Healthcare</span>
            in One Platform
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Go India simplifies travel planning with smart tools, while Medical
            Seva helps healthcare professionals build a strong digital presence.
            Experience speed, simplicity, and growth — all in one ecosystem.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#apps">
              <button className="bg-[#0f172a] text-white px-6 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition">
                Explore Apps
              </button>
            </a>

            <a href="#about">
              <button className="border px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Learn More
              </button>
            </a>
          </div>

          {/* TRUST TAGS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-500">
            <span>✔ Trusted Platform</span>
            <span>✔ Fast & Secure</span>
            <span>✔ Built for Growth</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/media/hero.png"
            width={650}
            height={450}
            alt="Travel and healthcare digital platform"
            className="rounded-3xl shadow-2xl w-full"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl shadow">
            <p className="text-sm font-semibold text-[#0f172a]">
              10K+ Active Users
            </p>
            <p className="text-xs text-gray-500">Growing every day 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
}
