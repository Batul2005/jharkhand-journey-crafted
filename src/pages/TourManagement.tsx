import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Plus, Edit, Trash2, Eye, Users, DollarSign, Clock, MapPin, Star } from 'lucide-react';

const TourManagement = () => {
  const [activeTab, setActiveTab] = useState('tours');
  
  const tours = [
    {
      id: 1,
      title: "Betla National Park Safari",
      status: "active",
      price: "₹3,500",
      duration: "2 Days, 1 Night",
      maxGuests: 8,
      bookings: 45,
      rating: 4.8,
      image: "/src/assets/betla-park.jpg",
      description: "Experience wildlife at its best in Jharkhand's premier national park.",
      nextBooking: "2024-03-15"
    },
    {
      id: 2,
      title: "Hundru Falls Adventure",
      status: "active",
      price: "₹2,500",
      duration: "Full Day",
      maxGuests: 12,
      bookings: 67,
      rating: 4.9,
      image: "/src/assets/hundru-falls.jpg",
      description: "Thrilling waterfall trekking and adventure sports experience.",
      nextBooking: "2024-03-18"
    },
    {
      id: 3,
      title: "Cultural Heritage Tour",
      status: "draft",
      price: "₹4,200",
      duration: "3 Days, 2 Nights",
      maxGuests: 6,
      bookings: 32,
      rating: 4.7,
      image: "/src/assets/handicrafts.jpg",
      description: "Immerse yourself in Jharkhand's rich cultural heritage.",
      nextBooking: null
    }
  ];

  const bookings = [
    {
      id: "BK001",
      tourTitle: "Betla National Park Safari",
      customerName: "Sarah Johnson",
      date: "2024-03-15",
      guests: 4,
      amount: "₹14,000",
      status: "confirmed",
      contact: "+91 9876543210"
    },
    {
      id: "BK002",
      tourTitle: "Hundru Falls Adventure", 
      customerName: "Raj Patel",
      date: "2024-03-18",
      guests: 2,
      amount: "₹5,000",
      status: "pending",
      contact: "+91 9876543211"
    },
    {
      id: "BK003",
      tourTitle: "Cultural Heritage Tour",
      customerName: "Lisa Chen",
      date: "2024-03-22",
      guests: 6,
      amount: "₹25,200",
      status: "confirmed",
      contact: "+91 9876543212"
    }
  ];

  const availabilityCalendar = [
    { date: "2024-03-15", status: "booked", tour: "Betla Safari" },
    { date: "2024-03-16", status: "available" },
    { date: "2024-03-17", status: "available" },
    { date: "2024-03-18", status: "booked", tour: "Hundru Falls" },
    { date: "2024-03-19", status: "blocked" },
    { date: "2024-03-20", status: "available" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'paused': return 'bg-orange-500';
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'cancelled': return 'bg-red-500';
      case 'booked': return 'bg-red-500';
      case 'available': return 'bg-green-500';
      case 'blocked': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Tour Management</h1>
            <p className="text-muted-foreground">Manage your tours, bookings, and availability</p>
          </div>
          <Button className="bg-hero-gradient mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Create New Tour
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{tours.filter(t => t.status === 'active').length}</div>
              <div className="text-sm text-muted-foreground">Active Tours</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl font-bold">{bookings.filter(b => b.status === 'confirmed').length}</div>
              <div className="text-sm text-muted-foreground">Confirmed Bookings</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">₹44,200</div>
              <div className="text-sm text-muted-foreground">Monthly Revenue</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tours">My Tours</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="create">Create Tour</TabsTrigger>
          </TabsList>

          <TabsContent value="tours" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Tours</h2>
              <div className="flex space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {tours.map((tour) => (
                <Card key={tour.id} className="hover:shadow-md transition-shadow">
                  <div className="relative">
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={tour.image} 
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className={`absolute top-3 right-3 ${getStatusColor(tour.status)} text-white`}>
                      {tour.status.charAt(0).toUpperCase() + tour.status.slice(1)}
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
                    
                    <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold">{tour.bookings}</div>
                        <div className="text-muted-foreground">Bookings</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{tour.maxGuests}</div>
                        <div className="text-muted-foreground">Max Guests</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold flex items-center justify-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          {tour.rating}
                        </div>
                        <div className="text-muted-foreground">Rating</div>
                      </div>
                    </div>
                    
                    {tour.nextBooking && (
                      <div className="bg-muted/50 rounded p-2 mb-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Next booking: {tour.nextBooking}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Recent Bookings</h2>
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bookings</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{booking.tourTitle}</h3>
                          <Badge className={`${getStatusColor(booking.status)} text-white`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>
                            <div className="font-medium text-foreground">{booking.customerName}</div>
                            <div>{booking.contact}</div>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {booking.date}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {booking.guests} guests
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-lg font-bold">{booking.amount}</div>
                          <div className="text-sm text-muted-foreground">ID: {booking.id}</div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          {booking.status === 'pending' && (
                            <Button size="sm" className="bg-hero-gradient">
                              Accept
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Availability Calendar</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Block Dates
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>March 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-medium p-2">{day}</div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {availabilityCalendar.map((day, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border text-center cursor-pointer hover:bg-muted/50 ${
                        day.status === 'available' ? 'border-green-500 bg-green-50' :
                        day.status === 'booked' ? 'border-red-500 bg-red-50' :
                        'border-gray-500 bg-gray-50'
                      }`}
                    >
                      <div className="font-medium">{new Date(day.date).getDate()}</div>
                      {day.tour && (
                        <div className="text-xs text-muted-foreground mt-1">{day.tour}</div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-6 mt-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                    Available
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
                    Booked
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-500 rounded mr-2"></div>
                    Blocked
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create" className="space-y-6">
            <h2 className="text-2xl font-bold">Create New Tour</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Tour Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tour Title</label>
                    <Input placeholder="Enter tour title" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price (₹)</label>
                    <Input type="number" placeholder="2500" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Duration</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="half-day">Half Day</SelectItem>
                        <SelectItem value="full-day">Full Day</SelectItem>
                        <SelectItem value="2-days">2 Days, 1 Night</SelectItem>
                        <SelectItem value="3-days">3 Days, 2 Nights</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Max Guests</label>
                    <Input type="number" placeholder="8" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wildlife">Wildlife Safari</SelectItem>
                        <SelectItem value="adventure">Adventure</SelectItem>
                        <SelectItem value="cultural">Cultural</SelectItem>
                        <SelectItem value="spiritual">Spiritual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea 
                    placeholder="Describe your tour experience, what makes it special, and what guests can expect..."
                    className="min-h-32"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <div className="flex">
                    <MapPin className="h-10 w-10 p-2 border border-r-0 rounded-l-md bg-muted" />
                    <Input placeholder="Tour starting location" className="rounded-l-none" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">What's Included</label>
                  <Textarea 
                    placeholder="List what's included in the tour (transportation, meals, entry fees, etc.)"
                    className="min-h-24"
                  />
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Button variant="outline">Save as Draft</Button>
                  <Button className="bg-hero-gradient">
                    Publish Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TourManagement;