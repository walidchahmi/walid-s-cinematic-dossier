import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Award, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Calendar, label: t('aboutAge'), value: '18' },
    { icon: MapPin, label: t('aboutNationality'), value: '' },
    { icon: GraduationCap, label: t('aboutAcademic'), value: '' },
    { icon: Award, label: t('aboutGPA'), value: '' },
  ];

  return (
    <section id="about" className="section-container py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-gold rounded-2xl opacity-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              
              {/* Profile Image */}
              <motion.div
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Walid Chahmi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Section Title */}
            <div>
              <motion.span
                className="text-primary font-medium text-sm uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t('navAbout')}
              </motion.span>
              <motion.h2
                className="text-4xl lg:text-5xl font-display font-bold mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('aboutTitle')}
              </motion.h2>
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 flex items-center gap-3"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px hsla(35, 70%, 55%, 0.2)" }}
                >
                  <div className="p-2 rounded-lg bg-primary/20">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('aboutDescription')}
            </motion.p>

            {/* Highlight Tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {['Full Stack', 'AI & ML', 'Prompt Engineering', 'React', 'Python'].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
