
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useApp } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="bg-[#080B14] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <Logo size={36} className="group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-xl font-bold tracking-tighter text-white">NEXORA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed rtl:text-right">
              {t('footer_desc')}
            </p>
          </div>
          
          <div className="rtl:text-right">
            <h4 className="text-white font-semibold mb-6">{t('footer_services')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Workflow Automation</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Predictive Forecasting</Link></li>
            </ul>
          </div>

          <div className="rtl:text-right">
            <h4 className="text-white font-semibold mb-6">{t('footer_company')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">{t('nav_about')}</Link></li>
              <li><Link to="/industries" className="hover:text-emerald-400 transition-colors">{t('nav_industries')}</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">{t('nav_contact')}</Link></li>
            </ul>
          </div>

          <div className="rtl:text-right">
            <h4 className="text-white font-semibold mb-6">{t('footer_contact_info')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-2 rtl:space-x-reverse rtl:justify-start">
                <span>mohammeddarweesh420@gmail.com</span>
              </li>
              <li>+201018573933</li>
              <li>Giza, EG</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Nexora Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">{t('footer_privacy')}</Link>
            <Link to="/terms" className="hover:text-emerald-400 transition-colors">{t('footer_terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
