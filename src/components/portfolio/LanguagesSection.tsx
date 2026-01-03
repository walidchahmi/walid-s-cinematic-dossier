import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageProficiency {
  key: string;
  level: string;
  percentage: number;
  flag: string;
}

const languageProficiencies: LanguageProficiency[] = [
  { key: 'langArabic', level: 'langNative', percentage: 100, flag: '🇹🇳' },
  { key: 'langFrench', level: 'B2', percentage: 80, flag: '🇫🇷' },
  { key: 'langEnglish', level: 'B2', percentage: 80, flag: '🇬🇧' },
  { key: 'langRussian', level: 'B1', percentage: 60, flag: '🇷🇺' },
  { key: 'langItalian', level: 'A1', percentage: 25, flag: '🇮🇹' },
];

const LanguagesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="section-container py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('navLanguages')}
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('languagesTitle')}
          </motion.h2>
        </motion.div>

        {/* Languages Grid */}
        <div className="max-w-4xl mx-auto grid gap-6">
          {languageProficiencies.map((lang, index) => (
            <motion.div
              key={lang.key}
              className="glass-card p-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px hsla(35, 70%, 55%, 0.15)" }}
            >
              <div className="flex items-center gap-6">
                {/* Flag */}
                <motion.span
                  className="text-5xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {lang.flag}
                </motion.span>

                {/* Language Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {t(lang.key)}
                    </h3>
                    <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                      {lang.level === 'langNative' ? t('langNative') : lang.level}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percentage}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
