import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { resourcesData } from '../data/resourcesData';
import { FileText, Download, Video, Image, FileAudio } from 'lucide-react';

const ResourceDetailPage: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  
  // Find the resource
  const resource = resourcesData.find((r) => r.id === Number(resourceId));

  if (!resource) {
    return (
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl text-center">
            <p className="text-gray-500">未找到资源信息</p>
          </div>
        </div>
      </div>
    );
  }

  const typeIcons = {
    document: <FileText className="h-6 w-6" />,
    video: <Video className="h-6 w-6" />,
    image: <Image className="h-6 w-6" />,
    audio: <FileAudio className="h-6 w-6" />,
  };

  const typeLabels = {
    document: '文档资料',
    video: '视频资源',
    image: '图片素材',
    audio: '音频资源',
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Resource Header */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
          <div className="relative h-64 md:h-80">
            <img 
              src={resource.coverImage} 
              alt={resource.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center">
              {typeIcons[resource.type]}
              <span className="ml-2">{typeLabels[resource.type]}</span>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{resource.title}</h1>
            <p className="text-gray-700 mb-6">{resource.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-600">
                <Download className="h-5 w-5 mr-2" />
                <span>{resource.downloadCount} 次下载</span>
              </div>
              
              {resource.downloadUrl && (
                <a
                  href={resource.downloadUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5 mr-2" />
                  下载资源
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Resource Content */}
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">资源详情</h2>
            
            {resource.type === 'video' && resource.videoUrl ? (
              <div className="mb-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center p-8">
                    <Video className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">视频预览区域</p>
                    <a
                      href={resource.videoUrl}
                      className="mt-4 inline-block btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      观看视频
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
            
            <div className="prose max-w-none">
              {resource.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-2xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-xl font-bold mt-5 mb-3">{line.substring(3)}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{line.substring(4)}</h3>;
                } else if (line.startsWith('- ')) {
                  return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
                } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || 
                           line.startsWith('4. ') || line.startsWith('5. ') || line.startsWith('6. ')) {
                  return <li key={index} className="ml-6 list-decimal mb-1">{line.substring(3)}</li>;
                } else if (line === '') {
                  return <br key={index} />;
                } else {
                  return <p key={index} className="mb-4">{line}</p>;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailPage;