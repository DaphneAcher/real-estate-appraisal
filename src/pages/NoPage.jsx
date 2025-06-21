import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NoPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Wachtstetter Appraisal</title>
        <meta
          name="description"
          content="Sorry, the page you were looking for doesn’t exist. Return to the homepage or explore our services."
        />
      </Helmet>

      {/* Accessibility: Skip to Main Content */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <main id="main-content" role="main" className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6 max-w-md">
          The page you’re trying to reach doesn't exist or is not part of our service area.
        </p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-[#6b4f37] text-white px-6 py-3 rounded hover:bg-yellow-500 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="border border-gray-500 text-gray-800 px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            View Services
          </Link>
        </div>
      </main>
    </>
  );
}
