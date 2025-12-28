
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Logo from './Logo';
import { useApp, Language } from '../contexts/AppContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, language, setLanguage, t } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_services'), path: '/services' },
    { name: t('nav_industries'), path: '/industries' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  const cycleLanguage = () => {
    const langs: Language[] = ['en', 'es', 'ar'];
    const currentIdx = langs.indexOf(language);
    const nextIdx = (currentIdx + 1) % langs.length;
    setLanguage(langs[nextIdx]);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <Logo className="transition-transform duration-500 group-hover:scale-110" size={48} />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">NEXORA</span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-emerald-500 uppercase -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Smart Solution Agency</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex space-x-5 rtl:space-x-reverse">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-500 ${location.pathname === item.path ? 'text-emerald-500' : 'text-slate-600 dark:text-gray-300'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3 rtl:space-x-reverse border-l rtl:border-l-0 rtl:border-r border-slate-200 dark:border-white/10 pl-6 rtl:pl-0 rtl:pr-6">
              {/* Language Toggle */}
              <button 
                onClick={cycleLanguage}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-xs font-bold transition-colors w-10"
                title="Switch Language"
              >
                {language.toUpperCase()}
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                title="Toggle Theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                ) : (
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                )}
              </button>

              <Link to="/contact">
                <Button size="sm">{t('nav_cta')}</Button>
              </Link>
            </div>
          </div>

          <button 
            className="md:hidden p-2 text-slate-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-white/10 p-4 flex flex-col space-y-4 shadow-xl">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">{item.name}</Link>
          ))}
          <div className="flex justify-between items-center py-2 border-t border-slate-100 dark:border-white/10">
            <button onClick={cycleLanguage} className="font-bold">{language.toUpperCase()}</button>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full">{t('nav_cta')}</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
