import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MapPin, Heart, Calendar, User, Globe } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Explore', href: '/explore', icon: MapPin },
    { name: 'Plan Trip', href: '/itinerary', icon: Calendar },
    { name: 'Marketplace', href: '/marketplace', icon: Heart },
    { name: 'Guides', href: '/guides', icon: User },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-hero-gradient p-2 rounded-xl">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-xl text-foreground">
                Jharkhand<span className="text-primary">AI</span>
              </h1>
              <p className="text-xs text-muted-foreground font-inter">Discover Heritage</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth group"
              >
                <item.icon className="h-4 w-4 group-hover:text-primary transition-smooth" />
                <span className="font-inter font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="font-inter">
              Sign In
            </Button>
            <Button className="bg-hero-gradient text-white font-inter font-medium shadow-soft hover-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 text-foreground hover:text-primary transition-smooth p-3 rounded-lg hover:bg-muted/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-inter font-medium text-lg">{item.name}</span>
                    </a>
                  ))}
                  <div className="pt-6 border-t border-border space-y-3">
                    <Button variant="outline" className="w-full font-inter">
                      Sign In
                    </Button>
                    <Button className="w-full bg-hero-gradient text-white font-inter font-medium shadow-soft">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;