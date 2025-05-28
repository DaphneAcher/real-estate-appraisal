export default function OrderForm() {
    return(
        <section className="bg-white p-8 rounded shadow py-5 px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Order Form</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <input type="text" placeholder="First Name *" className="border p-3 rounded" required />
                <input type="text" placeholder="Last Name *" className="border p-3 rounded" required />
                <input type="tel" placeholder="Phone Number *" className="border p-3 rounded" required />
                <input type="email" placeholder="Email Address *" className="border p-3 rounded md:col-span-1" required />
                <input type="text" placeholder="Street Address *" className="border p-3 rounded md:col-span-1" required />
                <input type="text" placeholder="Street Address Line 2 *" className="border p-3 rounded md:col-span-1" required />      
                <input type="text" placeholder="City *" className="border p-3 rounded md:col-span-1" required />      
                <input type="text" placeholder="Postal/Zip Code *" className="border p-3 rounded md:col-span-1" required />      
                <textarea placeholder="Special Instructions *" className="border p-3 rounded md:col-span-2 h-32 resize-none" required />
            </form>

            <div className="text-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md">
                Place Order
                </button>
            </div>
            
        </section>

    )

}