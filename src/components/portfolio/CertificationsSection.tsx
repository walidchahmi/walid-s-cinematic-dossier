import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Certificate imports
import generativeAI from '@/assets/certificates/generative-ai.jpg';
import machineLearning from '@/assets/certificates/machine-learning.jpg';
import pythonCert from '@/assets/certificates/python.jpg';
import artificialIntelligence from '@/assets/certificates/artificial-intelligence.jpg';

interface Certificate {
  id: number;
  name: string;
  platform: string;
  category: string;
  image: string;
  date: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Generative AI for Professionals",
    platform: "GOMYCODE",
    category: "AI",
    image: generativeAI,
    date: "January 2026"
  },
  {
    id: 2,
    name: "Basics of Machine Learning Algorithms",
    platform: "Cambridge International / UniAthena",
    category: "AI",
    image: machineLearning,
    date: "December 2025"
  },
  {
    id: 3,
    name: "Basics of Python",
    platform: "Cambridge International / UniAthena",
    category: "Programming",
    image: pythonCert,
    date: "December 2025"
  },
  {
    id: 4,
    name: "Basics of Artificial Intelligence",
    platform: "Cambridge International / UniAthena",
    category: "AI",
    image: artificialIntelligence,
    date: "December 2025"
  },
];

const CertificationsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'AI', 'Programming', 'Web Development', 'Data'];

  const filteredCerts = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  return (
    <section id="certifications" className="section-container py-24 lg:py-32" ref={ref}>
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
            {t('navCertifications')}
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('certificationsTitle')}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('certificationsSubtitle')}
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certificate-card group"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedCert(cert)}
              whileHover={{ y: -5 }}
            >
              {/* Certificate Image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm font-medium text-foreground">Click to view</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {cert.category}
                </span>
                <h3 className="text-lg font-display font-semibold mt-1 text-foreground line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {cert.platform}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Count */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground">
            <span className="text-3xl font-display font-bold gold-gradient-text">25+</span>
            <span className="ml-2">Professional Certifications</span>
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 p-2 text-foreground hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-display font-bold text-foreground">
                {selectedCert.name}
              </h3>
              <p className="text-muted-foreground mt-2">
                {selectedCert.platform} • {selectedCert.date}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificationsSection;
