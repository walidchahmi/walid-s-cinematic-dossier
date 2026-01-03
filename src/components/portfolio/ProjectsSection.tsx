import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ShoppingCart, BarChart3, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ElementType;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI E-commerce Platform",
    description: "Full-stack e-commerce solution with AI-powered product recommendations, intelligent search, and personalized user experiences using React, Node.js, and machine learning algorithms.",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "Redux"],
    icon: ShoppingCart,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    title: "Stock Market Analytics Dashboard",
    description: "Real-time stock market analysis dashboard with predictive analytics, data visualization, and automated trading signals using Python and advanced data science techniques.",
    technologies: ["Python", "React", "D3.js", "PostgreSQL", "AWS"],
    icon: BarChart3,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Adaptive Educational Platform",
    description: "Intelligent learning management system that adapts to individual student learning patterns, featuring AI tutoring and personalized curriculum generation.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Supabase", "Tailwind"],
    icon: GraduationCap,
    color: "from-purple-500 to-pink-600",
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container py-24 lg:py-32" ref={ref}>
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
            {t('navProjects')}
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('projectsTitle')}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('projectsSubtitle')}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <project.icon className="w-20 h-20 text-white/80" />
                  </motion.div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/walidchahmi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
