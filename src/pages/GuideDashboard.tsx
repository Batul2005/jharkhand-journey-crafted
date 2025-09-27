import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DollarSign, 
  Calendar, 
  Users, 
  Star, 
  MessageCircle, 
  TrendingUp, 
  Clock,
  Plus,
  Eye,
  Phone
} from 'lucide-react';

const GuideDashboard = () => {
  const guide = {
    name: "Ravi Kumar",
    avatar: "/api/placeholder/64/64",
    rating: 4.9,
    totalEarnings: "₹1,24,500",
    monthlyEarnings: "₹18,750",
    activeTours: 3,
    totalBookings: 156,
    pendingBookings: 5,
    responseRate: "98%"
  };

  const recentBookings = [
    {
      id: "BK001",
      customerName: "Sarah Johnson",
      customerAvatar: "SJ",
      tour: "Betla National Park Safari",
      date: "2025-03-15",
      guests: 4,
      amount: "₹14,000",
      status: "confirmed",
      phone: "+91 9876543210"
    },
    {
      id: "BK002", 
      customerName: "Raj Patel",
      customerAvatar: "RP",
      tour: "Hundru Falls Adventure",
      date: "2025-03-18",
      guests: 2,
      amount: "₹5,000",
      status: "pending",
      phone: "+91 9876543211"
    },
    {
      id: "BK003",
      customerName: "Lisa Chen",
      customerAvatar: "LC",
      tour: "Cultural Heritage Tour", 
      date: "2025-03-22",
      guests: 6,
      amount: "₹25,200",
      status: "confirmed",
      phone: "+91 9876543212"
    }
  ];

  const upcomingTours = [
    {
      id: 1,
      title: "Betla National Park Safari",
      date: "2025-03-15",
      time: "6:00 AM",
      guests: 4,
      customerName: "Sarah Johnson",
      location: "Betla National Park"
    },
    {
      id: 2,
      title: "Hundru Falls Adventure",
      date: "2025-03-18", 
      time: "8:00 AM",
      guests: 2,
      customerName: "Raj Patel",
      location: "Hundru Falls"
    }
  ];

  const messages = [
    {
      id: 1,
      customerName: "Sarah Johnson",
      avatar: "SJ",
      message: "Hi! Could you please confirm the meeting point for tomorrow's safari?",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      customerName: "Mike Wilson",
      avatar: "MW",
      message: "Thank you for the amazing tour! Can we book another one next month?",
      time: "1 day ago",
      unread: false
    },
    {
      id: 3,
      customerName: "Priya Sharma",
      avatar: "PS", 
      message: "What should we bring for the trekking tour?",
      time: "2 days ago",
      unread: true
    }
  ];

  const earnings = {
    thisMonth: [
      { date: "Week 1", amount: 4500 },
      { date: "Week 2", amount: 6200 },
      { date: "Week 3", amount: 5800 },
      { date: "Week 4", amount: 2250 }
    ],
    pendingPayouts: "₹8,450",
    nextPayout: "2025-03-20"
  };

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
              <AvatarImage src={guide.avatar} alt={guide.name} />
              <AvatarFallback>RK</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {guide.name}!</h1>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{guide.rating} rating</span>
                <span>•</span>
                <span>{guide.responseRate} response rate</span>
              </div>
            </div>
          </div>
          <Button className="bg-hero-gradient mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Create New Tour
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">{guide.monthlyEarnings}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">+12% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Bookings</p>
                  <p className="text-2xl font-bold">{guide.pendingBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Awaiting confirmation
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Tours</p>
                  <p className="text-2xl font-bold">{guide.activeTours}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Currently available
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                  <p className="text-2xl font-bold">{guide.totalBookings}</p>
                </div>
                <Star className="h-8 w-8 text-purple-500" />
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                All time
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="tours">My Tours</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="grid lg:grid-cols-2 gap-8">
            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Bookings</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{booking.customerAvatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{booking.customerName}</p>
                          <p className="text-sm text-muted-foreground">{booking.tour}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`${getStatusColor(booking.status)} text-white mb-1`}>
                          {booking.status}
                        </Badge>
                        <p className="text-sm font-medium">{booking.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Tours */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Today's Schedule</CardTitle>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Calendar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTours.map((tour) => (
                    <div key={tour.id} className="flex items-start space-x-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{tour.title}</p>
                        <p className="text-sm text-muted-foreground">{tour.customerName} • {tour.guests} guests</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <span>{tour.date}</span>
                          <span>{tour.time}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button className="h-20 flex-col bg-blue-500 hover:bg-blue-600">
                    <Plus className="h-6 w-6 mb-2" />
                    Create Tour
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Calendar className="h-6 w-6 mb-2" />
                    Update Calendar
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    View Messages
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Eye className="h-6 w-6 mb-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">All Bookings</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{booking.customerAvatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{booking.customerName}</h3>
                          <p className="text-muted-foreground">{booking.tour}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                            <span>{booking.date}</span>
                            <span>{booking.guests} guests</span>
                            <span>{booking.phone}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-lg font-bold">{booking.amount}</div>
                          <Badge className={`${getStatusColor(booking.status)} text-white`}>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
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

          <TabsContent value="messages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Messages</h2>
              <Badge variant="secondary">
                {messages.filter(m => m.unread).length} unread
              </Badge>
            </div>
            
            <div className="space-y-2">
              {messages.map((message) => (
                <Card key={message.id} className={`cursor-pointer hover:bg-muted/50 ${message.unread ? 'border-primary' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback>{message.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className={`font-medium ${message.unread ? 'text-primary' : ''}`}>
                            {message.customerName}
                          </h4>
                          <span className="text-sm text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="text-muted-foreground text-sm truncate">{message.message}</p>
                      </div>
                      {message.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">{guide.totalEarnings}</div>
                  <div className="text-sm text-muted-foreground">Total Earnings</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold">{earnings.pendingPayouts}</div>
                  <div className="text-sm text-muted-foreground">Pending Payouts</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold">{earnings.nextPayout}</div>
                  <div className="text-sm text-muted-foreground">Next Payout</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Earnings Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {earnings.thisMonth.map((week, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{week.date}</span>
                      <span className="text-lg font-bold">₹{week.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tours">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Tours</h2>
              <Button className="bg-hero-gradient">
                <Plus className="h-4 w-4 mr-2" />
                Create New Tour
              </Button>
            </div>
            
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Manage Your Tours</h3>
              <p className="text-muted-foreground mb-4">Go to Tour Management for detailed tour controls</p>
              <Button variant="outline">
                Open Tour Management
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GuideDashboard;
