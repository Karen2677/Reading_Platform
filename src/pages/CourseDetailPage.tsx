import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData, Course } from '../data/coursesData';
import { organizationsData } from '../data/organizationsData';
import { expertsData } from '../data/expertsData';
import { ChevronRight, Users, GraduationCap, BookOpen, FileText } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  // Find the course
  const course = coursesData.find((c) => c.id === Number(courseId));
  
  // Find related organization
  const organization = organizationsData.find((org) => org.id === course?.organizationId);
  
  // Find expert if applicable
  const expert = course?.expertId ? expertsData.find((e) => e.id === course.expertId) : null;
  
  // Find recommended courses (same type but different id)
  const recommendedCourses = coursesData
    .filter((c) => c.type === course?.type && c.id !== course?.id)
    .slice(0, 3);

  if (!course) {
    return (
      <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl text-center border border-cream-200">
            <p className="text-forest-500">未找到课程信息</p>
          </div>
        </div>
      </div>
    );
  }

  // Determine the route based on course type
  const getModuleRoute = (moduleId: number) => {
    if (course.type === 'teacher') {
      return `/expert-courses/${courseId}/modules/${moduleId}`;
    } else {
      return `/courses/${courseId}/modules/${moduleId}`;
    }
  };

  return (
    <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        {/* Course Header */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8 border border-cream-200">
          <div className="relative h-64 md:h-80">
            <img 
              src={course.coverImage} 
              alt={course.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-lg">
              {course.ageGroup}
            </div>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-forest-900 mb-4">{course.title}</h1>
                <p className="text-forest-700 mb-6">{course.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600 mb-2">¥{course.price}</div>
                <button className="btn btn-primary">
                  立即购买
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {/* Organization or Expert */}
              <div className="flex items-center">
                {course.type === 'classroom' ? (
                  <>
                    <Users className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-forest-600 mr-2">课程提供：</span>
                    <Link 
                      to={`/organizations/${organization?.id}`} 
                      className="text-primary-600 hover:text-primary-800 font-medium"
                    >
                      {organization?.name}
                    </Link>
                  </>
                ) : (
                  <>
                    <GraduationCap className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-forest-600 mr-2">课程讲师：</span>
                    <Link 
                      to={`/experts/${expert?.id}`} 
                      className="text-primary-600 hover:text-primary-800 font-medium"
                    >
                      {expert?.name}
                    </Link>
                  </>
                )}
              </div>
              
              {/* Course Type */}
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-forest-600 mr-2">应用场景：</span>
                <span className="font-medium">
                  {course.type === 'classroom' ? '课堂教学' : '教师成长'}
                </span>
              </div>
              
              {/* Module Count */}
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-forest-600 mr-2">课程数量：</span>
                <span className="font-medium">{course.modules.length} 个课程</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Modules */}
        <div className="bg-white rounded-xl shadow-md mb-8 border border-cream-200">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-forest-900 mb-6">课程内容</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.modules.map((module) => (
                <Link
                  key={module.id}
                  to={getModuleRoute(module.id)}
                  className="group block bg-gradient-to-br from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-primary-200 hover:border-primary-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary-600 rounded-lg">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-forest-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="text-sm text-forest-600 line-clamp-3 mb-4">
                    {module.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-xs text-primary-600">
                    <span>
                      {course.type === 'teacher' ? '点击查看培训内容' : '点击查看完整教案'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Recommended Courses */}
        {recommendedCourses.length > 0 && (
          <div className="bg-white rounded-xl shadow-md border border-cream-200">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-forest-900 mb-6">推荐课程</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
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

export default CourseDetailPage;