import { journalPosts } from "../data/journalPosts";

export default function Journal() {
  return (
    <>
    <section className="py-12 px-6 max-w-6xl mx-auto">
       <h2 className="text-3xl font-bold text-center mb-12">Real Estate Insights & Appraisal Tips</h2>
        <div className="grid grid-cols-1 gap-8">
          {journalPosts.map(post => (
            <div key={post.id} className="border p-6 rounded shadow bg-white">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{post.date} • by {post.author}</p>
            <p className="text-base text-gray-700 mb-4">{post.content.slice(0, 120)}...</p>
            <a href="#" className="text-orange-500 font-semibold hover:underline">Read More →</a>
            </div>
          ))}
        </div>

    </section>
    
    </>
  );
}
