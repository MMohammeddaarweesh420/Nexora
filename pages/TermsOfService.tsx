
import React from 'react';
import Section from '../components/Section';
import { useApp } from '../contexts/AppContext';

const TermsOfService: React.FC = () => {
  const { language } = useApp();

  return (
    <Section className="pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl rtl:text-right">
          <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
          </h1>
          <div className="space-y-8 text-slate-600 dark:text-gray-400 leading-relaxed">
            <p>
              {language === 'ar' 
                ? 'باستخدامك لموقع نيكسورا وخدماتها، فإنك توافق على الالتزام بالشروط والأحكام التالية.' 
                : 'By using the Nexora website and services, you agree to be bound by the following terms and conditions.'}
            </p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '1. قبول الشروط' : '1. Acceptance of Terms'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'من خلال الوصول إلى هذا الموقع، فإنك تقر بأنك قد قرأت وفهمت وتوافق على الالتزام بهذه الشروط.'
                  : 'By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these terms.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '2. تراخيص الخدمة' : '2. Service Licensing'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'يتم تقديم خدماتنا "كما هي". نحن نمنحك ترخيصًا محدودًا وغير حصري لاستخدام أدواتنا وموقعنا للأغراض التجارية المشروعة فقط.'
                  : 'Our services are provided "as is." We grant you a limited, non-exclusive license to use our tools and website for legitimate business purposes only.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '3. حدود المسؤولية' : '3. Limitation of Liability'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'لن تكون نيكسورا مسؤولة عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام الخدمات، بما في ذلك فقدان البيانات أو الأرباح.'
                  : 'Nexora shall not be liable for any damages arising out of the use or inability to use the services, including loss of data or profits.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '4. الملكية الفكرية' : '4. Intellectual Property'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'جميع المحتويات والرموز والشعارات الموجودة على هذا الموقع هي ملك لنيكسورا ومحمية بموجب قوانين الملكية الفكرية.'
                  : 'All content, code, and logos found on this website are the property of Nexora and are protected by intellectual property laws.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '5. التعديلات' : '5. Modifications'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات فورًا على هذه الصفحة.'
                  : 'We reserve the right to modify these terms at any time. Changes will be posted immediately on this page.'}
              </p>
            </section>

            <div className="pt-8 border-t border-slate-200 dark:border-white/10 text-sm italic">
              {language === 'ar' ? 'آخر تحديث: فبراير 2025' : 'Last updated: February 2025'}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TermsOfService;
