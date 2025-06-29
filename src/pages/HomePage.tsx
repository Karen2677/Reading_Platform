import React from 'react';
import Banner from '../components/ui/Banner';
import SectionHeading from '../components/ui/SectionHeading';
import CourseCard from '../components/ui/CourseCard';
import ExpertCard from '../components/ui/ExpertCard';
import ResourceCard from '../components/ui/ResourceCard';
import SupportCard from '../components/ui/SupportCard';
import OrganizationCard from '../components/ui/OrganizationCard';
import SectionMoreLink from '../components/ui/SectionMoreLink';
import { coursesData } from '../data/coursesData';
import { expertsData } from '../data/expertsData';
import { resourcesData } from '../data/resourcesData';
import { supportData } from '../data/supportData';
import { organizationsData } from '../data/organizationsData';
import { Calendar, Palette, Database, Crown, Star, Gift, Users, BookOpen, GraduationCap, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const supportIcons = {
  'Calendar': <Calendar className="h-5 w-5" />,
  'Palette': <Palette className="h-5 w-5" />,
  'Database': <Database className="h-5 w-5" />,
};

const HomePage: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filter classroom courses
  const classroomCourses = coursesData.filter(course => course.type === 'classroom').slice(0, 3);
  
  // Filter teacher training courses
  const teacherCourses = coursesData.filter(course => course.type === 'teacher').slice(0, 3);
  
  // Get first 3 resources
  const featuredResources = resourcesData.slice(0, 3);
  
  // Get first 3 experts
  const featuredExperts = expertsData.slice(0, 3);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (contactForm.name && contactForm.email && contactForm.message) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setContactForm({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="pb-20">
      {/* Banner */}
      <Banner />

      {/* Classroom Teaching Courses Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="阅读教育项目推荐"
            subtitle="精心设计的分龄阅读课程，满足不同年龄段儿童的发展需求"
            centered
            className="text-forest-900"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classroomCourses.map((course) => (
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
          
          <SectionMoreLink to="/courses" />
        </div>
      </section>

      {/* Teacher Training Courses Section */}
      <section className="py-16 bg-cream-100">
        <div className="container-custom">
          <SectionHeading
            title="专家培训推荐"
            subtitle="专业的教师成长课程，提升阅读教学能力和专业素养"
            centered
            className="text-forest-900"
          />
          
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
          
          <SectionMoreLink to="/experts" />
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="教学资源库"
            subtitle="丰富的教学资源，助力高效教学与学习"
            centered
            className="text-forest-900"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
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
          
          <SectionMoreLink to="/resources" />
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16 bg-cream-100">
        <div className="container-custom">
          <SectionHeading
            title="联盟机构陪跑"
            subtitle="优质教育机构联合，共建阅读教育生态"
            centered
            className="text-forest-900"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {organizationsData.map((org) => (
              <OrganizationCard
                key={org.id}
                id={org.id}
                name={org.name}
                logo={org.logo}
                description={org.description}
                courseCount={org.courseIds.length}
              />
            ))}
          </div>
          
          <SectionMoreLink to="/organizations" text="了解更多机构" />
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="专家护航"
            subtitle="汇聚国内外阅读教育领域顶尖专家，提供专业指导"
            centered
            className="text-forest-900"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredExperts.map((expert) => (
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
          
          <SectionMoreLink to="/experts" text="查看全部专家" />
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <SectionHeading
            title="会员权益介绍"
            subtitle="加入阅见未来联盟，享受专属会员权益与优质服务"
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 基础会员 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">基础会员</h3>
                <p className="text-cream-100">免费注册</p>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>免费浏览所有课程信息</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>下载部分免费教学资源</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>参与社区讨论交流</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>接收最新教育资讯</span>
                </li>
              </ul>
              
              <button className="w-full mt-6 bg-white text-primary-600 py-3 rounded-lg font-medium hover:bg-cream-50 transition-colors">
                免费注册
              </button>
            </div>

            {/* 机构会员 */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border-2 border-accent-400 hover:bg-white/20 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                  推荐
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">机构会员</h3>
                <p className="text-cream-100">¥2,980/年</p>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>享受所有基础会员权益</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>课程采购享受8折优惠</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>免费使用课程管理系统</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>专属客服支持服务</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>智阅书库专享折扣</span>
                </li>
              </ul>
              
              <button className="w-full mt-6 bg-accent-400 text-white py-3 rounded-lg font-medium hover:bg-accent-300 transition-colors">
                立即升级
              </button>
            </div>

            {/* 联盟会员 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">联盟会员</h3>
                <p className="text-cream-100">¥9,800/年</p>
              </div>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>享受所有机构会员权益</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>课程采购享受6折优惠</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>专家一对一咨询服务</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>定制化培训方案</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-accent-400" />
                  <span>优先参与新产品内测</span>
                </li>
              </ul>
              
              <button className="w-full mt-6 bg-white text-primary-600 py-3 rounded-lg font-medium hover:bg-cream-50 transition-colors">
                联系咨询
              </button>
            </div>
          </div>

          {/* 特色权益展示 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-center mb-8">会员专享特色权益</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-6 w-6" />
                </div>
                <h4 className="font-medium mb-2">专属折扣</h4>
                <p className="text-sm text-cream-100">课程采购享受会员专属优惠价格</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h4 className="font-medium mb-2">专家指导</h4>
                <p className="text-sm text-cream-100">定期专家讲座和一对一咨询服务</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6" />
                </div>
                <h4 className="font-medium mb-2">管理系统</h4>
                <p className="text-sm text-cream-100">免费使用专业的课程管理系统</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-medium mb-2">社群交流</h4>
                <p className="text-sm text-cream-100">加入专属会员社群，与同行深度交流</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-cream-100">
        <div className="container-custom">
          <SectionHeading
            title="联系我们"
            subtitle="有任何问题或建议，欢迎随时与我们联系"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200">
              <div className="p-8">
                <h3 className="text-xl font-bold text-forest-900 mb-6">发送消息</h3>
                
                {submitSuccess ? (
                  <div className="bg-primary-50 border border-primary-200 text-primary-700 px-4 py-3 rounded-lg mb-6">
                    <p>您的消息已成功发送，我们将尽快与您联系！</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit}>
                    <div className="mb-6">
                      <label htmlFor="contact-name" className="form-label">姓名</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        className="form-input"
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="contact-email" className="form-label">邮箱</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        className="form-input"
                        placeholder="请输入您的邮箱"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="contact-message" className="form-label">留言内容</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={contactForm.message}
                        onChange={handleContactChange}
                        className="form-input resize-none"
                        placeholder="请输入您的留言内容"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-full flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {isSubmitting ? '发送中...' : '发送消息'}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-primary-600 rounded-2xl shadow-lg overflow-hidden text-white mb-8">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">联系方式</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">邮箱</h4>
                        <p className="text-cream-100">contact@yuejianweilai.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">电话</h4>
                        <p className="text-cream-100">+86 010-12345678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">地址</h4>
                        <p className="text-cream-100">北京市朝阳区建国路88号</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-cream-200">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-forest-900 mb-6">工作时间</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-forest-600">周一至周五</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-forest-600">周六</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-forest-600">周日及法定节假日</span>
                      <span className="font-medium">休息</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-primary-50 p-4 rounded-lg">
                    <p className="text-forest-700 text-sm">
                      如需紧急联系，请发送邮件至 urgent@yuejianweilai.com，我们会尽快回复。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;