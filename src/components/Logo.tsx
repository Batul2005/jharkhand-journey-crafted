import React from 'react';
import { Mountain, Sparkles, TreePine } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = 'md',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10', 
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative group">
        {/* Mountain backdrop */}
        <Mountain 
          className={`${sizeClasses[size]} text-primary group-hover:text-primary-glow transition-smooth`} 
        />
        {/* Tree overlay */}
        <TreePine 
          className="absolute inset-0 h-4 w-4 text-accent translate-x-1 -translate-y-1 group-hover:scale-110 transition-smooth" 
        />
        {/* Sparkle effect */}
        <Sparkles 
          className="absolute -top-1 -right-1 h-3 w-3 text-secondary group-hover:animate-pulse" 
        />
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-poppins font-bold ${textSizeClasses[size]} text-primary group-hover:text-primary-glow transition-smooth`}>
            Jharkhand
          </span>
          <span className="font-inter text-xs text-muted-foreground -mt-1">
            AI Tourism
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;