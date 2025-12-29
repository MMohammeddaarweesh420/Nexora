import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';
export type Language = 'en' | 'ar';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  cycleLanguage: () => void;
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
    hero_efficiency_boost: "Efficiency Boost",
    audit_title: "Instant AI Business Audit",
    audit_placeholder: "e.g., We are a retail shop with 3 branches...",
    audit_btn: "Generate My Audit",
    audit_analyzing: "Analyzing...",
    audit_score: "Efficiency Score",
    audit_pain: "Pain Points",
    audit_rec: "Recommendations",
    audit_scanning: "Scanning for inefficiencies...",
    audit_placeholder_result: "Audit results will appear here.",
    services_title: "Tailored Solutions for Modern SMEs",
    services_sub: "Stop guessing. Start knowing. Our core expertise lies at the intersection of data science and operational efficiency.",
    services_hero_title: "Our Services are Designed to Transform Your Business",
    services_hero_sub: "From data visualization to automation and predictive analytics, we provide modular solutions that deliver measurable results.",
    services_problem: "The Problem",
    services_solution: "The Solution",
    services_result: "The Result",
    services_data_title: "Data Analytics & Dashboards",
    services_data_desc: "Turn your data into visual insights for better decisions. Stop wrestling with messy spreadsheets.",
    services_auto_title: "Automation & Workflows",
    services_auto_desc: "Reduce manual work with smart automated processes. Integrate your tools and let them talk to each other.",
    services_pred_title: "Predictive Forecasting",
    services_pred_desc: "Anticipate trends and plan ahead with confidence using machine learning and historical analysis.",
    services_cta_title: "Start Improving Your Business Today",
    services_cta_desc: "Not sure which service fits your current stage? We offer a free 30-minute consultation to help you prioritize.",
    learn_more: "Learn more",
    industries_hero_title: "Industries We Serve",
    industries_hero_sub: "Tailored analytics and automation solutions for high-impact sectors.",
    industries_key_use_cases: "Key Use Cases",
    industries_cta_title: "See How We Can Help Your Industry",
    ind_hc_title: "Healthcare",
    ind_hc_desc: "Predict patient needs, optimize staff allocation, and manage resources efficiently through intelligent capacity planning.",
    ind_hc_uc1: "Staff Scheduling Optimization",
    ind_hc_uc2: "Patient Wait Time Analysis",
    ind_hc_uc3: "Resource Inventory Prediction",
    ind_rt_title: "Retail & SMEs",
    ind_rt_desc: "Optimize inventory, forecast seasonal sales, and improve customer insights to drive lifetime value.",
    ind_rt_uc1: "Smart Inventory Management",
    ind_rt_uc2: "Sales Trend Forecasting",
    ind_rt_uc3: "Customer Churn Analysis",
    ind_fn_title: "Operations & Finance",
    ind_fn_desc: "Reduce reporting time, detect anomalies, and make faster decisions with integrated financial dashboards.",
    ind_fn_uc1: "Automated Financial Reporting",
    ind_fn_uc2: "Anomaly & Fraud Detection",
    ind_fn_uc3: "Budget Allocation Modeling",
    about_hero_title: "We Exist to Empower Smarter Decisions",
    about_hero_sub: "Nexora was founded on a simple belief: that data shouldn't just be for big tech giants. Every SME deserves access to the same efficiency and insight tools.",
    about_mission: "Our Mission",
    about_mission_text: "\"To help SMEs make confident, data-backed decisions using tailored automation that scales alongside their ambitions.\"",
    about_vision: "Our Vision",
    about_vision_text: "\"A world where businesses of all sizes operate with absolute efficiency and strategic clarity.\"",
    about_trust_title: "Why Decision-Makers Trust Us",
    about_trust_1_title: "Deep Expertise",
    about_trust_1_desc: "Our team has decades of combined experience in data science and lean operations.",
    about_trust_2_title: "Hands-on Partnering",
    about_trust_2_desc: "We don't just consult; we build. We are your fractional data & automation team.",
    about_trust_3_title: "ROI First",
    about_trust_3_desc: "We prioritize projects that show immediate impact on your bottom line.",
    about_cta_work: "Work with Us",
    contact_hero_title: "Ready to Transform Your Business?",
    contact_hero_sub: "Fill out the form below or contact us directly via WhatsApp or email. Let's start your data journey.",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_company: "Company",
    contact_form_message: "Message",
    contact_form_submit: "Send Inquiry",
    contact_form_success: "Inquiry Sent!",
    contact_form_success_sub: "We'll get back to you within 24 business hours.",
    contact_form_another: "Send another message",
    contact_direct_title: "Direct Contact",
    contact_immediate_title: "Need an immediate reply?",
    contact_immediate_sub: "Chat with our consultants right now on WhatsApp for a quick response.",
    contact_chat_now: "Chat Now",
    footer_desc: "Empowering SMEs with data-driven decision making and automation that scales business growth.",
    footer_services: "Services",
    footer_company: "Company",
    footer_contact_info: "Contact",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service"
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
    hero_efficiency_boost: "زيادة الكفاءة",
    audit_title: "تدقيق فوري للأعمال بالذكاء الاصطناعي",
    audit_placeholder: "مثال: نحن متجر تجزئة لدينا 3 فروع...",
    audit_btn: "إنشاء تدقيق خاص بي",
    audit_analyzing: "جاري التحليل...",
    audit_score: "درجة الكفاءة",
    audit_pain: "نقاط الألم",
    audit_rec: "التوصيات",
    audit_scanning: "جاري المسح بحثاً عن عدم الكفاءة...",
    audit_placeholder_result: "ستظهر نتائج التدقيق هنا.",
    services_title: "حلول مخصصة للشركات الصغيرة والمتوسطة الحديثة",
    services_sub: "توقف عن التخمين. ابدأ بالمعرفة. تكمن خبرتنا الأساسية في تقاطع علم البيانات والكفاءة التشغيلية.",
    services_hero_title: "خدماتنا مصممة لتحويل عملك",
    services_hero_sub: "من تصور البيانات إلى الأتمتة والتحليلات التنبؤية، نقدم حلولاً معيارية تحقق نتائج ملموسة.",
    services_problem: "المشكلة",
    services_solution: "الحل",
    services_result: "النتيجة",
    services_data_title: "تحليلات البيانات ولوحات التحكم",
    services_data_desc: "حول بياناتك إلى رؤى بصرية لاتخاذ قرارات أفضل. توقف عن المصارعة مع جداول البيانات الفوضوية.",
    services_auto_title: "الأتمتة وسير العمل",
    services_auto_desc: "قلل العمل اليدوي من خلال عمليات مؤتمتة ذكية. ادمج أدواتك واجعلها تتواصل مع بعضها البعض.",
    services_pred_title: "التنبؤ التحليلي",
    services_pred_desc: "توقع الاتجاهات وخطط للمستقبل بثقة تامة باستخدام التعلم الآلي والتحليل التاريخي.",
    services_cta_title: "ابدأ في تحسين عملك اليوم",
    services_cta_desc: "لست متأكداً من الخدمة التي تناسب مرحلتك الحالية؟ نقدم استشارة مجانية لمساعدتك في تحديد الأولويات.",
    learn_more: "تعرف على المزيد",
    industries_hero_title: "الصناعات التي نخدمها",
    industries_hero_sub: "حلول تحليلية وأتمتة مخصصة للقطاعات عالية التأثير.",
    industries_key_use_cases: "حالات الاستخدام الرئيسية",
    industries_cta_title: "تعرف على كيف يمكننا مساعدة قطاعك",
    ind_hc_title: "الرعاية الصحية",
    ind_hc_desc: "توقع احتياجات المرضى وتحسين تخصيص الموظفين وإدارة الموارد بكفاءة.",
    ind_hc_uc1: "تحسين جدولة الموظفين",
    ind_hc_uc2: "تحليل وقت انتظار المرضى",
    ind_hc_uc3: "توقع مخزون الموارد",
    ind_rt_title: "التجزئة والشركات الصغيرة",
    ind_rt_desc: "تحسين المخزون، وتوقع المبيعات الموسمية، وتحسين رؤى العملاء لزيادة القيمة.",
    ind_rt_uc1: "إدارة المخزون الذكية",
    ind_rt_uc2: "التنبؤ باتجاهات المبيعات",
    ind_rt_uc3: "تحليل معدل فقدان العملاء",
    ind_fn_title: "العمليات والمالية",
    ind_fn_desc: "تقليل وقت إعداد التقارير، واكتشاف الحالات الشاذة، واتخاذ قرارات أسرع.",
    ind_fn_uc1: "تقارير مالية مؤتمتة",
    ind_fn_uc2: "اكتشاف الحالات الشاذة والاحتيال",
    ind_fn_uc3: "نمذجة تخصيص الميزانية",
    about_hero_title: "نحن هنا لتمكين القرارات الأكثر ذكاءً",
    about_hero_sub: "تأسست نيكسورا على إيمان بسيط: أن البيانات لا ينبغي أن تكون فقط لعمالقة التكنولوجيا. تستحق كل شركة صغيرة ومتوسطة الوصول إلى نفس أدوات الكفاءة والبصيرة.",
    about_mission: "مهمتنا",
    about_mission_text: "\"مساعدة الشركات الصغيرة والمتوسطة على اتخاذ قرارات واثقة قائمة على البيانات باستخدام أتمتة مخصصة تتوسع جنباً إلى جنب مع طموحاتهم.\"",
    about_vision: "رؤيتنا",
    about_vision_text: "\"عالم تعمل فيه الشركات من جميع الأحجام بكفاءة مطلقة ووضوح استراتيجي.\"",
    about_trust_title: "لماذا يثق بنا صناع القرار",
    about_trust_1_title: "خبرة عميقة",
    about_trust_1_desc: "يمتلك فريقنا عقوداً من الخبرة المشتركة في علم البيانات والعمليات اللينة.",
    about_trust_2_title: "شراكة عملية",
    about_trust_2_desc: "نحن لا نقدم الاستشارات فحسب؛ بل نبني. نحن فريقك الخارجي للبيانات والأتمتة.",
    about_trust_3_title: "العائد أولاً",
    about_trust_3_desc: "نحن نعطي الأورويه للمشاريع التي تظهر تأثيراً فورياً على أرباحك النهائية.",
    about_cta_work: "اعمل معنا",
    contact_hero_title: "هل أنت مستعد لتحويل عملك؟",
    contact_hero_sub: "املأ النموذج أدناه أو اتصل بنا مباشرة عبر واتساب أو البريد الإلكتروني. لنبدأ رحلة البيانات الخاصة بك.",
    contact_form_name: "الاسم",
    contact_form_email: "البريد الإلكتروني",
    contact_form_company: "الشركة",
    contact_form_message: "الرسالة",
    contact_form_submit: "إرسال الطلب",
    contact_form_success: "تم إرسال الطلب!",
    contact_form_success_sub: "سنرد عليك في غضون 24 ساعة عمل.",
    contact_form_another: "إرسال رسالة أخرى",
    contact_direct_title: "اتصال مباشر",
    contact_immediate_title: "هل تحتاج إلى رد فوري؟",
    contact_immediate_sub: "تحدث مع مستشارينا الآن عبر واتساب للحصول على استجابة سريعة.",
    contact_chat_now: "دردش الآن",
    footer_desc: "تمكين الشركات الصغيرة والمتوسطة من خلال اتخاذ القرارات القائمة على البيانات والأتمتة التي توسع نمو الأعمال.",
    footer_services: "الخدمات",
    footer_company: "الشركة",
    footer_contact_info: "اتصل بنا",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الخدمة"
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

  const cycleLanguage = () => {
    const langs: Language[] = ['en', 'ar'];
    const currentIdx = langs.indexOf(language);
    const nextIdx = (currentIdx + 1) % langs.length;
    setLanguage(langs[nextIdx]);
  };

  const t = (key: string) => translations[language][key] || key;

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, cycleLanguage, t }}>
      <div className={theme}>
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
