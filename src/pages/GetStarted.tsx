import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, MapPin, Shield, Star, Globe, Calendar } from 'lucide-react';

const GetStarted = () => {
  const userTypes = [
    {
      type: 'tourist',
      title: 'I\'m a Tourist',
      description: 'Explore Jharkhand\'s hidden gems and create unforgettable memories',
      icon: User,
      features: ['Discover destinations', 'Book tours & stays', 'Connect with local guides', 'Plan itineraries'],
      color: 'from-blue-500 to-blue-600',
      path: '/auth?type=tourist'
    },
    {
      type: 'guide',
      title: 'I\'m a Local Guide',
      description: 'Share your knowledge and earn by guiding travelers',
      icon: MapPin,
      features: ['Create tour packages', 'Manage bookings', 'Chat with tourists', 'Track earnings'],
      color: 'from-green-500 to-green-600',
      path: '/auth?type=guide'
    },
    {
      type: 'admin',
      title: 'I\'m an Administrator',
      description: 'Manage the platform and oversee operations',
      icon: Shield,
      features: ['User management', 'Content control', 'Analytics dashboard', 'Financial oversight'],
      color: 'from-red-500 to-red-600',
      path: '/auth?type=admin'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Authentic Experiences',
      description: 'Connect with local culture and traditions through certified guides'
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description: 'Support local communities while exploring responsibly'
    },
    {
      icon: Calendar,
      title: 'Flexible Planning',
      description: 'Create custom itineraries that match your interests and schedule'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Get Started with Jharkhand Tourism
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path and begin your journey through the heart of India
          </p>
        </div>
        
        {/* User Type Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {userTypes.map((userType) => {
            const Icon = userType.icon;
            return (
              <Card key={userType.type} className="glass backdrop-blur-md border-white/20 hover-lift transition-smooth group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${userType.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{userType.title}</CardTitle>
                  <CardDescription className="text-base">{userType.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {userType.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/auth" className="block">
                    <Button className={`w-full bg-gradient-to-r ${userType.color} text-white hover-glow`}>
                      Get Started as {userType.title.split(' ')[2]}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Platform?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center pb-16">
          <Card className="max-w-2xl mx-auto glass backdrop-blur-md border-white/20">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Adventure?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of travelers, guides, and tourism professionals who trust our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-hero-gradient text-white hover-glow">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" variant="outline" className="hover-lift">
                    Explore First
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;