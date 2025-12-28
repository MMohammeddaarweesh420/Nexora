
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', containerClassName = '', id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 overflow-hidden transition-colors duration-300 ${dark ? 'bg-slate-50 dark:bg-[#080B14]' : 'bg-white dark:bg-[#0B0F19]'} ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
