
import React from 'react';
import Section from '../components/Section';
import { useApp } from '../contexts/AppContext';

const PrivacyPolicy: React.FC = () => {
  const { language } = useApp();

  return (
    <Section className="pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl rtl:text-right">
          <h1 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
          <div className="space-y-8 text-slate-600 dark:text-gray-400 leading-relaxed">
            <p>
              {language === 'ar' 
                ? 'في نيكسورا، نلتزم بحماية خصوصيتك ومعلوماتك الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية بياناتك عند التعامل مع خدماتنا.' 
                : 'At Nexora, we are committed to protecting your privacy and personal information. This policy outlines how we collect, use, and protect your data when you engage with our services.'}
            </p>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '1. المعلومات التي نجمعها' : '1. Information We Collect'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'نقوم بجمع المعلومات التي تقدمها لنا مباشرة، مثل اسمك وبريدك الإلكتروني ومعلومات الشركة عند طلب استشارة أو استخدام أداة التدقيق الخاصة بنا.'
                  : 'We collect information you provide directly to us, such as your name, email address, and company information when you request a consultation or use our audit tool.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '2. كيف نستخدم معلوماتك' : '2. How We Use Your Information'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'نستخدم هذه المعلومات لتقديم خدماتنا، وتحسين تجربة المستخدم، والتواصل معك بشأن التحديثات، وتخصيص حلولنا لتناسب احتياجات عملك.'
                  : 'We use this information to provide our services, improve user experience, communicate with you about updates, and tailor our solutions to fit your business needs.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '3. أمن البيانات' : '3. Data Security'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'نحن نطبق إجراءات أمنية صارمة لحماية بياناتك من الوصول غير المصرح به أو الكشف عنها. ومع ذلك، لا توجد وسيلة نقل عبر الإنترنت آمنة تمامًا بنسبة 100٪.'
                  : 'We implement rigorous security measures to protect your data from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '4. مشاركة المعلومات' : '4. Information Sharing'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'لا نبيع معلوماتك الشخصية لأطراف ثالثة. قد نشارك البيانات فقط مع مقدمي الخدمات الموثوق بهم الذين يساعدوننا في تشغيل أعمالنا.'
                  : 'We do not sell your personal information to third parties. We may share data only with trusted service providers who assist us in operating our business.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'ar' ? '5. حقوقك' : '5. Your Rights'}
              </h2>
              <p>
                {language === 'ar'
                  ? 'لديك الحق في طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. يرجى الاتصال بنا على mohammeddarweesh420@gmail.com لممارسة هذه الحقوق.'
                  : 'You have the right to request access to, correction of, or deletion of your personal data. Please contact us at mohammeddarweesh420@gmail.com to exercise these rights.'}
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

export default PrivacyPolicy;
