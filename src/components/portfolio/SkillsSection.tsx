import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  key: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    key: 'skillsProgramming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'PHP', level: 75 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    key: 'skillsFrontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'Redux/Context API/Zustand', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Material UI', level: 85 },
      { name: 'Vite/Webpack', level: 88 },
    ],
  },
  {
    key: 'skillsBackend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'REST API Design', level: 92 },
      { name: 'MongoDB', level: 85 },
      { name: 'Full Stack Architecture', level: 88 },
    ],
  },
  {
    key: 'skillsAI',
    skills: [
      { name: 'Generative AI', level: 90 },
      { name: 'Large Language Models', level: 88 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'Multimodal Prompting', level: 85 },
      { name: 'Data Analysis', level: 80 },
    ],
  },
  {
    key: 'skillsDevOps',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 72 },
      { name: 'WordPress/Wix', level: 85 },
      { name: 'Microsoft Office', level: 90 },
    ],
  },
  {
    key: 'skillsSoft',
    skills: [
      { name: 'Technical Leadership', level: 88 },
      { name: 'Agile Methodology', level: 85 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Autonomous Learning', level: 98 },
      { name: 'Project Organization', level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('skillsProgramming');

  const activeCategory = skillCategories.find(cat => cat.key === activeTab);

  return (
    <section id="skills" className="section-container py-24 lg:py-32 bg-secondary/30" ref={ref}>
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
            {t('navSkills')}
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('skillsTitle')}
          </motion.h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.key 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(category.key)}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          className="max-w-4xl mx-auto"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6">
            {activeCategory?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-card p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Tags Cloud */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {['Web3', 'AI Applications', 'Canva', 'Bootstrap', 'Data Visualization', 'Intelligent Algorithms'].map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 rounded-full text-sm bg-card/50 text-muted-foreground border border-border/50"
              whileHover={{ scale: 1.1, borderColor: 'hsl(var(--primary))' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
