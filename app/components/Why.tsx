'use client'
import React from 'react'
import { FaBolt, FaShieldAlt, FaRocket } from "react-icons/fa";
const Why = () => {
  return (
    <section id="why" className="py-15 bg-[#f8fafc]">
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
  )
}

export default Why
