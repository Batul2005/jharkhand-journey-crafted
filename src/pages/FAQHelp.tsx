import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Phone, Mail, MessageCircle, Globe, CreditCard, MapPin, Clock, Users, Shield } from 'lucide-react';

const FAQHelp = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      id: 'travel-info',
      title: 'Travel Information',
      icon: MapPin,
      faqs: [
        {
          question: 'What is the best time to visit Jharkhand?',
          answer: 'The best time to visit Jharkhand is during the winter months (October to March) when the weather is pleasant and ideal for sightseeing. Monsoon season (June to September) is perfect for waterfalls and greenery, but some areas might be inaccessible.'
        },
        {
          question: 'Do I need any special permits to visit Jharkhand?',
          answer: 'Generally, no special permits are required for Indian citizens to visit Jharkhand. However, for certain tribal areas and national parks, you might need permits from local authorities. Your guide will help arrange these if needed.'
        },
        {
          question: 'What are the major airports and railway stations in Jharkhand?',
          answer: 'Major airports include Birsa Munda Airport (Ranchi) and Deoghar Airport. Key railway stations are Ranchi, Dhanbad, Bokaro Steel City, and Jamshedpur. Most destinations are well-connected by road and rail.'
        }
      ]
    },
    {
      id: 'visa-documents',
      title: 'Visa & Documents',
      icon: Shield,
      faqs: [
        {
          question: 'What documents do I need for domestic travel?',
          answer: 'For domestic travel within India, you need a valid government-issued photo ID such as Aadhaar Card, Voter ID, Passport, or Driving License. For air travel, these IDs are mandatory.'
        },
        {
          question: 'What if I\'m an international tourist?',
          answer: 'International tourists need a valid passport and appropriate Indian visa. Tourist visas, e-visas, and visa-on-arrival are available depending on your nationality. Check with the Indian embassy in your country.'
        },
        {
          question: 'Are there any age restrictions for tours?',
          answer: 'Most tours are suitable for all ages, but adventure activities may have age restrictions. Wildlife safaris and cultural tours are family-friendly. Specific age requirements will be mentioned in tour descriptions.'
        }
      ]
    },
    {
      id: 'currency-payments',
      title: 'Currency & Payments',
      icon: CreditCard,
      faqs: [
        {
          question: 'What currency is used in Jharkhand?',
          answer: 'Indian Rupee (INR/₹) is the official currency. ATMs are widely available in cities and towns. Major credit/debit cards are accepted in hotels and restaurants, but carry cash for local markets and rural areas.'
        },
        {
          question: 'How can I pay for tours and services?',
          answer: 'We accept online payments, bank transfers, credit/debit cards, and digital wallets like UPI, Paytm, Google Pay. Cash payments are also accepted. Payment terms vary by tour - some require advance booking payments.'
        },
        {
          question: 'What is the tipping culture in Jharkhand?',
          answer: 'Tipping is appreciated but not mandatory. For guides, 10-15% of tour cost is customary. For restaurants, 10% tip is standard if service charge is not included. For drivers and hotel staff, ₹50-100 per day is appropriate.'
        }
      ]
    },
    {
      id: 'language-communication',
      title: 'Language & Communication',
      icon: Globe,
      faqs: [
        {
          question: 'What languages are spoken in Jharkhand?',
          answer: 'Hindi is the official language and widely understood. English is spoken in tourist areas and by educated locals. Local languages include Santhali, Ho, Mundari, and Kurukh. Most guides are multilingual.'
        },
        {
          question: 'Will language be a barrier for tourists?',
          answer: 'Not at all! Most tour guides speak Hindi and English fluently. Basic English is understood in hotels and tourist areas. We also provide translation assistance when needed.'
        },
        {
          question: 'Are there translation services available?',
          answer: 'Yes, our guides can help translate between English/Hindi and local tribal languages. We can also arrange for specialized translators for business or official purposes upon request.'
        }
      ]
    },
    {
      id: 'booking-cancellation',
      title: 'Booking & Cancellation',
      icon: Clock,
      faqs: [
        {
          question: 'How do I book a tour?',
          answer: 'You can book tours through our website, mobile app, or by contacting our customer service. Choose your tour, select dates, provide traveler details, and make payment. You\'ll receive confirmation via email/SMS.'
        },
        {
          question: 'What is the cancellation policy?',
          answer: 'Cancellation policies vary by tour type. Generally: Free cancellation 7+ days before tour, 50% refund 3-7 days before, 25% refund 1-3 days before. No refund for same-day cancellations unless due to weather/emergency.'
        },
        {
          question: 'Can I modify my booking?',
          answer: 'Yes, modifications are possible subject to availability and may incur charges. Changes to dates, group size, or tour type should be made at least 48 hours in advance. Contact customer service for assistance.'
        }
      ]
    },
    {
      id: 'safety-health',
      title: 'Safety & Health',
      icon: Users,
      faqs: [
        {
          question: 'Is it safe to travel in Jharkhand?',
          answer: 'Yes, Jharkhand is generally safe for tourists. We work with certified guides and maintain high safety standards. Follow basic travel precautions, stay with your group, and inform someone about your itinerary.'
        },
        {
          question: 'What health precautions should I take?',
          answer: 'Carry a basic first-aid kit, prescribed medications, and stay hydrated. Drink bottled water, eat at clean establishments. For wildlife areas, use insect repellent. Travel insurance is recommended.'
        },
        {
          question: 'Are there medical facilities available?',
          answer: 'Yes, major cities have good hospitals and clinics. Rural areas have primary health centers. Our guides are trained in basic first aid. For serious medical emergencies, we can arrange immediate transportation to nearest hospital.'
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Emergency Contacts', icon: Phone, color: 'bg-red-500' },
    { title: 'Travel Insurance', icon: Shield, color: 'bg-blue-500' },
    { title: 'Weather Updates', icon: Globe, color: 'bg-green-500' },
    { title: 'Cultural Guidelines', icon: Users, color: 'bg-purple-500' }
  ];

  const contactInfo = {
    phone: '+91 1800-123-4567',
    email: 'help@jharkhaidtourism.com',
    whatsapp: '+91 9876543210',
    hours: '24/7 Support Available'
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Help & Support Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions and get the help you need for your Jharkhand adventure
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for help topics, visa info, currency, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${link.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">{link.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="all">All</TabsTrigger>
                {faqCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs">
                    {category.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {(searchQuery ? filteredFAQs : faqCategories).map((category) => {
                  const Icon = category.icon;
                  return (
                    <Card key={category.id}>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle>{category.title}</CardTitle>
                          <Badge variant="secondary">{category.faqs.length}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="space-y-2">
                          {category.faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`${category.id}-${index}`}>
                              <AccordionTrigger className="text-left hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="space-y-2">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left hover:no-underline">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Can't find what you're looking for? Our support team is here to help 24/7.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="font-medium">Phone Support</div>
                      <div className="text-sm text-muted-foreground">{contactInfo.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Email Support</div>
                      <div className="text-sm text-muted-foreground">{contactInfo.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">{contactInfo.whatsapp}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <div>
                      <div className="font-medium">Support Hours</div>
                      <div className="text-sm text-muted-foreground">{contactInfo.hours}</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-800">💡 Pro Tip</div>
                    <div className="text-blue-700">Book tours at least 3 days in advance for better availability and prices.</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-800">🌟 Best Time</div>
                    <div className="text-green-700">Visit waterfalls during monsoon (June-Sep) for the best experience.</div>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <div className="font-medium text-yellow-800">📱 Stay Connected</div>
                    <div className="text-yellow-700">Download our mobile app for offline maps and emergency contacts.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHelp;