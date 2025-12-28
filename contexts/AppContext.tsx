
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'es' | 'ar';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Book Free Consultation",
    hero_badge: "Intelligent Data Solutions",
    hero_title: "Smart Decisions. Real Impact.",
    hero_sub: "We help SMEs and decision-makers turn raw data into actionable insights and automated workflows that save time and increase revenue.",
    hero_audit: "Get Your Business Audit",
    audit_title: "Instant AI Business Audit",
    audit_placeholder: "e.g., We are a retail shop with 3 branches...",
    audit_btn: "Generate My Audit",
    audit_analyzing: "Analyzing...",
    services_title: "Tailored Solutions for Modern SMEs",
    services_sub: "Stop guessing. Start knowing. Our core expertise lies at the intersection of data science and operational efficiency.",
    services_hero_title: "Our Services are Designed to Transform Your Business",
    services_hero_sub: "From data visualization to automation and predictive analytics, we provide modular solutions that deliver measurable results.",
    services_problem: "The Problem",
    services_solution: "The Solution",
    services_result: "The Result",
    industries_hero_title: "Industries We Serve",
    industries_hero_sub: "Tailored analytics and automation solutions for high-impact sectors.",
    about_hero_title: "We Exist to Empower Smarter Decisions",
    about_hero_sub: "Nexora was founded on a simple belief: that data shouldn't just be for big tech giants. Every SME deserves access to the same efficiency and insight tools.",
    contact_hero_title: "Ready to Transform Your Business?",
    contact_hero_sub: "Fill out the form below or contact us directly via WhatsApp or email. Let's start your data journey.",
    footer_desc: "Empowering SMEs with data-driven decision making and automation that scales business growth."
  },
  es: {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_industries: "Industrias",
    nav_about: "Nosotros",
    nav_contact: "Contacto",
    nav_cta: "Consulta Gratuita",
    hero_badge: "Soluciones de Datos Inteligentes",
    hero_title: "Decisiones Sabias. Impacto Real.",
    hero_sub: "Ayudamos a las pymes y a los tomadores de decisiones a convertir los datos sin procesar en conocimientos procesables y flujos de trabajo automatizados.",
    hero_audit: "Obtenga su Auditoría",
    audit_title: "Auditoría de IA Instantánea",
    audit_placeholder: "ej. Somos una tienda minorista con 3 sucursales...",
    audit_btn: "Generar Auditoría",
    audit_analyzing: "Analizando...",
    services_title: "Soluciones a Medida para Pymes",
    services_sub: "Deja de adivinar. Comienza a saber. Nuestra experiencia principal está en la intersección de la ciencia de datos.",
    services_hero_title: "Nuestros Servicios están Diseñados para Transformar su Negocio",
    services_hero_sub: "Desde visualización de datos hasta automatización y analítica predictiva, ofrecemos soluciones modulares.",
    services_problem: "El Problema",
    services_solution: "La Solución",
    services_result: "El Resultado",
    industries_hero_title: "Industrias a las que Servimos",
    industries_hero_sub: "Soluciones de analítica y automatización personalizadas para sectores de alto impacto.",
    about_hero_title: "Existimos para Empoderar Decisiones Inteligentes",
    about_hero_sub: "Nexora se fundó con una creencia simple: los datos no deben ser solo para los gigantes tecnológicos.",
    contact_hero_title: "¿Listo para Transformar su Negocio?",
    contact_hero_sub: "Complete el formulario a continuación o contáctenos directamente por WhatsApp o correo electrónico.",
    footer_desc: "Empoderando a las pymes con toma de decisiones basada en datos y automatización."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_services: "الخدمات",
    nav_industries: "الصناعات",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    nav_cta: "احجز استشارة مجانية",
    hero_badge: "حلول بيانات ذكية",
    hero_title: "قرارات ذكية. تأثير حقيقي.",
    hero_sub: "نحن نساعد الشركات الصغيرة والمتوسطة وصناع القرار على تحويل البيانات الخام إلى رؤى قابلة للتنفيذ وسير عمل آلي يوفر الوقت ويزيد الإيرادات.",
    hero_audit: "احصل على تدقيق لعملك",
    audit_title: "تدقيق فوري للأعمال بالذكاء الاصطناعي",
    audit_placeholder: "مثال: نحن متجر تجزئة لدينا 3 فروع...",
    audit_btn: "إنشاء تدقيق خاص بي",
    audit_analyzing: "جاري التحليل...",
    services_title: "حلول مخصصة للشركات الصغيرة والمتوسطة الحديثة",
    services_sub: "توقف عن التخمين. ابدأ بالمعرفة. تكمن خبرتنا الأساسية في تقاطع علم البيانات والكفاءة التشغيلية.",
    services_hero_title: "خدماتنا مصممة لتحويل عملك",
    services_hero_sub: "من تصور البيانات إلى الأتمتة والتحليلات التنبؤية، نقدم حلولاً معيارية تحقق نتائج ملموسة.",
    services_problem: "المشكلة",
    services_solution: "الحل",
    services_result: "النتيجة",
    industries_hero_title: "الصناعات التي نخدمها",
    industries_hero_sub: "حلول تحليلية وأتمتة مخصصة للقطاعات عالية التأثير.",
    about_hero_title: "نحن هنا لتمكين القرارات الأكثر ذكاءً",
    about_hero_sub: "تأسست نيكسورا على إيمان بسيط: أن البيانات لا ينبغي أن تكون فقط لعمالقة التكنولوجيا. تستحق كل شركة صغيرة ومتوسطة الوصول إلى نفس أدوات الكفاءة والبصيرة.",
    contact_hero_title: "هل أنت مستعد لتحويل عملك؟",
    contact_hero_sub: "املأ النموذج أدناه أو اتصل بنا مباشرة عبر واتساب أو البريد الإلكتروني. لنبدأ رحلة البيانات الخاصة بك.",
    footer_desc: "تمكين الشركات الصغيرة والمتوسطة من خلال اتخاذ القرارات القائمة على البيانات والأتمتة التي توسع نمو الأعمال."
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light');
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('language') as Language) || 'en');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string) => translations[language][key] || key;

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, t }}>
      <div className={theme} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-gray-100">
          {children}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
