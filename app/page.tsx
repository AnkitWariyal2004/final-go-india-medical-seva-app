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

import Image from "next/image";
import Navbar from "./components/Navbar";
import HorizontalScroll from "./components/HorizontalScroll";

export default function Home() {
  return (
    <main className="bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* HERO */}
      <section id="home" className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Smart Digital Solutions for
              <span className="text-blue-600"> Travel & Healthcare</span>
            </h1>

            <p className="text-gray-600 mb-6">
              We are a partnership-driven company delivering innovative digital
              services through two powerful applications. Our goal is to
              simplify daily life by combining essential services into one
              ecosystem.
            </p>

            <p className="text-gray-600 mb-6">
              <b>Go India</b> helps users plan and manage their travel
              efficiently, while <b>Medical Seva</b> ensures quick access to
              healthcare services.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                Explore Apps
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg">
                Learn More
              </button>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="apps"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">About Our Partnership</h2>

          <p className="text-gray-600 mb-4">
            Our company is built on collaboration and innovation. By combining
            expertise in both travel and healthcare, we aim to provide seamless
            digital solutions that improve everyday life.
          </p>

          <p className="text-gray-600">
            We believe in technology that is simple, accessible, and impactful.
            With our platforms, users can manage essential services without
            hassle.
          </p>
        </div>
      </section>

      {/* GO INDIA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="travel"
            width={500}
            height={300}
            className="rounded-xl shadow"
          />

          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Go India – Travel Made Simple
            </h2>

            <p className="text-gray-600 mb-4">
              Go India is designed to make travel easier and more enjoyable.
              From booking tickets to exploring destinations, everything is
              available in one place.
            </p>

            <p className="text-gray-600 mb-4">
              Whether you are planning a short trip or a long vacation, Go India
              provides tools and recommendations to help you travel smarter.
            </p>

            <ul className="space-y-2">
              <li>✔ Book flights, trains, and buses</li>
              <li>✔ Discover top destinations</li>
              <li>✔ Get hotel and tour deals</li>
              <li>✔ Easy and user-friendly interface</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MEDICAL SEVA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Medical Seva – Healthcare Anytime
            </h2>

            <p className="text-gray-600 mb-4">
              Medical Seva connects users with healthcare professionals and
              services instantly. It is designed to provide quick and reliable
              medical support.
            </p>

            <p className="text-gray-600 mb-4">
              From doctor consultations to medicine delivery, everything is
              available at your fingertips, ensuring convenience and safety.
            </p>

            <ul className="space-y-2">
              <li>✔ Online doctor consultation</li>
              <li>✔ Medicine delivery at home</li>
              <li>✔ Health checkup bookings</li>
              <li>✔ Digital reports and records</li>
            </ul>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="medical"
            width={500}
            height={300}
            className="rounded-xl shadow"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="max-w-7xl mx-auto px-6">
          <HorizontalScroll>
            {[
              {
                name: "Rahul Sharma",
                text: "Go India made my travel planning super easy and smooth.",
              },
              {
                name: "Priya Verma",
                text: "Medical Seva helped me get doctor consultation instantly.",
              },
              {
                name: "Amit Singh",
                text: "Very reliable apps, both travel and healthcare in one place.",
              },
              {
                name: "Neha Gupta",
                text: "Loved the UI and fast services. Highly recommended.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] bg-gray-50 p-6 rounded-xl shadow"
              >
                <p className="text-gray-600 mb-4">"{item.text}"</p>
                <h4 className="font-bold">{item.name}</h4>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* SCREENSHOT SECTION */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          App Screenshots
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {/* Replace these with your real screenshots */}
          <div className="bg-white p-4 rounded-xl shadow">
            <Image
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
              alt="app"
              width={300}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <Image
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
              alt="app"
              width={300}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <Image
              src="https://images.unsplash.com/photo-1580910051074-3eb694886505"
              alt="app"
              width={300}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            "User Friendly Experience",
            "Secure & Trusted Platform",
            "Fast & Reliable Services",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-bold text-lg">{item}</h3>
              <p className="text-gray-500 mt-2">
                Designed to deliver the best experience to our users.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-sky-500 text-white"
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <p className="mb-6">
            We are always here to help you. Reach out for support, queries, or
            partnerships.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>📧 contact@dualapps.com</div>
            <div>📞 +91 9876543210</div>
            <div>📍 India</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500">
        © 2026 DualApps. All rights reserved.
      </footer>
    </main>
  );
}
