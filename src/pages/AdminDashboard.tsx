import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, TrendingUp, Users, MapPin, Calendar, 
  AlertTriangle, CheckCircle, Clock, Download, 
  Filter, Search, Eye, MessageSquare, Star,
  DollarSign, Globe, Smartphone, Shield
} from 'lucide-react';

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  // Mock analytics data
  const stats = [
    { label: "Total Visitors", value: "45,287", change: "+12.5%", trend: "up", icon: Users },
    { label: "Bookings This Month", value: "1,234", change: "+8.2%", trend: "up", icon: Calendar },
    { label: "Revenue Generated", value: "₹12.4L", change: "+15.3%", trend: "up", icon: DollarSign },
    { label: "Active Guides", value: "89", change: "+5.1%", trend: "up", icon: CheckCircle },
  ];

  const districtStats = [
    { name: "Ranchi", visitors: 12450, bookings: 345, revenue: "₹4.2L", growth: "+15%" },
    { name: "Jamshedpur", visitors: 8920, bookings: 234, revenue: "₹2.8L", growth: "+12%" },
    { name: "Dhanbad", visitors: 6780, bookings: 167, revenue: "₹1.9L", growth: "+8%" },
    { name: "Palamu", visitors: 5430, bookings: 145, revenue: "₹1.7L", growth: "+22%" },
    { name: "Hazaribagh", visitors: 4210, bookings: 123, revenue: "₹1.4L", growth: "+18%" },
  ];

  const pendingApprovals = [
    { 
      id: 1, 
      type: "Guide Registration", 
      name: "Rajesh Kumar", 
      location: "Ranchi", 
      submitted: "2 days ago",
      status: "pending"
    },
    { 
      id: 2, 
      type: "Homestay Listing", 
      name: "Forest View Cottage", 
      location: "Betla", 
      submitted: "1 day ago",
      status: "pending"
    },
    { 
      id: 3, 
      type: "Handicraft Vendor", 
      name: "Tribal Arts Collective", 
      location: "Khunti", 
      submitted: "3 hours ago",
      status: "pending"
    },
  ];

  const safetyAlerts = [
    {
      id: 1,
      type: "Weather Alert",
      message: "Heavy rainfall predicted in Palamu district for next 3 days",
      severity: "high",
      timestamp: "2 hours ago",
      affected: "Betla National Park visitors"
    },
    {
      id: 2,
      type: "Road Closure",
      message: "Road to Hundru Falls temporarily closed for maintenance",
      severity: "medium",
      timestamp: "6 hours ago",
      affected: "Waterfall tour groups"
    },
  ];

  const recentReviews = [
    {
      id: 1,
      attraction: "Hundru Falls",
      reviewer: "Priya M.",
      rating: 5,
      comment: "Absolutely breathtaking! Must visit during monsoon.",
      date: "2 hours ago",
      helpful: 12
    },
    {
      id: 2,
      attraction: "Betla National Park",
      reviewer: "Amit S.",
      rating: 4,
      comment: "Great wildlife experience, saw tigers and elephants.",
      date: "5 hours ago",
      helpful: 8
    },
  ];

  const topAttractions = [
    { name: "Hundru Falls", visits: 3456, rating: 4.6, reviews: 234 },
    { name: "Betla National Park", visits: 2890, rating: 4.4, reviews: 189 },
    { name: "Tagore Hill", visits: 2134, rating: 4.2, reviews: 156 },
    { name: "Rock Garden", visits: 1987, rating: 4.3, reviews: 143 },
    { name: "Jonha Falls", visits: 1654, rating: 4.5, reviews: 98 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Tourism Dashboard</h1>
              <p className="text-muted-foreground">Jharkhand Tourism Development Corporation</p>
            </div>
            <div className="flex items-center gap-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export Data
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                    <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'}>
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="approvals">Approvals</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="safety">Safety Alerts</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* District Performance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      District Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {districtStats.map((district) => (
                        <div key={district.name} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h3 className="font-medium">{district.name}</h3>
                            <div className="text-sm text-muted-foreground">
                              {district.visitors.toLocaleString()} visitors • {district.bookings} bookings
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-primary">{district.revenue}</div>
                            <Badge variant="secondary" className="text-xs">
                              {district.growth}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Top Attractions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Top Attractions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topAttractions.map((attraction, index) => (
                        <div key={attraction.name} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{attraction.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {attraction.visits.toLocaleString()} visits • {attraction.reviews} reviews
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="font-medium">{attraction.rating}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Visitor Trends Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Visitor Trends</CardTitle>
                  <CardDescription>Monthly visitor statistics across all districts</CardDescription>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p>Chart visualization would be rendered here</p>
                    <p className="text-sm">Integration with analytics service required</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="approvals" className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Pending Approvals</h2>
                <Badge variant="destructive">{pendingApprovals.length} pending</Badge>
              </div>

              {pendingApprovals.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.type}</h3>
                          <p className="text-muted-foreground">{item.name}</p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {item.location}
                            </div>
                            <span>Submitted {item.submitted}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Review
                        </Button>
                        <Button variant="outline" size="sm">
                          Reject
                        </Button>
                        <Button size="sm">
                          Approve
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search reviews..." className="pl-10" />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="5">5 Stars</SelectItem>
                    <SelectItem value="4">4 Stars</SelectItem>
                    <SelectItem value="3">3 Stars</SelectItem>
                    <SelectItem value="2">2 Stars</SelectItem>
                    <SelectItem value="1">1 Star</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {recentReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{review.attraction}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">by {review.reviewer}</span>
                          <span className="text-sm text-muted-foreground">• {review.date}</span>
                        </div>
                      </div>
                      <Badge variant="outline">{review.helpful} helpful</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{review.comment}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Flag
                      </Button>
                      <Button variant="outline" size="sm">
                        Reply
                      </Button>
                      <Button variant="outline" size="sm">
                        Feature
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="safety" className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Safety Alerts</h2>
                <Button variant="outline">Create Alert</Button>
              </div>

              {safetyAlerts.map((alert) => (
                <Card key={alert.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${
                        alert.severity === 'high' ? 'bg-red-100' : 
                        alert.severity === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        <AlertTriangle className={`h-5 w-5 ${
                          alert.severity === 'high' ? 'text-red-600' : 
                          alert.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={
                            alert.severity === 'high' ? 'destructive' : 
                            alert.severity === 'medium' ? 'default' : 'secondary'
                          }>
                            {alert.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
                        </div>
                        <h3 className="font-semibold mb-1">{alert.message}</h3>
                        <p className="text-sm text-muted-foreground">Affects: {alert.affected}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Resolve</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Monthly Tourism Report", description: "Comprehensive analysis of visitor statistics", icon: BarChart3 },
                  { title: "Revenue Analysis", description: "Financial performance across all districts", icon: DollarSign },
                  { title: "Guide Performance", description: "Ratings and feedback for certified guides", icon: Users },
                  { title: "Safety Incidents", description: "Safety reports and incident tracking", icon: Shield },
                  { title: "Attraction Popularity", description: "Most visited destinations and trends", icon: TrendingUp },
                  { title: "Customer Satisfaction", description: "Review sentiment and satisfaction scores", icon: Star }
                ].map((report) => (
                  <Card key={report.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <report.icon className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">{report.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                      <Button variant="outline" className="w-full gap-2">
                        <Download className="h-4 w-4" />
                        Generate Report
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;