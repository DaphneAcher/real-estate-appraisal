import { Helmet } from "react-helmet-async";

export default function Contact() {

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      tel: formData.get("tel"),
      address: formData.get("address"),
      message: formData.get("message"),
    };

    fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server Response:", data);
        alert("Message Sent")
        e.target.reset();
      })
      .catch((err) => {
        console.error("Submisson error:", err);
        alert("Something went wrong.");
      })

  }
  return (
    <>
    <Helmet>
      <title>Contact Our South Florida Appraisal Team | Wachtstetter Enterprises</title>
      <meta 
        name="description" 
        content="Get in touch with Wachtstetter Enterprises for accurate and certified property appraisals in South Florida. Call or message us to request a quote." 
      />
    </Helmet>

    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Call Us</h2>
       <div className="text-center mb-12 space-y-2 text-orange-600 font-medium">
        <p>Phone: 954.791.4667</p>
        <p>Fax: 954.791.4693</p>
       </div>

       <h2 className="text-2xl font-bold text-center mb-6">Send us a messege</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Your Name *" name = "name" className="border p-3 rounded" required />
        <input type="tel" placeholder="Phone Number *" name = "tel" className="border p-3 rounded" required />
        <input type="email" placeholder="Email Address *" name = "email" className="border p-3 rounded md:col-span-1" required />
        <input type="text" placeholder="Property Address *" name = "address" className="border p-3 rounded md:col-span-1" required />
        <textarea placeholder="Services Needed... *" name = "message" className="border p-3 rounded md:col-span-2 h-32 resize-none" required />
      
        <div className="text-center">
          <button className="bg-[#5C4033] hover:bg-[#D4AF37] text-white font-semibold px-6 py-3 rounded-md">
            Send Message
          </button>
        </div>
      </form>
      
    </section>

    
    </>
  );
}
