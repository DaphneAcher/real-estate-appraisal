import { Helmet } from "react-helmet-async";

import Quote from "../components/Quote"

export default function About() {
  return (
    <>
    <Helmet>
      <title>About Our Appraisal Expertise | Wachtstetter Enterprises</title>
      <meta 
        name="description" 
        content="Meet Thomas Wachtstetter, ASA — a certified appraiser with 38+ years of experience in South Florida real estate valuations for residential, commercial, and FEMA 50% Rule cases." 
      />
    </Helmet>

    <main id="main-content">

      <section className="py-28 px-6 bg-[#FAFAFA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="relative mb-20 text-center">
            <p className="text-xl uppercase tracking-widest text-[#C3A36B] font-semibold">
              Meet the Appraiser
            </p>
            <h2 className="text-[8rem] font-extrabold text-neutral-200 leading-none -mb-6">
              —EXPERT—
            </h2>
            <h3 className="text-6xl font-playfair font-bold text-neutral-900">
              Thomas R. Wachtstetter, ASA
            </h3>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT: Image */}
            <div>
              <img
                src=""
                alt="Thomas Wachtstetter, ASA — Certified Appraiser"
                className="rounded-xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>

            {/* RIGHT: Bio + Credentials */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Thomas R. Wachtstetter, ASA is a Certified General Appraiser and licensed Real Estate Broker with decades of valuation expertise across South Florida.
              </p>
              <ul className="space-y-3">
                {[
                  "State Certified General Appraiser #RZ451",
                  "Licensed Real Estate Broker #0461624",
                  "A.S.A. Designated Senior Member, American Society of Appraisers",
                  "38+ years of appraisal experience in South Florida",
                  "Accepted as an expert witness in Florida Circuit Court and U.S. Bankruptcy Court",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1E3A5F] text-white text-xs">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Experience Snapshot</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
          <li>Former President of the Broward and Miami chapters of ASA and NAIFA</li>
          <li>Chief Appraiser at Farm Credit of South Florida (1989–1995)</li>
          <li>Handled residential, commercial, agricultural, and specialty-use appraisals</li>
          <li>Experience working with estate planning, tax appeal, litigation, and zoning</li>
          <li>Accepted as expert witness in Florida Circuit Court and U.S. Bankruptcy Court</li>
          <li>Holds a B.S. in Marketing from University of Central Florida</li>
          <li>Appraisal coursework from Uniform Standards of Professional Practice & FNMA</li>
        </ul>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Clients We’ve Served</h2>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
          <li><strong>Banks:</strong> Regions Bank, Farm Credit of Florida, Centennial Bank, USDA/Farm Service Agency</li>
          <li><strong>Mortgage Companies:</strong> ACAT Mortgage, Cornerstone Home Lending, 360 Mortgage, Shelter Mortgage</li>
          <li><strong>Credit Unions:</strong> Hollywood Employee Credit Union, Eastern Credit Union, Broward Teachers Credit Union</li>
          <li><strong>Attorneys:</strong> Legal professionals involved in estate, divorce, bankruptcy, and litigation cases</li>
          <li><strong>Appraisal Management Companies:</strong> First American, Coester VMS, Marketwise Valuation, Sunshine AMS</li>
        </ul>
      </section>

      <Quote />
    </main>

    
    </>

  );
}
