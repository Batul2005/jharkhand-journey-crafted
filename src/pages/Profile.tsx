import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  User, MapPin, Calendar, Star, Heart, Bookmark, 
  Settings, Bell, Shield, CreditCard, Camera,
  Languages, Globe, Smartphone
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Aditya Singh',
    email: 'aditya.singh@example.com',
    phone: '+91 98765 43210',
    bio: 'Adventure enthusiast and nature lover. Love exploring the hidden gems of Jharkhand.',
    location: 'Ranchi, Jharkhand',
    languages: ['Hindi', 'English', 'Bengali'],
    joinDate: 'March 2024',
    avatar: ''
  });

  const bookings = [
    {
      id: 1,
      type: 'Waterfall Trek',
      destination: 'Hundru Falls',
      guide: 'Ravi Kumar',
      date: '15 Nov 2024',
      status: 'Confirmed',
      amount: '₹2,500'
    },
    {
      id: 2,
      type: 'Wildlife Safari',
      destination: 'Betla National Park',
      guide: 'Meera Devi',
      date: '28 Oct 2024',
      status: 'Completed',
      amount: '₹3,200'
    }
  ];

  const savedItineraries = [
    {
      id: 1,
      title: '3-Day Ranchi Explorer',
      destinations: ['Rock Garden', 'Tagore Hill', 'Hundru Falls'],
      created: '2 weeks ago',
      duration: '3 days'
    },
    {
      id: 2,
      title: 'Tribal Culture Tour',
      destinations: ['Tribal Museum', 'Saraikela', 'Local Markets'],
      created: '1 month ago',
      duration: '5 days'
    }
  ];

  const favoriteAttractions = [
    {
      id: 1,
      name: 'Hundru Falls',
      image: '/src/assets/hundru-falls.jpg',
      rating: 4.5,
      category: 'Waterfall'
    },
    {
      id: 2,
      name: 'Betla National Park',
      image: '/src/assets/betla-park.jpg',
      rating: 4.3,
      category: 'Wildlife'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute -bottom-2 -right-2 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold">{profile.name}</h1>
                  <p className="text-muted-foreground text-lg">{profile.bio}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-3">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {profile.joinDate}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Languages className="h-4 w-4" />
                      <span>{profile.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => setIsEditing(!isEditing)}
                    variant={isEditing ? "default" : "outline"}
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="itineraries">Itineraries</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Travel Stats */}
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-primary">Travel Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">12</div>
                      <div className="text-muted-foreground">Places Visited</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">8</div>
                      <div className="text-muted-foreground">Tours Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary">5</div>
                      <div className="text-muted-foreground">Reviews Given</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium">Visited Hundru Falls</div>
                      <div className="text-muted-foreground">2 days ago</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Reviewed Betla National Park</div>
                      <div className="text-muted-foreground">1 week ago</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Created new itinerary</div>
                      <div className="text-muted-foreground">2 weeks ago</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Calendar className="h-4 w-4" />
                      Plan New Trip
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <MapPin className="h-4 w-4" />
                      Explore Attractions
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <User className="h-4 w-4" />
                      Find Guides
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{booking.type}</h3>
                        <p className="text-muted-foreground">{booking.destination}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>Guide: {booking.guide}</span>
                          <span>Date: {booking.date}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={booking.status === 'Confirmed' ? 'default' : 'secondary'}
                          className="mb-2"
                        >
                          {booking.status}
                        </Badge>
                        <div className="text-xl font-bold text-primary">{booking.amount}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="itineraries" className="space-y-4">
              {savedItineraries.map((itinerary) => (
                <Card key={itinerary.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{itinerary.title}</h3>
                        <p className="text-muted-foreground mb-3">
                          {itinerary.destinations.join(' → ')}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{itinerary.duration}</span>
                          <span>Created {itinerary.created}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button size="sm">Book</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favoriteAttractions.map((attraction) => (
                  <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{attraction.name}</h3>
                        <Badge variant="secondary">{attraction.category}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="text-sm font-medium">{attraction.rating}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              {isEditing ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          value={profile.phone}
                          onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location" 
                          value={profile.location}
                          onChange={(e) => setProfile({...profile, location: e.target.value})}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        value={profile.bio}
                        onChange={(e) => setProfile({...profile, bio: e.target.value})}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <>
                  {/* Notification Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        Notification Preferences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Booking Updates</div>
                          <div className="text-sm text-muted-foreground">Get notified about booking confirmations and changes</div>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">New Attractions</div>
                          <div className="text-sm text-muted-foreground">Be the first to know about new destinations</div>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Special Offers</div>
                          <div className="text-sm text-muted-foreground">Receive exclusive deals and discounts</div>
                        </div>
                        <Switch />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Privacy Settings */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Privacy & Security
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Profile Visibility</div>
                          <div className="text-sm text-muted-foreground">Make your profile visible to other travelers</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Location Sharing</div>
                          <div className="text-sm text-muted-foreground">Share your location for better recommendations</div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Button variant="outline" className="w-full gap-2">
                        <Shield className="h-4 w-4" />
                        Change Password
                      </Button>
                    </CardContent>
                  </Card>

                  {/* App Preferences */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-primary" />
                        App Preferences
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="language">Language</Label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                          <option>English</option>
                          <option>हिंदी (Hindi)</option>
                          <option>संताली (Santali)</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="currency">Currency</Label>
                        <select className="w-full mt-1 p-2 border rounded-md">
                          <option>₹ Indian Rupee (INR)</option>
                          <option>$ US Dollar (USD)</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;