import Quote from "../components/Quote"
import { Link } from "react-router-dom";
import heroImage from '/src/assets/hero1.jpg';
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>South Florida Home Appraisals | Wachtstetter Enterprises Inc</title>
        <meta
          name="description"
          content="38+ years of certified home appraisal expertise in South Florida. Fast turnaround, FEMA 50% Rule appraisals, and legal-ready reports."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wachtstetter Enterprises Inc",
              "image": "https://honestappraiser.com/logoVector.svg",
              "@id": "https://honestappraiser.com/",
              "url": "https://honestappraiser.com/",
              "telephone": "954-791-4667",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4200 Davie Rd",
                "addressLocality": "Davie",
                "addressRegion": "FL",
                "postalCode": "33314",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.0795,
                "longitude": -80.2324
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/wachtstetterappraisals"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <main id="main-content" role="main">
        <section className="h-[55vh] relative flex items-start justify-center pt-32 text-white bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-0"></div>
          <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-snug tracking-wide mb-10 w-full max-w-[28rem] sm:max-w-[32rem] md:max-w-[36rem] mx-auto text-center">
              <span className="whitespace-nowrap">Home Appraisals</span><br />
              <span className="block whitespace-nowrap">in South Florida</span>
            </h1>
            <div className="flex justify-center gap-4">
              <Link to="/services" className="bg-[#4D2C20] hover:bg-yellow-600 text-white text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold transition">
                View Services
              </Link>
              <Link to="/contact" className="border border-white hover:bg-white hover:text-black text-white text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold transition">
                Contact Us
              </Link>
            </div>
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
      </main>
    </>
  );
}
