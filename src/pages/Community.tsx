import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, Video, Users, MessageCircle, Heart, Share2, 
  TrendingUp, Award, Camera, MapPin, Calendar, Clock,
  ThumbsUp, Eye, Download, Play
} from 'lucide-react';

const Community = () => {
  const featuredStories = [
    {
      id: 1,
      title: "My Solo Trek to Hundru Falls: A Journey of Self-Discovery",
      author: "Priya Sharma",
      authorLocation: "Ranchi",
      date: "3 days ago",
      readTime: "5 min read",
      category: "Adventure",
      likes: 156,
      comments: 23,
      shares: 12,
      views: 1200,
      image: "/src/assets/hundru-falls.jpg",
      excerpt: "What started as a simple day trip turned into a life-changing experience. Here's my story of conquering fears and finding inner peace at Jharkhand's most majestic waterfall..."
    },
    {
      id: 2,
      title: "The Ancient Art of Dokra: Meeting Master Craftsmen in Bikna",
      author: "Amit Kumar",
      authorLocation: "Jamshedpur", 
      date: "1 week ago",
      readTime: "8 min read",
      category: "Culture",
      likes: 89,
      comments: 15,
      shares: 8,
      views: 850,
      image: "/src/assets/handicrafts.jpg",
      excerpt: "A deep dive into the 4000-year-old metal casting technique still practiced by tribal artisans. Discover the stories behind these beautiful bronze artifacts..."
    }
  ];

  const videoGuides = [
    {
      id: 1,
      title: "Complete Guide to Betla National Park Safari",
      creator: "Wildlife Explorer",
      duration: "12:35",
      views: "15K views",
      thumbnail: "/src/assets/betla-park.jpg",
      category: "Wildlife",
      description: "Everything you need to know for your first safari at Betla National Park"
    },
    {
      id: 2,
      title: "Best Photography Spots in Ranchi",
      creator: "Jharkhand Lens",
      duration: "8:45",
      views: "8.2K views", 
      thumbnail: "/src/assets/hundru-falls.jpg",
      category: "Photography",
      description: "Discover the most Instagram-worthy locations in and around Ranchi"
    }
  ];

  const learningResources = [
    {
      id: 1,
      title: "Tribal Festivals of Jharkhand",
      type: "Article",
      difficulty: "Beginner",
      duration: "10 min read",
      topics: ["Culture", "Festivals", "Traditions"],
      description: "Learn about the rich festival calendar of Jharkhand's tribal communities"
    },
    {
      id: 2,
      title: "Wildlife Photography Basics",
      type: "Video Course",
      difficulty: "Intermediate", 
      duration: "45 min",
      topics: ["Photography", "Wildlife", "Equipment"],
      description: "Master the art of capturing Jharkhand's diverse wildlife"
    },
    {
      id: 3,
      title: "Sustainable Tourism Practices",
      type: "Interactive Guide",
      difficulty: "Beginner",
      duration: "20 min",
      topics: ["Eco-tourism", "Conservation", "Ethics"],
      description: "Be a responsible traveler and protect Jharkhand's natural heritage"
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "12,450", icon: Users },
    { label: "Stories Shared", value: "3,200", icon: BookOpen },
    { label: "Photos Uploaded", value: "28,500", icon: Camera },
    { label: "Places Reviewed", value: "1,850", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Travel <span className="text-primary">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow travelers, share your experiences, and learn from local experts
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {communityStats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="stories" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="stories">Travel Stories</TabsTrigger>
              <TabsTrigger value="guides">Video Guides</TabsTrigger>
              <TabsTrigger value="learn">Learn</TabsTrigger>
              <TabsTrigger value="forum">Discussion Forum</TabsTrigger>
            </TabsList>
            
            <TabsContent value="stories" className="space-y-8">
              {/* Featured Stories */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Featured Stories</h2>
                  <Button variant="outline">Share Your Story</Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {featuredStories.map((story) => (
                    <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{story.category}</Badge>
                          <Badge variant="outline" className="text-xs">
                            {story.readTime}
                          </Badge>
                        </div>
                        
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{story.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {story.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs bg-primary/10 text-primary">
                              {story.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <div className="font-medium">{story.author}</div>
                            <div className="text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {story.authorLocation} • {story.date}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {story.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              {story.comments}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {story.views}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="guides" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Video Guides</h2>
                <Button variant="outline">Upload Video</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoGuides.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button size="icon" className="rounded-full">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2">{video.category}</Badge>
                      <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{video.creator}</span>
                        <span className="text-muted-foreground">{video.views}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="learn" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Learning Resources</h2>
                <Button variant="outline">Suggest Resource</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">{resource.type}</Badge>
                        <Badge 
                          variant={resource.difficulty === 'Beginner' ? 'secondary' : 
                                   resource.difficulty === 'Intermediate' ? 'default' : 'destructive'}
                        >
                          {resource.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="h-4 w-4" />
                        {resource.duration}
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {resource.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full gap-2">
                        {resource.type === 'Video Course' ? <Play className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="forum" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Discussion Forum</h2>
                <Button variant="outline">Start Discussion</Button>
              </div>
              
              {/* Forum Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Travel Tips", posts: 245, icon: MapPin, color: "text-blue-600" },
                  { name: "Photography", posts: 189, icon: Camera, color: "text-purple-600" },
                  { name: "Wildlife Spotting", posts: 156, icon: Eye, color: "text-green-600" },
                  { name: "Cultural Experiences", posts: 203, icon: Users, color: "text-orange-600" },
                  { name: "Food & Dining", posts: 132, icon: Heart, color: "text-red-600" },
                  { name: "Budget Travel", posts: 98, icon: TrendingUp, color: "text-emerald-600" }
                ].map((category) => (
                  <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <category.icon className={`h-8 w-8 ${category.color}`} />
                        <div>
                          <h3 className="font-semibold">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.posts} discussions</p>
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                        Join conversation →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Discussions */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Discussions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: "Best time to visit Palamau Tiger Reserve?", author: "NaturePhotographer", replies: 12, time: "2h ago" },
                    { title: "Local food recommendations in Ranchi", author: "FoodieExplorer", replies: 8, time: "4h ago" },
                    { title: "Solo female travel safety in Jharkhand", author: "WanderlustGirl", replies: 15, time: "6h ago" }
                  ].map((discussion, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg cursor-pointer">
                      <div>
                        <h4 className="font-medium">{discussion.title}</h4>
                        <p className="text-sm text-muted-foreground">by {discussion.author} • {discussion.time}</p>
                      </div>
                      <Badge variant="outline">{discussion.replies} replies</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;