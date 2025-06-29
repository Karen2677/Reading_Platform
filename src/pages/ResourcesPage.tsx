import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ResourceCard from '../components/ui/ResourceCard';
import { resourcesData } from '../data/resourcesData';

const ResourcesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        <SectionHeading
          title="教学资源库"
          subtitle="丰富的教学资源，助力高效教学与学习"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.map((resource) => (
            <ResourceCard
              key={resource.id}
              id={resource.id}
              title={resource.title}
              type={resource.type}
              coverImage={resource.coverImage}
              description={resource.description}
              downloadCount={resource.downloadCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;