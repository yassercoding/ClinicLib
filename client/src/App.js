
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ClinicNavbar from "./components/ClinicNavbar";
import Footer from './components/Footer';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import { Route, Routes } from "react-router-dom";
import News1 from "./components/News1";


function App() {
  return (
    <div>
      <ClinicNavbar/>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news1' element={<News1 />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
