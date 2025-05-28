import Quote from "../components/Quote"

export default function Home() {
  return (
    <>
      <section 
        className="h-[70vh] flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/hero1.jpg')" }}
>       <h1 className="text-5xl md:text-6xl font-bold max-w-5xl mb-6 text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">Wachtstetter Enterprises Inc</h1>
       <div className="flex gap-4">
          <a href="/services" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold">
            View Services
          </a>
          <a href="/contact" className="border border-white text-white px-6 py-3 rounded-md font-semibold">
            Contact Us
          </a>
        </div>
    </section>

    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Appraisal Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white border p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Residential Appraisals</h3>
          <p className="text-base text-gray-700">Single-family homes, townhomes, condos, and luxury properties—tailored reports for loans, legal, and planning needs.</p>
        </div>
        <div className="bg-white border p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Commercial Appraisals</h3>
          <p className="text-base text-gray-700">Warehouses, retail, and income-producing properties, appraised using income and market-based approaches.</p>
        </div>
        <div className="bg-white border p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">FEMA 50% Rule Appraisals</h3>
          <p className="text-base text-gray-700">We help property owners comply with FEMA requirements by providing reliable structure-only valuation reports.</p>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
      <p className="text-base text-gray-700">
        With over 38 years of appraisal experience in South Florida, Wachtstetter Enterprises Inc provides accurate, fast, and court-defensible appraisals for residential and commercial properties. We're proud to serve clients ranging from attorneys to homeowners and banks—with the professionalism and responsiveness they expect.
      </p>
    </section>

    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
      <ul className="list-disc list-inside space-y-4 text-base text-gray-700">
        <li>Over 38 years of appraisal experience across South Florida</li>
        <li>Certified in residential, commercial, and FEMA 50% Rule appraisals</li>
        <li>Quick turnaround — typically within 24–48 hours</li>
        <li>Accepted as an expert witness in court proceedings</li>
        <li>Responsive, transparent communication with every client</li>
        <li>Appraisals formatted for lending, legal, and tax use</li>
      </ul>
    </section>

    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
      <div className="space-y-10">
        <blockquote className="text-gray-700 text-base italic">
          “Tom is professional, timely, and accurate. We’ve used Wachtstetter Enterprises for years and always recommend them to our clients.”
          <br /><span className="block mt-2 font-semibold text-orange-600">— South Florida Real Estate Attorney</span>
        </blockquote>
        <blockquote className="text-gray-700 text-base italic">
          “Clear reports, great communication, and fast delivery. What more can you ask for from an appraiser?”
          <br /><span className="block mt-2 font-semibold text-orange-600">— Mortgage Broker, Boca Raton</span>
        </blockquote>
      </div>
    </section>

    <Quote />


    </>

  );
}
