import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuickSearch from '@/components/QuickSearch';
import FeaturedAttractions from '@/components/FeaturedAttractions';
import InteractiveMap from '@/components/InteractiveMap';
import VirtualTour from '@/components/VirtualTour';
import EventCalendar from '@/components/EventCalendar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QuickSearch />
      <FeaturedAttractions />
      <InteractiveMap />
      <VirtualTour />
      <EventCalendar />
      <Footer />
    </div>
  );
};

export default Index;
