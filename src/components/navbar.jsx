import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="bg-black border-b border-neutral-800 shadow-sm fixed top-0 left-0 right-0 z-50 font-sans text-white">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto px-8 py-6">
                {/*Logo*/}
                <img src="/logoVector.svg" alt="Wachtstetter logo" className="h-16 w-auto" />

                {/*Desktop Nav*/}
                <div className="hidden md:flex gap-10 font-lato text-xl font-bold">
                    <Link to="/" className="hover:text-blue-300 transition">Home</Link>
                    <Link to="/about" className="hover:text-blue-300 transition">About</Link>
                    <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
                    <Link to="/journal" className="hover:text-blue-300 transition">Journal</Link>
                    <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>

                    {/* CTA Button */}
                    <Link
                        to="/order-form"
                        className="ml-4 bg-[#4D2C20] hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded transition">Appraise Now</Link>
                </div>

                {/*Hamburger*/}
                <button
                    onClick={()=>setIsOpen(!isOpen)}
                    classname="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg className="w-t h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>

                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden px-6 pb-6 space-y-4 text-lg font-semibold">
                <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">About</Link>
                <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Services</Link>
                <Link to="/journal" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Journal</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Contact</Link>

                {/* Mobile CTA Button */}
                <Link
                    to="/order-form"
                    onClick={() => setIsOpen(false)}
                    className="block bg-[#4D2C20] hover:bg-yellow-500 text-white text-center font-semibold px-4 py-3 rounded transition mt-2"
                >
                    Appraise Now
                </Link>
                </div>
            )}

        </nav>
        
        </>
    )

}