import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const partnerLogos = [
    'JTDC - Jharkhand Tourism Development Corporation',
    'TRIFED - Tribal Cooperative Marketing Development Federation',
    'Government of Jharkhand',
    'Ministry of Tourism, India',
  ];

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Destinations', href: '/destinations' },
        { name: 'Itinerary Planner', href: '/itinerary' },
        { name: 'Local Guides', href: '/guides' },
        { name: 'Tribal Villages', href: '/tribal' },
        { name: 'Wildlife Sanctuaries', href: '/wildlife' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Trip Planning', href: '/ai-planner' },
        { name: 'Verified Guides', href: '/guides' },
        { name: 'Homestays', href: '/homestays' },
        { name: 'Local Marketplace', href: '/marketplace' },
        { name: 'Cultural Experiences', href: '/culture' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Safety Guidelines', href: '/safety' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Tourist Helpline', href: '/helpline' },
        { name: 'Emergency Contacts', href: '/emergency' },
      ],
    },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-hero-gradient p-2 rounded-xl">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">
                  Jharkhand<span className="text-accent">AI</span>
                </h3>
                <p className="text-sm text-white/70 font-inter">Discover Heritage</p>
              </div>
            </div>
            
            <p className="text-white/80 font-inter leading-relaxed mb-6">
              Experience the authentic beauty of Jharkhand with AI-powered personalized itineraries, 
              verified local guides, and sustainable tourism practices.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-inter text-sm">+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-4 w-4 text-accent" />
                <span className="font-inter text-sm">info@jharkhandai.gov.in</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-inter text-sm">Ranchi, Jharkhand, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-poppins font-semibold text-lg mb-6 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-accent font-inter text-sm transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h4 className="font-poppins font-semibold text-center mb-6 text-white">
            Trusted Partners & Government Support
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-smooth"
              >
                <div className="text-white/60 font-inter text-xs">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 font-inter text-sm">
              © 2024 JharkhandAI Tourism Platform. All rights reserved. 
              <span className="text-white/40"> | Powered by Government of Jharkhand</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-white/60 font-inter text-sm mr-2">Follow Us:</span>
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((social) => (
                <Button 
                  key={social.label}
                  variant="ghost" 
                  size="sm" 
                  className="text-white/60 hover:text-accent hover:bg-white/5 p-2"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;