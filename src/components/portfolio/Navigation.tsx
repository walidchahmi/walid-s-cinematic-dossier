import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: t('navAbout') },
    { href: '#objective', label: t('navObjective') },
    { href: '#certifications', label: t('navCertifications') },
    { href: '#skills', label: t('navSkills') },
    { href: '#projects', label: t('navProjects') },
    { href: '#languages', label: t('navLanguages') },
    { href: '#achievements', label: t('navAchievements') },
    { href: '#contact', label: t('navContact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-display font-bold gold-gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          WC
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
