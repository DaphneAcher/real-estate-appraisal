import Quote from "../components/Quote";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


export default function Services() {
  return (
    <>
      <Helmet>
        <title>Property Appraisal Services | South Florida Residential & Commercial</title>
        <meta
          name="description"
          content="Explore certified property appraisal services in South Florida. We specialize in residential, commercial, and FEMA 50% Rule appraisals with fast turnaround."
        />
      </Helmet>

      {/* Skip Link for Keyboard Users */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <main id="main-content" role="main">
        <section className="py-24 px-6 max-w-screen-2xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 font-playfair">
            Our Appraisal Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white border border-neutral-200 px-10 py-14 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex items-start gap-4 animate-fade-up delay-[0ms]">
              <div className="text-4xl"></div>
              <div>
                <h3 className="text-3xl font-dmserif text-black mb-3">
                  Residential Appraisals
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  Appraisals for single-family homes, condos, and luxury estates — built for lending, legal, or planning purposes.
                </p>
                <Link
                  to="/services/residential"
                  className="text-[#C26B32] text-md font-medium hover:underline focus:outline focus:ring-2 focus:ring-[#C26B32]"
                >
                  READ MORE →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-200 px-10 py-14 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex items-start gap-4 animate-fade-up delay-[100ms]">
              <div className="text-4xl"></div>
              <div>
                <h3 className="text-3xl font-dmserif text-black mb-3">
                  Commercial Appraisals
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  Accurate valuation for retail, office, and income-generating properties — using both market and income approaches.
                </p>
                <Link
                  to="/services/commercial"
                  className="text-[#C26B32] text-md font-medium hover:underline focus:outline focus:ring-2 focus:ring-[#C26B32]"
                >
                  READ MORE →
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-neutral-200 px-10 py-14 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex items-start gap-4 animate-fade-up delay-[200ms]">
              <div className="text-4xl"></div>
              <div>
                <h3 className="text-3xl font-dmserif text-black mb-3">
                  FEMA 50% Rule Appraisals
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  Specialized “structure-only” appraisals for FEMA compliance — required for rebuilds and improvements in flood-prone zones.
                </p>
                <Link
                  to="/services/fema"
                  className="text-[#C26B32] text-md font-medium hover:underline focus:outline focus:ring-2 focus:ring-[#C26B32]"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Quote />
      </main>

    </>
  );
}
