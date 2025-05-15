import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
         <nav className="bg-indigo-200/60 backdrop-blur-sm text-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto px-6 py-4">

                {/*Logo*/}
                <img className="h-12" src="/assets/logo.svg" alt="Wachstetter logo"/>

                {/*Links*/}
                <div className="hidden md:flex gap-10 font-lato text-xl font-semibold">
                    <Link to="/" className="hover:text-blue-300 transition">Home</Link>
                    <Link to="/about" className="hover:text-blue-300 transition">About</Link>
                    <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
                    <Link to="/journal" className="hover:text-blue-300 transition">Journal</Link>
                    <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
                </div>


                {/*Order Form Button*/}
                <button className="bg-orange-500 hover:bg-orange-600 text-xl font-bold text-white px-4 py-2 rounded-md shadow transition">Appraise My Home</button>


            </div>

        </nav>
        
        </>
    )

}