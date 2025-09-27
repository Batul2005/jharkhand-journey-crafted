import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Clock, Star, Heart, Calendar, Users, Camera, Navigation, Share2, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AttractionDetailProps {
  attraction: {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    region: string;
    rating: number;
    distance: string;
    detailedDescription?: string;
    bestTimeToVisit?: string;
    entryFee?: string;
    timings?: string;
    facilities?: string[];
    nearbyAttractions?: string[];
    contactInfo?: string;
  };
  onAddToWishlist?: (attraction: any) => void;
}

const AttractionDetail = ({ attraction, onAddToWishlist }: AttractionDetailProps) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
    if (onAddToWishlist) {
      onAddToWishlist(attraction);
    }
    toast({
      title: isInWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${attraction.name} has been ${isInWishlist ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const defaultDetails = {
    detailedDescription: "This is a must-visit destination in Jharkhand that offers breathtaking views and unforgettable experiences. The location provides a perfect blend of natural beauty and cultural significance, making it an ideal spot for tourists and locals alike.",
    bestTimeToVisit: "October to March",
    entryFee: "₹50 per person",
    timings: "6:00 AM - 6:00 PM",
    facilities: ["Parking", "Restrooms", "Food Court", "Guided Tours", "Photography"],
    nearbyAttractions: ["Local Market", "Cultural Center", "Museum"],
    contactInfo: "+91 9876543210"
  };

  const details = { ...defaultDetails, ...attraction };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">View Details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{attraction.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Main Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-lg">
            <img 
              src={attraction.image} 
              alt={attraction.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{attraction.rating}/5</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>{attraction.distance}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{attraction.category}</Badge>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              {details.detailedDescription}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">Best Time to Visit</span>
                </div>
                <p className="text-sm text-muted-foreground">{details.bestTimeToVisit}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">Timings</span>
                </div>
                <p className="text-sm text-muted-foreground">{details.timings}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-medium">Entry Fee</span>
                </div>
                <p className="text-sm text-muted-foreground">{details.entryFee}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">Contact</span>
                </div>
                <p className="text-sm text-muted-foreground">{details.contactInfo}</p>
              </CardContent>
            </Card>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Facilities Available</h3>
            <div className="flex flex-wrap gap-2">
              {details.facilities.map((facility, index) => (
                <Badge key={index} variant="outline">{facility}</Badge>
              ))}
            </div>
          </div>

          {/* Nearby Attractions */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Nearby Attractions</h3>
            <div className="flex flex-wrap gap-2">
              {details.nearbyAttractions.map((attraction, index) => (
                <Badge key={index} variant="secondary">{attraction}</Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button 
              className={`flex-1 ${isInWishlist ? 'bg-red-500 hover:bg-red-600' : 'bg-hero-gradient'}`}
              onClick={handleAddToWishlist}
            >
              <Heart className={`h-4 w-4 mr-2 ${isInWishlist ? 'fill-white' : ''}`} />
              {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </Button>
            
            <Button variant="outline" className="flex-1">
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </Button>
            
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="icon">
              <Navigation className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AttractionDetail;
