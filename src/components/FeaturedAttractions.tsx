import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Camera, ArrowRight } from 'lucide-react';
import hundruFalls from '@/assets/hundru-falls.jpg';
import betlaPark from '@/assets/betla-park.jpg';
import handicrafts from '@/assets/handicrafts.jpg';

const FeaturedAttractions = () => {
  const attractions = [
    {
      id: 1,
      title: 'Hundru Falls',
      location: 'Ranchi District',
      image: hundruFalls,
      rating: 4.8,
      reviews: 2340,
      duration: '4-6 hours',
      price: '₹500',
      category: 'Waterfalls',
      description: 'Spectacular 320-foot waterfall surrounded by lush green forests and rocky terrain.',
      highlights: ['Photography Paradise', 'Trekking Trail', 'Natural Pool'],
      bestTime: 'Oct - Mar',
      verified: true,
    },
    {
      id: 2,
      title: 'Betla National Park',
      location: 'Latehar District',
      image: betlaPark,
      rating: 4.7,
      reviews: 1890,
      duration: 'Full Day',
      price: '₹1,200',
      category: 'Wildlife',
      description: 'Home to tigers, elephants, and diverse wildlife in pristine natural habitat.',
      highlights: ['Tiger Safari', 'Elephant Spotting', 'Bird Watching'],
      bestTime: 'Nov - Apr',
      verified: true,
    },
    {
      id: 3,
      title: 'Tribal Handicraft Villages',
      location: 'Multiple Districts',
      image: handicrafts,
      rating: 4.9,
      reviews: 1560,
      duration: '2-3 hours',
      price: '₹300',
      category: 'Culture',
      description: 'Authentic tribal art, pottery, and textiles crafted by local artisans.',
      highlights: ['Live Demonstrations', 'Shopping', 'Cultural Exchange'],
      bestTime: 'Year Round',
      verified: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
            Featured Destinations
          </Badge>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
            Discover Jharkhand's
            <span className="block text-primary">Must-Visit Places</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            From cascading waterfalls to wildlife sanctuaries and authentic tribal experiences, 
            explore the best that Jharkhand has to offer.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {attractions.map((attraction) => (
            <div 
              key={attraction.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover-lift transition-smooth border border-border/50"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <Badge 
                  className="absolute top-4 left-4 bg-white/90 text-foreground border-0 font-inter font-medium"
                >
                  {attraction.category}
                </Badge>

                {/* Verified Badge */}
                {attraction.verified && (
                  <Badge 
                    className="absolute top-4 right-4 bg-primary text-white border-0 font-inter font-medium"
                  >
                    ✓ Verified
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4">
                  <Button size="sm" variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-foreground mb-1">
                      {attraction.title}
                    </h3>
                    <p className="text-muted-foreground font-inter text-sm flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {attraction.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-inter font-semibold text-foreground">
                        {attraction.rating}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {attraction.reviews} reviews
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground font-inter text-sm mb-4 leading-relaxed">
                  {attraction.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {attraction.highlights.slice(0, 2).map((highlight, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="text-xs font-inter bg-muted/50 text-muted-foreground"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span className="font-inter">{attraction.duration}</span>
                  </div>
                  <div className="font-inter font-semibold text-foreground">
                    From {attraction.price}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-inter font-medium group transition-smooth"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="font-inter font-medium text-lg px-8 py-4 border-primary/20 hover:bg-primary/5 hover:border-primary transition-smooth"
          >
            View All Attractions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAttractions;