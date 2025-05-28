import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Journal from "./pages/Journal"
import Services from "./pages/Services"
import ServiceAreas from "./pages/ServiceAreas"
import Location from "./pages/Location"
import NoPage from "./pages/NoPage"
import OrderForm from "./pages/OrderForm"

function App() {

  return (

    <BrowserRouter> 
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">

        <Routes>

          <Route path="/" element ={<Home />}/>
          <Route path= "/about" element = {<About />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/journal" element = {<Journal />}/>
          <Route path="/services" element = {<Services />}/>
          <Route path="/service-areas" element={<ServiceAreas />}/>
          <Route path="/:location" element = {<Location />}/>
          <Route path="/order-form" element = {<OrderForm />}/>
          <Route path="*" element={<NoPage />}/>

        </Routes>
      </main>
      <Footer />


    </div>
    </BrowserRouter>


  );


}

export default App