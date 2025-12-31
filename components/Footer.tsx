
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
            <p className="text-gray-400 text-sm leading-relaxed rtl:text-right mb-6">
              {t('footer_desc')}
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-[#0B0F19] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-[#0B0F19] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
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
