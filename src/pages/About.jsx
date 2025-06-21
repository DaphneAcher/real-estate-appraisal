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

      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">About Wachtstetter Enterprises Inc</h2>
        <p className="text-base text-gray-700 text-center">Wachtstetter Enterprises Inc has been a trusted name in the South Florida appraisal space for over 38 years. Founded to deliver expert real estate appraisals with fast turnaround times, we prioritize accuracy, client service, and professionalism in every report.</p>
      </section>
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4"><strong>What We Do</strong></h2>
        <p className="text-base text-gray-700 text-center">We specialize in residential, commercial, and specialty appraisals, including FEMA 50% Rule and luxury properties. Our clients include attorneys, banks, government agencies, real estate professionals, and individuals seeking accurate valuations. We offer both form and narrative report formats to meet different legal, lending, and planning needs.</p>
      </section>
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4"><strong>Our Commitment</strong></h2>
        <p className="text-base text-gray-700 text-center">Our team is committed to clear communication, fast response times, and delivering appraisal reports that meet the highest standards. Most of our business comes from referrals and repeat clients, a testament to the trust we've built through honesty, precision, and client-first service.</p>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Meet the Appraiser</h2>
        <p className="text-base text-center text-gray-700 mb-4">
          Thomas R. Wachtstetter, ASA is a certified general appraiser and licensed real estate broker with decades of experience in residential and commercial property valuations.
        </p>
        <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
          <li>State Certified General Appraiser #RZ451</li>
          <li>Licensed Real Estate Broker #0461624</li>
          <li>A.S.A. Designated Senior Member, American Society of Appraisers</li>
          <li>Over 35 years of appraisal experience in South Florida</li>
          <li>Accepted as an expert witness in Broward Circuit Court and U.S. Bankruptcy Court</li>
        </ul>
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
