import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function Location() {
    const params = useParams()
    const location = params.location

    const formatted = location.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")


    return (
        <>
            <Helmet>
                <title>Property Appraiser in {formatted}</title>
                <meta name="description" content={`Certified home and commercial property appraisals in ${formatted}. Contact us for expert valuation services.`} />
            </Helmet>


            <div>
                <section className="py-12 px-6 text-center">
                    <h1 className="text-4xl font-bold">Certified Property Appraisals in {formatted}</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        Residential, commercial, and FEMA 50% Rule appraisals trusted across {formatted}.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold">Request Appraisal</button>
                        <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded-md">Contact Us</button>
                    </div>
                </section>

                <section className="py-12 px-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold">What Is a Property Appraisal?</h2>
                    <p className="mt-4 text-base">
                        An appraisal is a market-driven estimate of your property's value. At Wachtstetter Enterprises Inc, we apply the three industry-standard valuation methods—Cost, Sales Comparison, and Income Approach—to give you an expert, defensible appraisal. Whether you're buying, selling, refinancing, or appealing taxes, we provide accurate and timely reports across {formatted}.
                    </p>
                </section>

                <section className="py-12 px-6 bg-gray-50">
                    <h2 className="text-2xl font-bold text-center">Why Clients Choose Our {formatted} Appraisal Services</h2>
                    <ul className="mt-6 max-w-4xl mx-auto space-y-4 list-disc list-inside text-base">
                        <li>20+ years of real estate experience across South Florida</li>
                        <li>Certified in residential, commercial, and FEMA 50% Rule appraisals</li>
                        <li>Fast turnarounds—typically within 24–48 hours</li>
                        <li>Appraisal reports tailored for legal, lending, and insurance use</li>
                        <li>Clear communication and guidance through the entire process</li>
                    </ul>
                </section>

                <section className="py-12 px-6 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">Types of Appraisals We Offer</h2>
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
                    <h2 className="text-2xl font-bold mb-6 text-center">How We Determine Property Value</h2>
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
                    <h2 className="text-2xl font-bold mb-6 text-center">When Clients Typically Request an Appraisal</h2>
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
                    <h2 className="text-2xl font-bold mb-4">Need an Appraisal in {formatted}?</h2>
                    <p className="text-base max-w-xl mx-auto mb-6">
                        Whether you're settling an estate, refinancing, or planning a renovation, we provide fast, certified appraisals throughout {formatted}.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-md transition">
                        Get Your Appraisal Quote
                    </button>
                </section>






            </div>

        </>
    )
}