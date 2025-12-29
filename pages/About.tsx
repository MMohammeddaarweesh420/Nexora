import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

const About: React.FC = () => {
  const { t } = useApp();

  return (
    <div>
      <Section className="pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rtl:text-right">
            <h1 className="text-5xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
              {t('about_hero_title')}
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 leading-relaxed">
              {t('about_hero_sub')}
            </p>
          </div>
          <div className="glass-card p-4 rounded-3xl transform -rotate-2 rtl:rotate-2 shadow-xl">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Our Team Workspace" className="rounded-2xl opacity-95 dark:opacity-90" />
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-10 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent dark:from-emerald-500/5 dark:to-transparent rtl:text-right">
            <h3 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">{t('about_mission')}</h3>
            <p className="text-slate-700 dark:text-gray-300 text-lg leading-relaxed italic">
              {t('about_mission_text')}
            </p>
          </div>
          <div className="glass-card p-10 rounded-3xl bg-gradient-to-br from-sky-500/10 to-transparent dark:from-sky-500/5 dark:to-transparent rtl:text-right">
            <h3 className="text-2xl font-bold mb-4 text-sky-600 dark:text-sky-400">{t('about_vision')}</h3>
            <p className="text-slate-700 dark:text-gray-300 text-lg leading-relaxed italic">
              {t('about_vision_text')}
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t('about_trust_title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: t('about_trust_1_title'), 
              desc: t('about_trust_1_desc') 
            },
            { 
              title: t('about_trust_2_title'), 
              desc: t('about_trust_2_desc') 
            },
            { 
              title: t('about_trust_3_title'), 
              desc: t('about_trust_3_desc') 
            }
          ].map((why, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4.242 4.243L7.293 10.707a1 1 0 011.414-1.414l1.535 1.536 2.828-2.829a1 1 0 111.414 1.414z" clipRule="evenodd" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{why.title}</h4>
              <p className="text-slate-600 dark:text-gray-400">{why.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark className="text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
          {t('about_cta_work')}
        </h2>
        <Link to="/contact">
          <Button size="lg">{t('nav_cta')}</Button>
        </Link>
      </Section>
    </div>
  );
};

export default About;
