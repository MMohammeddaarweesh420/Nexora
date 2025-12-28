import React from 'react';

// Fixed: Added React import to ensure React.ReactNode namespace is available
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  problem?: string;
  solution?: string;
  result?: string;
}

export interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  useCases: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}