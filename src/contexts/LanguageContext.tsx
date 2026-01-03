import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ru' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    ru: string;
    ar: string;
  };
}

const translations: Translations = {
  // Hero Section
  heroTitle: {
    en: "WALID CHAHMI",
    fr: "WALID CHAHMI",
    ru: "ВАЛИД ШАХМИ",
    ar: "وليد شهمي"
  },
  heroSubtitle: {
    en: "Full Stack Developer & AI Engineer",
    fr: "Développeur Full Stack & Ingénieur IA",
    ru: "Fullstack-разработчик и инженер ИИ",
    ar: "مطور Full Stack ومهندس ذكاء اصطناعي"
  },
  heroMission: {
    en: "Driven by the pursuit of excellence in Machine Learning and Artificial Intelligence",
    fr: "Animé par la quête de l'excellence en Machine Learning et Intelligence Artificielle",
    ru: "Стремлюсь к совершенству в машинном обучении и искусственном интеллекте",
    ar: "مدفوع بالسعي نحو التميز في التعلم الآلي والذكاء الاصطناعي"
  },
  scrollDown: {
    en: "Scroll to explore",
    fr: "Défiler pour explorer",
    ru: "Прокрутите для просмотра",
    ar: "مرر للاستكشاف"
  },
  
  // About Section
  aboutTitle: {
    en: "About Me",
    fr: "À Propos de Moi",
    ru: "Обо Мне",
    ar: "نبذة عني"
  },
  aboutAge: {
    en: "18 years old",
    fr: "18 ans",
    ru: "18 лет",
    ar: "18 سنة"
  },
  aboutNationality: {
    en: "Tunisian",
    fr: "Tunisien",
    ru: "Тунисец",
    ar: "تونسي"
  },
  aboutAcademic: {
    en: "4ème Informatique - Lycée Bardo",
    fr: "4ème Informatique - Lycée Bardo",
    ru: "4-й курс Информатики - Лицей Бардо",
    ar: "السنة الرابعة إعلامية - معهد باردو"
  },
  aboutGPA: {
    en: "GPA: 16.24/20",
    fr: "Moyenne: 16.24/20",
    ru: "Средний балл: 16.24/20",
    ar: "المعدل: 16.24/20"
  },
  aboutDescription: {
    en: "A highly motivated and disciplined student passionate about artificial intelligence, machine learning, and full-stack development. I combine technical excellence with cultural awareness and athletic discipline to achieve my goals.",
    fr: "Étudiant très motivé et discipliné, passionné par l'intelligence artificielle, le machine learning et le développement full-stack. Je combine excellence technique, sensibilité culturelle et discipline sportive pour atteindre mes objectifs.",
    ru: "Целеустремлённый и дисциплинированный студент, увлечённый искусственным интеллектом, машинным обучением и fullstack-разработкой. Я сочетаю техническое мастерство с культурной осведомлённостью и спортивной дисциплиной.",
    ar: "طالب متحمس ومنضبط، شغوف بالذكاء الاصطناعي والتعلم الآلي وتطوير Full Stack. أجمع بين التميز التقني والوعي الثقافي والانضباط الرياضي لتحقيق أهدافي."
  },
  
  // Objective Section
  objectiveTitle: {
    en: "Academic Objective",
    fr: "Objectif Académique",
    ru: "Академическая Цель",
    ar: "الهدف الأكاديمي"
  },
  objectiveWhyRussia: {
    en: "Why Russia?",
    fr: "Pourquoi la Russie?",
    ru: "Почему Россия?",
    ar: "لماذا روسيا؟"
  },
  objectiveWhyRussiaText: {
    en: "Russia offers world-class education in computer science and artificial intelligence, with renowned universities leading cutting-edge research in machine learning and data science.",
    fr: "La Russie offre une éducation de classe mondiale en informatique et intelligence artificielle, avec des universités renommées menant des recherches de pointe en machine learning et science des données.",
    ru: "Россия предлагает образование мирового уровня в области информатики и искусственного интеллекта с университетами, ведущими передовые исследования в машинном обучении и науке о данных.",
    ar: "تقدم روسيا تعليماً عالمياً في علوم الحاسوب والذكاء الاصطناعي، مع جامعات رائدة في أبحاث التعلم الآلي وعلوم البيانات."
  },
  objectiveWhyML: {
    en: "Why Machine Learning?",
    fr: "Pourquoi le Machine Learning?",
    ru: "Почему машинное обучение?",
    ar: "لماذا التعلم الآلي؟"
  },
  objectiveWhyMLText: {
    en: "Machine learning represents the future of technology. My goal is to develop intelligent systems that can solve complex real-world problems and contribute to the advancement of AI research.",
    fr: "Le machine learning représente l'avenir de la technologie. Mon objectif est de développer des systèmes intelligents capables de résoudre des problèmes complexes du monde réel et de contribuer à l'avancement de la recherche en IA.",
    ru: "Машинное обучение — это будущее технологий. Моя цель — создавать интеллектуальные системы, способные решать сложные задачи реального мира и вносить вклад в развитие исследований ИИ.",
    ar: "يمثل التعلم الآلي مستقبل التكنولوجيا. هدفي هو تطوير أنظمة ذكية قادرة على حل المشكلات المعقدة والمساهمة في تطوير أبحاث الذكاء الاصطناعي."
  },
  objectiveRussianLevel: {
    en: "Russian Language: B1 Level",
    fr: "Langue Russe: Niveau B1",
    ru: "Русский язык: уровень B1",
    ar: "اللغة الروسية: المستوى B1"
  },
  objectiveMaisonRussie: {
    en: "Active participant at Maison de la Russie in Tunisia, engaging in cultural and educational exchanges.",
    fr: "Participant actif à la Maison de la Russie en Tunisie, engagé dans des échanges culturels et éducatifs.",
    ru: "Активный участник Русского дома в Тунисе, вовлечённый в культурные и образовательные обмены.",
    ar: "مشارك نشط في البيت الروسي في تونس، منخرط في التبادلات الثقافية والتعليمية."
  },
  
  // Certifications Section
  certificationsTitle: {
    en: "Certifications",
    fr: "Certifications",
    ru: "Сертификаты",
    ar: "الشهادات"
  },
  certificationsSubtitle: {
    en: "Professional credentials and verified achievements",
    fr: "Accréditations professionnelles et réalisations vérifiées",
    ru: "Профессиональные аккредитации и подтверждённые достижения",
    ar: "الاعتمادات المهنية والإنجازات الموثقة"
  },
  
  // Skills Section
  skillsTitle: {
    en: "Technical Skills",
    fr: "Compétences Techniques",
    ru: "Технические Навыки",
    ar: "المهارات التقنية"
  },
  skillsProgramming: {
    en: "Programming Languages",
    fr: "Langages de Programmation",
    ru: "Языки программирования",
    ar: "لغات البرمجة"
  },
  skillsFrontend: {
    en: "Front-End Development",
    fr: "Développement Front-End",
    ru: "Фронтенд-разработка",
    ar: "تطوير الواجهات الأمامية"
  },
  skillsBackend: {
    en: "Back-End Development",
    fr: "Développement Back-End",
    ru: "Бэкенд-разработка",
    ar: "تطوير الواجهات الخلفية"
  },
  skillsAI: {
    en: "AI & Machine Learning",
    fr: "IA & Machine Learning",
    ru: "ИИ и машинное обучение",
    ar: "الذكاء الاصطناعي والتعلم الآلي"
  },
  skillsDevOps: {
    en: "DevOps & Tools",
    fr: "DevOps & Outils",
    ru: "DevOps и инструменты",
    ar: "DevOps والأدوات"
  },
  skillsSoft: {
    en: "Soft Skills",
    fr: "Compétences Transversales",
    ru: "Гибкие навыки",
    ar: "المهارات الشخصية"
  },
  
  // Projects Section
  projectsTitle: {
    en: "Real Projects",
    fr: "Projets Réels",
    ru: "Реальные Проекты",
    ar: "مشاريع حقيقية"
  },
  projectsSubtitle: {
    en: "Showcasing practical applications of technical skills",
    fr: "Démonstration des applications pratiques des compétences techniques",
    ru: "Демонстрация практического применения технических навыков",
    ar: "عرض التطبيقات العملية للمهارات التقنية"
  },
  
  // Languages Section
  languagesTitle: {
    en: "Language Proficiency",
    fr: "Compétences Linguistiques",
    ru: "Владение Языками",
    ar: "إتقان اللغات"
  },
  langArabic: {
    en: "Arabic",
    fr: "Arabe",
    ru: "Арабский",
    ar: "العربية"
  },
  langFrench: {
    en: "French",
    fr: "Français",
    ru: "Французский",
    ar: "الفرنسية"
  },
  langEnglish: {
    en: "English",
    fr: "Anglais",
    ru: "Английский",
    ar: "الإنجليزية"
  },
  langRussian: {
    en: "Russian",
    fr: "Russe",
    ru: "Русский",
    ar: "الروسية"
  },
  langItalian: {
    en: "Italian",
    fr: "Italien",
    ru: "Итальянский",
    ar: "الإيطالية"
  },
  langNative: {
    en: "Native",
    fr: "Natif",
    ru: "Родной",
    ar: "اللغة الأم"
  },
  
  // Achievements Section
  achievementsTitle: {
    en: "Sports & Cultural Achievements",
    fr: "Réalisations Sportives & Culturelles",
    ru: "Спортивные и Культурные Достижения",
    ar: "الإنجازات الرياضية والثقافية"
  },
  achievementsSports: {
    en: "Sports",
    fr: "Sports",
    ru: "Спорт",
    ar: "الرياضة"
  },
  achievementsCultural: {
    en: "Cultural",
    fr: "Culturel",
    ru: "Культура",
    ar: "ثقافي"
  },
  
  // Contact Section
  contactTitle: {
    en: "Get in Touch",
    fr: "Contactez-Moi",
    ru: "Связаться со Мной",
    ar: "تواصل معي"
  },
  contactSubtitle: {
    en: "Let's discuss opportunities and collaborations",
    fr: "Discutons des opportunités et collaborations",
    ru: "Обсудим возможности и сотрудничество",
    ar: "لنناقش الفرص والتعاون"
  },
  contactName: {
    en: "Your Name",
    fr: "Votre Nom",
    ru: "Ваше Имя",
    ar: "اسمك"
  },
  contactEmail: {
    en: "Your Email",
    fr: "Votre Email",
    ru: "Ваш Email",
    ar: "بريدك الإلكتروني"
  },
  contactMessage: {
    en: "Your Message",
    fr: "Votre Message",
    ru: "Ваше Сообщение",
    ar: "رسالتك"
  },
  contactSend: {
    en: "Send Message",
    fr: "Envoyer",
    ru: "Отправить",
    ar: "إرسال"
  },
  
  // Footer
  footerRights: {
    en: "All rights reserved",
    fr: "Tous droits réservés",
    ru: "Все права защищены",
    ar: "جميع الحقوق محفوظة"
  },
  backToTop: {
    en: "Back to top",
    fr: "Retour en haut",
    ru: "Наверх",
    ar: "العودة للأعلى"
  },
  
  // Navigation
  navAbout: {
    en: "About",
    fr: "À Propos",
    ru: "Обо мне",
    ar: "نبذة"
  },
  navObjective: {
    en: "Objective",
    fr: "Objectif",
    ru: "Цель",
    ar: "الهدف"
  },
  navCertifications: {
    en: "Certifications",
    fr: "Certifications",
    ru: "Сертификаты",
    ar: "الشهادات"
  },
  navSkills: {
    en: "Skills",
    fr: "Compétences",
    ru: "Навыки",
    ar: "المهارات"
  },
  navProjects: {
    en: "Projects",
    fr: "Projets",
    ru: "Проекты",
    ar: "المشاريع"
  },
  navLanguages: {
    en: "Languages",
    fr: "Langues",
    ru: "Языки",
    ar: "اللغات"
  },
  navAchievements: {
    en: "Achievements",
    fr: "Réalisations",
    ru: "Достижения",
    ar: "الإنجازات"
  },
  navContact: {
    en: "Contact",
    fr: "Contact",
    ru: "Контакты",
    ar: "تواصل"
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
