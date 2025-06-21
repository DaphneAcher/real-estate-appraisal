import { useState, useRef, useEffect } from "react";

export default function Quote() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const statusRef = useRef(null);

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => {
        setStatusMessage("Message sent successfully.");
        setStatusType("success");
        e.target.reset();
      })
      .catch((err) => {
        console.error("Submission error:", err);
        setStatusMessage("Something went wrong. Please try again.");
        setStatusType("error");
      });
  }

  useEffect(() => {
    if (statusMessage && statusRef.current) {
      statusRef.current.focus();
    }
  }, [statusMessage]);

  return (
    <main role="main">
      <a href="#quote-form" className="sr-only focus:not-sr-only">
        Skip to form
      </a>

      <section
        className="w-full py-12 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/apprBack.jpg')" }}
        aria-label="Quote section with contact and form"
      >
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

          {/* Right Side Form */}
          <form
            onSubmit={handleQuoteSubmit}
            className="bg-white p-8 rounded shadow space-y-4"
            aria-labelledby="quoteHeading"
            id="quote-form"
          >
            <h3 id="quoteHeading" className="text-xl font-bold text-center mb-4">
              Request A Quote
            </h3>

            {/* ARIA Live Region */}
            {statusMessage && (
              <div
                role="status"
                aria-live="polite"
                tabIndex="-1"
                ref={statusRef}
                aria-label={statusType === "success" ? "Success" : "Error"}
                className={`text-base rounded px-4 py-3 ${
                  statusType === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="quote-name">Name</label>
              <input
                type="text"
                id="quote-name"
                name="name"
                placeholder="Your Name *"
                className="border p-3 rounded"
                required
                aria-required="true"
              />

              <label className="sr-only" htmlFor="quote-phone">Phone</label>
              <input
                type="tel"
                id="quote-phone"
                name="tel"
                placeholder="Phone Number *"
                className="border p-3 rounded"
                required
                aria-required="true"
              />

              <label className="sr-only" htmlFor="quote-email">Email</label>
              <input
                type="email"
                id="quote-email"
                name="email"
                placeholder="Email Address *"
                className="border p-3 rounded md:col-span-1"
                required
                aria-required="true"
              />

              <label className="sr-only" htmlFor="quote-address">Address</label>
              <input
                type="text"
                id="quote-address"
                name="address"
                placeholder="Property Address *"
                className="border p-3 rounded md:col-span-1"
                required
                aria-required="true"
              />
            </div>

            <label className="sr-only" htmlFor="quote-message">Message</label>
            <textarea
              id="quote-message"
              name="message"
              placeholder="Services Needed... *"
              className="border p-3 rounded w-full h-28 resize-none"
              required
              aria-required="true"
            />

            <button
              type="submit"
              className="bg-[#5C4033] hover:bg-[#D4AF37] text-white font-semibold px-6 py-3 rounded w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
