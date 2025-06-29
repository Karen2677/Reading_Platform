import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-8',
        centered && 'text-center',
        className
      )}
    >
      <h2 className={cn(
        "section-title",
        className?.includes('text-white') ? 'text-white' : 'text-forest-900'
      )}>{title}</h2>
      {subtitle && <p className={cn(
        "section-subtitle",
        className?.includes('text-white') ? 'text-cream-200' : 'text-forest-600'
      )}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;