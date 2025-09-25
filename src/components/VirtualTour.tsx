import React, { useState, useRef } from 'react';
import { Play, Pause, RotateCcw, Maximize, Volume2, VolumeX, Camera, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';

interface VirtualTourSpot {
  id: string;
  name: string;
  location: string;
  duration: string;
  thumbnail: string;
  video360Url?: string;
  description: string;
  highlights: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
}

const tourSpots: VirtualTourSpot[] = [
  {
    id: '1',
    name: 'Hundru Falls Aerial View',
    location: 'Ranchi District',
    duration: '3:45',
    thumbnail: '/src/assets/hundru-falls.jpg',
    description: 'Experience the majestic 98-meter waterfall from a bird\'s eye view',
    highlights: ['Drone Footage', '360° View', 'Natural Sounds'],
    difficulty: 'Easy'
  },
  {
    id: '2',
    name: 'Betla Safari Experience', 
    location: 'Palamu District',
    duration: '8:20',
    thumbnail: '/src/assets/betla-park.jpg',
    description: 'Virtual safari through the wilderness of Betla National Park',
    highlights: ['Wildlife Spotting', 'Forest Sounds', 'Interactive Hotspots'],
    difficulty: 'Moderate'
  },
  {
    id: '3',
    name: 'Tribal Village Immersion',
    location: 'Khunti District', 
    duration: '12:30',
    thumbnail: '/src/assets/handicrafts.jpg',
    description: 'Immerse yourself in authentic tribal culture and traditions',
    highlights: ['Cultural Dance', 'Craft Making', 'Traditional Music'],
    difficulty: 'Easy'
  }
];

const difficultyColors = {
  'Easy': 'bg-green-500',
  'Moderate': 'bg-yellow-500',
  'Challenging': 'bg-red-500'
};

const VirtualTour: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<VirtualTourSpot | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState([0]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setProgress([0]);
    setIsPlaying(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
            Virtual Reality Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Jharkhand's beauty from anywhere with immersive 360° virtual tours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Virtual Tour Player */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div 
                ref={playerRef}
                className="relative aspect-video bg-black group cursor-pointer"
                onClick={() => !selectedTour && setSelectedTour(tourSpots[0])}
              >
                {selectedTour ? (
                  <>
                    {/* Virtual Tour Interface */}
                    <div 
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${selectedTour.thumbnail})` }}
                    >
                      {/* Overlay for 360 effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
                      
                      {/* 360 Navigation Indicators */}
                      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-white text-sm font-inter">360° Live</span>
                      </div>

                      {/* Interactive Hotspots */}
                      <div className="absolute top-1/3 left-1/4 group/hotspot">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-smooth animate-pulse">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-2 opacity-0 group-hover/hotspot:opacity-100 transition-smooth">
                          <span className="text-xs text-foreground whitespace-nowrap">Click to explore</span>
                        </div>
                      </div>

                      <div className="absolute bottom-1/3 right-1/3 group/hotspot">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-smooth animate-pulse">
                          <Camera className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      {/* Central Play Button */}
                      {!isPlaying && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center"
                          onClick={handlePlayPause}
                        >
                          <Button size="lg" className="rounded-full h-16 w-16 hover-lift shadow-glow">
                            <Play className="h-8 w-8 ml-1" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Controls Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center space-x-4">
                        <Button size="sm" variant="ghost" onClick={handlePlayPause} className="text-white hover:bg-white/20">
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        
                        <div className="flex-1">
                          <Slider
                            value={progress}
                            onValueChange={setProgress}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost" onClick={() => setIsMuted(!isMuted)} className="text-white hover:bg-white/20">
                            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          </Button>
                          
                          <Button size="sm" variant="ghost" onClick={handleReset} className="text-white hover:bg-white/20">
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                          
                          <Button size="sm" variant="ghost" onClick={toggleFullscreen} className="text-white hover:bg-white/20">
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="mt-2 text-white">
                        <div className="font-poppins font-semibold">{selectedTour.name}</div>
                        <div className="text-sm text-white/70">{selectedTour.location} • {selectedTour.duration}</div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Welcome Screen */
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="text-center">
                      <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">Start Your Virtual Journey</h3>
                      <p className="text-muted-foreground mb-4">Select a tour from the sidebar to begin</p>
                      <Button onClick={() => setSelectedTour(tourSpots[0])}>
                        <Play className="h-4 w-4 mr-2" />
                        Start First Tour
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Tour Selection Sidebar */}
          <div className="space-y-4">
            {tourSpots.map((spot) => (
              <Card 
                key={spot.id} 
                className={`cursor-pointer hover-lift transition-smooth ${selectedTour?.id === spot.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedTour(spot)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-poppins text-base leading-tight">{spot.name}</CardTitle>
                    <Badge className={`${difficultyColors[spot.difficulty]} text-white text-xs`}>
                      {spot.difficulty}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {spot.location} • {spot.duration}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div 
                    className="h-20 bg-cover bg-center rounded-lg relative group"
                    style={{ backgroundImage: `url(${spot.thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 rounded-lg group-hover:bg-black/40 transition-smooth" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white opacity-80" />
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {spot.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {spot.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-dashed">
              <CardContent className="p-6 text-center">
                <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-3">Want a custom virtual tour?</p>
                <Button variant="outline" size="sm">Request Tour</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;