
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



function App() {
  return ( <>
    <div className="App">
      <nav>
        <ul>

          <li>
            <NavLink to="/clinics/new">New Clinic</NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <ClinicNavbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/clinics" element={<Clinics />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news1' element={<News1 />} />
        <Route path="/clinics/:id" element={<ClinicDetails />} />
        <Route path="/clinics/new" element={<NewClinic />} />
        <Route path="/clinics/:id/update" element={<UpdateClinic />} />
      </Routes>

      <Footer />
    </div>
    </>
  );
}

export default App;
