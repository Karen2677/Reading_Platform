import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { expertsData } from '../data/expertsData';
import { coursesData } from '../data/coursesData';
import { BookOpen, GraduationCap } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';

const ExpertDetailPage: React.FC = () => {
  const { expertId } = useParams<{ expertId: string }>();
  
  // Find the expert
  const expert = expertsData.find((e) => e.id === Number(expertId));
  
  // Find expert's courses
  const expertCourses = coursesData.filter((course) => 
    expert?.courseIds.includes(course.id)
  );

  if (!expert) {
    return (
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl text-center">
            <p className="text-gray-500">未找到专家信息</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Expert Profile */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={expert.avatar} 
                alt={expert.name} 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-6 md:p-8 md:w-2/3">
              <div className="flex items-center mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mr-3">{expert.name}</h1>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {expert.title}
                </span>
              </div>
              
              <div className="flex items-center text-sm mb-6">
                <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-600">{expert.courseIds.length} 个相关课程</span>
              </div>
              
              <div className="prose max-w-none">
                {expert.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Expert's Courses */}
        {expertCourses.length > 0 && (
          <div className="bg-white rounded-xl shadow-md">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">相关课程</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    organization={course.organization}
                    organizationId={course.organizationId}
                    ageGroup={course.ageGroup}
                    coverImage={course.coverImage}
                    description={course.description}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertDetailPage;