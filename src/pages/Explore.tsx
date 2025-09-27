import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AttractionDetail from '@/components/AttractionDetail';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, Filter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

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
      distance: "45 km from Ranchi",
      detailedDescription: "Hundru Falls is one of the most spectacular waterfalls in Jharkhand, cascading from a height of 98 meters. The waterfall is formed by the Subarnarekha River and offers breathtaking views, especially during the monsoon season. The surrounding lush green forests and the cool mist create a magical atmosphere that attracts thousands of visitors every year.",
      bestTimeToVisit: "July to October",
      entryFee: "₹30 per person",
      timings: "6:00 AM - 6:00 PM",
      facilities: ["Parking", "Restrooms", "Food Stalls", "Photography", "Safety Railings"],
      nearbyAttractions: ["Jonha Falls", "Dassam Falls", "Hirni Falls"],
      contactInfo: "+91 9876543210"
    },
    {
      id: 2,
      name: "Betla National Park",
      description: "Famous wildlife sanctuary known for tigers, elephants and rich biodiversity",
      image: "/src/assets/betla-park.jpg",
      category: "Wildlife",
      region: "Palamu",
      rating: 4.3,
      distance: "150 km from Ranchi",
      detailedDescription: "Betla National Park is one of India's first tiger reserves and a haven for wildlife enthusiasts. Spread over 1,026 square kilometers, it's home to Royal Bengal Tigers, Asian Elephants, Leopards, and over 200 species of birds. The park offers jeep safaris, elephant rides, and nature walks to explore its diverse ecosystem.",
      bestTimeToVisit: "October to April",
      entryFee: "₹100 per person (Indian), ₹500 (Foreign)",
      timings: "6:00 AM - 5:00 PM",
      facilities: ["Safari Booking", "Rest House", "Restaurant", "Parking", "Guide Services"],
      nearbyAttractions: ["Palamau Fort", "Kechki Sangam", "Lodh Falls"],
      contactInfo: "+91 9876543211"
    }
  ];

  const handleAddToWishlist = (attraction: any) => {
    // Get existing wishlist from localStorage
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    // Check if already in wishlist
    const isAlreadyInWishlist = existingWishlist.some((item: any) => item.id === attraction.id);
    
    if (isAlreadyInWishlist) {
      // Remove from wishlist
      const updatedWishlist = existingWishlist.filter((item: any) => item.id !== attraction.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      toast({
        title: "Removed from wishlist",
        description: `${attraction.name} has been removed from your wishlist.`,
      });
    } else {
      // Add to wishlist
      const wishlistItem = {
        id: attraction.id,
        title: attraction.name,
        image: attraction.image,
        location: attraction.distance,
        rating: attraction.rating,
        price: attraction.entryFee || 'Free'
      };
      const updatedWishlist = [...existingWishlist, wishlistItem];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      toast({
        title: "Added to wishlist",
        description: `${attraction.name} has been added to your wishlist.`,
      });
    }
    
    // Trigger a custom event to notify other components
    window.dispatchEvent(new CustomEvent('wishlistUpdated'));
  };

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
                  <AttractionDetail 
                    attraction={attraction} 
                    onAddToWishlist={handleAddToWishlist}
                  />
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