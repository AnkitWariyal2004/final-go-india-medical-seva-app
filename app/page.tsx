// import About from "./components/About";
// import CTA from "./components/CTA";
// import FAQ from "./components/FAQ";
// import Features from "./components/Features";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Reviews from "./components/Reviews";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Features />
//       <About />
//       <Reviews />
//       <FAQ />
//       <CTA />
//       <Footer />
//     </>
//   );
// }

// import Image from "next/image";

// export const metadata = {
//   title: "Go India & Medical Seva | Smart Services",
//   description:
//     "Explore travel with Go India and healthcare with Medical Seva. One platform, two powerful services.",
// };

// export default function Home() {
//   return (
//     <main className="bg-white text-gray-800">

//       {/* NAVBAR */}
//       <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//           <h1 className="text-xl font-bold text-blue-600">DualApps</h1>

//           <div className="hidden md:flex gap-8 text-sm font-medium">
//             <a href="#home">Home</a>
//             <a href="#apps">Apps</a>
//             <a href="#features">Features</a>
//             <a href="#contact">Contact</a>
//           </div>

//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
//             Get Apps
//           </button>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section id="home" className="pt-28 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//           <div>
//             <h1 className="text-5xl font-bold leading-tight mb-6">
//               One Platform for <br />
//               <span className="text-blue-600">Travel & Healthcare</span>
//             </h1>

//             <p className="text-gray-600 mb-6">
//               We are a partnership company providing two powerful digital solutions.
//               <b> Go India</b> helps you travel across India easily, while
//               <b> Medical Seva</b> connects you with healthcare services instantly.
//             </p>

//             <div className="flex gap-4">
//               <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
//                 Explore Apps
//               </button>
//               <button className="border px-6 py-3 rounded-lg">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           <Image
//             src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
//             alt="apps"
//             width={600}
//             height={400}
//             className="rounded-xl shadow"
//           />
//         </div>
//       </section>

//       {/* APPS DETAIL */}
//       <section id="apps" className="py-20">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Our Applications
//         </h2>

//         <div className="max-w-6xl mx-auto space-y-16 px-6">

//           {/* GO INDIA */}
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             <Image
//               src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
//               alt="travel india"
//               width={500}
//               height={300}
//               className="rounded-xl shadow"
//             />

//             <div>
//               <h3 className="text-2xl font-bold text-orange-500 mb-4">
//                 Go India – Travel Made Easy
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Go India is a complete travel solution designed to simplify your journey.
//                 Whether you want to book tickets, explore destinations, or plan your trips,
//                 everything is available in one place.
//               </p>

//               <ul className="space-y-2">
//                 <li>✔ Book flights, trains & buses</li>
//                 <li>✔ Discover tourist places across India</li>
//                 <li>✔ Get best deals on hotels & packages</li>
//                 <li>✔ Easy navigation and smart recommendations</li>
//               </ul>
//             </div>
//           </div>

//           {/* MEDICAL SEVA */}
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             <div>
//               <h3 className="text-2xl font-bold text-blue-600 mb-4">
//                 Medical Seva – Healthcare Anytime
//               </h3>

//               <p className="text-gray-600 mb-4">
//                 Medical Seva is your trusted healthcare partner. From online doctor
//                 consultation to medicine delivery, we ensure you get quick and reliable
//                 medical support whenever you need it.
//               </p>

//               <ul className="space-y-2">
//                 <li>✔ Consult certified doctors online</li>
//                 <li>✔ Order medicines from home</li>
//                 <li>✔ Book health checkups</li>
//                 <li>✔ Access digital medical reports</li>
//               </ul>
//             </div>

//             <Image
//               src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
//               alt="medical"
//               width={500}
//               height={300}
//               className="rounded-xl shadow"
//             />
//           </div>

//         </div>
//       </section>

//       {/* FEATURES */}
//       <section id="features" className="py-20 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Why Choose Us
//         </h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
//           {[
//             "User Friendly Interface",
//             "Secure & Reliable",
//             "Fast Support System",
//           ].map((item, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
//               <h3 className="font-bold text-lg">{item}</h3>
//               <p className="text-gray-500 mt-2">
//                 Designed for smooth and hassle-free experience.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* EXTRA IMAGE SECTION */}
//       <section className="py-20">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
//           <Image
//             src="https://images.unsplash.com/photo-1526779259212-939e64788e3c"
//             alt="travel"
//             width={400}
//             height={300}
//             className="rounded-xl"
//           />
//           <Image
//             src="https://images.unsplash.com/photo-1580281658629-4b6f6bcbf35f"
//             alt="hospital"
//             width={400}
//             height={300}
//             className="rounded-xl"
//           />
//           <Image
//             src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
//             alt="india"
//             width={400}
//             height={300}
//             className="rounded-xl"
//           />
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="py-20 bg-blue-600 text-white">
//         <div className="max-w-5xl mx-auto text-center px-6">
//           <h2 className="text-3xl font-bold mb-6">
//             Contact Us
//           </h2>

//           <p className="mb-6">
//             Have questions or want to partner with us? Reach out anytime.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6 text-sm">
//             <div>📧 contact@dualapps.com</div>
//             <div>📞 +91 9876543210</div>
//             <div>📍 India</div>
//           </div>

//           <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg">
//             Send Message
//           </button>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-6 text-center text-gray-500">
//         © 2026 DualApps. All rights reserved.
//       </footer>

//     </main>
//   );
// }

// import Image from "next/image";
// import Navbar from "./components/Navbar";
// import HorizontalScroll from "./components/HorizontalScroll";
// import { FaShieldAlt, FaBolt, FaHeadset } from "react-icons/fa";

