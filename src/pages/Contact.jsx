export default function Contact() {
  return (
    <>
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Call Us</h2>
       <div className="text-center mb-12 space-y-2 text-orange-600 font-medium">
        <p>Phone: 954.791.4667</p>
        <p>Fax: 954.791.4693</p>
       </div>

       <h2 className="text-2xl font-bold text-center mb-6">Send us a messege</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Your Name *" className="border p-3 rounded" required />
        <input type="tel" placeholder="Phone Number *" className="border p-3 rounded" required />
        <input type="email" placeholder="Email Address *" className="border p-3 rounded md:col-span-1" required />
        <input type="text" placeholder="Property Address *" className="border p-3 rounded md:col-span-1" required />
        <textarea placeholder="Services Needed... *" className="border p-3 rounded md:col-span-2 h-32 resize-none" required />
      </form>

      <div className="text-center">
        <button className="bg-[#5C4033] hover:bg-[#D4AF37] text-white font-semibold px-6 py-3 rounded-md">
          Send Message
        </button>
      </div>
      
    </section>

    
    </>
  );
}
