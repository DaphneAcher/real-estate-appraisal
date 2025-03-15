import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <nav className="navbar">
            <div className="logo">Wachstetter Enterprises</div>  {/* Website name/logo */}

            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="menu-toggle" onClick={toggleMenu}>
                ☰  {/* Hamburger icon for mobile */}
            </div>
        </nav>
    );
}

export default Navbar;
