"use clinet";
import { FaGlobe, FaUsers, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-medium">ABOUT US</p>
          <h2 className="text-4xl font-bold mt-2">
            Building a Smarter Digital Ecosystem
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are creating a unified platform where travel and healthcare come
            together to simplify everyday experiences and deliver real value to
            users.
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
              easier, faster, and more reliable. Whether it's planning a trip or
              building a healthcare presence, our platforms are designed to
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
  );
}
