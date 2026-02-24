import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import Internships from "./pages/Internships";
import SalesServices from "./pages/SalesServices";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import InternshipForm from "./pages/InternshipForm";
import ContactUs from "./pages/ContactUs";
import OngoingProjects from "./pages/OngoingProjects";
import AddOnLabs from "./pages/AddOnLabs";

// Landing Page Layout
const Home = () => (
  <>
    <Helmet>
      <title>Veertrons Engineering | Industry-Ready Engineers</title>
      <meta name="description" content="Veertrons Engineering - Empowering the next generation of engineers through hands-on internships in PCB Fabrication, IoT Ecosystems, Embedded Systems, and advanced technology domains." />
      <meta property="og:title" content="Veertrons Engineering | Industry-Ready Engineers" />
      <meta property="og:description" content="Hands-on technical training in PCB Fabrication, IoT, Embedded Systems and more." />
    </Helmet>
    <Hero />
    <About />
    <Services />
    <Feedback />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<OngoingProjects />} />
          <Route path="/services/internships" element={<Internships />} />
          <Route path="/services/sales-engineering" element={<SalesServices />} />
          <Route path="/services/add-on-labs" element={<AddOnLabs />} />
          <Route path="/internship/apply" element={<InternshipForm />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;