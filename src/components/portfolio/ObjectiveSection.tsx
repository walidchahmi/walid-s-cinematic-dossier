import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Brain, Globe, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import russiaUniversity from '@/assets/russia-university.jpg';

const ObjectiveSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const objectives = [
    {
      icon: Globe,
      title: t('objectiveWhyRussia'),
      description: t('objectiveWhyRussiaText'),
    },
    {
      icon: Brain,
      title: t('objectiveWhyML'),
      description: t('objectiveWhyMLText'),
    },
    {
      icon: Target,
      title: t('objectiveRussianLevel'),
      description: t('objectiveMaisonRussie'),
    },
  ];

  return (
    <section 
      id="objective" 
      className="section-container py-24 lg:py-32 relative overflow-hidden" 
      ref={ref}
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${russiaUniversity})` }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            {t('navObjective')}
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold mt-2 gold-gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('objectiveTitle')}
          </motion.h2>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 text-center group"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px hsla(35, 70%, 55%, 0.15)" 
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <objective.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">
                {objective.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {objective.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-full">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Maison de la Russie • Tunisia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
