import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ResourceCardProps {
  id: number;
  title: string;
  type: 'document' | 'video' | 'image' | 'audio';
  coverImage: string;
  description: string;
  downloadCount?: number;
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  title,
  type,
  coverImage,
  description,
  downloadCount = 0,
  className,
}) => {
  const typeIcons = {
    document: <FileText className="h-4 w-4 mr-1" />,
    video: <FileText className="h-4 w-4 mr-1" />,
    image: <FileText className="h-4 w-4 mr-1" />,
    audio: <FileText className="h-4 w-4 mr-1" />,
  };

  const typeLabels = {
    document: '文档资料',
    video: '视频资源',
    image: '图片素材',
    audio: '音频资源',
  };

  return (
    <div className={cn('card group h-full flex flex-col', className)}>
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs flex items-center">
          {typeIcons[type]}
          {typeLabels[type]}
        </div>
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="mt-auto flex items-center text-sm text-gray-500 mb-3">
          <Download className="h-4 w-4 mr-1" />
          <span>{downloadCount} 次下载</span>
        </div>
        <Link
          to={`/resources/${id}`}
          className="btn btn-primary w-full"
        >
          查看资源
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;