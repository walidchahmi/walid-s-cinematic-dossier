import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', label: '🇬🇧', name: 'EN' },
  { code: 'fr', label: '🇫🇷', name: 'FR' },
  { code: 'ru', label: '🇷🇺', name: 'RU' },
  { code: 'ar', label: '🇸🇦', name: 'AR' },
] as const;

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="language-switcher"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code as 'en' | 'fr' | 'ru' | 'ar')}
          className={`language-btn ${language === lang.code ? 'language-btn-active' : 'language-btn-inactive'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-1">{lang.label}</span>
          <span className="hidden sm:inline">{lang.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;
