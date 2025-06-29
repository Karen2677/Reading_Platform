import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface CourseCardProps {
  id: number;
  title: string;
  organization: string;
  organizationId: number;
  ageGroup: string;
  coverImage: string;
  description: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  organization,
  organizationId,
  ageGroup,
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
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs">
          {ageGroup}
        </div>
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="mt-auto flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <Link 
              to={`/organizations/${organizationId}`} 
              className="hover:text-blue-600 transition-colors"
            >
              {organization}
            </Link>
          </div>
        </div>
        <Link
          to={`/courses/${id}`}
          className="btn btn-primary w-full"
        >
          查看详情
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;