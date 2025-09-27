import { useLanguage } from '@/contexts/LanguageContext';

export const useTranslation = () => {
  const { t, currentLanguage, setLanguage } = useLanguage();
  
  return {
    t,
    language: currentLanguage,
    setLanguage,
    isRTL: false, // Can be extended for RTL languages in the future
  };
};

export default useTranslation;