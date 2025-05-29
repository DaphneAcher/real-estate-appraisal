import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav className="bg-black border-b border-neutral-800 shadow-sm fixed top-0 left-0 right-0 z-50 font-sans text-white">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto px-8 py-6">
                <img src="/logoVector.svg" alt="Wachtstetter logo" className="h-16 w-auto" />

                <div className="hidden md:flex gap-10 font-lato text-xl font-bold">
                    <Link to="/" className="hover:text-blue-300 transition">Home</Link>
                    <Link to="/about" className="hover:text-blue-300 transition">About</Link>
                    <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
                    <Link to="/journal" className="hover:text-blue-300 transition">Journal</Link>
                    <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
                </div>


                <a href="/order-form" className="bg-[#5C4033] hover:bg-[#D4AF37] text-white text-lg md:text-xl px-8 py-4 rounded-md font-semibold tracking-wide">Appraise My Home</a>


            </div>

        </nav>
        
        </>
    )

}