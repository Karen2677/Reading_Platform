import React from 'react';
import { Link } from 'react-router-dom';
import { Building, BookOpen } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface OrganizationCardProps {
  id: number;
  name: string;
  logo: string;
  description: string;
  courseCount: number;
  className?: string;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  id,
  name,
  logo,
  description,
  courseCount,
  className,
}) => {
  return (
    <div className={cn('card group h-full flex flex-col', className)}>
      <div className="p-5 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-100">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 text-center mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 text-center">{description}</p>
        <div className="mt-auto flex items-center text-sm text-gray-500 mb-3">
          <BookOpen className="h-4 w-4 mr-1" />
          <span>{courseCount} 个相关课程</span>
        </div>
        <Link
          to={`/organizations/${id}`}
          className="btn btn-outline w-full"
        >
          查看机构
        </Link>
      </div>
    </div>
  );
};

export default OrganizationCard;