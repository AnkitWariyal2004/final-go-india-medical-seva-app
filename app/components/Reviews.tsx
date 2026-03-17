export default function Reviews() {
  return (
    <section id="reviews" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">
        User Reviews
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        <div className="shadow p-4 rounded">
          <p>"Amazing travel app!"</p>
          <h4 className="font-bold mt-2">Priya</h4>
        </div>

        <div className="shadow p-4 rounded">
          <p>"Best healthcare support!"</p>
          <h4 className="font-bold mt-2">Amit</h4>
        </div>
      </div>
    </section>
  );
}