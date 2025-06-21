import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Quote from "../../components/Quote"; // Include if you’re using the Quote CTA
import { useEffect, useRef } from "react";

export default function Residential() {
  const headingRef = useRef();

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <>
      <Helmet>
        <title>Certified Residential Appraisals in South Florida</title>
        <meta
          name="description"
          content="Professional appraisals for single-family homes, condos, townhouses, and estates. Trusted throughout Miami, Fort Lauderdale, and South Florida."
        />
      </Helmet>

      {/* Skip Link Target */}
      <main id="main-content" className="pt-24" role="main">
        <section
          className="py-12 px-6 text-center bg-gray-100"
          aria-labelledby="residential-title"
        >
          <h1
            id="residential-title"
            ref={headingRef}
            tabIndex="-1"
            className="text-4xl font-bold mb-4 focus:outline-none"
          >
            Residential Property Appraisals
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Certified appraisals for homes, condos, townhouses, and luxury estates across South Florida. Trusted by homeowners, buyers, attorneys, and lenders.
          </p>
        </section>

        <section
          className="py-10 px-6 max-w-4xl mx-auto"
          aria-labelledby="included-heading"
        >
          <h2
            id="included-heading"
            className="text-2xl font-bold mb-4"
          >
            What’s Included
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Exterior and interior inspection of the property</li>
            <li>Comparative Market Analysis (CMA) using recent sales</li>
            <li>Legal, location, and market condition research</li>
            <li>Final report accepted by lenders, legal firms, and municipalities</li>
          </ul>
        </section>

        <section
          className="py-10 px-6 max-w-4xl mx-auto"
          aria-labelledby="when-needed-heading"
        >
          <h2
            id="when-needed-heading"
            className="text-2xl font-bold mb-4"
          >
            When You Might Need a Residential Appraisal
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Mortgage refinancing or home equity lines</li>
            <li>Divorce or estate settlement purposes</li>
            <li>Pre-listing or pre-purchase valuation</li>
            <li>Tax appeals or insurance claims</li>
          </ul>
        </section>

        <Quote />
      </main>
    </>
  );
}
