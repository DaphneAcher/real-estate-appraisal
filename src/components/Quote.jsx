export default function Quote () {
  function handleQuoteSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      tel: formData.get("tel"),
      address: formData.get("address"),
      message: formData.get("message"),
      source: "quote"
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
    <section className= "w-full py-12 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/apprBack.jpg')" }} >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="bg-[#5C4033] text-white p-8 rounded shadow">
          <p className="uppercase tracking-wide text-sm mb-2">Let’s Chat</p>
          <h3 className="text-2xl font-bold mb-4">Thinking About an Appraisal?</h3>
          <p className="mb-4">
            <strong>Call:</strong> 786.712.5002
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#5C4033] font-semibold px-6 py-2 rounded shadow hover:bg-brown-100"
          >
            Contact Us →
          </a>
        </div>

        {/* Right Side */}
        <form onSubmit= {handleQuoteSubmit} className="bg-white p-8 rounded shadow space-y-4">
          <h3 className="text-xl font-bold text-center mb-4">Request A Quote</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name *" name="name" className="border p-3 rounded" required />
            <input type="tel" placeholder="Phone Number *" name="tel" className="border p-3 rounded" required />
            <input type="email" placeholder="Email Address *" name="email" className="border p-3 rounded md:col-span-1" required />
            <input type="text" placeholder="Property Address *" name= "address" className="border p-3 rounded md:col-span-1" required />
          </div>
          <textarea placeholder="Services Needed... *" name= "message" className="border p-3 rounded w-full h-28 resize-none" required />
          <button className="bg-[#5C4033] hover:bg-[#D4AF37] text-white font-semibold px-6 py-3 rounded w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

