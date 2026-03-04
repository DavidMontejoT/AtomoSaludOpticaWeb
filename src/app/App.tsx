import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Servicios } from "./components/Servicios";
import { Brigadas } from "./components/Brigadas";
import { Catalogo } from "./components/Catalogo";
import { Testimonios } from "./components/Testimonios";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <Hero />
      <Servicios />
      <Brigadas />
      <Catalogo />
      <Testimonios />
      <Footer />
    </div>
  );
}
