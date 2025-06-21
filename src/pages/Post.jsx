import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { journalPosts } from "../data/journalPosts";
import { Link } from "react-router-dom";

export default function Post() {
  const { slug } = useParams();
  const post = journalPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <main id="main-content" className="pt-24 px-6 text-center" role="main">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p>We couldn’t find the journal entry you’re looking for.</p>
        <Link to="/journal" className="text-blue-600 underline mt-4 inline-block">
          ← Back to Journal
        </Link>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Wachtstetter Journal</title>
        <meta name="description" content={post.content.slice(0, 160)} />
      </Helmet>

      {/* Skip link target */}
      <main id="main-content" className="pt-24 px-6 max-w-3xl mx-auto" role="main">
        <article aria-labelledby="post-title">
          <header className="mb-6">
            <h1 id="post-title" className="text-4xl font-bold mb-2">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500">
              {post.date} • by {post.author}
            </p>
          </header>

          <section className="text-base leading-relaxed text-gray-800 whitespace-pre-line">
            {post.content}
          </section>

          <footer className="mt-10">
            <Link
              to="/journal"
              className="text-orange-600 font-semibold hover:underline focus:outline focus:ring-2 focus:ring-orange-500"
            >
              ← Back to Journal
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
