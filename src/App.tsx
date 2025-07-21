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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/smartphones-wearables" element={<SmartphonesWearables />} />
          <Route path="/gaming-entertainment" element={<GamingEntertainment />} />
          <Route path="/smart-home" element={<SmartHome />} />
          <Route path="/laptops-computing" element={<LaptopsComputing />} />
          <Route path="/power-tools" element={<PowerTools />} />
          <Route path="/metal-detectors" element={<MetalDetectors />} />
          <Route path="/audio-accessories" element={<AudioAccessories />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
