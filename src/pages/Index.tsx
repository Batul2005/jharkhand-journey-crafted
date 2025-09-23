import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuickSearch from '@/components/QuickSearch';
import FeaturedAttractions from '@/components/FeaturedAttractions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QuickSearch />
      <FeaturedAttractions />
      <Footer />
    </div>
  );
};

export default Index;
