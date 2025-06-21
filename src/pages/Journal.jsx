import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { journalPosts } from "../data/journalPosts";

export default function Journal() {
  return (
    <>
      <Helmet>
        <title>Appraisal Tips & Real Estate News | Wachtstetter Journal</title>
        <meta 
          name="description" 
          content="Read our journal for expert real estate appraisal tips, market insights, and South Florida industry updates." 
        />
      </Helmet>

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <main id="main-content" role="main">
        <section className="py-12 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real Estate Insights & Appraisal Tips</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {journalPosts.map(post => (
              <article 
                key={post.id} 
                className="border p-6 rounded shadow bg-white" 
                aria-labelledby={`post-title-${post.id}`}
              >
                <h3 id={`post-title-${post.id}`} className="text-xl font-bold mb-2">
                  {post.title}
                </h3>

                <p className="text-base text-gray-500 mb-4">
                  {post.date} • by {post.author}
                </p>

                <p className="text-base text-gray-700 mb-4">
                  {post.content.slice(0, 120)}...
                </p>

                <Link
                  to={`/journal/${post.slug}`}
                  className="text-orange-500 font-semibold hover:underline focus:outline focus:ring-2 focus:ring-orange-400"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
