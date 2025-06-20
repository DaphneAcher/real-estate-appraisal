import {useState} from "react"

export default function OrderForm() {
    const [type, setType] = useState("")
    function handleOrderForm(e){
        e.preventDefault();

        const formData = new FormData(e.target);

        const payload = {
            name: formData.get("first") + " " + formData.get("last"),
            tel: formData.get("tel"),
            email: formData.get('email'),
            address: `${formData.get("street")}, ${formData.get("street2")}, ${formData.get("city")} ${formData.get("zip")}`,
            message: `Appraisal Type: ${type}\nInstructions: ${formData.get("instructions")}`,
            source: "order-form"            
        };

        fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
        })
        .then((res) => {
            console.log("Server status:", res.status);
            alert("Order Submitted!");
            e.target.reset()
            setType("");
        })
        .catch((err) => {
            console.error("Submission error:", err);
            alert("Something went wrong.");
        });

    }
    return(
        <section className="bg-white p-8 rounded shadow py-5 px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Order Form</h2>
            <form onSubmit={handleOrderForm} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <input type="text" placeholder="First Name *" name="first" className="border p-3 rounded" required />
                <input type="text" placeholder="Last Name *" name="last" className="border p-3 rounded" required />
                <input type="tel" placeholder="Phone Number *" name="tel" className="border p-3 rounded" required />
                <input type="email" placeholder="Email Address *" name="email" className="border p-3 rounded md:col-span-1" required />
                <input type="text" placeholder="Street Address *" name="street" className="border p-3 rounded md:col-span-1" required />
                <input type="text" placeholder="Street Address Line 2 " name="street2" className="border p-3 rounded md:col-span-1"/>      
                <input type="text" placeholder="City *" name="city" className="border p-3 rounded md:col-span-1" required />      
                <input type="text" placeholder="Postal/Zip Code *" name="zip" className="border p-3 rounded md:col-span-1" required />
                <select
                    name="type"
                    required
                    value={type || ""}
                    onChange={(e) => setType(e.target.value)}
                    className="border p-3 rounded md:col-span-2"
                >
                    <option value="" disabled>
                        Select Appraisal Type *
                    </option>
                    <option value="Commerical">Commerical</option>
                    <option value="Residential">Residential</option>
                    <option value="FEMA">FEMA</option>
                </select>

                <textarea placeholder="Instructions *" name="instructions" className="border p-3 rounded md:col-span-2 h-32 resize-none" required />

                <div className="text-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md">
                    Place Order
                    </button>
                </div>
            </form>
            
        </section>

    )

}