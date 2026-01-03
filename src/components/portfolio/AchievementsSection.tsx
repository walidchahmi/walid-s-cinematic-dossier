import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Timer, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import marathonNourane from '@/assets/certificates/marathon-nourane.jpg';
import marathonComar from '@/assets/certificates/marathon-comar.jpg';

interface Achievement {
  id: number;
  type: 'sports' | 'cultural';
  title: string;
  description: string;
  date: string;
  icon: React.ElementType;
  stats?: string;
  image?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    type: 'sports',
    title: "10ème Marathon de Tunis by Nourane - Semi-Marathon",
    description: "Completed the 21km semi-marathon with impressive time and ranking among all participants.",
    date: "October 26, 2025",
    icon: Trophy,
    stats: "21km • 1:49:30 • Rank 185",
    image: marathonNourane,
  },
  {
    id: 2,
    type: 'sports',
    title: "COMAR Tunis-Carthage Semi-Marathon",
    description: "Finished the prestigious Tunis-Carthage semi-marathon, demonstrating endurance and determination.",
    date: "November 30, 2025",
    icon: Timer,
    stats: "21km • 1:59:36 • SEM Category",
    image: marathonComar,
  },
  {
    id: 3,
    type: 'cultural',
    title: "Maison de la Russie - Cultural Events",
    description: "Active participant in Russian-Tunisian cultural exchanges and educational programs at Maison de la Russie.",
    date: "2024-2025",
    icon: Users,
  },
  {
    id: 4,
    type: 'cultural',
    title: "Russian Language Open Lesson",
    description: "Participated in the Russian Language Open Lesson at the Higher Institute of Humanities of Tunis.",
    date: "2025",
    icon: MapPin,
  },
];

const AchievementsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sportsAchievements = achievements.filter(a => a.type === 'sports');
  const culturalAchievements = achievements.filter(a => a.type === 'cultural');

  return (
    <section id="achievements" className="section-container py-24 lg:py-32" ref={ref}>
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
            {t('navAchievements')}
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('achievementsTitle')}
          </motion.h2>
        </motion.div>

        {/* Sports Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-primary" />
            {t('achievementsSports')}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {sportsAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="glass-card overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px hsla(35, 70%, 55%, 0.15)" }}
              >
                {achievement.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    {achievement.date}
                  </div>
                  <h4 className="text-lg font-display font-bold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    {achievement.description}
                  </p>
                  {achievement.stats && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <Timer className="w-4 h-4" />
                      {achievement.stats}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cultural Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <Users className="text-primary" />
            {t('achievementsCultural')}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {culturalAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px hsla(35, 70%, 55%, 0.15)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-gold">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4" />
                      {achievement.date}
                    </div>
                    <h4 className="text-lg font-display font-bold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
