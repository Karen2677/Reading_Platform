import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ExpertCardProps {
  id: number;
  name: string;
  title: string;
  avatar: string;
  description: string;
  courseCount: number;
  className?: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
  id,
  name,
  title,
  avatar,
  description,
  courseCount,
  className,
}) => {
  return (
    <div className={cn('card group h-full flex flex-col', className)}>
      <div className="relative overflow-hidden">
        <img
          src={avatar}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-blue-600 text-sm mb-3">{title}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="mt-auto flex items-center text-sm text-gray-500 mb-3">
          <GraduationCap className="h-4 w-4 mr-1" />
          <span>{courseCount} 个相关课程</span>
        </div>
        <Link
          to={`/experts/${id}`}
          className="btn btn-primary w-full"
        >
          了解专家
        </Link>
      </div>
    </div>
  );
};

export default ExpertCard;