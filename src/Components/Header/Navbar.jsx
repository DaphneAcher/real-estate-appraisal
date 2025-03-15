import { useState } from "react";
import "@/styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
        <h2 className ="logo">logo</h2>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#"> Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    )
}

export default Navbar;
