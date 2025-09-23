import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Clock, Users, Sparkles } from 'lucide-react';

const Itinerary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              AI-Powered <span className="text-primary">Trip Planner</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let our AI create the perfect personalized itinerary for your Jharkhand adventure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Planning Form */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Plan Your Trip
                </CardTitle>
                <CardDescription>
                  Tell us about your preferences and we'll create a perfect itinerary
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input type="date" id="startDate" />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input type="date" id="endDate" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="origin">Starting from</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ranchi">Ranchi</SelectItem>
                      <SelectItem value="jamshedpur">Jamshedpur</SelectItem>
                      <SelectItem value="dhanbad">Dhanbad</SelectItem>
                      <SelectItem value="bokaro">Bokaro</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How many people?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Solo Traveler</SelectItem>
                      <SelectItem value="2">Couple</SelectItem>
                      <SelectItem value="3-4">Small Group (3-4)</SelectItem>
                      <SelectItem value="5+">Large Group (5+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Interests</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {['Wildlife', 'Waterfalls', 'Culture', 'Adventure', 'Pilgrimage', 'Photography'].map((interest) => (
                      <Button key={interest} variant="outline" size="sm" className="justify-start">
                        {interest}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-hero-gradient text-white" size="lg">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate AI Itinerary
                </Button>
              </CardContent>
            </Card>

            {/* Sample Itinerary Preview */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Sample 3-Day Itinerary</CardTitle>
                <CardDescription>Ranchi & Surroundings</CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Day 1: Ranchi City Tour
                    </h3>
                    <div className="mt-2 space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span className="text-sm">9:00 AM - Rock Garden</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span className="text-sm">11:30 AM - Tagore Hill</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span className="text-sm">2:00 PM - Jagannath Temple</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Day 2: Hundru Falls
                    </h3>
                    <div className="mt-2 space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span className="text-sm">Full day trip to Hundru Falls</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        <span className="text-sm">Local guide recommended</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Day 3: Cultural Experience
                    </h3>
                    <div className="mt-2 space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span className="text-sm">10:00 AM - Tribal Cultural Centre</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span className="text-sm">2:00 PM - Handicrafts Shopping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Itinerary;