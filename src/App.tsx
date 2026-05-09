import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import PianoLessons from "./pages/PianoLessons";
import AfterSchoolClubs from "./pages/AfterSchoolClubs";
import Homeschool from "./pages/Homeschool";
import About from "./pages/About";
import Schools from "./pages/Schools";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { trackPageView } from "./lib/analytics";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/piano-lessons" element={<PianoLessons />} />
      <Route path="/after-school-clubs" element={<AfterSchoolClubs />} />
      <Route path="/homeschool" element={<Homeschool />} />
      <Route path="/about" element={<About />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
