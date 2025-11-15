import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./food/Header";
import About from "./food/About";
import Menu from "./food/Menu";
import Menu2 from "./food/Menu2";
import Gallery from "./food/Gallery";
import Reservation from "./food/Reservation";
import Testimonials from "./food/Testimonials";
import Contact from "./food/Contact";
import Maps from "./food/Maps";
import Footer from "./food/Footer";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Menu />
      <Menu2 />
      <Gallery />
      <Reservation />
      <Testimonials />
      <Contact />
      <Maps />
      <Footer />

      <Routes>
        <Route path="Header" element={<Header />} />
        <Route path="About" element={<About />} />  
        <Route path="Menu" element={<Menu />} />
        <Route path="Menu2" element={<Menu2 />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Reservation" element={<Reservation />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Maps" element={<Maps />} />
        <Route path="Footer" element={<Footer />} />
      </Routes>
    </div>
  );
}
export default App;
