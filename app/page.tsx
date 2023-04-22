import About from "./components/About";
import Footer from "./components/Footer";
import Galery from "./components/Galery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Galery />
      <Location />
      <Footer />
    </div>
  );
}
