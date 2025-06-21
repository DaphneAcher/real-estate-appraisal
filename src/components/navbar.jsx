import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-[#F5F1EA] shadow-sm fixed top-0 left-0 right-0 z-50 font-playfair text-neutral-900">
      <div className="max-w-screen-xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logoVector.svg"
            alt="Wachtstetter Enterprises Inc logo"
            loading="lazy"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center gap-12 text-xl font-medium tracking-wide">
          <Link to="/" className="hover:text-[#C3A36B] transition">Home</Link>
          <Link to="/about" className="hover:text-[#C3A36B] transition">About</Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="hover:text-[#C3A36B] transition"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
            </Link>

            <div
              className={`absolute left-0 top-full mt-2 w-72 bg-white border border-neutral-200 shadow-lg rounded-md z-50 transition-all duration-200 ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              role="menu"
              aria-label="Services submenu"
            >
              <Link
                to="/services/residential"
                className="block px-5 py-3 text-sm hover:bg-neutral-100"
                role="menuitem"
              >
                Residential Appraisals
              </Link>
              <Link
                to="/services/commercial"
                className="block px-5 py-3 text-sm hover:bg-neutral-100"
                role="menuitem"
              >
                Commercial Appraisals
              </Link>
              <Link
                to="/services/fema"
                className="block px-5 py-3 text-sm hover:bg-neutral-100"
                role="menuitem"
              >
                FEMA 50% Rule Appraisals
              </Link>
            </div>
          </div>

          <Link to="/journal" className="hover:text-[#C3A36B] transition">Journal</Link>
          <Link to="/contact" className="hover:text-[#C3A36B] transition">Contact</Link>
        </div>

        {/* CTA */}
        <Link
          to="/order-form"
          className="hidden lg:block bg-black text-white hover:bg-[#C3A36B] hover:text-black transition px-6 py-3 text-base font-work rounded-md uppercase tracking-wider"
        >
          Appraise Now
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-6 space-y-5 text-base font-medium bg-white">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#C3A36B]">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-[#C3A36B]">
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-[#C3A36B]">
            Services
          </Link>
          <Link to="/journal" onClick={() => setIsOpen(false)} className="block hover:text-[#C3A36B]">
            Journal
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[#C3A36B]">
            Contact
          </Link>
          <Link
            to="/order-form"
            onClick={() => setIsOpen(false)}
            className="block bg-black text-white text-center hover:bg-[#C3A36B] hover:text-black transition px-6 py-3 rounded-md"
          >
            Appraise Now
          </Link>
        </div>
      )}
    </nav>
  );
}
