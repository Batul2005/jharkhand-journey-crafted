import React, { useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'bho', name: 'Bhojpuri', nativeName: 'भोजपुरी', flag: '🏴󠁩󠁮󠁪󠁨󠁿' },
  { code: 'sa', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ', flag: '🌿' },
  { code: 'ho', name: 'Ho', nativeName: '𑢹𑣉𑣉', flag: '🏔️' },
  { code: 'ku', name: 'Kurukh', nativeName: 'कुड़ुख़', flag: '🌲' },
];

interface LanguageSelectorProps {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'ghost',
  size = 'default',
  className = ''
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    // In a real app, this would trigger language change logic
    // For now, we'll just update the UI
    console.log('Language changed to:', language.code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={variant} 
          size={size}
          className={`flex items-center space-x-2 ${className} hover-scale transition-smooth`}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-sm font-inter">
            {selectedLanguage.flag} {selectedLanguage.nativeName}
          </span>
          <span className="sm:hidden text-lg">
            {selectedLanguage.flag}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56 animate-fade-in">
        <div className="px-2 py-1.5">
          <div className="text-xs font-poppins font-semibold text-muted-foreground uppercase tracking-wider">
            Choose Language
          </div>
        </div>
        
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center justify-between p-2 cursor-pointer hover:bg-muted/50 transition-smooth"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{language.flag}</span>
              <div>
                <div className="text-sm font-inter font-medium text-foreground">
                  {language.nativeName}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language.name}
                </div>
              </div>
            </div>
            
            {selectedLanguage.code === language.code && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
        
        <div className="px-2 py-1.5 border-t">
          <div className="text-xs text-muted-foreground text-center">
            More languages coming soon
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;