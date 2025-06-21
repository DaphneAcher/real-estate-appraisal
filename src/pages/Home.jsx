import Quote from "../components/Quote";
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

      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <main id="main-content" role="main">
        {/* Hero */}
        <section
          className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] pt-32 pb-[10rem] flex items-start justify-center text-white bg-cover bg-center font-playfair"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-0"></div>

          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            {/* Animated Heading */}
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-light leading-snug tracking-wide mb-10 opacity-0 translate-y-6 animate-fade-up delay-[0ms]">
              <span className="block">Home Appraisals</span>
              <span className="block">in South Florida</span>
            </h1>

            {/* Animated Buttons */}
            <div className="flex justify-center gap-4 opacity-0 translate-y-6 animate-fade-up delay-[150ms]">
              <Link
                to="/services"
                className="bg-[#F5F1EA] hover:bg-[#C3A36B] text-black text-lg px-6 py-3 rounded font-work font-semibold uppercase tracking-wide transition"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="border border-white hover:bg-white hover:text-black text-white text-lg px-6 py-3 rounded font-work font-semibold uppercase tracking-wide transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Promo Feature Highlights Floating Section */}
        <section className="relative z-10 -mt-24 lg:-mt-36">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">

              {/* Promo 1 */}
              <div className="p-8 animate-fade-up delay-[0ms]">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-neutral-900">Local Expertise Since 1987  </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Deep appraisal knowledge across Broward & South Florida communities.
                </p>
              </div>

              {/* Promo 2 — Blue Accent */}
              <div className="p-8 bg-[#1E3A5F] text-white animate-fade-up delay-[100ms]">
                <h3 className="font-playfair text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-base leading-relaxed">
                  Transparent and fair rates — no hidden fees, ever.
                </p>
              </div>

              {/* Promo 3 */}
              <div className="p-8 animate-fade-up delay-[200ms]">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-neutral-900">Certified, Multi‑Scope Appraisals  </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Residential, Commercial, FEMA 50% Rule coverage—with court‑ready reports.
                </p>
              </div>

            </div>
          </div>
        </section>




      {/* Our Appraisal Services Section */}
      <section className="py-20 px-6 bg-[#F5F1EA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair mb-12 text-center text-neutral-900 animate-fade-up">
            Our Appraisal Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Residential */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-neutral-200 translate-y-6 opacity-0 animate-fade-up delay-[0ms]">
              <h3 className="text-lg font-playfair font-semibold mb-2">Residential Appraisals</h3>
              <p className="text-gray-700 text-sm">
                Single-family homes, townhomes, condos, and luxury properties—tailored reports for loans, legal, and planning needs.
              </p>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-neutral-200 translate-y-6 opacity-0 animate-fade-up delay-[100ms]">
              <h3 className="text-lg font-playfair font-semibold mb-2">Commercial Appraisals</h3>
              <p className="text-gray-700 text-sm">
                Warehouses, retail, and income-producing properties, appraised using income and market-based approaches.
              </p>
            </div>

            {/* FEMA */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-neutral-200 translate-y-6 opacity-0 animate-fade-up delay-[200ms]">
              <h3 className="text-lg font-playfair font-semibold mb-2">FEMA 50% Rule Appraisals</h3>
              <p className="text-gray-700 text-sm">
                We help property owners comply with FEMA requirements by providing reliable structure-only valuation reports.
              </p>
            </div>
          </div>
        </div>
      </section>


        {/* Who We Are */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-playfair">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <p className="text-base text-gray-700">
              With over 38 years of appraisal experience in South Florida, Wachtstetter Enterprises Inc provides accurate, fast, and court-defensible appraisals for residential and commercial properties. We're proud to serve clients ranging from attorneys to homeowners and banks—with the professionalism and responsiveness they expect.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder_2.jpg" alt="South Florida property" className="rounded shadow object-cover" />
              <img src="/placeholder_3.jpg" alt="Appraisal process in action" className="rounded shadow object-cover" />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 font-playfair">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-4 text-base text-gray-700">
            <li>Over 38 years of appraisal experience across South Florida</li>
            <li>Certified in residential, commercial, and FEMA 50% Rule appraisals</li>
            <li>Quick turnaround — typically within 24–48 hours</li>
            <li>Accepted as an expert witness in court proceedings</li>
            <li>Responsive, transparent communication with every client</li>
            <li>Appraisals formatted for lending, legal, and tax use</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 font-playfair">What Our Clients Say</h2>
          <div className="space-y-10">
            <blockquote className="text-gray-700 text-base italic">
              “Tom is professional, timely, and accurate. We’ve used Wachtstetter Enterprises for years and always recommend them to our clients.”
              <br /><span className="block mt-2 font-semibold text-[#C08552]">— South Florida Real Estate Attorney</span>
            </blockquote>
            <blockquote className="text-gray-700 text-base italic">
              “Clear reports, great communication, and fast delivery. What more can you ask for from an appraiser?”
              <br /><span className="block mt-2 font-semibold text-[#C08552]">— Mortgage Broker, Boca Raton</span>
            </blockquote>
          </div>
        </section>

        <Quote />
      </main>
    </>
  );
}