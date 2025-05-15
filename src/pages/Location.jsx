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


            </div>

        </>
    )
}