import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <>
        <nav className="bg-black border-b border-neutral-800 shadow-sm fixed top-0 left-0 right-0 z-50 font-sans text-white">
        <div className="max-w-screen-xl mx-auto px-8 py-6 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
            <img
                src="/logoVector.svg"
                alt="Wachtstetter Enterprises Inc logo"
                loading="lazy"
                className="h-16 w-auto"
            />
            </Link>
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex flex-1 justify-center gap-10 text-xl font-bold">
            <Link to="/" className="hover:text-blue-300 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition">About</Link>
            <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
            >
                <button
                    className="hover:text-blue-300 transition focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                >
                    Services
                </button>

                <div
                    className={`absolute left-0 top-full w-64 bg-white text-black shadow-md rounded z-50 transition-opacity duration-200 ${
                        servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    role="menu"
                    aria-label="Services submenu"
                >
                    <Link
                        to="/services/residential"
                        className="block px-4 py-2 hover:bg-blue-100 focus:bg-blue-100"
                        role="menuitem"
                    >
                        Residential Appraisals
                    </Link>
                    <Link
                        to="/services/commercial"
                        className="block px-4 py-2 hover:bg-blue-100 focus:bg-blue-100"
                        role="menuitem"
                    >
                        Commercial Appraisals
                    </Link>
                    <Link
                        to="/services/fema"
                        className="block px-4 py-2 hover:bg-blue-100 focus:bg-blue-100"
                        role="menuitem"
                    >
                        FEMA 50% Rule Appraisals
                    </Link>
                </div>
            </div>

            <Link to="/journal" className="hover:text-blue-300 transition">Journal</Link>
            <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
            </div>

            {/* Desktop CTA */}
            <Link
            to="/order-form"
            className="hidden lg:block bg-[#4D2C20] hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded transition ml-4"
            >
            Appraise Now
            </Link>

            {/* Hamburger for Mobile */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
            >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
            </svg>
            </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
            <div className="lg:hidden px-6 pb-6 space-y-4 text-lg font-semibold">
            <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-300"> Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Services</Link>
            <Link to="/journal" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Journal</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-300">Contact</Link>
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