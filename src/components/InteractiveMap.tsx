import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Info, Camera, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Destination {
  id: string;
  name: string;
  type: 'waterfall' | 'temple' | 'park' | 'cultural' | 'adventure';
  coordinates: { x: number; y: number };
  rating: number;
  visitTime: string;
  description: string;
  image: string;
  highlights: string[];
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Hundru Falls',
    type: 'waterfall',
    coordinates: { x: 45, y: 60 },
    rating: 4.8,
    visitTime: '2-3 hours',
    description: 'Spectacular 98-meter waterfall cascading through rocky terrain',
    image: '/src/assets/hundru-falls.jpg',
    highlights: ['Photography', 'Trekking', 'Natural Pool']
  },
  {
    id: '2', 
    name: 'Betla National Park',
    type: 'park',
    coordinates: { x: 30, y: 40 },
    rating: 4.6,
    visitTime: '4-6 hours',
    description: 'Wildlife sanctuary with tigers, elephants and rich biodiversity',
    image: '/src/assets/betla-park.jpg',
    highlights: ['Safari', 'Wildlife', 'Bird Watching']
  },
  {
    id: '3',
    name: 'Deoghar Temple',
    type: 'temple',
    coordinates: { x: 70, y: 25 },
    rating: 4.9,
    visitTime: '1-2 hours', 
    description: 'Sacred Shiva temple and major pilgrimage destination',
    image: '/src/assets/hero-jharkhand.jpg',
    highlights: ['Spiritual', 'Architecture', 'Festivals']
  },
  {
    id: '4',
    name: 'Tribal Heritage Village',
    type: 'cultural',
    coordinates: { x: 60, y: 70 },
    rating: 4.7,
    visitTime: '3-4 hours',
    description: 'Experience authentic tribal culture and traditional crafts',
    image: '/src/assets/handicrafts.jpg', 
    highlights: ['Culture', 'Handicrafts', 'Dance']
  }
];

const typeColors = {
  waterfall: 'bg-blue-500',
  temple: 'bg-orange-500', 
  park: 'bg-green-500',
  cultural: 'bg-purple-500',
  adventure: 'bg-red-500'
};

const InteractiveMap: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
            Interactive Destination Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any destination to explore detailed information and plan your visit
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div 
              ref={mapRef}
              className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-dashed border-primary/20 overflow-hidden group"
            >
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 text-primary/20">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="absolute bottom-4 right-4 text-accent/20">
                <Camera className="h-6 w-6" />
              </div>

              {/* Destination Markers */}
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/marker"
                  style={{
                    left: `${destination.coordinates.x}%`,
                    top: `${destination.coordinates.y}%`
                  }}
                  onMouseEnter={() => setHoveredDestination(destination.id)}
                  onMouseLeave={() => setHoveredDestination(null)}
                  onClick={() => setSelectedDestination(destination)}
                >
                  {/* Marker Pin */}
                  <div className={`relative ${typeColors[destination.type]} w-6 h-6 rounded-full flex items-center justify-center shadow-lg hover-lift transition-smooth group-hover/marker:scale-125`}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                    
                    {/* Pulse Animation */}
                    <div className={`absolute inset-0 ${typeColors[destination.type]} rounded-full animate-ping opacity-30`} />
                  </div>

                  {/* Hover Tooltip */}
                  {hoveredDestination === destination.id && (
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-48 z-10 animate-fade-in">
                      <div className="font-poppins font-semibold text-sm text-foreground">{destination.name}</div>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-muted-foreground">{destination.rating}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{destination.visitTime}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Map Legend */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
                <div className="text-xs font-poppins font-semibold text-foreground mb-2">Legend</div>
                {Object.entries(typeColors).map(([type, color]) => (
                  <div key={type} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${color} rounded-full`} />
                    <span className="text-xs text-muted-foreground capitalize">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Destination Details */}
          <div className="space-y-6">
            {selectedDestination ? (
              <Card className="hover-lift">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-poppins text-lg">{selectedDestination.name}</CardTitle>
                    <Badge variant="secondary" className={`${typeColors[selectedDestination.type]} text-white`}>
                      {selectedDestination.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{selectedDestination.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedDestination.visitTime}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div 
                    className="h-32 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${selectedDestination.image})` }}
                  />
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedDestination.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-sm font-poppins font-semibold">Highlights:</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedDestination.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Info className="h-4 w-4 mr-1" />
                      Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Camera className="h-4 w-4 mr-1" />
                      Photos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-64 flex items-center justify-center text-center">
                <CardContent>
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Click on any marker to view destination details</p>
                </CardContent>
              </Card>
            )}

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full hover-lift">
                Plan Full Itinerary
              </Button>
              <Button variant="outline" className="w-full">
                Download Map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;