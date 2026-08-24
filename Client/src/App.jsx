import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import WhyChooseUs from "./pages/WhyChooseUs";
import Gallery from "./pages/Gallery";
import CtaBanner from "./pages/CtaBanner";
import EnquiryForm from "./pages/EnquiryForm";
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
      <ScrollToTop />
    </>
  );
}
