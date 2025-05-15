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

            <h1>Property Appraiser in {formatted}</h1>

        </>
    )
}