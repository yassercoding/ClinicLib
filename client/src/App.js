
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ClinicNavbar from "./components/ClinicNavbar";
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <ClinicNavbar/>
      <Routes>
      <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
