import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

const Services: React.FC = () => {
  const { t, language } = useApp();

  const serviceList = [
    {
      title: t('services_data_title'),
      problem: language === 'ar' ? "تعتمد معظم الشركات الصغيرة والمتوسطة على جداول البيانات البطيئة والمعرضة للخطأ." : "Most SMEs rely on spreadsheets that are slow, siloed, and error-prone.",
      solution: language === 'ar' ? "لوحات تحكم حية تصور مؤشرات الأداء الرئيسية والاتجاهات في الوقت الفعلي." : "Live dashboards visualize KPIs and trends in real-time by integrating directly with your data sources.",
      result: language === 'ar' ? "قرارات أسرع ومستنيرة تدفع النمو وتحدد الفرص الجديدة." : "Faster, informed decisions that drive growth and identify new opportunities before competitors.",
      icon: "📊"
    },
    {
      title: t('services_auto_title'),
      problem: language === 'ar' ? "تضيع المهام المتكررة اليدوية وقت الموظفين وتسبب أخطاء بشرية." : "Manual repetitive tasks waste valuable employee time and cause inevitable human errors.",
      solution: language === 'ar' ? "نقوم برسم خرائط لعملياتك وأتمتة المهام باستخدام تكاملات مخصصة." : "We map your processes and automate tasks using custom integrations and AI-driven workflows.",
      result: language === 'ar' ? "تخفيض كبير في التكاليف، وأخطاء تقترب من الصفر، وفريق أكثر إنتاجية." : "Significant cost reduction, near-zero errors, and a more engaged, productive team.",
      icon: "⚙️"
    },
    {
      title: t('services_pred_title'),
      problem: language === 'ar' ? "غالبًا ما تتفاعل الشركات مع تغيرات السوق بدلاً من التخطيط لها." : "Businesses often react to market changes instead of planning for them, leading to missed targets.",
      solution: language === 'ar' ? "استخدام نماذج التعلم الآلي للتنبؤ بالطلب واحتياجات المخزون." : "Use machine learning models to forecast demand, inventory needs, and market risks based on historical data.",
      result: language === 'ar' ? "تخطيط استراتيجي بثقة مطلقة، وتقليل المفاجآت، وتحسين تخصيص الموارد." : "Strategic planning with absolute confidence, reduced surprises, and optimized resource allocation.",
      icon: "🚀"
    }
  ];

  return (
    <div>
      <Section className="pt-32">
        <div className="max-w-3xl rtl:text-right">
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            {t('services_hero_title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">
            {t('services_hero_sub')}
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="space-y-24">
          {serviceList.map((service, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''} rtl:text-right`}>
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">{service.title}</h2>
                <div className="space-y-8">
                  <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-red-500/50 pl-6 rtl:pr-6">
                    <h4 className="text-red-500 font-bold text-sm uppercase mb-1 tracking-wider">{t('services_problem')}</h4>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{service.problem}</p>
                  </div>
                  <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-emerald-500/50 pl-6 rtl:pr-6">
                    <h4 className="text-emerald-500 font-bold text-sm uppercase mb-1 tracking-wider">{t('services_solution')}</h4>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed">{service.solution}</p>
                  </div>
                  <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-sky-500/50 pl-6 rtl:pr-6">
                    <h4 className="text-sky-500 font-bold text-sm uppercase mb-1 tracking-wider">{t('services_result')}</h4>
                    <p className="text-slate-900 dark:text-white font-semibold leading-relaxed">{service.result}</p>
                  </div>
                </div>
              </div>
              <div className={`glass-card p-4 rounded-3xl ${idx % 2 === 1 ? 'lg:order-1' : ''} shadow-lg shadow-slate-200/50 dark:shadow-none`}>
                <img 
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80&seed=${idx}`} 
                  alt={service.title}
                  className="rounded-2xl w-full h-auto opacity-95 dark:opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto glass-card p-12 rounded-3xl border-emerald-500/20 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            {t('services_cta_title')}
          </h2>
          <p className="text-slate-600 dark:text-gray-400 mb-8">
            {t('services_cta_desc')}
          </p>
          <Link to="/contact">
            <Button size="lg">{t('nav_cta')}</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Services;
