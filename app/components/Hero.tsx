export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 text-center bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Explore Our Apps
      </h1>
      <p className="text-gray-600 mb-10">
        Travel with Go India & Get Healthcare with Medical Seva
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {/* Go India */}
        <div className="bg-orange-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-2">Go India</h2>
          <p>Travel & Explore India easily</p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
            Download
          </button>
        </div>

        {/* Medical Seva */}
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-2">Medical Seva</h2>
          <p>Your health partner</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Download
          </button>
        </div>
      </div>
    </section>
  );
}