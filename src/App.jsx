import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import ReactDOM from "react-dom/client";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Journal from "./pages/Journal"
import Services from "./pages/Services"
import Location from "./pages/Location"
import NoPage from "./pages/NoPage";

function App() {

  return (

    <BrowserRouter> 
    <Navbar />

    <Routes>

      <Route path="/" element ={<Home />}/>
      <Route path= "/about" element = {<About />}/>
      <Route path="/contact" element = {<Contact />}/>
      <Route path="/journal" element = {<Journal />}/>
      <Route path="/services" element = {<Services />}/>
      <Route path="/:location" element = {<Location />}/>
      <Route path="*" element={<NoPage />}/>

    </Routes>

  </BrowserRouter>


  );


}

export default App