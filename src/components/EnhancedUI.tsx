import React from 'react';
import { Sparkles, Zap, Heart, Star, Trophy, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Enhanced floating action buttons
export const FloatingActionButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
}> = ({ icon, label, onClick, variant = 'primary' }) => {
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-glow text-primary-foreground',
    secondary: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground', 
    accent: 'bg-accent hover:bg-accent/90 text-accent-foreground'
  };

  return (
    <Button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-glow
        ${variantStyles[variant]}
        hover-lift animate-pulse-glow
        group
      `}
      title={label}
    >
      <div className="group-hover:scale-110 transition-smooth">
        {icon}
      </div>
    </Button>
  );
};

// Interactive statistics counter
export const AnimatedCounter: React.FC<{
  value: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}> = ({ value, label, icon, suffix = '' }) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card className="text-center p-6 hover-lift hover-glow transition-smooth">
      <CardContent className="space-y-3">
        <div className="flex justify-center text-primary">
          {icon}
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-poppins font-bold text-foreground">
            {displayValue.toLocaleString()}{suffix}
          </div>
          <div className="text-sm font-inter text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
};

// Interactive rating component
export const InteractiveRating: React.FC<{
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}> = ({ rating, onRatingChange, readonly = false, size = 'md' }) => {
  const [hoveredRating, setHoveredRating] = React.useState(0);

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`
            ${sizeClasses[size]} transition-smooth
            ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
            ${star <= (hoveredRating || rating) ? 'text-yellow-400' : 'text-gray-300'}
          `}
          onClick={() => !readonly && onRatingChange?.(star)}
          onMouseEnter={() => !readonly && setHoveredRating(star)}
          onMouseLeave={() => !readonly && setHoveredRating(0)}
          disabled={readonly}
        >
          <Star className="h-full w-full fill-current" />
        </button>
      ))}
    </div>
  );
};

// Enhanced badge with animation
export const AnimatedBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  animation?: 'pulse' | 'bounce' | 'glow' | 'none';
}> = ({ children, variant = 'default', animation = 'none' }) => {
  const variantStyles = {
    default: 'bg-muted text-muted-foreground',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200'
  };

  const animationStyles = {
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    glow: 'animate-pulse-glow',
    none: ''
  };

  return (
    <Badge className={`${variantStyles[variant]} ${animationStyles[animation]} border hover-scale`}>
      {children}
    </Badge>
  );
};

// Loading skeleton with shimmer effect
export const ShimmerSkeleton: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className = '', children }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded">
        {children}
      </div>
    </div>
  );
};

// Interactive progress bar
export const AnimatedProgress: React.FC<{
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  color?: 'primary' | 'secondary' | 'accent';
}> = ({ value, max = 100, label, showPercentage = true, color = 'primary' }) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent'
  };

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="font-inter font-medium text-foreground">{label}</span>
          {showPercentage && (
            <span className="text-muted-foreground">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full rounded-full ${colorStyles[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// Enhanced tooltip component
export const InteractiveTooltip: React.FC<{
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const positionStyles = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2', 
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`
          absolute z-50 px-3 py-2 text-sm font-inter text-white bg-black/90 
          rounded-lg shadow-lg backdrop-blur-sm animate-fade-in
          ${positionStyles[position]}
        `}>
          {content}
          <div className="absolute w-2 h-2 bg-black/90 transform rotate-45" />
        </div>
      )}
    </div>
  );
};

export default {
  FloatingActionButton,
  AnimatedCounter,
  InteractiveRating,
  AnimatedBadge,
  ShimmerSkeleton,
  AnimatedProgress,
  InteractiveTooltip
};