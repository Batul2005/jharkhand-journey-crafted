import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MapPin, Heart, Clock, Star, Plus, Filter, Download, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const userData = JSON.parse(localStorage.getItem('user'));
      
      if (!userData) {
        setError('No user data found. Please login again.');
        return;
      }

      setUser(userData);
      
      // Fetch bookings and wishlist
      await Promise.all([
        fetchBookings(userData.id),
        fetchWishlist(userData.id)
      ]);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Failed to load user data');
      toast({
        title: "Error",
        description: "Failed to load user data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/${userId}/bookings`);
      if (response.ok) {
        const data = await response.json();
        setBookings(data.bookings || []);
      } else {
        // If no bookings endpoint exists, use empty array
        setBookings([]);
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
      setBookings([]);
    }
  };

  const fetchWishlist = async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/${userId}/wishlist`);
      if (response.ok) {
        const data = await response.json();
        setWishlist(data.wishlist || []);
      } else {
        // If no wishlist endpoint exists, use empty array
        setWishlist([]);
      }
    } catch (error) {
      console.error('Failed to fetch wishlist:', error);
      setWishlist([]);
    }
  };

  // Calculate dynamic stats from user data
  const userStats = {
    totalTrips: bookings.filter(b => b.status === 'completed').length,
    savedDestinations: wishlist.length,
    avgRating: bookings.length > 0 ? 
      (bookings.reduce((sum, b) => sum + (b.rating || 0), 0) / bookings.length).toFixed(1) : 
      "0.0"
  };

  // Generate travel history from bookings
  const travelHistory = bookings
    .filter(b => b.status === 'completed')
    .reduce((acc, booking) => {
      const year = new Date(booking.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push({
        title: booking.title,
        date: new Date(booking.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        rating: booking.rating || 4
      });
      return acc;
    }, {});

  // Convert to array format
  const travelHistoryArray = Object.entries(travelHistory).map(([year, trips]) => ({
    year,
    trips
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Unable to load dashboard</h2>
          <p className="text-muted-foreground mb-4">{error || 'No user data found'}</p>
          <Button onClick={() => window.location.href = '/auth'}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
              <AvatarFallback>{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user.firstName} {user.lastName}</h1>
              <p className="text-muted-foreground">
                Member since {new Date(user.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
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
              <div className="text-2xl font-bold">{userStats.totalTrips}</div>
              <div className="text-sm text-muted-foreground">Total Trips</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
              <div className="text-2xl font-bold">{userStats.savedDestinations}</div>
              <div className="text-sm text-muted-foreground">Saved Places</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">{userStats.avgRating}</div>
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
              {bookings.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
                    <p className="text-muted-foreground mb-4">Start planning your Jharkhand adventure!</p>
                    <Button className="bg-hero-gradient">
                      <Plus className="h-4 w-4 mr-2" />
                      Plan Your First Trip
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                bookings.map((booking) => (
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
                ))
              )}
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
              {wishlist.length === 0 ? (
                <div className="col-span-full">
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-xl font-semibold mb-2">No saved places yet</h3>
                      <p className="text-muted-foreground mb-4">Start exploring and save your favorite destinations!</p>
                      <Button className="bg-hero-gradient">
                        Explore Destinations
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                wishlist.map((item) => (
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
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <h2 className="text-2xl font-bold">Travel History</h2>
            
            <div className="space-y-6">
              {travelHistoryArray.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">No travel history yet</h3>
                    <p className="text-muted-foreground mb-4">Complete your first trip to see your travel history!</p>
                    <Button className="bg-hero-gradient">
                      <Plus className="h-4 w-4 mr-2" />
                      Plan Your First Trip
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                travelHistoryArray.map((yearData) => (
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
                ))
              )}
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
                    <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                    <AvatarFallback>{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change Photo</Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <div className="p-2 border rounded">{user.firstName}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <div className="p-2 border rounded">{user.lastName}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <div className="p-2 border rounded">{user.email}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <div className="p-2 border rounded">{user.phone || 'Not provided'}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Language Preference</label>
                    <div className="p-2 border rounded">{user.languagePreference || 'English'}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Role</label>
                    <div className="p-2 border rounded">{user.role}</div>
                  </div>
                </div>
                
                {user.preferences?.interests && user.preferences.interests.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Interests</label>
                    <div className="flex flex-wrap gap-2">
                      {user.preferences.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary">{interest}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                
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
