import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <DialogContent className="max-w-2xl">
            <img src="/popup.jpg" alt="Popup" className="w-full h-auto" />
            <Button onClick={() => setIsPopupOpen(false)} className="mt-4">
              Close
            </Button>
          </DialogContent>
        </Dialog>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
