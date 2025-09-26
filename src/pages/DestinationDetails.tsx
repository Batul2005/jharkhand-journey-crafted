import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Calendar, Users, Camera, Heart, Share2, Clock, DollarSign } from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';

const DestinationDetails = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const destination = {
    name: "Hundru Falls",
    location: "Ranchi, Jharkhand",
    rating: 4.6,
    reviews: 1234,
    price: "₹2,500",
    duration: "Full Day",
    images: [
      "/src/assets/hundru-falls.jpg",
      "/src/assets/betla-park.jpg",
      "/src/assets/handicrafts.jpg"
    ],
    description: "Experience the majestic Hundru Falls, a breathtaking 320-foot waterfall cascading down rocky cliffs. This natural wonder offers spectacular views and adventure activities.",
    highlights: [
      "320-foot waterfall cascade",
      "Adventure sports available",
      "Best visited during monsoon",
      "Photography paradise",
      "Trekking trails nearby"
    ],
    amenities: ["Parking", "Food Court", "Restrooms", "First Aid", "Guide Services"],
    nearbyAttractions: [
      { name: "Rock Garden", distance: "5 km", time: "15 min" },
      { name: "Jagannath Temple", distance: "12 km", time: "25 min" },
      { name: "Kanke Dam", distance: "18 km", time: "35 min" }
    ]
  };

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely stunning! The waterfall was at its full glory. Must visit during monsoon season.",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      rating: 4,
      date: "1 week ago", 
      comment: "Great place for photography. The trek is moderate and manageable for families.",
      avatar: "RK"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Our guide was excellent and showed us hidden viewpoints. Highly recommended!",
      avatar: "SJ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image Gallery */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <img 
          src={destination.images[0]} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{destination.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{destination.location}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-1 fill-yellow-400 text-yellow-400" />
              <span>{destination.rating} ({destination.reviews} reviews)</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-8 right-8 z-20 flex space-x-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="glass backdrop-blur-md"
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button variant="secondary" size="icon" className="glass backdrop-blur-md">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About this destination</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{destination.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Highlights</h4>
                        <ul className="space-y-2">
                          {destination.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {destination.amenities.map((amenity, index) => (
                            <Badge key={index} variant="secondary">{amenity}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Nearby Attractions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {destination.nearbyAttractions.map((attraction, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                          <div>
                            <h5 className="font-medium">{attraction.name}</h5>
                            <p className="text-sm text-muted-foreground">{attraction.distance} away</p>
                          </div>
                          <Badge variant="outline">{attraction.time}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="photos">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {destination.images.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img src={image} alt={`${destination.name} ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Reviews & Ratings</h3>
                    <Button>Write a Review</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-6 bg-muted/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold">{destination.rating}</div>
                      <div className="flex items-center">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{destination.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {reviews.map((review, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold">
                              {review.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold">{review.name}</h5>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[1,2,3,4,5].map((star) => (
                                  <Star key={star} className={`h-4 w-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                ))}
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="location">
                <Card>
                  <CardHeader>
                    <CardTitle>Location & Getting There</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 mb-4">
                      <InteractiveMap />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2">Address</h5>
                        <p className="text-muted-foreground">{destination.location}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Best Time to Visit</h5>
                        <p className="text-muted-foreground">June to September (Monsoon season)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Book Your Visit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{destination.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                  <Badge variant="secondary">
                    <Clock className="h-3 w-3 mr-1" />
                    {destination.duration}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium">Select Date</label>
                    <Button variant="outline" className="w-full justify-start mt-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Choose date
                    </Button>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Number of Guests</label>
                    <Button variant="outline" className="w-full justify-start mt-1">
                      <Users className="h-4 w-4 mr-2" />
                      2 guests
                    </Button>
                  </div>
                </div>
                
                <Button className="w-full bg-hero-gradient text-white">
                  Book Now
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Free cancellation up to 24 hours before
                </div>
                
                <div className="border-t pt-4">
                  <h5 className="font-semibold mb-2">What's Included</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Professional guide</li>
                    <li>• Transportation</li>
                    <li>• Entry fees</li>
                    <li>• Safety equipment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;