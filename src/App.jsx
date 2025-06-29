import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Journal from "./pages/Journal"
import Services from "./pages/Services"
import ServiceAreas from "./pages/ServiceAreas"
import Location from "./pages/Location"
import NoPage from "./pages/NoPage"
import OrderForm from "./pages/OrderForm"
import Residential from "./pages/Service/Residential"
import Commercial from "./pages/Service/Commercial"
import FEMA from "./pages/Service/FEMA"
import Post from "./pages/Post";
import { HelmetProvider } from "react-helmet-async"

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">

          <a
            href="#main-content"
            className="absolute left-[-999px] focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:text-black focus:p-2 focus:rounded shadow transition"
          >
            Skip to main content
          </a>

          <Navbar />

          {/* Main Landmark Region */}
          <main id="main-content" className="flex-grow pt-24" role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/residential" element={<Residential />} />
              <Route path="/services/commercial" element={<Commercial />} />
              <Route path="/services/fema" element={<FEMA />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/order-form" element={<OrderForm />} />
              <Route path="/404" element={<NoPage />} />
              <Route path="/journal/:slug" element={<Post />} />
              <Route path="/:location" element={<Location />} />

              {/* Catch-all */}
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
