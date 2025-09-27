import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, MessageCircle, Calendar, Users, Award, Languages, Camera, Edit } from 'lucide-react';

const GuideProfile = () => {
  const [isOwnProfile, setIsOwnProfile] = useState(true); // For demo - would be determined by auth

  const guide = {
    name: "Ravi Kumar",
    title: "Certified Wildlife & Adventure Guide",
    location: "Ranchi, Jharkhand",
    avatar: "/api/placeholder/120/120",
    rating: 4.9,
    reviews: 234,
    experience: "8+ years",
    languages: ["Hindi", "English", "Bengali", "Santhali"],
    specialties: ["Wildlife Safari", "Adventure Sports", "Cultural Tours", "Photography Tours"],
    bio: "Passionate about showcasing Jharkhand's incredible wildlife and natural beauty. I've been guiding visitors through our state's hidden gems for over 8 years, specializing in wildlife photography and adventure experiences.",
    certifications: ["Wildlife Guide License", "First Aid Certified", "Adventure Sports Instructor"],
    totalTours: 156,
    repeatCustomers: "85%",
    responseTime: "< 1 hour"
  };

  const tourPackages = [
    {
      id: 1,
      title: "Betla National Park Safari",
      duration: "2 Days, 1 Night",
      price: "₹3,500",
      rating: 4.8,
      bookings: 45,
      image: "/src/assets/betla-park.jpg",
      highlights: ["Tiger spotting", "Bird watching", "Photography", "Accommodation included"]
    },
    {
      id: 2,
      title: "Hundru Falls Adventure",
      duration: "Full Day",
      price: "₹2,500", 
      rating: 4.9,
      bookings: 67,
      image: "/src/assets/hundru-falls.jpg",
      highlights: ["Waterfall trekking", "Swimming", "Rock climbing", "Local lunch"]
    },
    {
      id: 3,
      title: "Cultural Heritage Tour",
      duration: "3 Days, 2 Nights",
      price: "₹4,200",
      rating: 4.7,
      bookings: 32,
      image: "/src/assets/handicrafts.jpg",
      highlights: ["Temple visits", "Local crafts", "Traditional cuisine", "Folk performances"]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Ravi was an exceptional guide! His knowledge of wildlife and photography tips made our safari unforgettable. Highly recommended!",
      avatar: "SJ",
      tour: "Betla National Park Safari"
    },
    {
      id: 2,
      name: "Amit Patel",
      rating: 5,
      date: "1 month ago", 
      comment: "Amazing experience at Hundru Falls. Ravi ensured our safety while making the adventure thrilling. Professional and friendly!",
      avatar: "AP",
      tour: "Hundru Falls Adventure"
    },
    {
      id: 3,
      name: "Lisa Chen",
      rating: 4,
      date: "2 months ago",
      comment: "Great cultural insights and very knowledgeable about local history. The tour was well-organized and informative.",
      avatar: "LC",
      tour: "Cultural Heritage Tour"
    }
  ];

  const availability = {
    thisMonth: 18,
    nextMonth: 25,
    upcomingBookings: [
      { date: "2025-03-15", tour: "Betla Safari", clients: 4 },
      { date: "2025-03-18", tour: "Hundru Falls", clients: 2 },
      { date: "2025-03-22", tour: "Cultural Tour", clients: 6 }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg mb-6"></div>
          <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 -mt-20 relative z-10">
            <Avatar className="h-32 w-32 border-4 border-white">
              <AvatarImage src={guide.avatar} alt={guide.name} />
              <AvatarFallback className="text-2xl">RK</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{guide.name}</h1>
                  <p className="text-lg text-white/90 mb-1">{guide.title}</p>
                  <div className="flex items-center text-white/80 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {guide.location}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  {isOwnProfile ? (
                    <Button className="bg-white text-gray-800 hover:bg-gray-100">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button variant="secondary">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button className="bg-hero-gradient">
                        Book Tour
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">{guide.rating}</div>
              <div className="text-sm text-muted-foreground">{guide.reviews} reviews</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl font-bold">{guide.totalTours}</div>
              <div className="text-sm text-muted-foreground">Total Tours</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">{guide.repeatCustomers}</div>
              <div className="text-sm text-muted-foreground">Repeat Customers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <div className="text-2xl font-bold">{guide.responseTime}</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="tours">Tours</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{guide.bio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Specialties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {guide.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {guide.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-green-500" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {guide.languages.map((language, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Languages className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{language}</span>
                        </div>
                        <Badge variant="outline">Fluent</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{guide.experience}</div>
                    <div className="text-muted-foreground">Guiding Experience</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tours" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Tour Packages</h2>
              {isOwnProfile && (
                <Button className="bg-hero-gradient">
                  <Calendar className="h-4 w-4 mr-2" />
                  Create New Tour
                </Button>
              )}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {tourPackages.map((tour) => (
                <Card key={tour.id} className="hover:shadow-md transition-shadow">
                  <div className="relative">
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={tour.image} 
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                      {tour.bookings} bookings
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{tour.title}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold">{tour.price}</div>
                        <div className="text-sm text-muted-foreground">{tour.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{tour.rating}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">View Details</Button>
                      <Button className="flex-1 bg-hero-gradient">Book Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{guide.rating}</div>
                  <div className="flex items-center">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">{guide.reviews} reviews</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback>{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h5 className="font-semibold">{review.name}</h5>
                            <p className="text-sm text-muted-foreground">{review.tour}</p>
                          </div>
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
          </TabsContent>

          <TabsContent value="availability" className="space-y-6">
            <h2 className="text-2xl font-bold">Availability Calendar</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">{availability.thisMonth}</div>
                  <div className="text-sm text-muted-foreground">Available days this month</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold">{availability.nextMonth}</div>
                  <div className="text-sm text-muted-foreground">Available days next month</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-2xl font-bold">{availability.upcomingBookings.length}</div>
                  <div className="text-sm text-muted-foreground">Upcoming bookings</div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availability.upcomingBookings.map((booking, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h5 className="font-medium">{booking.tour}</h5>
                        <p className="text-sm text-muted-foreground">{booking.date}</p>
                      </div>
                      <Badge variant="secondary">{booking.clients} clients</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Photo Gallery</h2>
                {isOwnProfile && (
                  <Button variant="outline">
                    <Camera className="h-4 w-4 mr-2" />
                    Upload Photos
                  </Button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1,2,3,4,5,6,7,8,9].map((index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={`/src/assets/${index % 3 === 0 ? 'hundru-falls' : index % 3 === 1 ? 'betla-park' : 'handicrafts'}.jpg`}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GuideProfile;
