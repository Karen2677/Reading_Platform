import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { organizationsData } from '../data/organizationsData';
import { coursesData } from '../data/coursesData';
import { Building, BookOpen } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';

const OrganizationDetailPage: React.FC = () => {
  const { organizationId } = useParams<{ organizationId: string }>();
  
  // Find the organization
  const organization = organizationsData.find((org) => org.id === Number(organizationId));
  
  // Find organization's courses
  const orgCourses = coursesData.filter((course) => 
    organization?.courseIds.includes(course.id)
  );

  if (!organization) {
    return (
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl text-center">
            <p className="text-gray-500">未找到机构信息</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Organization Profile */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
          <div className="relative h-64 md:h-80">
            <img 
              src={organization.coverImage} 
              alt={organization.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex items-center">
                <div className="w-20 h-20 bg-white rounded-full overflow-hidden border-4 border-white mr-4">
                  <img 
                    src={organization.logo} 
                    alt={organization.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{organization.name}</h1>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center text-sm mb-6">
              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-600">{organization.courseIds.length} 个相关课程</span>
            </div>
            
            <div className="prose max-w-none">
              {organization.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Organization's Courses */}
        {orgCourses.length > 0 && (
          <div className="bg-white rounded-xl shadow-md">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">相关课程</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {orgCourses.map((course) => (
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

export default OrganizationDetailPage;