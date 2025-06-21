import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [status, setStatus] = useState(null); // "success", "error", "invalidEmail", "invalidPhone"
  const [loading, setLoading] = useState(false);
  const statusRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const tel = formData.get("tel");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    if (!emailRegex.test(email)) {
      setStatus("invalidEmail");
      setLoading(false);
      return;
    }

    if (!telRegex.test(tel)) {
      setStatus("invalidPhone");
      setLoading(false);
      return;
    }

    const payload = {
      name: formData.get("name"),
      email,
      tel,
      address: formData.get("address"),
      message: formData.get("message"),
    };

    fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        console.log("Server Response:", data);
        setStatus("success");
        e.target.reset();
      })
      .catch((err) => {
        console.error("Submission error:", err);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (status && statusRef.current) {
      statusRef.current.focus();
    }
  }, [status]);

  return (
    <>
      <Helmet>
        <title>Contact Our South Florida Appraisal Team | Wachtstetter Enterprises</title>
        <meta
          name="description"
          content="Get in touch with Wachtstetter Enterprises for accurate and certified property appraisals in South Florida. Call or message us to request a quote."
        />
      </Helmet>
      

      {/* Skip Link for Keyboard Users */}
      <a href="#contact-form" className="sr-only focus:not-sr-only">
        Skip to Contact Form
      </a>

      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>


      <main id="main-content" role="main">
        <section className="py-12 px-6 max-w-4xl mx-auto" id="contact-form">
          <h2 className="text-3xl font-bold text-center mb-6">Call Us</h2>
          <div className="text-center mb-12 space-y-2 text-orange-600 font-medium">
            <p>Phone: 954.791.4667</p>
            <p>Fax: 954.791.4693</p>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            aria-label="Contact Form"
          >
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name *"
                required
                aria-required="true"
                className="border p-3 rounded w-full"
              />
            </div>

            <div>
              <label htmlFor="tel" className="sr-only">Phone Number</label>
              <input
                id="tel"
                name="tel"
                type="tel"
                placeholder="Phone Number *"
                required
                aria-required="true"
                className="border p-3 rounded w-full"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                aria-describedby={status === "invalidEmail" ? "email-error" : undefined}
                name="email"
                type="email"
                placeholder="Email Address *"
                required
                aria-required="true"
                className="border p-3 rounded w-full"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="address" className="sr-only">Property Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Property Address *"
                required
                aria-required="true"
                className="border p-3 rounded w-full"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Services Needed... *"
                required
                aria-required="true"
                className="border p-3 rounded w-full h-32 resize-none"
              ></textarea>
            </div>

            <div className="text-center md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 rounded-md font-semibold text-white ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#5C4033] hover:bg-[#D4AF37]"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {/* Accessible status message */}
          <div
            role="status"
            aria-live="polite"
            tabIndex="-1"
            ref={statusRef}
            className="mt-4 text-center text-sm text-gray-700 min-h-[1.5rem]"
          >
            {status === "success" && <span className="text-green-700">Message sent successfully.</span>}
            {status === "error" && <span className="text-red-600">Something went wrong. Please try again.</span>}
            {status === "invalidEmail" && <span className="text-red-600">Please enter a valid email address.</span>}
            {status === "invalidPhone" && <span className="text-red-600">Please enter a valid phone number.</span>}
          </div>
        </section>
      </main>
    </>
  );
}
