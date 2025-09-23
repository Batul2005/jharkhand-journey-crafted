import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, MapPin, Users } from 'lucide-react';
import heroImage from '@/assets/hero-jharkhand.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-white font-inter text-sm font-medium">
              AI-Powered Tourism Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
              Jharkhand's
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl">Hidden Treasures</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-inter leading-relaxed">
            Experience authentic tribal culture, pristine waterfalls, and untouched forests with AI-powered personalized itineraries and verified local guides.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold text-white">50K+</div>
              <div className="text-white/70 font-inter text-sm">Visitors This Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold text-accent">500+</div>
              <div className="text-white/70 font-inter text-sm">Verified Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-poppins font-bold text-white">2K+</div>
              <div className="text-white/70 font-inter text-sm">Handicrafts Sold</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-hero-gradient text-white font-inter font-semibold text-lg px-8 py-4 shadow-glow hover-lift group"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Plan My Trip with AI
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass text-white border-white/30 hover:bg-white/10 font-inter font-semibold text-lg px-8 py-4"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explore Attractions
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
            <div className="flex items-center space-x-2 text-white/80 text-sm font-inter">
              <Users className="h-4 w-4" />
              <span>Verified by JTDC</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80 text-sm font-inter">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Recommendations</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80 text-sm font-inter">
              <MapPin className="h-4 w-4" />
              <span>Local Community Supported</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;