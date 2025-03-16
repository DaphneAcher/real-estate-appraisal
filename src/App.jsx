import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/home1.svg'
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";


function App() {
  return (
      <div>
        <Navbar />
        <Home />
      </div>
  );
}

export default App;