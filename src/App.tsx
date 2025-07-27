import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SmartphonesWearables from "./pages/SmartphonesWearables";
import GamingEntertainment from "./pages/GamingEntertainment";
import SmartHome from "./pages/SmartHome";
import LaptopsComputing from "./pages/LaptopsComputing";
import PowerTools from "./pages/PowerTools";
import MetalDetectors from "./pages/MetalDetectors";
import AudioAccessories from "./pages/AudioAccessories";
import FAQ from "./pages/FAQ";
import PaymentMethods from "./pages/PaymentMethods";
import CollectionAgents from "./pages/CollectionAgents";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about.html" element={<AboutPage />} />
          <Route path="/services.html" element={<ServicesPage />} />
          <Route path="/contact.html" element={<ContactPage />} />
          <Route path="/smartphones-wearables.html" element={<SmartphonesWearables />} />
          <Route path="/gaming-entertainment.html" element={<GamingEntertainment />} />
          <Route path="/smart-home.html" element={<SmartHome />} />
          <Route path="/laptops-computing.html" element={<LaptopsComputing />} />
          <Route path="/power-tools.html" element={<PowerTools />} />
          <Route path="/metal-detectors.html" element={<MetalDetectors />} />
          <Route path="/audio-accessories.html" element={<AudioAccessories />} />
          <Route path="/faq.html" element={<FAQ />} />
          <Route path="/payment-methods.html" element={<PaymentMethods />} />
          <Route path="/collection-agents.html" element={<CollectionAgents />} />
          <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service.html" element={<TermsOfService />} />
          <Route path="/cookie-policy.html" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
