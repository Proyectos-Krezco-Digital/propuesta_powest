import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  background?: 'primary' | 'secondary' | 'accent';
}

export const Section = ({ 
  children, 
  className, 
  id,
  padding = 'lg',
  background = 'primary' 
}: SectionProps) => {
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
  };

  const bgClasses = {
    primary: 'bg-[var(--bg-primary)]',
    secondary: 'bg-[var(--bg-secondary)]',
    accent: 'bg-[var(--bg-accent)]',
  };

  return (
    <section 
      id={id} 
      className={cn(
        'w-full relative overflow-hidden',
        paddingClasses[padding],
        bgClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
};