import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import CtaBanner from "./components/CtaBanner";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <Packages />
        <WhyChooseUs />
        <Gallery />
        <CtaBanner />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
