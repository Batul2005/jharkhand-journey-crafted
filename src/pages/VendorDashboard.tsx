import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Store, 
  Package, 
  TrendingUp, 
  Users, 
  Star, 
  MessageCircle, 
  Plus,
  Eye,
  Edit,
  DollarSign,
  Calendar,
  MapPin,
  ShoppingCart,
  Heart
} from 'lucide-react';

const VendorDashboard = () => {
  const vendor = {
    name: "Tribal Arts Collective",
    avatar: "/api/placeholder/64/64",
    rating: 4.7,
    totalSales: "₹2,45,800",
    monthlySales: "₹28,500",
    activeProducts: 24,
    totalOrders: 89,
    pendingOrders: 7,
    responseRate: "95%"
  };

  const recentOrders = [
    {
      id: "ORD001",
      customerName: "Sarah Johnson",
      customerAvatar: "SJ",
      product: "Handwoven Tribal Rug",
      quantity: 2,
      amount: "₹8,500",
      status: "confirmed",
      date: "2025-03-15",
      phone: "+91 9876543210"
    },
    {
      id: "ORD002", 
      customerName: "Raj Patel",
      customerAvatar: "RP",
      product: "Wooden Tribal Mask",
      quantity: 1,
      amount: "₹3,200",
      status: "pending",
      date: "2025-03-18",
      phone: "+91 9876543211"
    },
    {
      id: "ORD003",
      customerName: "Lisa Chen",
      customerAvatar: "LC",
      product: "Bamboo Craft Set", 
      quantity: 3,
      amount: "₹12,600",
      status: "confirmed",
      date: "2025-03-22",
      phone: "+91 9876543212"
    }
  ];

  const topProducts = [
    {
      id: 1,
      name: "Handwoven Tribal Rug",
      price: "₹4,250",
      sales: 45,
      rating: 4.8,
      image: "/src/assets/handicrafts.jpg",
      category: "Textiles"
    },
    {
      id: 2,
      name: "Wooden Tribal Mask",
      price: "₹3,200",
      sales: 32,
      rating: 4.6,
      image: "/src/assets/handicrafts.jpg",
      category: "Woodwork"
    },
    {
      id: 3,
      name: "Bamboo Craft Set",
      price: "₹4,200",
      sales: 28,
      rating: 4.7,
      image: "/src/assets/handicrafts.jpg",
      category: "Bamboo"
    }
  ];

  const messages = [
    {
      id: 1,
      customerName: "Sarah Johnson",
      avatar: "SJ",
      message: "Hi! Is the tribal rug available in different sizes?",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      customerName: "Mike Wilson",
      avatar: "MW",
      message: "Thank you for the beautiful mask! Can I order more?",
      time: "1 day ago",
      unread: false
    },
    {
      id: 3,
      customerName: "Priya Sharma",
      avatar: "PS", 
      message: "What's the estimated delivery time for bamboo crafts?",
      time: "2 days ago",
      unread: true
    }
  ];

  const salesData = {
    thisMonth: [
      { week: "Week 1", amount: 8500 },
      { week: "Week 2", amount: 12000 },
      { week: "Week 3", amount: 9500 },
      { week: "Week 4", amount: 7500 }
    ],
    pendingPayouts: "₹15,200",
    nextPayout: "2025-03-25"
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
              <AvatarImage src={vendor.avatar} alt={vendor.name} />
              <AvatarFallback>TAC</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {vendor.name}!</h1>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{vendor.rating} rating</span>
                <span>•</span>
                <span>{vendor.responseRate} response rate</span>
              </div>
            </div>
          </div>
          <Button className="bg-hero-gradient mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Add New Product
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">{vendor.monthlySales}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">+18% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Orders</p>
                  <p className="text-2xl font-bold">{vendor.pendingOrders}</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Awaiting processing
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Products</p>
                  <p className="text-2xl font-bold">{vendor.activeProducts}</p>
                </div>
                <Package className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Currently listed
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold">{vendor.totalOrders}</p>
                </div>
                <Store className="h-8 w-8 text-purple-500" />
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
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="grid lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{order.customerAvatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{order.customerName}</p>
                          <p className="text-sm text-muted-foreground">{order.product}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`${getStatusColor(order.status)} text-white mb-1`}>
                          {order.status}
                        </Badge>
                        <p className="text-sm font-medium">{order.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Products */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Top Products</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product) => (
                    <div key={product.id} className="flex items-start space-x-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Package className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.category} • {product.sales} sales</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <span>{product.price}</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                            <span>{product.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
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
                    Add Product
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Package className="h-6 w-6 mb-2" />
                    Manage Inventory
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    View Messages
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Eye className="h-6 w-6 mb-2" />
                    View Store
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">All Orders</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{order.customerAvatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{order.customerName}</h3>
                          <p className="text-muted-foreground">{order.product}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                            <span>{order.date}</span>
                            <span>Qty: {order.quantity}</span>
                            <span>{order.phone}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-lg font-bold">{order.amount}</div>
                          <Badge className={`${getStatusColor(order.status)} text-white`}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Message
                          </Button>
                          {order.status === 'pending' && (
                            <Button size="sm" className="bg-hero-gradient">
                              Process
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

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Products</h2>
              <Button className="bg-hero-gradient">
                <Plus className="h-4 w-4 mr-2" />
                Add New Product
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-md transition-shadow group">
                  <div className="relative">
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
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
                    <h3 className="font-semibold mb-1">{product.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Package className="h-3 w-3 mr-1" />
                      {product.category}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                      <div className="font-semibold">{product.price}</div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button className="flex-1 bg-hero-gradient">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
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

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">{vendor.totalSales}</div>
                  <div className="text-sm text-muted-foreground">Total Sales</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold">{salesData.pendingPayouts}</div>
                  <div className="text-sm text-muted-foreground">Pending Payouts</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold">{salesData.nextPayout}</div>
                  <div className="text-sm text-muted-foreground">Next Payout</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Sales Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {salesData.thisMonth.map((week, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{week.week}</span>
                      <span className="text-lg font-bold">₹{week.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;
