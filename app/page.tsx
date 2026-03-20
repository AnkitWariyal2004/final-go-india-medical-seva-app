import Navbar from "./components/Navbar";
import { FaBolt, FaShieldAlt, FaRocket } from "react-icons/fa";
import { FaGlobe, FaUsers, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import { FaPlane, FaMapMarkedAlt, FaUserMd, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white text-[#0f172a] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
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
              Go India simplifies travel planning with smart tools, while
              Medical Seva helps healthcare professionals build a strong digital
              presence. Experience speed, simplicity, and growth — all in one
              ecosystem.
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

      {/* APPS  */}
      <section id="apps" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <header className="text-center mb-20">
            <p className="text-sm text-blue-600 font-medium">OUR APPS</p>
            <h2 className="text-4xl font-bold mt-2">
              Travel & Healthcare Digital Platforms
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore Go India for travel planning and Medical Seva for
              healthcare digital growth. Two powerful platforms built for modern
              users.
            </p>
          </header>

          {/* GO INDIA */}
          <article className="grid lg:grid-cols-2 gap-16 items-center mb-28">
            <Image
              src="/media/travel.png"
              width={600}
              height={400}
              alt="Go India travel platform for booking trips and exploring destinations"
              className="rounded-3xl shadow-xl w-full"
            />

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                Go India – Smart Travel Platform
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Go India is a modern travel platform designed to help users
                plan, book, and explore destinations across India efficiently.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                It simplifies travel planning with smart tools, real-time
                booking, and seamless user experience.
              </p>

              <ul className="space-y-2">
                <li>✔ Flight, Train & Bus booking</li>
                <li>✔ Hotel & travel packages</li>
                <li>✔ Smart itinerary planning</li>
              </ul>

              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 mt-4">
                Get App
              </button>
            </div>
          </article>

          {/* WHY GO INDIA */}
          <section className="grid md:grid-cols-3 gap-8 mb-28">
            <article className="bg-orange-50 p-8 rounded-3xl hover:shadow-xl transition">
              <FaPlane className="text-orange-500 text-3xl mb-4" />
              <h4 className="text-lg font-semibold mb-2">
                Easy Travel Booking
              </h4>
              <p className="text-gray-600">
                Book flights, trains, and buses quickly with a smooth and
                user-friendly interface.
              </p>
            </article>

            <article className="bg-orange-50 p-8 rounded-3xl hover:shadow-xl transition">
              <FaMapMarkedAlt className="text-orange-500 text-3xl mb-4" />
              <h4 className="text-lg font-semibold mb-2">
                Smart Travel Planning
              </h4>
              <p className="text-gray-600">
                Plan trips efficiently with intelligent recommendations and
                tools.
              </p>
            </article>

            <article className="bg-orange-50 p-8 rounded-3xl hover:shadow-xl transition">
              <FaChartLine className="text-orange-500 text-3xl mb-4" />
              <h4 className="text-lg font-semibold mb-2">
                Optimized Travel Experience
              </h4>
              <p className="text-gray-600">
                Save time and travel smarter with optimized routes and
                suggestions.
              </p>
            </article>
          </section>

          {/* MEDICAL SEVA */}
          <article className="grid lg:grid-cols-2 gap-16 items-center mb-28">
            <Image
              src="/media/medical-seva.png"
              width={600}
              height={400}
              alt="Medical Seva healthcare platform for doctors and digital patient engagement"
              className="rounded-3xl shadow-xl w-full"
            />

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                Medical Seva – Healthcare Digital Platform
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Medical Seva is a healthcare-focused digital platform that helps
                doctors and institutions build a strong online presence.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                It enables better patient engagement, content visibility, and
                long-term credibility in the healthcare ecosystem.
              </p>

              <ul className="space-y-2">
                <li>✔ Digital presence for doctors</li>
                <li>✔ Patient engagement tools</li>
                <li>✔ Content visibility & growth</li>
              </ul>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 mt-4">
                Get App
              </button>
            </div>
          </article>

          {/* WHY MEDICAL */}
          <section className="grid md:grid-cols-3 gap-8">
            <article className="bg-blue-50 p-8 rounded-3xl hover:shadow-xl transition">
              <FaUserMd className="text-blue-600 text-3xl mb-4" />
              <h4 className="text-lg font-semibold mb-2">
                Doctor Visibility Online
              </h4>
              <p className="text-gray-600">
                Improve doctor reach and connect with more patients digitally.
              </p>
            </article>

            <article className="bg-blue-50 p-8 rounded-3xl hover:shadow-xl transition">
              <FaChartLine className="text-blue-600 text-3xl mb-4" />
              <h4 className="text-lg font-semibold mb-2">
                Healthcare Growth Platform
              </h4>
              <p className="text-gray-600">
                Designed to increase engagement and build long-term credibility.
              </p>
            </article>

            <article className="bg-blue-50 p-8 rounded-3xl hover:shadow-xl transition">
              <FaMapMarkedAlt className="text-blue-600 text-3xl mb-4" />
              <h4 className="text-lg font-semibold mb-2">
                Strong Digital Identity
              </h4>
              <p className="text-gray-600">
                Build a professional presence in the digital healthcare
                ecosystem.
              </p>
            </article>
          </section>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-medium">ABOUT US</p>
            <h2 className="text-4xl font-bold mt-2">
              Building a Smarter Digital Ecosystem
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We are creating a unified platform where travel and healthcare
              come together to simplify everyday experiences and deliver real
              value to users.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <Image
              src="/media/about.png"
              alt="about"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl w-full h-auto"
            />

            {/* TEXT */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Designed for Real People & Real Needs
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Our vision is simple — use technology to make everyday tasks
                easier, faster, and more reliable. Whether it's planning a trip
                or building a healthcare presence, our platforms are designed to
                deliver clarity and control.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We focus on user experience, performance, and long-term
                scalability so that our solutions grow with the needs of our
                users.
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {/* CARD 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <FaGlobe className="text-blue-600 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">Unified Platform</h4>
              <p className="text-gray-600">
                Bringing travel and healthcare together in one seamless digital
                ecosystem.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <FaUsers className="text-green-600 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">User Focused</h4>
              <p className="text-gray-600">
                Designed around real user needs to provide meaningful and
                intuitive experiences.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <FaLightbulb className="text-yellow-500 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">Innovation Driven</h4>
              <p className="text-gray-600">
                Constantly evolving with modern technologies to stay ahead and
                deliver better solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-medium">WHY CHOOSE US</p>
            <h2 className="text-4xl font-bold mt-2">
              Designed for Real Impact
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our platforms are built to simplify complex tasks and deliver a
              smooth, reliable experience for both travelers and healthcare
              professionals.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <FaBolt className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast & Efficient</h3>
              <p className="text-gray-600">
                Experience lightning-fast performance with systems designed to
                save time and improve productivity across both platforms.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <FaShieldAlt className="text-green-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built with strong security and reliability at the core, ensuring
                safe and consistent user experience at all times.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition">
              <FaRocket className="text-purple-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">Growth Focused</h3>
              <p className="text-gray-600">
                Whether it's travel or healthcare, our platforms are designed to
                help users grow, scale, and achieve better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      {/* FOOTER */}
      <footer className="bg-[#020617] text-gray-400 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">DualApps</h3>
            <p className="text-gray-400 leading-relaxed">
              We build digital platforms that simplify travel experiences and
              empower healthcare professionals to grow in the modern world.
            </p>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Go India</li>
              <li className="hover:text-white cursor-pointer">Medical Seva</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="mb-2">📧 contact@dualapps.com</p>
            <p className="mb-2">📞 +91 XXXXXXXX</p>
            <p>📍 India</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 DualApps. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
