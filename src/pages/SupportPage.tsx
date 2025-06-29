import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import SupportCard from '../components/ui/SupportCard';
import { supportData } from '../data/supportData';
import { Calendar, Palette, Database } from 'lucide-react';

const supportIcons = {
  'Calendar': <Calendar className="h-5 w-5" />,
  'Palette': <Palette className="h-5 w-5" />,
  'Database': <Database className="h-5 w-5" />,
};

const SupportPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        <SectionHeading
          title="运营支持"
          subtitle="全方位的机构运营支持，提升管理效率与教学质量"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportData.map((support) => (
            <SupportCard
              key={support.id}
              id={support.id}
              title={support.title}
              icon={supportIcons[support.icon as keyof typeof supportIcons]}
              coverImage={support.coverImage}
              description={support.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;