
import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { useApp } from '../contexts/AppContext';

const Contact: React.FC = () => {
  const { t, language } = useApp();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <Section className="pt-32">
        <div className="max-w-3xl rtl:text-right">
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            {t('contact_hero_title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">
            {t('contact_hero_sub')}
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="glass-card p-8 md:p-12 rounded-3xl border-slate-200 dark:border-emerald-500/10 shadow-xl rtl:text-right">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0B0F19]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  {t('contact_form_success')}
                </h3>
                <p className="text-slate-600 dark:text-gray-400">
                  {t('contact_form_success_sub')}
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-emerald-500 hover:underline">
                  {t('contact_form_another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-500 dark:text-gray-400 mb-2">
                      {t('contact_form_name')}
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500/50" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-500 dark:text-gray-400 mb-2">
                      {t('contact_form_email')}
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500/50" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-gray-400 mb-2">
                    {t('contact_form_company')}
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500/50" 
                    value={formState.company}
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-gray-400 mb-2">
                    {t('contact_form_message')}
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500/50" 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  {t('contact_form_submit')}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-12 rtl:text-right">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                {t('contact_direct_title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-slate-700 dark:text-gray-300">mohammeddarweesh420@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-slate-700 dark:text-gray-300">+201018573933</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 border border-slate-200 dark:border-white/10 rounded-3xl">
              <h4 className="font-bold mb-4 text-slate-900 dark:text-white">
                {t('contact_immediate_title')}
              </h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm mb-6">
                {t('contact_immediate_sub')}
              </p>
              <Button variant="outline" className="w-full bg-white dark:bg-transparent">
                <svg className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t('contact_chat_now')}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
