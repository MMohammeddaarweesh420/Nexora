
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { getBusinessAudit } from '../services/gemini';
import { useApp } from '../contexts/AppContext';

const Home: React.FC = () => {
  const { t, language } = useApp();
  const [auditQuery, setAuditQuery] = useState('');
  const [auditResult, setAuditResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAudit = async () => {
    if (!auditQuery.trim()) return;
    setIsLoading(true);
    try {
      const result = await getBusinessAudit(auditQuery);
      setAuditResult(result);
    } catch (e) {
      alert("Failed to generate audit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-emerald-500/10 dark:bg-emerald-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] bg-sky-500/10 dark:bg-sky-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left rtl:lg:text-right">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-widest uppercase">
              <span>{t('hero_badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              {t('hero_title')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero_sub')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start rtl:lg:justify-start gap-4">
              <Link to="/contact"><Button size="lg">{t('nav_cta')}</Button></Link>
              <a href="#audit"><Button size="lg" variant="outline">{t('hero_audit')}</Button></a>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card rounded-2xl p-4 shadow-xl dark:shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
               <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&w=800&q=80" 
                alt="Business Analytics Dashboard" 
                className="rounded-xl w-full h-auto opacity-95 dark:opacity-90 border border-slate-200 dark:border-white/10 shadow-sm"
              />
              <div className={`absolute -bottom-6 ${language === 'ar' ? '-right-6' : '-left-6'} glass-card p-4 rounded-xl hidden md:block shadow-lg`}>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <div className="text-slate-900 dark:text-white font-bold text-xl">+127%</div>
                    <div className="text-slate-500 dark:text-gray-400 text-xs">Efficiency Boost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">{t('services_title')}</h2>
          <p className="text-slate-600 dark:text-gray-400">{t('services_sub')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: language === 'ar' ? "تحليلات البيانات ولوحات التحكم" : "Data Analytics & Dashboards",
              desc: language === 'ar' ? "حول بياناتك إلى رؤى بصرية لاتخاذ قرارات أفضل." : "Turn your data into visual insights for better decisions. Stop wrestling with messy spreadsheets.",
              icon: "📊"
            },
            {
              title: language === 'ar' ? "الأتمتة وسير العمل" : "Automation & Workflows",
              desc: language === 'ar' ? "قلل العمل اليدوي من خلال عمليات مؤتمتة ذكية." : "Reduce manual work with smart automated processes. Integrate your tools and let them talk to each other.",
              icon: "⚙️"
            },
            {
              title: language === 'ar' ? "التنبؤ التحليلي" : "Predictive Forecasting",
              desc: language === 'ar' ? "توقع الاتجاهات وخطط للمستقبل بثقة تامة." : "Anticipate trends and plan ahead with confidence using machine learning and historical analysis.",
              icon: "🚀"
            }
          ].map((service, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl hover:border-emerald-500/30 transition-all group shadow-sm hover:shadow-md">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{service.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 mb-6">{service.desc}</p>
              <Link to="/services" className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                {language === 'ar' ? 'تعرف على المزيد' : 'Learn more'} 
                <svg className={`w-4 h-4 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section id="audit">
        <div className="glass-card rounded-3xl p-8 md:p-12 border-emerald-500/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">{t('audit_title')}</h2>
              <p className="text-slate-600 dark:text-gray-400 mb-8 leading-relaxed">
                {language === 'ar' ? 'هل تتساءل أين يمكنك التحسين؟ صف عمليات عملك الحالية أو تحديات البيانات الخاصة بك، وسيقوم الذكاء الاصطناعي لدينا بتقديم تدقيق فوري عالي المستوى.' : 'Wondering where you could improve? Describe your current business operations or data challenges, and our AI will provide an immediate high-level audit.'}
              </p>
              <div className="space-y-4">
                <textarea 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500/50 min-h-[120px]"
                  placeholder={t('audit_placeholder')}
                  value={auditQuery}
                  onChange={(e) => setAuditQuery(e.target.value)}
                />
                <Button 
                  className="w-full" 
                  onClick={handleAudit} 
                  disabled={isLoading || !auditQuery.trim()}
                >
                  {isLoading ? t('audit_analyzing') : t('audit_btn')}
                </Button>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-[#0B0F19] rounded-2xl p-6 min-h-[300px] border border-slate-200 dark:border-white/5 flex flex-col items-center justify-center text-center">
              {auditResult ? (
                <div className="w-full text-left rtl:text-right animate-in fade-in duration-500">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-slate-500 dark:text-gray-500 uppercase font-bold tracking-widest">{language === 'ar' ? 'درجة الكفاءة' : 'Efficiency Score'}</span>
                    <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{auditResult.score}/100</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-2">{language === 'ar' ? 'نقاط الألم' : 'Pain Points'}</h4>
                      <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 text-sm space-y-1">
                        {auditResult.painPoints.map((p: string, i: number) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sky-600 dark:text-sky-400 font-semibold text-sm mb-2">{language === 'ar' ? 'التوصيات' : 'Recommendations'}</h4>
                      <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 text-sm space-y-1">
                        {auditResult.recommendations.map((r: string, i: number) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-slate-400 dark:text-gray-500 italic">
                  {isLoading ? (
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                      <p>{language === 'ar' ? 'جاري المسح بحثاً عن عدم الكفاءة...' : 'Scanning for inefficiencies...'}</p>
                    </div>
                  ) : (language === 'ar' ? 'ستظهر نتائج التدقيق هنا.' : 'Audit results will appear here.')}
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