// export default function Home() {
//   return (
//     <main className="bg-[#f8fafc] text-[#0f172a]">

//       <Navbar />

//       {/* HERO */}
//       <section id="home" className="pt-28 pb-20">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               One Platform for
//               <span className="text-blue-600"> Travel & Healthcare</span>
//             </h1>

//             <p className="text-gray-600 mb-4">
//               We are a partnership-based company delivering two powerful digital
//               applications designed to simplify everyday life.
//             </p>

//             <p className="text-gray-600 mb-6">
//               <b>Go India</b> helps you plan and manage your travel efficiently,
//               while <b>Medical Seva</b> provides instant access to healthcare services.
//               Together, we bring convenience, speed, and reliability in one ecosystem.
//             </p>

//             <div className="flex gap-4">
//               <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
//                 Explore Apps
//               </button>
//               <button className="border px-6 py-3 rounded-lg">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           <Image
//             src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
//             alt="platform"
//             width={600}
//             height={400}
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* COMPANY */}
//       <section className="py-20 bg-white text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-6">About Our Partnership</h2>

//           <p className="text-gray-600 mb-4">
//             Our company is built on the idea of combining essential services into one
//             powerful ecosystem. By merging travel and healthcare, we aim to simplify
//             everyday needs using technology.
//           </p>

//           <p className="text-gray-600">
//             We focus on reliability, accessibility, and user experience, ensuring that
//             our platforms are easy to use and deliver real value to users.
//           </p>
//         </div>
//       </section>

//       {/* GO INDIA */}
//       <section className="py-20">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

//           <Image
//             src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
//             alt="travel"
//             width={500}
//             height={300}
//             className="rounded-xl shadow"
//           />

//           <div>
//             <h2 className="text-2xl font-bold text-orange-500 mb-4">
//               Go India – Travel Made Simple
//             </h2>

//             <p className="text-gray-600 mb-4">
//               Go India is your all-in-one travel solution that helps you plan,
//               book, and explore destinations across India.
//             </p>

//             <p className="text-gray-600 mb-4">
//               Whether you are planning a vacation or a business trip, the platform
//               provides smart tools and recommendations to make your journey smooth.
//             </p>

//             <ul className="space-y-2">
//               <li>✔ Flight, Train & Bus Booking</li>
//               <li>✔ Hotel & Tour Packages</li>
//               <li>✔ Destination Discovery</li>
//               <li>✔ Smart Travel Planning</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* MEDICAL */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

//           <div>
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">
//               Medical Seva – Healthcare Anytime
//             </h2>

//             <p className="text-gray-600 mb-4">
//               Medical Seva connects you with trusted healthcare services quickly
//               and efficiently.
//             </p>

//             <p className="text-gray-600 mb-4">
//               From doctor consultations to medicine delivery, everything is designed
//               to provide convenience and safety.
//             </p>

//             <ul className="space-y-2">
//               <li>✔ Online Doctor Consultation</li>
//               <li>✔ Medicine Delivery</li>
//               <li>✔ Health Checkups</li>
//               <li>✔ Digital Reports</li>
//             </ul>
//           </div>

//           <Image
//             src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
//             alt="medical"
//             width={500}
//             height={300}
//             className="rounded-xl shadow"
//           />
//         </div>
//       </section>

//       {/* EXPERIENCE */}
//       <section className="py-20">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           App Experience
//         </h2>

//         <div className="max-w-7xl mx-auto px-6">
//           <HorizontalScroll>
//             {[1,2,3,4].map((i) => (
//               <div key={i} className="min-w-[260px] bg-white p-4 rounded-xl shadow">
//                 <Image
//                   src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
//                   width={300}
//                   height={500}
//                   alt="app"
//                   className="rounded-lg"
//                 />
//               </div>
//             ))}
//           </HorizontalScroll>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-20 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           What Our Users Say
//         </h2>

//         <div className="max-w-7xl mx-auto px-6">
//           <HorizontalScroll>
//             {[
//               "Amazing travel experience with Go India.",
//               "Medical Seva is very helpful in emergencies.",
//               "Both apps are easy to use and reliable.",
//               "Great service and fast support.",
//             ].map((text, i) => (
//               <div key={i} className="min-w-[300px] bg-gray-50 p-6 rounded-xl shadow">
//                 <p className="text-gray-600 mb-4">{text}</p>
//                 <h4 className="font-bold">User {i + 1}</h4>
//               </div>
//             ))}
//           </HorizontalScroll>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-20 bg-blue-50">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <FaBolt className="mx-auto text-blue-600 text-3xl mb-3"/>
//             <h3 className="font-bold">Fast Services</h3>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <FaShieldAlt className="mx-auto text-green-600 text-3xl mb-3"/>
//             <h3 className="font-bold">Secure Platform</h3>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow text-center">
//             <FaHeadset className="mx-auto text-purple-600 text-3xl mb-3"/>
//             <h3 className="font-bold">24/7 Support</h3>
//           </div>

//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center">
//         <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

//         <p className="mb-6">
//           Reach out for support, queries or partnerships.
//         </p>

//         <div className="flex flex-col md:flex-row justify-center gap-6">
//           <div>📧 contact@dualapps.com</div>
//           <div>📞 +91 9876543210</div>
//           <div>📍 India</div>
//         </div>
//       </section>

//       <footer className="py-6 text-center text-gray-500">
//         © 2026 DualApps
//       </footer>

//     </main>
//   );
// }

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
