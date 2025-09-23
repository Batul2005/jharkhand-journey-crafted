import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Languages, Calendar, Verified, Users } from 'lucide-react';

const Guides = () => {
  const guides = [
    {
      id: 1,
      name: "Ravi Kumar",
      specialization: "Wildlife & Nature",
      rating: 4.9,
      reviews: 127,
      experience: "8 years",
      languages: ["Hindi", "English", "Santali"],
      location: "Ranchi",
      verified: true,
      pricePerDay: "₹2,500",
      description: "Expert wildlife guide with deep knowledge of Jharkhand's flora and fauna. Certified by Forest Department.",
      avatar: "RK",
      expertise: ["Betla National Park", "Bird Watching", "Eco-tourism"]
    },
    {
      id: 2,
      name: "Meera Devi",
      specialization: "Culture & Heritage",
      rating: 4.8,
      reviews: 95,
      experience: "6 years",
      languages: ["Hindi", "English", "Ho"],
      location: "Jamshedpur",
      verified: true,
      pricePerDay: "₹2,000",
      description: "Cultural historian and storyteller, specializing in tribal traditions and local handicrafts.",
      avatar: "MD",
      expertise: ["Tribal Culture", "Handicrafts", "Folk Stories"]
    },
    {
      id: 3,
      name: "Amit Singh",
      specialization: "Adventure & Trekking",
      rating: 4.7,
      reviews: 83,
      experience: "5 years",
      languages: ["Hindi", "English"],
      location: "Hazaribagh",
      verified: true,
      pricePerDay: "₹3,000",
      description: "Adventure enthusiast with expertise in rock climbing, trekking, and waterfall expeditions.",
      avatar: "AS",
      expertise: ["Rock Climbing", "Waterfall Treks", "Cave Exploration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Verified <span className="text-primary">Local Guides</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with certified local guides who know Jharkhand's hidden gems and cultural secrets
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button variant="default">All Guides</Button>
            <Button variant="outline">Wildlife</Button>
            <Button variant="outline">Culture</Button>
            <Button variant="outline">Adventure</Button>
            <Button variant="outline">Photography</Button>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="" alt={guide.name} />
                        <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                          {guide.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {guide.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                          <Verified className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl">{guide.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {guide.specialization}
                  </CardDescription>
                  
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium">{guide.rating}</span>
                      <span className="text-muted-foreground">({guide.reviews} reviews)</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {guide.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{guide.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{guide.experience}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-muted-foreground" />
                    <div className="flex flex-wrap gap-1">
                      {guide.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {guide.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-primary">{guide.pricePerDay}</span>
                      <span className="text-sm text-muted-foreground">per day</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Profile
                      </Button>
                      <Button size="sm" className="flex-1 gap-2">
                        <Calendar className="h-4 w-4" />
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">Become a Certified Guide</CardTitle>
                <CardDescription className="text-lg">
                  Share your knowledge of Jharkhand and earn by guiding travelers. Get verified and join our network.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-hero-gradient text-white">
                  Apply as Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guides;