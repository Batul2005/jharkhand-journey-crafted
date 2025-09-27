import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'bho', name: 'Bhojpuri', nativeName: 'भोजपुरी', flag: '🏴󠁩󠁮󠁪󠁨󠁿' },
  { code: 'sa', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ', flag: '🌿' },
  { code: 'ho', name: 'Ho', nativeName: '𑢹𑣉𑣉', flag: '🏔️' },
  { code: 'ku', name: 'Kurukh', nativeName: 'कुड़ुख़', flag: '🌲' },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Load translations for current language
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../translations/${currentLanguage.code}.json`);
        setTranslations(response.default || response);
      } catch (error) {
        console.warn(`Translations not found for ${currentLanguage.code}, falling back to English`);
        if (currentLanguage.code !== 'en') {
          try {
            const response = await import(`../translations/en.json`);
            setTranslations(response.default || response);
          } catch (fallbackError) {
            console.error('Failed to load English fallback translations');
            setTranslations({});
          }
        }
      }
    };

    loadTranslations();
  }, [currentLanguage]);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLanguage.code);
  }, [currentLanguage]);

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  // Translation function with parameter support
  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let translation = translations;

    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    let result = typeof translation === 'string' ? translation : key;

    // Replace parameters in translation
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        result = result.replace(new RegExp(`{{${param}}}`, 'g'), value);
      });
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};