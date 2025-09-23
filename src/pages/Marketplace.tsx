import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, Verified, Filter } from 'lucide-react';

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: "Handwoven Tribal Basket",
      description: "Traditional bamboo basket crafted by local artisans",
      price: "₹1,200",
      originalPrice: "₹1,500",
      image: "/src/assets/handicrafts.jpg",
      rating: 4.8,
      reviews: 45,
      seller: "Santhali Crafts Collective",
      verified: true,
      category: "Handicrafts"
    },
    {
      id: 2,
      name: "Dokra Metal Art",
      description: "Ancient bell metal craft figurine depicting tribal dance",
      price: "₹2,800",
      originalPrice: "₹3,200",
      image: "/src/assets/handicrafts.jpg",
      rating: 4.9,
      reviews: 32,
      seller: "Jharkhand Heritage Arts",
      verified: true,
      category: "Art"
    }
  ];

  const categories = [
    "All Products", "Handicrafts", "Textiles", "Art", "Jewelry", "Home Decor", "Homestays"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Local <span className="text-primary">Marketplace</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Support local artisans and discover authentic Jharkhand handicrafts, homestays, and experiences
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All Products" ? "default" : "outline"}
                className="gap-2"
              >
                {category === "All Products" && <Filter className="h-4 w-4" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                      Save ₹{parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-lg text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {product.verified && (
                        <Verified className="h-4 w-4 text-primary" />
                      )}
                      <span className="text-sm text-muted-foreground truncate">
                        {product.seller}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">Become a Seller</CardTitle>
                <CardDescription className="text-lg">
                  Join our marketplace and showcase your authentic Jharkhand products to travelers worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-hero-gradient text-white">
                  Start Selling Today
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

export default Marketplace;