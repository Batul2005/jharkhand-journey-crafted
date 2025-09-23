import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Calendar, Filter, Sparkles } from 'lucide-react';

const QuickSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tripType, setTripType] = useState('');
  const [duration, setDuration] = useState('');

  const tripTypes = [
    { value: 'eco', label: 'Eco Tourism' },
    { value: 'culture', label: 'Cultural Heritage' },
    { value: 'pilgrimage', label: 'Pilgrimage' },
    { value: 'wildlife', label: 'Wildlife Safari' },
    { value: 'waterfalls', label: 'Waterfalls & Nature' },
    { value: 'tribal', label: 'Tribal Experience' },
  ];

  const durations = [
    { value: '1', label: '1 Day' },
    { value: '2-3', label: '2-3 Days' },
    { value: '4-7', label: '4-7 Days' },
    { value: '7+', label: 'Week+' },
  ];

  return (
    <section className="py-16 -mt-20 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Card */}
          <div className="bg-card-gradient backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-card">
            <div className="text-center mb-8">
              <h2 className="font-poppins font-bold text-3xl text-foreground mb-2">
                Plan Your Perfect Journey
              </h2>
              <p className="text-muted-foreground font-inter text-lg">
                Let our AI create a personalized itinerary just for you
              </p>
            </div>

            {/* Search Form */}
            <div className="space-y-6">
              {/* Main Search */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  <Search className="h-5 w-5" />
                </div>
                <Input
                  placeholder="Where do you want to explore in Jharkhand?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg font-inter bg-background/50 border-border/50 focus:border-primary transition-smooth"
                />
              </div>

              {/* Filters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-inter font-medium text-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Trip Type
                  </label>
                  <Select value={tripType} onValueChange={setTripType}>
                    <SelectTrigger className="h-12 bg-background/50 border-border/50">
                      <SelectValue placeholder="Choose experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {tripTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-inter font-medium text-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    Duration
                  </label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger className="h-12 bg-background/50 border-border/50">
                      <SelectValue placeholder="How long?" />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map((dur) => (
                        <SelectItem key={dur.value} value={dur.value}>
                          {dur.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-inter font-medium text-foreground flex items-center">
                    <Filter className="h-4 w-4 mr-2 text-primary" />
                    More Filters
                  </label>
                  <Button 
                    variant="outline" 
                    className="h-12 w-full bg-background/50 border-border/50 hover:bg-muted/50 transition-smooth"
                  >
                    Advanced Options
                  </Button>
                </div>
              </div>

              {/* Search Button */}
              <Button 
                size="lg"
                className="w-full h-14 bg-hero-gradient text-white font-inter font-semibold text-lg shadow-soft hover-glow group transition-smooth"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Generate AI Itinerary
                <Search className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Quick Suggestions */}
            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-sm font-inter text-muted-foreground mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Hundru Falls', 'Betla National Park', 'Tribal Villages', 'Deoghar Temple', 'Handicraft Markets'].map((suggestion) => (
                  <Button 
                    key={suggestion}
                    variant="ghost"
                    size="sm"
                    className="text-xs font-inter bg-muted/30 hover:bg-primary/10 hover:text-primary transition-smooth"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSearch;