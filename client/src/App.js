
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ClinicNavbar from "./components/ClinicNavbar";
import Footer from './components/Footer';
import Hero from "./components/Hero";
import { NavLink, Routes, Route } from "react-router-dom";
import Clinics from "./components/Clinics";
import NewClinic from "./components/NewClinic";
import ClinicDetails from "./components/ClinicDetails";
import UpdateClinic from "./components/UpdateClinic";



function App() {
  return ( <>
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/clinics/new">New Clinic</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Clinics />} />
         <Route path="/clinics/:id" element={<ClinicDetails />} /> 
        <Route path="/clinics/new" element={<NewClinic />} />
        <Route path="/clinics/:id/update" element={<UpdateClinic />} />
        
      </Routes>
    </div>
    <div>
      <ClinicNavbar/>
      <Hero />
      
      <Footer />
    </div>





    </>
  );
}

export default App;
