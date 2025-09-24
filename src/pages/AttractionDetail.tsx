import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, Clock, Star, Heart, Share2, Camera, Info, 
  Users, Calendar, Phone, MessageCircle, Verified,
  Navigation as NavIcon, Wallet, TreePine
} from 'lucide-react';

const AttractionDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  
  // Mock data - would come from API
  const attraction = {
    id: 1,
    name: "Hundru Falls",
    description: "A spectacular 98-meter tall waterfall, one of the highest in Jharkhand. Located near Ranchi, this majestic waterfall is formed by the Subarnarekha River cascading down from a rocky cliff. The sight of water gushing down with tremendous force creating a misty spray is truly mesmerizing.",
    longDescription: "Hundru Falls is not just a waterfall; it's a natural wonder that showcases the raw beauty of Jharkhand. The 98-meter drop makes it one of the tallest waterfalls in the state. During monsoons, the volume of water increases dramatically, creating a thunderous roar that can be heard from miles away. The surrounding area is rich in biodiversity with various species of birds and butterflies. The rocky terrain and lush greenery make it a perfect spot for photography and nature walks.",
    images: ["/src/assets/hundru-falls.jpg", "/src/assets/hundru-falls.jpg", "/src/assets/hundru-falls.jpg"],
    category: "Waterfall",
    region: "Ranchi",
    rating: 4.5,
    reviewCount: 238,
    distance: "45 km from Ranchi",
    entryFee: "₹30 per person",
    timings: "6:00 AM - 6:00 PM",
    bestTime: "July to November (Post-monsoon)",
    howToReach: "Take NH33 from Ranchi towards Jamshedpur, turn right at Tatisilwai and follow signs for 15km",
    facilities: ["Parking", "Rest Rooms", "Food Court", "Guide Service", "Photography"],
    safety: ["Wear non-slip shoes", "Don't venture too close to the edge", "Carry drinking water", "Follow guide instructions"],
    nearbyAttractions: ["Jonha Falls (12km)", "Sita Falls (18km)", "Ranchi (45km)"],
    localGuides: [
      {
        id: 1,
        name: "Ravi Kumar",
        rating: 4.9,
        experience: "8 years",
        languages: ["Hindi", "English", "Santali"],
        pricePerDay: "₹2,500",
        phone: "+91 98765 43210",
        verified: true,
        specialization: "Wildlife & Nature"
      },
      {
        id: 2,
        name: "Priya Sharma", 
        rating: 4.7,
        experience: "5 years",
        languages: ["Hindi", "English"],
        pricePerDay: "₹2,000",
        phone: "+91 98765 43211",
        verified: true,
        specialization: "Photography"
      }
    ],
    homestays: [
      {
        id: 1,
        name: "Eco Valley Resort",
        rating: 4.3,
        pricePerNight: "₹3,500",
        distance: "2km from falls",
        amenities: ["Free WiFi", "Restaurant", "Nature Walks"]
      },
      {
        id: 2,
        name: "Forest View Cottage",
        rating: 4.1,
        pricePerNight: "₹2,800",
        distance: "5km from falls", 
        amenities: ["Organic Food", "Bonfire", "Bird Watching"]
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Aditya Singh",
        rating: 5,
        date: "2 weeks ago",
        comment: "Absolutely breathtaking! The waterfall is magnificent, especially during monsoon. Must visit for nature lovers.",
        helpful: 12
      },
      {
        id: 2,
        name: "Priya Mehta",
        rating: 4,
        date: "1 month ago", 
        comment: "Beautiful place but can get crowded on weekends. Early morning visit is recommended for best experience.",
        helpful: 8
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Image Gallery */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={attraction.images[0]}
            alt={attraction.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay-gradient" />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button 
              size="icon" 
              variant="secondary"
              className="glass"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button size="icon" variant="secondary" className="glass">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="secondary" className="glass">
              <Camera className="h-5 w-5" />
            </Button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary text-white">{attraction.category}</Badge>
                  <Badge variant="secondary" className="glass-dark text-white">
                    {attraction.region}
                  </Badge>
                </div>
                <h1 className="text-5xl font-bold mb-2">{attraction.name}</h1>
                <div className="flex items-center gap-4 text-lg">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold">{attraction.rating}</span>
                    <span className="text-white/80">({attraction.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-5 w-5" />
                    <span>{attraction.distance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="stays">Stays</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5 text-primary" />
                        About {attraction.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {attraction.longDescription}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Quick Info</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{attraction.timings}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Wallet className="h-4 w-4 text-muted-foreground" />
                              <span>{attraction.entryFee}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>Best: {attraction.bestTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Facilities</h4>
                          <div className="flex flex-wrap gap-1">
                            {attraction.facilities.map((facility) => (
                              <Badge key={facility} variant="outline" className="text-xs">
                                {facility}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <NavIcon className="h-5 w-5 text-primary" />
                        How to Reach
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{attraction.howToReach}</p>
                      <Button variant="outline" className="gap-2">
                        <MapPin className="h-4 w-4" />
                        View on Map
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="guides" className="space-y-4">
                  {attraction.localGuides.map((guide) => (
                    <Card key={guide.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="relative">
                            <Avatar className="h-16 w-16">
                              <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                                {guide.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            {guide.verified && (
                              <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                                <Verified className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{guide.name}</h3>
                                <p className="text-primary font-medium">{guide.specialization}</p>
                                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-accent text-accent" />
                                    <span>{guide.rating}</span>
                                  </div>
                                  <span>{guide.experience}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-primary">{guide.pricePerDay}</p>
                                <p className="text-sm text-muted-foreground">per day</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-3">
                              <span className="text-sm text-muted-foreground">Languages:</span>
                              <div className="flex gap-1">
                                {guide.languages.map((lang) => (
                                  <Badge key={lang} variant="secondary" className="text-xs">
                                    {lang}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-2 mt-4">
                              <Button variant="outline" size="sm" className="gap-2">
                                <Phone className="h-4 w-4" />
                                Call
                              </Button>
                              <Button variant="outline" size="sm" className="gap-2">
                                <MessageCircle className="h-4 w-4" />
                                Chat
                              </Button>
                              <Button size="sm" className="gap-2">
                                <Calendar className="h-4 w-4" />
                                Book Guide
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="stays" className="space-y-4">
                  {attraction.homestays.map((stay) => (
                    <Card key={stay.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{stay.name}</h3>
                            <div className="flex items-center gap-4 mt-1">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-accent text-accent" />
                                <span className="font-medium">{stay.rating}</span>
                              </div>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm">{stay.distance}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-3">
                              {stay.amenities.map((amenity) => (
                                <Badge key={amenity} variant="outline" className="text-xs">
                                  {amenity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{stay.pricePerNight}</p>
                            <p className="text-sm text-muted-foreground">per night</p>
                            <Button size="sm" className="mt-2">Book Now</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="reviews" className="space-y-4">
                  {attraction.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <Button variant="ghost" size="sm">
                            👍 Helpful ({review.helpful})
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Plan Your Visit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full gap-2" size="lg">
                    <Calendar className="h-4 w-4" />
                    Add to Itinerary
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Users className="h-4 w-4" />
                    Find Travel Buddy
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Weather Widget */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-primary" />
                    Current Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold">26°C</div>
                    <div className="text-muted-foreground">Partly Cloudy</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Perfect weather for visiting!
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Attractions */}
              <Card>
                <CardHeader>
                  <CardTitle>Nearby Attractions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {attraction.nearbyAttractions.map((nearby) => (
                    <div key={nearby} className="flex items-center justify-between">
                      <span className="text-sm">{nearby}</span>
                      <Button variant="ghost" size="sm" className="text-primary">
                        View
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AttractionDetail;