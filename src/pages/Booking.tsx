import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calendar as CalendarIcon, Clock, MapPin, Star, Users, 
  Phone, Mail, CreditCard, Shield, CheckCircle, AlertCircle,
  FileText, Download, Share2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: 'guide',
    serviceId: '1',
    date: '',
    duration: '1',
    travelers: '2',
    specialRequests: '',
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    },
    paymentMethod: 'upi'
  });

  // Mock data for the service being booked
  const service = {
    type: 'Guide Service',
    name: 'Ravi Kumar',
    specialization: 'Wildlife & Nature',
    rating: 4.9,
    reviews: 127,
    pricePerDay: 2500,
    location: 'Ranchi',
    avatar: 'RK',
    verified: true,
    languages: ['Hindi', 'English', 'Santali'],
    description: 'Expert wildlife guide with 8+ years experience in Jharkhand',
    services: [
      'Waterfall expedition guide',
      'Wildlife photography assistance', 
      'Local culture insights',
      'Safety equipment provided'
    ]
  };

  const calculateTotal = () => {
    const basePrice = service.pricePerDay * parseInt(bookingData.duration);
    const tax = basePrice * 0.18; // 18% GST
    const platformFee = 99;
    return {
      basePrice,
      tax,
      platformFee,
      total: basePrice + tax + platformFee
    };
  };

  const pricing = calculateTotal();

  const renderStep1 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Select Date & Duration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <Label htmlFor="duration">Duration (Days)</Label>
              <Select value={bookingData.duration} onValueChange={(value) => setBookingData({...bookingData, duration: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Day</SelectItem>
                  <SelectItem value="2">2 Days</SelectItem>
                  <SelectItem value="3">3 Days</SelectItem>
                  <SelectItem value="4">4 Days</SelectItem>
                  <SelectItem value="5">5+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="travelers">Number of Travelers</Label>
              <Select value={bookingData.travelers} onValueChange={(value) => setBookingData({...bookingData, travelers: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 People</SelectItem>
                  <SelectItem value="3">3 People</SelectItem>
                  <SelectItem value="4">4 People</SelectItem>
                  <SelectItem value="5+">5+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Preferred Time</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="early">Early Morning (6-8 AM)</SelectItem>
                  <SelectItem value="morning">Morning (8-10 AM)</SelectItem>
                  <SelectItem value="late-morning">Late Morning (10-12 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (2-4 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="requests">Special Requests (Optional)</Label>
            <Textarea 
              id="requests"
              placeholder="Any specific requirements, accessibility needs, or preferences..."
              value={bookingData.specialRequests}
              onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                placeholder="Enter your full name"
                value={bookingData.contactInfo.name}
                onChange={(e) => setBookingData({
                  ...bookingData, 
                  contactInfo: {...bookingData.contactInfo, name: e.target.value}
                })}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="your.email@example.com"
                value={bookingData.contactInfo.email}
                onChange={(e) => setBookingData({
                  ...bookingData, 
                  contactInfo: {...bookingData.contactInfo, email: e.target.value}
                })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input 
              id="phone" 
              placeholder="+91 XXXXX XXXXX"
              value={bookingData.contactInfo.phone}
              onChange={(e) => setBookingData({
                ...bookingData, 
                contactInfo: {...bookingData.contactInfo, phone: e.target.value}
              })}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="whatsapp" />
            <Label htmlFor="whatsapp" className="text-sm">
              Send booking updates on WhatsApp
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
              <input 
                type="radio" 
                name="payment" 
                value="upi" 
                checked={bookingData.paymentMethod === 'upi'}
                onChange={(e) => setBookingData({...bookingData, paymentMethod: e.target.value})}
              />
              <div className="flex-1">
                <div className="font-medium">UPI / Net Banking</div>
                <div className="text-sm text-muted-foreground">Pay via UPI, Google Pay, PhonePe, Paytm</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                checked={bookingData.paymentMethod === 'card'}
                onChange={(e) => setBookingData({...bookingData, paymentMethod: e.target.value})}
              />
              <div className="flex-1">
                <div className="font-medium">Credit / Debit Card</div>
                <div className="text-sm text-muted-foreground">Visa, Mastercard, RuPay accepted</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
              <input 
                type="radio" 
                name="payment" 
                value="wallet" 
                checked={bookingData.paymentMethod === 'wallet'}
                onChange={(e) => setBookingData({...bookingData, paymentMethod: e.target.value})}
              />
              <div className="flex-1">
                <div className="font-medium">Digital Wallet</div>
                <div className="text-sm text-muted-foreground">Paytm, Amazon Pay, MobiKwik</div>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-2 p-3 bg-blue-50 rounded-lg">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div className="text-sm">
              <div className="font-medium text-blue-900">Secure Payment</div>
              <div className="text-blue-700">Your payment information is encrypted and secure. We partner with trusted payment providers.</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms & Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Terms & Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" className="mt-1" />
            <Label htmlFor="terms" className="text-sm leading-relaxed">
              I agree to the <Button variant="link" className="p-0 h-auto text-primary">Terms of Service</Button> and <Button variant="link" className="p-0 h-auto text-primary">Privacy Policy</Button>
            </Label>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox id="cancellation" className="mt-1" />
            <Label htmlFor="cancellation" className="text-sm leading-relaxed">
              I understand the <Button variant="link" className="p-0 h-auto text-primary">Cancellation Policy</Button>: Free cancellation up to 24 hours before the trip
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="guidelines" className="mt-1" />
            <Label htmlFor="guidelines" className="text-sm leading-relaxed">
              I will follow all safety guidelines and instructions provided by the guide
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="rounded-full bg-green-100 p-6">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-green-600 mb-2">Booking Confirmed!</h2>
        <p className="text-lg text-muted-foreground">
          Your booking has been successfully confirmed. You will receive a confirmation email shortly.
        </p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Booking Details</CardTitle>
          <CardDescription>Booking ID: #JT2024001</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span>Service:</span>
            <span className="font-medium">{service.type}</span>
          </div>
          <div className="flex justify-between">
            <span>Guide:</span>
            <span className="font-medium">{service.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Date:</span>
            <span className="font-medium">{selectedDate ? format(selectedDate, "PPP") : 'TBD'}</span>
          </div>
          <div className="flex justify-between">
            <span>Duration:</span>
            <span className="font-medium">{bookingData.duration} day(s)</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Paid:</span>
            <span className="text-primary">₹{pricing.total.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download Receipt
        </Button>
        <Button variant="outline" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share Booking
        </Button>
        <Button className="gap-2">
          <Phone className="h-4 w-4" />
          Contact Guide
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {step < 4 && (
            <>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        i <= step ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                      )}>
                        {i}
                      </div>
                      {i < 3 && (
                        <div className={cn(
                          "w-16 h-0.5 ml-2",
                          i < step ? "bg-primary" : "bg-muted"
                        )} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-8 mt-2">
                  <span className={cn("text-sm", step >= 1 ? "text-primary font-medium" : "text-muted-foreground")}>
                    Details
                  </span>
                  <span className={cn("text-sm", step >= 2 ? "text-primary font-medium" : "text-muted-foreground")}>
                    Contact
                  </span>
                  <span className={cn("text-sm", step >= 3 ? "text-primary font-medium" : "text-muted-foreground")}>
                    Payment
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {step === 1 && "Booking Details"}
                        {step === 2 && "Contact Information"}
                        {step === 3 && "Payment & Confirmation"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {step === 1 && renderStep1()}
                      {step === 2 && renderStep2()}
                      {step === 3 && renderStep3()}
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar - Service Summary */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {service.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.specialization}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="text-sm font-medium">{service.rating}</span>
                            <span className="text-sm text-muted-foreground">({service.reviews})</span>
                          </div>
                        </div>
                        {service.verified && (
                          <Badge className="bg-primary/10 text-primary">Verified</Badge>
                        )}
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium">Services Included:</h4>
                        {service.services.map((s, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Price Breakdown */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Price Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span>Service Fee ({bookingData.duration} day{bookingData.duration !== '1' ? 's' : ''})</span>
                        <span>₹{pricing.basePrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Platform Fee</span>
                        <span>₹{pricing.platformFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST (18%)</span>
                        <span>₹{Math.round(pricing.tax).toLocaleString()}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-primary">₹{pricing.total.toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    {step > 1 && (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setStep(step - 1)}
                      >
                        Back
                      </Button>
                    )}
                    <Button 
                      className="w-full"
                      onClick={() => {
                        if (step < 3) {
                          setStep(step + 1);
                        } else {
                          setStep(4);
                        }
                      }}
                    >
                      {step === 3 ? 'Confirm & Pay' : 'Continue'}
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 4 && renderSuccess()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;