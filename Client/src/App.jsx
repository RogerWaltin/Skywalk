import { useState } from "react";
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
import EnquiryModal from "./components/EnquiryModal";

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <>
      <Navbar onEnquiry={openEnquiryModal} />
      <main>
        <Hero onEnquiry={openEnquiryModal} />
        <About />
        <Services onEnquiry={openEnquiryModal} />
        <Destinations />
        <Packages onEnquiry={openEnquiryModal} />
        <WhyChooseUs />
        <Gallery />
        <CtaBanner />
        <EnquiryForm />
      </main>
      <Footer />
      <ScrollToTop />
      <EnquiryModal open={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </>
  );
}
