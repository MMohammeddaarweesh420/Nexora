import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useApp } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { t } = useApp();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/nexora-solutions',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/nexora.solutions',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/nexora_sol',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/nexora.solutions',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#080B14] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <Logo size={36} className="group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-xl font-bold tracking-tighter text-white uppercase">NEXORA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed rtl:text-right mb-8">
              {t('footer_desc')}
            </p>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-[#0B0F19] hover:border-emerald-500 hover:scale-110 transition-all duration-300"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
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
                <span className="break-all">mohammeddarweesh420@gmail.com</span>
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