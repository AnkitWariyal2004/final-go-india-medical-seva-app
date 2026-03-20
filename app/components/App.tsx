"use client";
import Image from "next/image";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaUserMd, FaCalendarCheck, FaHospital } from "react-icons/fa";
import React from "react"; // already use kar rahe ho
import { FaVideo } from "react-icons/fa"; // video icon
import { FaHotel } from "react-icons/fa";

const App = () => {
  return (
    <section id="apps" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <header className="text-center mb-20">
          <p className="text-sm text-blue-600 font-medium">OUR APPS</p>
          <h2 className="text-4xl font-bold mt-2">
            Travel & Healthcare Digital Platforms
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore Go India for travel planning and Medical Seva for healthcare
            digital growth. Two powerful platforms built for modern users.
          </p>
        </header>

        {/* MEDICAL SEVA */}
        <article className="grid lg:grid-cols-2 gap-16 items-center mb-10">
          {/* LEFT IMAGE WITH FLOATING LOGO */}
          <div className="relative">
            <Image
              src="/media/medical-seva.png"
              width={600}
              height={400}
              alt="Medical Seva healthcare platform"
              className="rounded-3xl shadow-xl w-full"
            />

            {/* Floating Logo */}
            <Image
              src="/media/medical-logo.png"
              width={60}
              height={60}
              alt="Medical Seva Logo"
              className="absolute top-4 left-4 bg-white p-2 rounded-xl shadow-md hover:scale-105 transition"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* HEADING WITH LOGO */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/media/medical-logo.png"
                width={50}
                height={50}
                alt="Medical Seva Logo"
                className="rounded-xl shadow-md"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                Medical Seva – Smart Healthcare Platform
              </h3>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Medical Seva is a modern healthcare platform designed to help
              doctors, clinics, and hospitals manage their digital presence and
              connect with patients more effectively.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              From patient engagement and appointment management to online
              visibility and healthcare services — everything is streamlined in
              one powerful system.
            </p>

            <ul className="space-y-2">
              <li>✔ Digital profile for doctors & clinics</li>
              <li>✔ Patient appointments & engagement tools</li>
              <li>✔ Online visibility & healthcare branding</li>
              <li>✔ Easy access to healthcare services</li>
              <li>✔ Secure and reliable platform</li>
            </ul>

            {/* CTA + LOGO */}
            <div className="flex items-center gap-3 mt-6">
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                Coming Soon
              </button>

              <Image
                src="/media/medical-logo.png"
                width={40}
                height={40}
                alt="logo"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </article>

        {/* WHY MEDICAL */}
        <section className="grid md:grid-cols-3 gap-8 -py-20">
          <article className="bg-blue-50 p-8 rounded-3xl hover:shadow-xl transition">
            <FaUserMd className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Doctor Digital Presence
            </h4>
            <p className="text-gray-600">
              Create a strong online identity and reach more patients with ease.
            </p>
          </article>

          <article className="bg-blue-50 p-8 rounded-3xl hover:shadow-xl transition">
            <FaCalendarCheck className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Appointment Management
            </h4>
            <p className="text-gray-600">
              Manage patient bookings and schedules efficiently in one place.
            </p>
          </article>

          <article className="bg-blue-50 p-8 rounded-3xl hover:shadow-xl transition">
            <FaHospital className="text-blue-600 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Complete Healthcare Solution
            </h4>
            <p className="text-gray-600">
              A unified platform for clinics, hospitals, and healthcare
              services.
            </p>
          </article>
        </section>

        {/* GO INDIA */}
        <article className="grid lg:grid-cols-2 gap-16 items-center py-30 -mb-20">
          {/* LEFT IMAGE WITH FLOATING LOGO */}
          <div className="relative">
            <Image
              src="/media/travel2.png"
              width={600}
              height={400}
              alt="Go India app for spiritual travel"
              className="rounded-3xl shadow-xl w-full"
            />

            {/* Floating Logo */}
            <Image
              src="/media/travel-logo.png"
              width={60}
              height={60}
              alt="Go India Logo"
              className="absolute top-4 left-4 bg-white p-2 rounded-xl shadow-md hover:scale-105 transition"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* HEADING WITH LOGO */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/media/travel-logo.png"
                width={50}
                height={50}
                alt="Go India Logo"
                className="rounded-xl shadow-md"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-500">
                Go India – Spiritual & Smart Travel App
              </h3>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Go India is a modern spiritual travel platform that helps users
              explore religious destinations, watch travel vlogs, and book
              essential services easily.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              From temple tours and darshan planning to hotels, prasad stores,
              and local services — everything is available in one place for a
              smooth and peaceful journey.
            </p>

            <ul className="space-y-2">
              <li>✔ Explore religious destinations across India</li>
              <li>✔ Watch travel vlogs & get real insights</li>
              <li>✔ Book hotels, dharamshala, bus & taxi</li>
              <li>✔ Find nearby places & services with maps</li>
              <li>✔ Pandit booking & puja services</li>
            </ul>

            {/* DOWNLOAD + LOGO */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.goindia.flutter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Download App
                </button>
              </a>

              <Image
                src="/media/travel-logo.png"
                width={40}
                height={40}
                alt="logo"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </article>

        {/* WHY GO INDIA */}
        <section className="grid md:grid-cols-3 gap-5 -py-30">
          <article className="bg-orange-50 p-8 rounded-3xl hover:shadow-xl transition">
            <FaMapMarkedAlt className="text-yellow-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Religious Destinations
            </h4>
            <p className="text-gray-600">
              Discover famous temples, yatras, and spiritual places across India
              with detailed insights.
            </p>
          </article>

          <article className="bg-orange-50 p-8 rounded-3xl hover:shadow-xl transition">
            <FaVideo className="text-yellow-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Travel Vlogs & Guides
            </h4>
            <p className="text-gray-600">
              Watch real travel videos and guides before planning your trip for
              better experience.
            </p>
          </article>

          <article className="bg-orange-50 p-8 rounded-3xl hover:shadow-xl transition">
            <FaHotel className="text-yellow-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">All-in-One Booking</h4>
            <p className="text-gray-600">
              Book hotels, dharamshala, taxis, prasad stores and more — all from
              one app.
            </p>
          </article>
        </section>
      </div>
    </section>
  );
};

export default App;
