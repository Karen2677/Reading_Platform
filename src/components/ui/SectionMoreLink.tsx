import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SectionMoreLinkProps {
  to: string;
  text?: string;
  className?: string;
}

const SectionMoreLink: React.FC<SectionMoreLinkProps> = ({
  to,
  text = '查看更多',
  className,
}) => {
  return (
    <div className={cn('flex justify-center my-8', className)}>
      <Link
        to={to}
        className="group flex items-center text-blue-600 hover:text-blue-700 transition-colors"
      >
        <span className="font-medium">{text}</span>
        <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default SectionMoreLink;