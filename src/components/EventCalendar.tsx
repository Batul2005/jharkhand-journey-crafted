import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  type: 'festival' | 'cultural' | 'religious' | 'adventure' | 'workshop';
  description: string;
  attendees: number;
  rating: number;
  price: number;
  image: string;
  highlights: string[];
}

const events: Event[] = [
  {
    id: '1',
    title: 'Sarhul Festival Celebration',
    date: new Date(2024, 2, 15),
    time: '6:00 AM - 6:00 PM',
    location: 'Khunti District',
    type: 'festival',
    description: 'Traditional Sarhul festival celebrating the worship of nature and trees',
    attendees: 5000,
    rating: 4.9,
    price: 0,
    image: '/src/assets/hero-jharkhand.jpg',
    highlights: ['Traditional Dance', 'Local Cuisine', 'Tribal Music']
  },
  {
    id: '2', 
    title: 'Handicraft Workshop',
    date: new Date(2024, 2, 22),
    time: '10:00 AM - 4:00 PM',
    location: 'Dumka Cultural Center',
    type: 'workshop',
    description: 'Learn traditional Jharkhand handicraft techniques from master artisans',
    attendees: 50,
    rating: 4.7,
    price: 1500,
    image: '/src/assets/handicrafts.jpg',
    highlights: ['Hands-on Learning', 'Take Home Crafts', 'Tea & Snacks']
  },
  {
    id: '3',
    title: 'Jagannath Rath Yatra',
    date: new Date(2024, 6, 7),
    time: '5:00 AM - 8:00 PM',
    location: 'Deoghar Temple',
    type: 'religious',
    description: 'Grand chariot procession of Lord Jagannath through the city',
    attendees: 100000,
    rating: 4.8,
    price: 0,
    image: '/src/assets/hero-jharkhand.jpg',
    highlights: ['Spiritual Experience', 'Grand Procession', 'Community Feast']
  },
  {
    id: '4',
    title: 'Adventure Trekking Expedition',
    date: new Date(2024, 3, 10),
    time: '6:00 AM - 6:00 PM',
    location: 'Netarhat Hills',
    type: 'adventure',
    description: 'Challenging trek through the scenic Netarhat hill ranges',
    attendees: 30,
    rating: 4.6,
    price: 2500,
    image: '/src/assets/hundru-falls.jpg',
    highlights: ['Scenic Views', 'Professional Guide', 'Equipment Included']
  }
];

const typeColors = {
  festival: 'bg-orange-500',
  cultural: 'bg-purple-500',
  religious: 'bg-yellow-500',
  adventure: 'bg-green-500',
  workshop: 'bg-blue-500'
};

const EventCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  // Calendar generation logic
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDay = (day: number) => {
    const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return events.filter(event => 
      event.date.toDateString() === dayDate.toDateString()
    );
  };

  const formatPrice = (price: number) => {
    return price === 0 ? 'Free' : `₹${price}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
            Events & Festivals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience authentic Jharkhand culture through festivals, workshops, and community events
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === 'calendar' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('calendar')}
            >
              <CalendarIcon className="h-4 w-4 mr-2" />
              Calendar
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              List View
            </Button>
          </div>
        </div>

        {viewMode === 'calendar' ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-poppins text-2xl">
                      {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="p-2 text-center text-sm font-poppins font-semibold text-muted-foreground">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, index) => {
                      const dayEvents = day ? getEventsForDay(day) : [];
                      return (
                        <div
                          key={index}
                          className={`min-h-[80px] p-1 border border-border rounded-lg ${
                            day ? 'cursor-pointer hover:bg-muted/50 transition-smooth' : ''
                          }`}
                        >
                          {day && (
                            <>
                              <div className="text-sm font-poppins font-medium text-foreground mb-1">
                                {day}
                              </div>
                              <div className="space-y-1">
                                {dayEvents.slice(0, 2).map((event) => (
                                  <div
                                    key={event.id}
                                    className={`text-xs p-1 rounded ${typeColors[event.type]} text-white cursor-pointer hover:opacity-80 transition-smooth`}
                                    onClick={() => setSelectedEvent(event)}
                                  >
                                    {event.title.length > 15 ? `${event.title.slice(0, 12)}...` : event.title}
                                  </div>
                                ))}
                                {dayEvents.length > 2 && (
                                  <div className="text-xs text-muted-foreground">
                                    +{dayEvents.length - 2} more
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Event Details Sidebar */}
            <div className="space-y-6">
              {selectedEvent ? (
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="font-poppins text-lg leading-tight">{selectedEvent.title}</CardTitle>
                      <Badge className={`${typeColors[selectedEvent.type]} text-white`}>
                        {selectedEvent.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div 
                      className="h-32 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${selectedEvent.image})` }}
                    />
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{selectedEvent.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedEvent.location}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{selectedEvent.attendees.toLocaleString()} attendees</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{selectedEvent.rating}</span>
                        <span className="text-2xl font-poppins font-bold text-primary">
                          {formatPrice(selectedEvent.price)}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedEvent.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-sm font-poppins font-semibold">Highlights:</div>
                      <div className="flex flex-wrap gap-1">
                        {selectedEvent.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1 hover-lift">
                        Book Now
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Share Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-64 flex items-center justify-center text-center">
                  <CardContent>
                    <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">Click on any event to view details</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ) : (
          /* List View */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover-lift cursor-pointer" onClick={() => setSelectedEvent(event)}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-poppins text-lg leading-tight">{event.title}</CardTitle>
                    <Badge className={`${typeColors[event.type]} text-white`}>
                      {event.type}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {event.date.toLocaleDateString()} • {event.location}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div 
                    className="h-32 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{event.rating}</span>
                    </div>
                    <span className="font-poppins font-bold text-primary">
                      {formatPrice(event.price)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventCalendar;