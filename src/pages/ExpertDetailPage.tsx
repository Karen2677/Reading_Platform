import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { expertsData } from '../data/expertsData';
import { coursesData } from '../data/coursesData';
import { BookOpen, GraduationCap, Users, FileText, ChevronRight, Mail, Globe, Calendar } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';

const ExpertDetailPage: React.FC = () => {
  const { expertId } = useParams<{ expertId: string }>();
  
  // Find the expert
  const expert = expertsData.find((e) => e.id === Number(expertId));
  
  // Find expert's courses
  const expertCourses = coursesData.filter((course) => 
    expert?.courseIds.includes(course.id)
  );

  // Get the main course (first one) for detailed display
  const mainCourse = expertCourses[0];

  if (!expert) {
    return (
      <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl text-center border border-cream-200">
            <p className="text-forest-500">未找到专家信息</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        {/* Course Header - 保持不变 */}
        {mainCourse && (
          <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8 border border-cream-200">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={mainCourse.coverImage} 
                  alt={mainCourse.title} 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="flex items-center mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-forest-900 mr-3">{mainCourse.title}</h1>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    专家培训
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-6 text-sm mb-6">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-forest-600 mr-2">课程讲师：</span>
                    <span className="font-medium text-forest-800">{expert.name}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-forest-600 mr-2">应用场景：</span>
                    <span className="font-medium text-forest-800">教师成长</span>
                  </div>
                  
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-forest-600 mr-2">课程数量：</span>
                    <span className="font-medium text-forest-800">{mainCourse.modules.length} 个模块</span>
                  </div>
                </div>
                
                <p className="text-forest-700 mb-6">{mainCourse.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">¥{mainCourse.price}</div>
                  <button className="btn btn-primary">
                    立即购买
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Main Content - 左右两栏布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* 左侧栏 - 课程模块 (2/3宽度) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-cream-200">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-forest-900 mb-6">课程模块</h2>
                
                {mainCourse ? (
                  <div className="space-y-4">
                    {mainCourse.modules.map((module, index) => (
                      <Link
                        key={module.id}
                        to={`/expert-courses/${mainCourse.id}/modules/${module.id}`}
                        className="group block bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-purple-200 hover:border-purple-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                {index + 1}
                              </div>
                              <h3 className="text-lg font-semibold text-forest-900 group-hover:text-purple-700 transition-colors">
                                {module.title}
                              </h3>
                            </div>
                            
                            <p className="text-forest-600 mb-4 line-clamp-2">
                              {module.description}
                            </p>
                            
                            <div className="flex items-center text-sm text-purple-600">
                              <FileText className="h-4 w-4 mr-2" />
                              <span>点击查看培训内容</span>
                            </div>
                          </div>
                          
                          <ChevronRight className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-forest-300 mx-auto mb-4" />
                    <p className="text-forest-500">暂无课程模块</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 右侧栏 - 讲师信息 (1/3宽度) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md border border-cream-200 sticky top-24">
              <div className="p-6">
                <h3 className="text-lg font-bold text-forest-900 mb-6">讲师介绍</h3>
                
                {/* 讲师头像和基本信息 */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-purple-100">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-forest-900 mb-1">{expert.name}</h4>
                  <p className="text-purple-600 font-medium mb-2">{expert.title}</p>
                  <div className="flex items-center justify-center text-sm text-forest-600">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    <span>{expert.courseIds.length} 个相关课程</span>
                  </div>
                </div>

                {/* 个人简介 */}
                <div className="mb-6">
                  <h5 className="font-medium text-forest-800 mb-3">个人简介</h5>
                  <div className="text-sm text-forest-700 leading-relaxed">
                    {expert.bio.split('\n\n').slice(0, 2).map((paragraph, index) => (
                      <p key={index} className="mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 相关活动链接 */}
                <div className="mb-6">
                  <h5 className="font-medium text-forest-800 mb-3">相关活动</h5>
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                    >
                      <Calendar className="h-4 w-4 text-purple-600 mr-3" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-forest-900 group-hover:text-purple-700">
                          儿童阅读教育研讨会
                        </div>
                        <div className="text-xs text-forest-600">2024年3月15日</div>
                      </div>
                    </a>
                    
                    <a 
                      href="#" 
                      className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                    >
                      <BookOpen className="h-4 w-4 text-purple-600 mr-3" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-forest-900 group-hover:text-purple-700">
                          阅读心理学专题讲座
                        </div>
                        <div className="text-xs text-forest-600">线上直播</div>
                      </div>
                    </a>
                    
                    <a 
                      href="#" 
                      className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                    >
                      <Users className="h-4 w-4 text-purple-600 mr-3" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-forest-900 group-hover:text-purple-700">
                          教师成长工作坊
                        </div>
                        <div className="text-xs text-forest-600">每月第三周</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* 联系方式 */}
                <div className="border-t border-cream-200 pt-4">
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
                      title="发送邮件"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
                      title="个人网站"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 推荐课程 - 保持不变 */}
        {expertCourses.length > 1 && (
          <div className="bg-white rounded-xl shadow-md border border-cream-200">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-forest-900 mb-6">更多相关课程</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertCourses.slice(1).map((course) => (
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