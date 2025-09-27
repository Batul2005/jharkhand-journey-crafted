import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MapPin, Heart, Calendar, User } from 'lucide-react';
import Logo from '@/components/Logo';
import LanguageSelector from '@/components/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('navigation.explore'), href: '/explore', icon: MapPin },
    { name: t('navigation.itinerary'), href: '/itinerary', icon: Calendar },
    { name: t('navigation.marketplace'), href: '/marketplace', icon: Heart },
    { name: t('navigation.guides'), href: '/guides', icon: User },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="hover-lift transition-smooth">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth group"
              >
                <item.icon className="h-4 w-4 group-hover:text-primary transition-smooth" />
                <span className="font-inter font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector variant="ghost" />
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="font-inter hover-lift">
                {t('navigation.signIn')}
              </Button>
            </Link>
            <Link to="/get-started">
              <Button className="bg-hero-gradient text-white font-inter font-medium shadow-soft hover-glow animate-pulse-glow">
                {t('navigation.getStarted')}
              </Button>
            </Link>
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
                     <Link
                       key={item.name}
                       to={item.href}
                       className="flex items-center space-x-3 text-foreground hover:text-primary transition-smooth p-3 rounded-lg hover:bg-muted/50"
                       onClick={() => setIsOpen(false)}
                     >
                       <item.icon className="h-5 w-5" />
                       <span className="font-inter font-medium text-lg">{item.name}</span>
                     </Link>
                   ))}
                   <div className="pt-6 border-t border-border space-y-3">
                      <Link to="/auth">
                        <Button variant="outline" className="w-full font-inter">
                          {t('navigation.signIn')}
                        </Button>
                      </Link>
                      <Link to="/get-started">
                        <Button className="w-full bg-hero-gradient text-white font-inter font-medium shadow-soft">
                          {t('navigation.getStarted')}
                        </Button>
                      </Link>
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