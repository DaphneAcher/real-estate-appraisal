import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Quote from "../../components/Quote";
import { useEffect, useRef } from "react";

export default function Commercial() {
  const headingRef = useRef();

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <>
      <Helmet>
        <title>Commercial Property Appraisers – Offices, Retail & More</title>
        <meta
          name="description"
          content="Certified commercial property appraisals for office buildings, retail spaces, mixed-use properties, and industrial lots across South Florida."
        />
      </Helmet>

      <main id="main-content" className="pt-24" role="main">
        <section className="py-12 px-6 text-center bg-gray-100" aria-labelledby="commercial-title">
          <h1
            id="commercial-title"
            ref={headingRef}
            tabIndex="-1"
            className="text-4xl font-bold mb-4 focus:outline-none"
          >
            Commercial Property Appraisals
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Trusted valuations for retail centers, office buildings, multifamily units, and commercial land parcels in South Florida.
          </p>
        </section>

        <section className="py-10 px-6 max-w-4xl mx-auto" aria-labelledby="commercial-included-heading">
          <h2 id="commercial-included-heading" className="text-2xl font-bold mb-4">
            What’s Included
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Exterior and interior inspection of the commercial property</li>
            <li>Market and income-based valuation approaches</li>
            <li>Zoning, usage, and legal compliance checks</li>
            <li>Final report suitable for banks, legal cases, and investors</li>
          </ul>
        </section>

        <section className="py-10 px-6 max-w-4xl mx-auto" aria-labelledby="commercial-use-heading">
          <h2 id="commercial-use-heading" className="text-2xl font-bold mb-4">
            When You Might Need a Commercial Appraisal
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Purchase or sale of a commercial building or land</li>
            <li>Refinancing or securing business loans</li>
            <li>Estate settlement, litigation, or divorce valuation</li>
            <li>Insurance, tax, and zoning disputes</li>
          </ul>
        </section>

        <Quote />
      </main>
    </>
  );
}
