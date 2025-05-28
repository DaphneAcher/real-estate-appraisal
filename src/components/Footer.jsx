import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-md py-9 px-9 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                <p className="text-gray-600">© {new Date().getFullYear()} Wachtstetter Enterprises Inc. All Rights Reserved. Accessibility Statement</p>
                <div className="flex gap-4">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/services" className="hover:underline">Services</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <Link to="/service-areas" className="hover:underline">Service Areas</Link>
                </div>
            </div>
        </footer>
    )
}