import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

const Industries: React.FC = () => {
  const { t, language } = useApp();

  const industries = [
    {
      title: t('ind_hc_title'),
      desc: t('ind_hc_desc'),
      icon: "🏥",
      useCases: [t('ind_hc_uc1'), t('ind_hc_uc2'), t('ind_hc_uc3')]
    },
    {
      title: t('ind_rt_title'),
      desc: t('ind_rt_desc'),
      icon: "🛒",
      useCases: [t('ind_rt_uc1'), t('ind_rt_uc2'), t('ind_rt_uc3')]
    },
    {
      title: t('ind_fn_title'),
      desc: t('ind_fn_desc'),
      icon: "📈",
      useCases: [t('ind_fn_uc1'), t('ind_fn_uc2'), t('ind_fn_uc3')]
    }
  ];

  return (
    <div>
      <Section className="pt-32">
        <div className="max-w-3xl rtl:text-right">
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            {t('industries_hero_title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">
            {t('industries_hero_sub')}
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl hover:border-sky-500/30 transition-all flex flex-col h-full shadow-lg dark:shadow-none rtl:text-right">
              <div className="text-5xl mb-6">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{industry.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">{industry.desc}</p>
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-sky-500">
                  {t('industries_key_use_cases')}
                </h4>
                <ul className="space-y-2">
                  {industry.useCases.map((useCase, i) => (
                    <li key={i} className="text-sm text-slate-700 dark:text-gray-300 flex items-center rtl:flex-row-reverse rtl:justify-end">
                      <svg className={`w-3 h-3 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-emerald-500 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4.242 4.243L7.293 10.707a1 1 0 011.414-1.414l1.535 1.536 2.828-2.829a1 1 0 111.414 1.414z" />
                      </svg>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            {t('industries_cta_title')}
          </h2>
          <Link to="/contact">
            <Button size="lg" variant="secondary">{t('nav_cta')}</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Industries;
