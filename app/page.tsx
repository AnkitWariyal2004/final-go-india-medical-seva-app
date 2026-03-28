import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import App from "./components/App";
import About from "./components/About";
import Why from "./components/Why";

export default function Home() {
  return (
    <main className="bg-white text-[#0f172a] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* APPS  */}
      <App />

      {/* ABOUT */}
      <About />

      {/* WHY */}
      <Why />

      {/* FOOTER */}
      <footer className="bg-[#020617] text-gray-400 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Truebuddy LLB</h3>
            <p className="text-gray-400 leading-relaxed">
              We build digital platforms that simplify travel experiences and
              empower healthcare professionals to grow in the modern world.
            </p>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {/* Go India - Play Store */}
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.goindia.flutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer"
                >
                  Go India
                </a>
              </li>

              {/* Medical Seva - Coming Soon (optional disable style) */}
              <li>
                <span className="text-gray-400 cursor-not-allowed">
                  Medical Seva (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {/* About -> Scroll to #about */}
              <li>
                <a href="#about" className="hover:text-white cursor-pointer">
                  About
                </a>
              </li>

              {/* Privacy Policy -> External Link */}
              <li>
                <a
                  href="https://goindiaapp.in/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="https://goindiaapp.in/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="mb-2">📧 officialtruebuddy@gmail.com</p>
            <p className="mb-2">📞 +91 9583550017</p>
            <p className="mb-2">📞 +91 7008137751</p>
            <p>📍 India</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 Turebuddy. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
