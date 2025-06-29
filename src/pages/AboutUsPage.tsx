import React from 'react';
import { GraduationCap, Users, BookOpen, Building, Target, BookMarked } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        {/* Introduction Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-12 border border-cream-200">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-forest-900 mb-6">关于我们</h1>
            
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-forest-800 mb-4">联盟介绍</h2>
              <p className="text-forest-700 mb-8">
                阅见未来儿童阅读教育联盟是一个由阅读教育专家、优质教育机构、出版社共同发起的专业联盟，致力于推动儿童阅读教育在中国的发展。平台汇聚优质课程资源、专家培训体系与实践经验，服务于幼儿园、绘本馆、阅读推广机构等教学机构用户，帮助他们为儿童提供更有深度与温度的阅读教育。
              </p>
            </div>
          </div>
        </div>
        
        {/* Vision Section */}
        <div className="bg-forest-700 rounded-xl overflow-hidden shadow-md mb-12 text-white">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">我们的愿景</h2>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
              打造中国最值得信赖的儿童阅读教育支持平台，
              <br />
              让优质的阅读教育走进每一个教室、每一个家庭、每一个孩子的成长中。
            </p>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-12 border border-cream-200">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center text-forest-900 mb-8">我们的使命</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-medium text-forest-800">联合优秀机构和专家</h3>
                </div>
                <p className="text-forest-700">构建协作共赢的教育生态，整合优质资源，形成合力。</p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-medium text-forest-800">提供分龄阅读课程和教师培训</h3>
                </div>
                <p className="text-forest-700">满足不同年龄段儿童的阅读需求，提升教师专业素养。</p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-medium text-forest-800">推动图书市场良性发展</h3>
                </div>
                <p className="text-forest-700">引导优质童书的推广与使用，助力儿童全面成长。</p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-medium text-forest-800">建立资源链接与理念传递平台</h3>
                </div>
                <p className="text-forest-700">搭建中枢平台，促进资源共享与先进理念传播。</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md border border-cream-200">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center text-forest-900 mb-8">我们的服务</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cream-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-medium text-center text-forest-800 mb-4">课程中心</h3>
                <p className="text-forest-700 text-center">分龄设计、主题清晰的阅读课程，覆盖阅读理解、思维训练、亲子共读等核心能力。</p>
              </div>
              
              <div className="bg-cream-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-medium text-center text-forest-800 mb-4">专家培训</h3>
                <p className="text-forest-700 text-center">邀请国内外阅读教育专家，为教师提供系统性成长支持与教学实战指导。</p>
              </div>
              
              <div className="bg-cream-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookMarked className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-medium text-center text-forest-800 mb-4">教学资源库</h3>
                <p className="text-forest-700 text-center">配套教案、PPT、视频课程、操作建议等线上可交付资源，提升教学效率。</p>
              </div>
              
              <div className="bg-cream-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-medium text-center text-forest-800 mb-4">平台赋能工具</h3>
                <p className="text-forest-700 text-center">提供课程管理、用户管理、数据追踪等后台支持，助力机构高效运营与服务家长。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;