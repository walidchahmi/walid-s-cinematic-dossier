import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'chahmiwalid1@gmail.com', href: 'mailto:chahmiwalid1@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+216 21 857 197', href: 'tel:+21621857197' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Walid Chahmi', href: 'https://www.linkedin.com/in/walid-chahmi-6a394b279/' },
    { icon: Github, label: 'GitHub', value: 'walidchahmi', href: 'https://github.com/walidchahmi' },
  ];

  return (
    <section id="contact" className="section-container py-24 lg:py-32 bg-secondary/30" ref={ref}>
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
            {t('navContact')}
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-display font-bold mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('contactTitle')}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('contactSubtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contactName')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contactEmail')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('contactMessage')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-foreground"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsla(35, 70%, 55%, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                {t('contactSend')}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Location Card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-gold">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Tunis, Tunisia 🇹🇳</p>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card p-6 flex items-center gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 5, boxShadow: "0 10px 30px hsla(35, 70%, 55%, 0.15)" }}
              >
                <div className="p-3 rounded-xl bg-secondary group-hover:bg-gradient-gold transition-all duration-300">
                  <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{info.label}</h3>
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
