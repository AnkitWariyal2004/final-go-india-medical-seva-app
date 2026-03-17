export default function Features() {
  return (
    <section id="features" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">
        Features
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <div>
          <h3 className="font-bold text-xl mb-3">Go India</h3>
          <ul className="space-y-2">
            <li>✈️ Flight & Train Booking</li>
            <li>🏨 Hotels & Tours</li>
            <li>📍 Travel Guides</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Medical Seva</h3>
          <ul className="space-y-2">
            <li>👨‍⚕️ Doctor Consultation</li>
            <li>💊 Medicine Delivery</li>
            <li>🩺 Health Tips</li>
          </ul>
        </div>
      </div>
    </section>
  );
}