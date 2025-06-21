import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Quote from "../../components/Quote";
import { useEffect, useRef } from "react";

export default function FEMA() {
  const headingRef = useRef();

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <>
      <Helmet>
        <title>FEMA 50% Rule Appraisals – Flood Zone Compliance</title>
        <meta
          name="description"
          content="Need a FEMA-compliant appraisal? We specialize in 50% Rule appraisals for properties in flood-prone areas of South Florida. Fast, certified reports."
        />
      </Helmet>

      <main id="main-content" className="pt-24" role="main">
        <section className="py-12 px-6 text-center bg-gray-100" aria-labelledby="fema-title">
          <h1
            id="fema-title"
            ref={headingRef}
            tabIndex="-1"
            className="text-4xl font-bold mb-4 focus:outline-none"
          >
            FEMA 50% Rule Appraisals
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            We provide certified appraisals that comply with FEMA's 50% Rule for flood-prone areas in South Florida.
          </p>
        </section>

        <section className="py-10 px-6 max-w-4xl mx-auto" aria-labelledby="fema-included-heading">
          <h2 id="fema-included-heading" className="text-2xl font-bold mb-4">
            What’s Included
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Certified market value estimate of the structure (excluding land)</li>
            <li>Documentation for FEMA Substantial Improvement requirements</li>
            <li>Formatted reports accepted by city building departments</li>
            <li>Fast delivery to support permitting and construction timelines</li>
          </ul>
        </section>

        <section className="py-10 px-6 max-w-4xl mx-auto" aria-labelledby="fema-needed-heading">
          <h2 id="fema-needed-heading" className="text-2xl font-bold mb-4">
            When You Might Need a FEMA Appraisal
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Rebuilding, remodeling, or elevating a structure in a flood zone</li>
            <li>Required by city/county permitting under the 50% Rule</li>
            <li>Clarifying value for insurance or federal compliance</li>
          </ul>
        </section>

        <Quote />
      </main>
    </>
  );
}
