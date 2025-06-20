import { Link } from "react-router-dom";
import cities from "../data/cities";
import { Helmet } from "react-helmet-async";


export default function ServiceAreas() {
    return (
        <>
        <Helmet>
        <title>Areas We Serve | South Florida Property Appraisals</title>
        <meta name="description" content="Wachtstetter Enterprises provides certified property appraisals throughout Broward, Miami-Dade, and Palm Beach Counties." />
        </Helmet>

         <div className="py-12 px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Our Florida Service Areas</h1>
            <p className="text-base text-center mb-10">
                We provide licensed residential and commercial appraisal services in the following South Florida cities:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 list-disc list-inside">
                {cities.map((city) => {
                    const slug = city.toLowerCase().replace(/\s+/g, "-");
                    return (
                    <li key={slug}>
                        <Link to={`/${slug}`} className="text-blue-600 hover:underline">
                        {city}
                        </Link>
                    </li>
                    );
                })}
            </ul>
        </div>

        </>
    );
}