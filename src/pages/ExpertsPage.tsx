import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ExpertCard from '../components/ui/ExpertCard';
import CourseCard from '../components/ui/CourseCard';
import { expertsData } from '../data/expertsData';
import { coursesData } from '../data/coursesData';

const ExpertsPage: React.FC = () => {
  // Get teacher training courses
  const teacherCourses = coursesData.filter(course => course.type === 'teacher');

  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        <SectionHeading
          title="教师成长课程"
          subtitle="专业的教师成长课程，提升阅读教学能力和专业素养"
          centered
        />

        {/* Teacher Training Courses */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teacherCourses.map((course) => (
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

        {/* Our Experts */}
        <SectionHeading
          title="我们的专家"
          subtitle="汇聚国内外阅读教育领域顶尖专家，提供专业指导"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertsData.map((expert) => (
            <ExpertCard
              key={expert.id}
              id={expert.id}
              name={expert.name}
              title={expert.title}
              avatar={expert.avatar}
              description={expert.description}
              courseCount={expert.courseIds.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertsPage;