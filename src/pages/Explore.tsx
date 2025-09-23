import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, Filter } from 'lucide-react';

const Explore = () => {
  const attractions = [
    {
      id: 1,
      name: "Hundru Falls",
      description: "A spectacular 98-meter tall waterfall, one of the highest in Jharkhand",
      image: "/src/assets/hundru-falls.jpg",
      category: "Waterfall",
      region: "Ranchi",
      rating: 4.5,
      distance: "45 km from Ranchi"
    },
    {
      id: 2,
      name: "Betla National Park",
      description: "Famous wildlife sanctuary known for tigers, elephants and rich biodiversity",
      image: "/src/assets/betla-park.jpg",
      category: "Wildlife",
      region: "Palamu",
      rating: 4.3,
      distance: "150 km from Ranchi"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Explore <span className="text-primary">Jharkhand</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the natural beauty, rich culture, and hidden gems of Jharkhand
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              All Categories
            </Button>
            <Button variant="outline">Wildlife</Button>
            <Button variant="outline">Waterfalls</Button>
            <Button variant="outline">Pilgrimage</Button>
            <Button variant="outline">Culture</Button>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{attraction.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">{attraction.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {attraction.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4" />
                      {attraction.distance}
                    </div>
                  </div>
                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;