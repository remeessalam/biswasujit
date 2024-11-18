import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { useEffect } from "react";
import WebDevelopment from "./pages/ServicesPages/WebDevelopment";
import ServicePageLayout from "./components/Website/ServicePageLayout";
import AppDevelopment from "./pages/ServicesPages/AppDevelopment";
import ArtificialIntelligence from "./pages/ServicesPages/ArtificialIntelligence";
import BlockChain from "./pages/ServicesPages/BlockChain";
import RPA from "./pages/ServicesPages/RPA";
import ARAndVR from "./pages/ServicesPages/ARAndVR";
import NormalizeSlash from "./components/NormalizeSlash";
import WhatsAppIcon from "./components/WhatsAppIcon";

Aos.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NormalizeSlash>
        <WhatsAppIcon />
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />

          {/* Services Detail Routes with Layout */}
          <Route path="/services" element={<ServicePageLayout />}>
            <Route path="data-science" element={<WebDevelopment />} />
            <Route path="cloud-migration" element={<AppDevelopment />} />
            <Route
              path="game-development"
              element={<ArtificialIntelligence />}
            />
            <Route path="blockchain" element={<BlockChain />} />
            <Route path="artificial-intelligence" element={<RPA />} />
            <Route path="web-mobile-development" element={<ARAndVR />} />
          </Route>

          {/* Generic Routes */}
          <Route
            path="/web-development"
            element={<LandingPage page={"web-development"} />}
          />
          <Route
            path="/app-development"
            element={<LandingPage page={"app-development"} />}
          />
        </Routes>
      </NormalizeSlash>
    </BrowserRouter>
  );
}

export default App;

// scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
