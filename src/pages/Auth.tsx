import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, MapPin, Shield, Store } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { toast } from '@/hooks/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'tourist' | 'guide' | 'admin' | 'vendor'>('tourist');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Form state for registration
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    role: 'tourist'
  });

  // Form state for login
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // API base URL - update this to match your backend
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  // Handle registration form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: registerForm.firstName,
          lastName: registerForm.lastName,
          email: registerForm.email,
          password: registerForm.password,
          phone: registerForm.phone,
          role: userType.charAt(0).toUpperCase() + userType.slice(1) // Convert to proper case
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Account created successfully!",
        });
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(data.data));
        localStorage.setItem('token', data.token || '');
        
        // Redirect based on user role
        const userRole = data.data.role?.toLowerCase();
        switch (userRole) {
          case 'admin':
            // Redirect to Lovable.dev project dashboard
            window.location.href = 'https://lovable.dev/projects/8145fc8d-3f6c-43f1-8464-d7aeef77c606';
            break;
          case 'guide':
            navigate('/guide-dashboard');
            break;
          case 'vendor':
            navigate('/vendor-dashboard');
            break;
          case 'tourist':
          default:
            navigate('/dashboard');
            break;
        }
      } else {
        toast({
          title: "Error",
          description: data.message || "Registration failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Login successful!",
        });
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(data.data));
        localStorage.setItem('token', data.token || '');
        
        // Redirect based on user role
        const userRole = data.data.role?.toLowerCase();
        switch (userRole) {
          case 'admin':
            // Redirect to Lovable.dev project dashboard
            window.location.href = 'https://lovable.dev/projects/8145fc8d-3f6c-43f1-8464-d7aeef77c606';
            break;
          case 'guide':
            navigate('/guide-dashboard');
            break;
          case 'vendor':
            navigate('/vendor-dashboard');
            break;
          case 'tourist':
          default:
            navigate('/dashboard');
            break;
        }
      } else {
        toast({
          title: "Error",
          description: data.message || "Login failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleRegisterInputChange = (field: string, value: string) => {
    setRegisterForm(prev => ({ ...prev, [field]: value }));
  };

  const handleLoginInputChange = (field: string, value: string) => {
    setLoginForm(prev => ({ ...prev, [field]: value }));
  };

  const roleIcons = {
    tourist: User,
    guide: MapPin,
    admin: Shield,
    vendor: Store
  };

  const roleColors = {
    tourist: 'bg-blue-500',
    guide: 'bg-green-500',
    admin: 'bg-red-500',
    vendor: 'bg-purple-500'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 p-4">
      <Card className="w-full max-w-md glass backdrop-blur-md border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {isLogin ? t('auth.welcomeBack') : t('auth.joinUs')}
          </CardTitle>
          <CardDescription>
            {isLogin ? t('auth.signInToAccount') : t('auth.createAccount')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={isLogin ? 'login' : 'register'} onValueChange={(v) => setIsLogin(v === 'login')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">{t('auth.login')}</TabsTrigger>
              <TabsTrigger value="register">{t('auth.register')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleLogin}>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('auth.email')}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder={t('auth.enterEmail')}
                    value={loginForm.email}
                    onChange={(e) => handleLoginInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t('auth.password')}</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder={t('auth.enterPassword')}
                    value={loginForm.password}
                    onChange={(e) => handleLoginInputChange('password', e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-hero-gradient" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : t('auth.signIn')}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleRegister}>
                <div className="space-y-2">
                  <Label htmlFor="role">{t('auth.iAm')}</Label>
                  <Select value={userType} onValueChange={(value: any) => setUserType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tourist">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{t('auth.tourist')}</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="guide">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{t('auth.localGuide')}</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="admin">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4" />
                          <span>{t('auth.administrator')}</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="vendor">
                        <div className="flex items-center space-x-2">
                          <Store className="h-4 w-4" />
                          <span>{t('auth.vendor')}</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('auth.firstName')}</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={registerForm.firstName}
                      onChange={(e) => handleRegisterInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('auth.lastName')}</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={registerForm.lastName}
                      onChange={(e) => handleRegisterInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-reg">{t('auth.email')}</Label>
                  <Input 
                    id="email-reg" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={registerForm.email}
                    onChange={(e) => handleRegisterInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password-reg">{t('auth.password')}</Label>
                  <Input 
                    id="password-reg" 
                    type="password" 
                    placeholder={t('auth.createSecurePassword')} 
                    value={registerForm.password}
                    onChange={(e) => handleRegisterInputChange('password', e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('auth.phoneNumber')}</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 9876543210" 
                    value={registerForm.phone}
                    onChange={(e) => handleRegisterInputChange('phone', e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-hero-gradient" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating account...' : t('auth.createAccount')}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? t('auth.dontHaveAccount') : t('auth.alreadyHaveAccount')}
              <Button
                variant="link"
                className="p-0 ml-1 h-auto font-semibold text-primary"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? t('auth.signUp') : t('auth.signIn')}
              </Button>
            </p>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
              {t('auth.backToHome')}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;