import { useState, useRef, useEffect } from "react";

export default function OrderForm() {
  const [type, setType] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const statusRef = useRef(null);

  function handleOrderForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("first") + " " + formData.get("last"),
      tel: formData.get("tel"),
      email: formData.get("email"),
      address: `${formData.get("street")}, ${formData.get("street2")}, ${formData.get("city")} ${formData.get("zip")}`,
      message: `Appraisal Type: ${type}\nInstructions: ${formData.get("instructions")}`,
      source: "order-form",
    };

    fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        console.log("Server status:", res.status);
        setStatusMessage("Order submitted successfully.");
        setStatusType("success");
        e.target.reset();
        setType("");
      })
      .catch((err) => {
        console.error("Submission error:", err);
        setStatusMessage("Submission failed. Please try again.");
        setStatusType("error");
      });
  }

  useEffect(() => {
    if (statusMessage && statusRef.current) {
      statusRef.current.focus();
    }
  }, [statusMessage]);

  return (
    <>
      <a href="#orderFormHeading" className="sr-only focus:not-sr-only">
        Skip to Order Form
      </a>

      <main role="main">
        <section
          className="bg-white p-8 rounded shadow py-5 px-6 max-w-4xl mx-auto"
          aria-labelledby="orderFormHeading"
        >
          <h2 id="orderFormHeading" className="text-2xl font-bold text-center mb-6">
            Order Form
          </h2>

          {/* Live status message for screen readers */}
          {statusMessage && (
            <div
              ref={statusRef}
              role="status"
              aria-live="polite"
              tabIndex="-1"
              className={`text-sm text-center mb-4 font-medium ${
                statusType === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleOrderForm} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <label htmlFor="first" className="block text-sm font-medium mb-1">First Name *</label>
              <input type="text" id="first" name="first" className="border p-3 rounded w-full" required aria-required="true" />
            </div>

            <div>
              <label htmlFor="last" className="block text-sm font-medium mb-1">Last Name *</label>
              <input type="text" id="last" name="last" className="border p-3 rounded w-full" required aria-required="true" />
            </div>

            <div>
              <label htmlFor="tel" className="block text-sm font-medium mb-1">Phone Number *</label>
              <input type="tel" id="tel" name="tel" className="border p-3 rounded w-full" required aria-required="true" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
              <input type="email" id="email" name="email" className="border p-3 rounded w-full" required aria-required="true" />
            </div>

            <div>
              <label htmlFor="street" className="block text-sm font-medium mb-1">Street Address *</label>
              <input type="text" id="street" name="street" className="border p-3 rounded w-full" required aria-required="true" />
            </div>

            <div>
              <label htmlFor="street2" className="block text-sm font-medium mb-1">Street Address Line 2</label>
              <input type="text" id="street2" name="street2" className="border p-3 rounded w-full" />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">City *</label>
              <input type="text" id="city" name="city" className="border p-3 rounded w-full" required aria-required="true" />
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium mb-1">Postal / Zip Code *</label>
              <input type="text" id="zip" name="zip" className="border p-3 rounded w-full" required aria-required="true" />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="type" className="block text-sm font-medium mb-1">Appraisal Type *</label>
              <select
                id="type"
                name="type"
                required
                aria-required="true"
                value={type || ""}
                onChange={(e) => setType(e.target.value)}
                className="border p-3 rounded w-full"
              >
                <option value="" disabled>Select Appraisal Type</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="FEMA">FEMA</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="instructions" className="block text-sm font-medium mb-1">Instructions *</label>
              <textarea
                id="instructions"
                name="instructions"
                className="border p-3 rounded w-full h-32 resize-none"
                required
                aria-required="true"
                aria-describedby="instructionsHelp"
              ></textarea>
              <p id="instructionsHelp" className="text-sm text-gray-500 mt-1">Please share any relevant notes or deadlines.</p>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#5C4033] hover:bg-[#D4AF37] text-white font-semibold px-6 py-3 rounded-md"
              >
                Place Order
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
