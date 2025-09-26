import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, MapPin, Clock, Users, Share2, Save, Calendar, Trash2, Edit } from 'lucide-react';

const ItineraryBuilder = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [itinerary, setItinerary] = useState({
    title: "My Jharkhand Adventure",
    duration: 5,
    travelers: 2,
    days: [
      {
        day: 1,
        title: "Arrival in Ranchi",
        activities: [
          {
            time: "10:00 AM",
            title: "Arrival at Ranchi Airport",
            location: "Birsa Munda Airport",
            duration: "1 hour",
            type: "transport"
          },
          {
            time: "2:00 PM", 
            title: "Hundru Falls Visit",
            location: "Hundru Falls",
            duration: "3 hours",
            type: "attraction"
          }
        ]
      },
      {
        day: 2,
        title: "Wildlife & Nature",
        activities: [
          {
            time: "8:00 AM",
            title: "Betla National Park Safari",
            location: "Betla National Park",
            duration: "4 hours", 
            type: "wildlife"
          }
        ]
      }
    ]
  });

  const activityTypes = {
    transport: { color: "bg-blue-500", icon: "🚗" },
    attraction: { color: "bg-green-500", icon: "🏛️" },
    wildlife: { color: "bg-orange-500", icon: "🦅" },
    food: { color: "bg-red-500", icon: "🍽️" },
    hotel: { color: "bg-purple-500", icon: "🏨" }
  };

  const suggestedActivities = [
    { title: "Rock Garden Visit", location: "Rock Garden, Ranchi", duration: "2 hours", type: "attraction" },
    { title: "Local Food Tour", location: "Main Bazaar", duration: "3 hours", type: "food" },
    { title: "Jagannath Temple", location: "Jagannath Temple", duration: "1 hour", type: "attraction" },
    { title: "Shopping at Firayalal", location: "Firayalal Market", duration: "2 hours", type: "food" }
  ];

  const addActivity = (dayIndex: number, activity: any) => {
    const newItinerary = { ...itinerary };
    newItinerary.days[dayIndex].activities.push({
      ...activity,
      time: "12:00 PM"
    });
    setItinerary(newItinerary);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Itinerary Builder</h1>
            <p className="text-muted-foreground">Plan your perfect trip to Jharkhand</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button className="bg-hero-gradient">
              <Save className="h-4 w-4 mr-2" />
              Save Itinerary
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Trip Overview */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Trip Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Trip Name</label>
                  <Input 
                    value={itinerary.title} 
                    onChange={(e) => setItinerary({...itinerary, title: e.target.value})}
                    className="mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm font-medium">Duration</label>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{itinerary.duration} days</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Travelers</label>
                    <div className="flex items-center mt-1">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{itinerary.travelers} people</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Days</h4>
                  <div className="space-y-2">
                    {itinerary.days.map((day, index) => (
                      <button
                        key={day.day}
                        onClick={() => setSelectedDay(day.day)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedDay === day.day 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border hover:bg-muted/50'
                        }`}
                      >
                        <div className="font-medium">Day {day.day}</div>
                        <div className="text-sm text-muted-foreground">{day.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {day.activities.length} activities
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-3">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Day
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="planner">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="planner">Day Planner</TabsTrigger>
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                <TabsTrigger value="map">Map View</TabsTrigger>
              </TabsList>

              <TabsContent value="planner" className="space-y-6">
                {itinerary.days
                  .filter(day => day.day === selectedDay)
                  .map((day, dayIndex) => (
                    <Card key={day.day}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle>Day {day.day}: {day.title}</CardTitle>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start space-x-4 p-4 border rounded-lg">
                              <div className="flex-shrink-0">
                                <div className={`w-8 h-8 rounded-full ${activityTypes[activity.type as keyof typeof activityTypes]?.color} flex items-center justify-center text-white text-xs`}>
                                  {activityTypes[activity.type as keyof typeof activityTypes]?.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">{activity.title}</h4>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="h-4 w-4 text-red-500" />
                                  </Button>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <div className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {activity.time}
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {activity.location}
                                  </div>
                                  <Badge variant="secondary">{activity.duration}</Badge>
                                </div>
                              </div>
                            </div>
                          ))}
                          
                          <Button 
                            variant="outline" 
                            className="w-full py-8 border-2 border-dashed"
                            onClick={() => {/* Open activity picker */}}
                          >
                            <Plus className="h-5 w-5 mr-2" />
                            Add Activity
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="suggestions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Suggested Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {suggestedActivities.map((activity, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold">{activity.title}</h4>
                            <Button 
                              size="sm"
                              onClick={() => addActivity(selectedDay - 1, activity)}
                            >
                              <Plus className="h-3 w-3 mr-1" />
                              Add
                            </Button>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {activity.location}
                            </div>
                            <Badge variant="secondary">{activity.duration}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Popular Templates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {["Cultural Heritage", "Adventure & Wildlife", "Spiritual Journey"].map((template, index) => (
                        <Card key={index} className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <CardContent className="p-4 text-center">
                            <h5 className="font-semibold mb-2">{template}</h5>
                            <p className="text-sm text-muted-foreground">5-day itinerary</p>
                            <Button size="sm" className="mt-3">Use Template</Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="map">
                <Card>
                  <CardHeader>
                    <CardTitle>Route Map</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 bg-muted/50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">Interactive map showing your planned route</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;