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
        <section className="py-12 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            aria-label="List of appraisal services"
          >
            {/* Card 1 */}
            <div className="bg-white border p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Residential Appraisals</h3>
              <p className="text-base mb-4">
                We offer thorough residential appraisal services, including single-family homes, condos, townhouses, and luxury estates—tailored to meet lending, legal, or planning needs.
              </p>
              <Link
                to="/services/residential"
                className="text-orange-500 font-semibold hover:underline focus:outline focus:ring-2 focus:ring-orange-400"
              >
                READ MORE →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Commercial Appraisals</h3>
              <p className="text-base mb-4">
                Our team appraises income-producing and owner-occupied properties such as retail buildings, warehouses, and multi-family housing using income and market analysis.
              </p>
              <Link
                to="/services/commercial"
                className="text-orange-500 font-semibold hover:underline focus:outline focus:ring-2 focus:ring-orange-400"
              >
                READ MORE →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">FEMA 50% Rule Appraisals</h3>
              <p className="text-base mb-4">
                We help property owners navigate FEMA’s 50% Rule by providing detailed appraisals required for substantial improvement or reconstruction after damage.
              </p>
              <Link
                to="/services/fema"
                className="text-orange-500 font-semibold hover:underline focus:outline focus:ring-2 focus:ring-orange-400"
              >
                READ MORE →
              </Link>
            </div>
          </div>
        </section>

        <Quote />
      </main>

    </>
  );
}
