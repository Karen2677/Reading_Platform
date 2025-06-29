import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import CourseCard from '../components/ui/CourseCard';
import { coursesData } from '../data/coursesData';
import { organizationsData } from '../data/organizationsData';
import { Filter } from 'lucide-react';
import { cn } from '../utils/cn';

const ageGroups = ['全部', '0-3岁', '3-6岁', '6-12岁'];

const CoursesPage: React.FC = () => {
  const location = useLocation();
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('全部');
  const [selectedOrganization, setSelectedOrganization] = useState('全部');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get classroom courses
  const classroomCourses = coursesData.filter(course => course.type === 'classroom');
  
  // Filter courses based on selected filters
  const filteredCourses = classroomCourses.filter(course => {
    const matchesAge = selectedAgeGroup === '全部' || course.ageGroup === selectedAgeGroup;
    const matchesOrg = selectedOrganization === '全部' || course.organization === selectedOrganization;
    return matchesAge && matchesOrg;
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        <SectionHeading
          title="阅读教育活动"
          subtitle="为不同年龄段儿童提供专业的阅读教学活动"
          centered
        />

        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-full py-3 mb-4 border border-cream-300 rounded-lg bg-white"
          onClick={toggleFilter}
        >
          <Filter className="h-5 w-5 mr-2" />
          <span>筛选课程</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div 
            className={cn(
              "w-full md:w-64 shrink-0 space-y-6 transition-all duration-300 ease-in-out",
              isFilterOpen ? "block" : "hidden md:block"
            )}
          >
            {/* Age Group Filter */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-200">
              <h3 className="text-lg font-medium mb-4">按年龄</h3>
              <div className="space-y-2">
                {ageGroups.map((age) => (
                  <div key={age} className="flex items-center">
                    <button
                      className={cn(
                        "w-full text-left py-2 px-3 rounded-lg transition-colors",
                        selectedAgeGroup === age
                          ? "bg-primary-100 text-primary-700"
                          : "hover:bg-cream-100"
                      )}
                      onClick={() => setSelectedAgeGroup(age)}
                    >
                      {age}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Organization Filter */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-200">
              <h3 className="text-lg font-medium mb-4">按机构</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <button
                    className={cn(
                      "w-full text-left py-2 px-3 rounded-lg transition-colors",
                      selectedOrganization === '全部'
                        ? "bg-primary-100 text-primary-700"
                        : "hover:bg-cream-100"
                    )}
                    onClick={() => setSelectedOrganization('全部')}
                  >
                    全部
                  </button>
                </div>
                {organizationsData.map((org) => (
                  <div key={org.id} className="flex items-center">
                    <button
                      className={cn(
                        "w-full text-left py-2 px-3 rounded-lg transition-colors",
                        selectedOrganization === org.name
                          ? "bg-primary-100 text-primary-700"
                          : "hover:bg-cream-100"
                      )}
                      onClick={() => setSelectedOrganization(org.name)}
                    >
                      {org.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course List */}
          <div className="flex-1">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
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
            ) : (
              <div className="bg-white p-8 rounded-xl text-center border border-cream-200">
                <p className="text-forest-500">没有找到符合条件的课程，请尝试调整筛选条件。</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;