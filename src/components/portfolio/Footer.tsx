import { motion } from 'framer-motion';
import { ChevronUp, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold gold-gradient-text mb-2">
              Walid Chahmi
            </h3>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              © 2026 • {t('footerRights')} • Made with <Heart className="w-4 h-4 text-primary inline" />
            </p>
          </motion.div>

          {/* Language Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <LanguageSwitcher />
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-5 h-5" />
            <span className="text-sm font-medium">{t('backToTop')}</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
