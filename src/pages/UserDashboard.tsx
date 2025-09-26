import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MapPin, Heart, Clock, Star, Plus, Filter, Download } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  const user = {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    avatar: "/api/placeholder/64/64",
    memberSince: "January 2023",
    totalTrips: 12,
    savedDestinations: 24
  };

  const bookings = [
    {
      id: "BK001",
      title: "Hundru Falls Adventure",
      destination: "Ranchi, Jharkhand",
      date: "2024-03-15",
      status: "confirmed",
      price: "₹2,500",
      image: "/src/assets/hundru-falls.jpg",
      guide: "Ravi Kumar"
    },
    {
      id: "BK002", 
      title: "Betla National Park Safari",
      destination: "Latehar, Jharkhand",
      date: "2024-03-20",
      status: "pending",
      price: "₹3,800",
      image: "/src/assets/betla-park.jpg",
      guide: "Sunita Devi"
    },
    {
      id: "BK003",
      title: "Cultural Heritage Tour",
      destination: "Deoghar, Jharkhand", 
      date: "2024-02-10",
      status: "completed",
      price: "₹1,800",
      image: "/src/assets/handicrafts.jpg",
      guide: "Amit Singh"
    }
  ];

  const wishlist = [
    {
      id: 1,
      title: "Netarhat Sunrise Point",
      location: "Netarhat, Jharkhand",
      rating: 4.7,
      price: "₹1,200",
      image: "/src/assets/hero-jharkhand.jpg"
    },
    {
      id: 2,
      title: "Jonha Falls",
      location: "Ranchi, Jharkhand", 
      rating: 4.5,
      price: "₹800",
      image: "/src/assets/hundru-falls.jpg"
    }
  ];

  const travelHistory = [
    {
      year: "2024",
      trips: [
        { title: "Hundru Falls Adventure", date: "Mar 2024", rating: 5 },
        { title: "Cultural Heritage Tour", date: "Feb 2024", rating: 4 }
      ]
    },
    {
      year: "2023", 
      trips: [
        { title: "Betla Wildlife Safari", date: "Dec 2023", rating: 5 },
        { title: "Spiritual Deoghar Tour", date: "Nov 2023", rating: 4 },
        { title: "Ranchi City Explorer", date: "Oct 2023", rating: 4 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>
              <p className="text-muted-foreground">Member since {user.memberSince}</p>
            </div>
          </div>
          <Button className="bg-hero-gradient mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Plan New Trip
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{user.totalTrips}</div>
              <div className="text-sm text-muted-foreground">Total Trips</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
              <div className="text-2xl font-bold">{user.savedDestinations}</div>
              <div className="text-sm text-muted-foreground">Saved Places</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating Given</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="history">Travel History</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Bookings</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-32 overflow-hidden rounded-lg">
                        <img 
                          src={booking.image} 
                          alt={booking.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold">{booking.title}</h3>
                            <div className="flex items-center text-muted-foreground mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              {booking.destination}
                            </div>
                          </div>
                          <Badge className={`${getStatusColor(booking.status)} text-white`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(booking.date).toLocaleDateString()}
                            </div>
                            <div>Guide: {booking.guide}</div>
                          </div>
                          
                          <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <div className="text-lg font-bold">{booking.price}</div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View Details</Button>
                              {booking.status === 'completed' && (
                                <Button size="sm" className="bg-hero-gradient">
                                  Write Review
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Wishlist</h2>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Sort by
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow group">
                  <div className="relative">
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <Button 
                      variant="secondary" 
                      size="icon"
                      className="absolute top-3 right-3 glass backdrop-blur-md"
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      {item.location}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">{item.rating}</span>
                      </div>
                      <div className="font-semibold">{item.price}</div>
                    </div>
                    
                    <Button className="w-full mt-3 bg-hero-gradient">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <h2 className="text-2xl font-bold">Travel History</h2>
            
            <div className="space-y-6">
              {travelHistory.map((yearData) => (
                <Card key={yearData.year}>
                  <CardHeader>
                    <CardTitle>{yearData.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {yearData.trips.map((trip, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{trip.title}</h4>
                            <p className="text-sm text-muted-foreground">{trip.date}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[1,2,3,4,5].map((star) => (
                                <Star 
                                  key={star} 
                                  className={`h-4 w-4 ${star <= trip.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <Button variant="outline" size="sm">Book Again</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change Photo</Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <div className="p-2 border rounded">{user.name}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <div className="p-2 border rounded">{user.email}</div>
                  </div>
                </div>
                
                <Button className="bg-hero-gradient">Update Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;