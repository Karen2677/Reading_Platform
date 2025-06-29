import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SupportCardProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  coverImage: string;
  description: string;
  className?: string;
}

const SupportCard: React.FC<SupportCardProps> = ({
  id,
  title,
  icon,
  coverImage,
  description,
  className,
}) => {
  return (
    <div className={cn('card group h-full flex flex-col', className)}>
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-center mb-3">
          <span className="p-2 bg-blue-100 rounded-full text-blue-600 mr-3">
            {icon}
          </span>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="mt-auto">
          <Link
            to={`/resources/${id}`}
            className="btn btn-primary w-full"
          >
            获取支持
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;