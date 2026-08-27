import { ToastProvider } from "./components/Toast";
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
    <ToastProvider>
      <Navbar />
    <>
      <Navbar onEnquiry={openEnquiryModal} />
      <main>
        <Hero onEnquiry={openEnquiryModal} />
        <About />
        <div className="relative w-full -mb-2.5 overflow-x-clip">
          <img src="/Tracks.png" alt="" className="block w-full select-none" draggable={false} />
          <img src="/Train.png" alt="" className="train-slide h-[150%] w-auto select-none -top-4.5" draggable={false} />
        </div>
        <Services onEnquiry={openEnquiryModal} />
        <div className="relative w-full -mt-1.75 overflow-x-clip">
          <img src="/Tracks.png" alt="" className="block w-full select-none" draggable={false} />
          <img src="/TrainLeft.png" alt="" className="train-slide train-slide-reverse h-[150%] w-auto select-none -top-4.5" draggable={false} />
        </div>
        <Destinations />
        <Packages onEnquiry={openEnquiryModal} />
        <WhyChooseUs />
        <div className="relative w-full -mb-2.5 overflow-x-clip">
          <img src="/Tracks.png" alt="" className="block w-full select-none" draggable={false} />
          <img src="/Train.png" alt="" className="train-slide h-[150%] w-auto select-none -top-4.5" draggable={false} />
        </div>
        <Gallery />
        <CtaBanner />
        <EnquiryForm />
      </main>
      <Footer />
      <ScrollToTop />
      <EnquiryModal open={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </>
    </ToastProvider>
  );
}
