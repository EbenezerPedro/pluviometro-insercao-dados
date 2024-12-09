
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Cities from '../components/Cities';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Cities />
      <FAQ />
      <Footer />
      <Outlet /> 
    </div>
  );
}

export default Home;