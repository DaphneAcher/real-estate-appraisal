import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { citySlugs } from "../data/cities";

export default function Location() {
  const params = useParams();
  const location = params.location;

  if (!citySlugs.includes(location)) {
    return <Navigate to="/404" replace />;
  }

  const formatted = location
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <Helmet>
        <title>Property Appraiser in {formatted}</title>
        <meta
          name="description"
          content={`Certified home and commercial property appraisals in ${formatted}. Contact us for expert valuation services.`}
        />
      </Helmet>

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <main id="main-content" role="main">
        <section
          className="relative h-[55vh] flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/hero1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-0"></div>
          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-7xl font-extrabold max-w-6xl mb-8 text-white drop-shadow-[0_6px_10px_rgba(0,0,0,0.85)]">
              REAL ESTATE APPRAISALS IN {formatted.toUpperCase()}
            </h1>
            <div className="flex gap-6 justify-center">
              <a
                href="/services"
                className="bg-[#5C4033] hover:bg-[#D4AF37] text-white text-lg md:text-xl px-8 py-4 rounded-md font-semibold tracking-wide"
              >
                View Services
              </a>
              <a
                href="/contact"
                className="border border-white text-white text-lg md:text-xl px-8 py-4 rounded-md font-semibold tracking-wide"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Appraisal Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Residential Appraisals</h3>
              <p className="text-base text-gray-700">
                Single-family homes, townhomes, condos, and luxury properties—
                tailored reports for loans, legal, and planning needs.
              </p>
            </div>
            <div className="bg-white border p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Commercial Appraisals</h3>
              <p className="text-base text-gray-700">
                Warehouses, retail, and income-producing properties, appraised
                using income and market-based approaches.
              </p>
            </div>
            <div className="bg-white border p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">
                FEMA 50% Rule Appraisals
              </h3>
              <p className="text-base text-gray-700">
                We help property owners comply with FEMA requirements by
                providing reliable structure-only valuation reports.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 text-center">
          <h1 className="text-4xl font-bold">
            Certified Property Appraisals in {formatted}
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Residential, commercial, and FEMA 50% Rule appraisals trusted across {formatted}.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/order-form" className="bg-[#5C4033] hover:bg-[#D4AF37] text-white px-4 py-2 rounded-md font-semibold">
              Request Appraisal
            </a>
            <a href="/contact" className="border border-gray-400 text-gray-800 px-4 py-2 rounded-md">
              Contact Us
            </a>
          </div>
        </section>

        <section className="py-12 px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">What Is a Property Appraisal?</h2>
          <p className="mt-4 text-base">
            An appraisal is a market-driven estimate of your property's value. At Wachtstetter Enterprises Inc, we apply the three industry-standard valuation methods—Cost, Sales Comparison, and Income Approach—to give you an expert, defensible appraisal. Whether you're buying, selling, refinancing, or appealing taxes, we provide accurate and timely reports across {formatted}.
          </p>
        </section>

        <section className="py-12 px-6 bg-gray-50">
          <h2 className="text-2xl font-bold text-center">
            Why Clients Choose Our {formatted} Appraisal Services
          </h2>
          <ul className="mt-6 max-w-4xl mx-auto space-y-4 list-disc list-inside text-base">
            <li>20+ years of real estate experience across South Florida</li>
            <li>Certified in residential, commercial, and FEMA 50% Rule appraisals</li>
            <li>Fast turnarounds—typically within 24–48 hours</li>
            <li>Appraisal reports tailored for legal, lending, and insurance use</li>
            <li>Clear communication and guidance through the entire process</li>
          </ul>
        </section>

        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Types of Appraisals We Offer
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base list-disc list-inside">
            <li>Residential Appraisals</li>
            <li>Commercial Property Appraisals</li>
            <li>FEMA 50% Rule Compliance Appraisals</li>
            <li>Divorce & Estate Valuation</li>
            <li>PMI Removal Appraisals</li>
            <li>Tax Appeal Appraisals</li>
            <li>Green Home Appraisals</li>
            <li>Luxury Property Appraisals</li>
          </ul>
        </section>

        <section className="py-12 px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            How We Determine Property Value
          </h2>
          <ul className="space-y-6 text-base list-disc list-inside">
            <li>
              <strong>Sales Comparison Approach:</strong> We analyze recent sales of similar properties to estimate value based on current market conditions.
            </li>
            <li>
              <strong>Cost Approach:</strong> We estimate the cost to rebuild the property from scratch, subtract depreciation, and add land value.
            </li>
            <li>
              <strong>Income Approach:</strong> Primarily used for investment properties, this method estimates value based on potential income generation.
            </li>
          </ul>
        </section>

        <section className="py-12 px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            When Clients Typically Request an Appraisal
          </h2>
          <ul className="space-y-4 text-base list-disc list-inside">
            <li><strong>Estate Planning or Inheritance:</strong> Establish the fair market value of inherited properties.</li>
            <li><strong>Divorce or Partnership Dissolution:</strong> Provide an objective value when dividing assets.</li>
            <li><strong>Private Sale or Purchase:</strong> Know the true value before listing or making an offer.</li>
            <li><strong>PMI Removal:</strong> Eliminate private mortgage insurance by proving equity.</li>
            <li><strong>Loan Qualification:</strong> Help banks determine the risk and loan amount.</li>
            <li><strong>Appealing Property Taxes:</strong> Use a third-party valuation to challenge over-assessed property values.</li>
          </ul>
        </section>

        <section className="py-12 px-6 bg-orange-50 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need an Appraisal in {formatted}?
          </h2>
          <p className="text-base max-w-xl mx-auto mb-6">
            Whether you're settling an estate, refinancing, or planning a renovation, we provide fast, certified appraisals throughout {formatted}.
          </p>
          <a
            href="/order-form"
            className="bg-[#5C4033] hover:bg-[#D4AF37] text-white font-bold px-6 py-3 rounded-md transition inline-block"
          >
            Get Your Appraisal Quote
          </a>
        </section>
      </main>
    </>
  );
}
