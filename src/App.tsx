
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import RegistrationJourney from "./pages/journey/RegistrationJourney";
import CorporateCultureJourney from "./pages/journey/CorporateCultureJourney";
import MarketplaceJourney from "./pages/journey/MarketplaceJourney";
import PizzaJourney from "./pages/journey/PizzaJourney";
import ContactFormJourney from "./pages/journey/ContactFormJourney";
import NewsletterJourney from "./pages/journey/NewsletterJourney";
import GamesJourney from "./pages/journey/GamesJourney";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            
            {/* Journey routes */}
            <Route path="/journey/registration" element={<RegistrationJourney />} />
            <Route path="/journey/corporate-culture" element={<CorporateCultureJourney />} />
            <Route path="/journey/marketplace" element={<MarketplaceJourney />} />
            <Route path="/journey/pizza" element={<PizzaJourney />} />
            <Route path="/journey/contact-form" element={<ContactFormJourney />} />
            <Route path="/journey/newsletter" element={<NewsletterJourney />} />
            <Route path="/journey/games" element={<GamesJourney />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
