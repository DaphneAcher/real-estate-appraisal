import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/*Logo*/}

                {/*Links*/}
                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/" className="text-gray-900 hover:underline">Home</Link>
                    <Link to="/about" className="text-gray-900 hover:underline">About</Link>
                    <Link to="/contact" className="text-gray-900 hover:underline">Contact</Link>
                    <Link to="/journal" className="text-gray-900 hover:underline">Journal</Link>
                    <Link to="/services" className="text-gray-900 hover:underline">Services</Link>
                </div>


                {/*Order Form Button*/}
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md">Appraise My Home</button>


            </div>

        </nav>
        
        </>
    )

}