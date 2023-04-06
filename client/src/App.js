
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ClinicNavbar from "./components/ClinicNavbar";
import Footer from './components/Footer';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import { NavLink, Routes, Route } from "react-router-dom";
import Clinics from "./components/Clinics";
import NewClinic from "./components/NewClinic";
import ClinicDetails from "./components/ClinicDetails";
import UpdateClinic from "./components/UpdateClinic";
import News1 from "./components/News1";
import Doctors from "./components/Doctors";
import NewDoctor from "./components/NewDoctor";
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';

function App() {
  //const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    //<div className="App">
    //<Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
    <div>
      <ClinicNavbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/doctors" element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news1' element={<News1 />} />
        <Route path="/clinics/:id" element={<ClinicDetails />} />
        <Route path="/clinics/new" element={<NewClinic />} />
        <Route path="/clinics/:id/update" element={<UpdateClinic />} />
        <Route path="/doctors/new" element={<NewDoctor />} />
        {/*<Route path="/login" element={<Login setIsLoggedin={setIsLoggedin} />} /> */}
        {/*<Route path="/register" element={<Register setIsLoggedin={setIsLoggedin} />} /> */}
      </Routes>

      <Footer />
    </div>
  
  );
}

export default App;
