
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ClinicNavbar from "./components/ClinicNavbar";
import Footer from './components/Footer';
import Hero from "./components/Hero";


function App() {
  return (
    <div>
      <ClinicNavbar/>
      <Hero />
      Hallo 
      <Footer />
    </div>
  );
}

export default App;
