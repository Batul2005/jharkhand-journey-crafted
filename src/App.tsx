import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import Itinerary from "./pages/Itinerary";
import Marketplace from "./pages/Marketplace";
import Guides from "./pages/Guides";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import GetStarted from "./pages/GetStarted";
import DestinationDetails from "./pages/DestinationDetails";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import UserDashboard from "./pages/UserDashboard";
import GuideProfile from "./pages/GuideProfile";
import TourManagement from "./pages/TourManagement";
import GuideDashboard from "./pages/GuideDashboard";
import FAQHelp from "./pages/FAQHelp";
import AttractionDetail from "./pages/AttractionDetail";
import Profile from "./pages/Profile";
import Booking from "./pages/Booking";
import Community from "./pages/Community";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/guides" element={<Guides />} />
          
          {/* Authentication Routes */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/get-started" element={<GetStarted />} />
          
          {/* Tourist Routes */}
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/attraction/:id" element={<AttractionDetail />} />
          <Route path="/itinerary-builder" element={<ItineraryBuilder />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/help" element={<FAQHelp />} />
          
          {/* Guide Routes */}
          <Route path="/guide/:id" element={<GuideProfile />} />
          <Route path="/guide-dashboard" element={<GuideDashboard />} />
          <Route path="/tour-management" element={<TourManagement />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
