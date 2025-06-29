import React from 'react';
import { Link } from 'react-router-dom';

const PageNavigationFlowchart: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-forest-900 mb-8 text-center">阅见未来网站页面跳转关系图</h1>
        
        <div className="bg-white rounded-xl shadow-md p-8 border border-cream-200 overflow-x-auto">
          {/* 流程图容器 */}
          <div className="min-w-[1000px]">
            {/* 主要页面层级 */}
            <div className="flex justify-center mb-16">
              <Link to="/" className="bg-primary-100 border-2 border-primary-500 rounded-lg p-4 text-center w-40 hover:bg-primary-200 transition-colors">
                <div className="font-bold text-primary-700 mb-1">首页</div>
                <div className="text-xs text-forest-600">HomePage</div>
              </Link>
            </div>
            
            {/* 二级页面层级 */}
            <div className="flex justify-between mb-16 relative">
              {/* 连接线 - 从首页到二级页面 */}
              <div className="absolute top-[-60px] left-1/2 w-0.5 h-[60px] bg-forest-300 transform -translate-x-1/2"></div>
              
              {/* 水平连接线 */}
              <div className="absolute top-[-60px] left-[10%] right-[10%] h-0.5 bg-forest-300"></div>
              
              {/* 垂直连接线到各个二级页面 */}
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div 
                  key={index}
                  className="absolute top-[-60px] h-[60px] w-0.5 bg-forest-300"
                  style={{ left: `${10 + (index * 16)}%` }}
                ></div>
              ))}
              
              <Link to="/courses" className="bg-blue-100 border-2 border-blue-500 rounded-lg p-3 text-center w-36 mx-2 hover:bg-blue-200 transition-colors">
                <div className="font-bold text-blue-700 mb-1">课程中心</div>
                <div className="text-xs text-forest-600">CoursesPage</div>
              </Link>
              
              <Link to="/experts" className="bg-purple-100 border-2 border-purple-500 rounded-lg p-3 text-center w-36 mx-2 hover:bg-purple-200 transition-colors">
                <div className="font-bold text-purple-700 mb-1">专家联盟</div>
                <div className="text-xs text-forest-600">ExpertsPage</div>
              </Link>
              
              <Link to="/resources" className="bg-green-100 border-2 border-green-500 rounded-lg p-3 text-center w-36 mx-2 hover:bg-green-200 transition-colors">
                <div className="font-bold text-green-700 mb-1">资源库</div>
                <div className="text-xs text-forest-600">ResourcesPage</div>
              </Link>
              
              <Link to="/smart-library" className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-3 text-center w-36 mx-2 hover:bg-yellow-200 transition-colors">
                <div className="font-bold text-yellow-700 mb-1">智阅书库</div>
                <div className="text-xs text-forest-600">SmartLibraryPage</div>
              </Link>
              
              <Link to="/support" className="bg-red-100 border-2 border-red-500 rounded-lg p-3 text-center w-36 mx-2 hover:bg-red-200 transition-colors">
                <div className="font-bold text-red-700 mb-1">运营支持</div>
                <div className="text-xs text-forest-600">SupportPage</div>
              </Link>
              
              <Link to="/account" className="bg-orange-100 border-2 border-orange-500 rounded-lg p-3 text-center w-36 mx-2 hover:bg-orange-200 transition-colors">
                <div className="font-bold text-orange-700 mb-1">会员中心</div>
                <div className="text-xs text-forest-600">AccountPage</div>
              </Link>
            </div>
            
            {/* 三级页面层级 - 课程中心 */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              <div className="col-span-1">
                <div className="relative">
                  {/* 连接线 */}
                  <div className="absolute top-[-100px] left-1/2 w-0.5 h-[100px] bg-blue-300 transform -translate-x-1/2"></div>
                  
                  <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-3 text-center">
                    <div className="font-bold text-blue-700 mb-1">课程详情</div>
                    <div className="text-xs text-forest-600">CourseDetailPage</div>
                  </div>
                </div>
                
                {/* 四级页面 - 课程详情下的子页面 */}
                <div className="mt-8 ml-8">
                  <div className="relative mb-4">
                    {/* 连接线 */}
                    <div className="absolute top-[-20px] left-[-20px] w-0.5 h-[20px] bg-blue-200"></div>
                    <div className="absolute top-[-20px] left-[-20px] w-[20px] h-0.5 bg-blue-200"></div>
                    
                    <div className="bg-blue-50 border border-blue-300 rounded-lg p-2 text-center">
                      <div className="font-bold text-blue-600 text-sm mb-1">教案详情</div>
                      <div className="text-xs text-forest-600">LessonPlanDetailPage</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 三级页面层级 - 专家联盟 */}
              <div className="col-span-1">
                <div className="relative">
                  {/* 连接线 */}
                  <div className="absolute top-[-100px] left-1/2 w-0.5 h-[100px] bg-purple-300 transform -translate-x-1/2"></div>
                  
                  <div className="bg-purple-50 border-2 border-purple-400 rounded-lg p-3 text-center">
                    <div className="font-bold text-purple-700 mb-1">专家详情</div>
                    <div className="text-xs text-forest-600">ExpertDetailPage</div>
                  </div>
                </div>
                
                {/* 四级页面 - 专家详情下的子页面 */}
                <div className="mt-8 ml-8">
                  <div className="relative mb-4">
                    {/* 连接线 */}
                    <div className="absolute top-[-20px] left-[-20px] w-0.5 h-[20px] bg-purple-200"></div>
                    <div className="absolute top-[-20px] left-[-20px] w-[20px] h-0.5 bg-purple-200"></div>
                    
                    <div className="bg-purple-50 border border-purple-300 rounded-lg p-2 text-center">
                      <div className="font-bold text-purple-600 text-sm mb-1">专家培训详情</div>
                      <div className="text-xs text-forest-600">ExpertLessonPlanDetailPage</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 三级页面层级 - 资源库 */}
              <div className="col-span-1">
                <div className="relative">
                  {/* 连接线 */}
                  <div className="absolute top-[-100px] left-1/2 w-0.5 h-[100px] bg-green-300 transform -translate-x-1/2"></div>
                  
                  <div className="bg-green-50 border-2 border-green-400 rounded-lg p-3 text-center">
                    <div className="font-bold text-green-700 mb-1">资源详情</div>
                    <div className="text-xs text-forest-600">ResourceDetailPage</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 会员中心特殊页面 */}
            <div className="flex justify-end mb-16">
              <div className="relative w-1/3">
                {/* 连接线 */}
                <div className="absolute top-[-100px] right-1/2 w-0.5 h-[100px] bg-orange-300 transform translate-x-1/2"></div>
                
                <Link to="/admin" className="block bg-orange-50 border-2 border-orange-400 rounded-lg p-3 text-center hover:bg-orange-100 transition-colors">
                  <div className="font-bold text-orange-700 mb-1">机构管理中心</div>
                  <div className="text-xs text-forest-600">AdminDashboardPage</div>
                </Link>
              </div>
            </div>
            
            {/* 其他页面 */}
            <div className="flex justify-center gap-8">
              <Link to="/about" className="bg-gray-100 border-2 border-gray-400 rounded-lg p-3 text-center w-36 hover:bg-gray-200 transition-colors">
                <div className="font-bold text-gray-700 mb-1">关于我们</div>
                <div className="text-xs text-forest-600">AboutUsPage</div>
              </Link>
              
              <Link to="/contact" className="bg-gray-100 border-2 border-gray-400 rounded-lg p-3 text-center w-36 hover:bg-gray-200 transition-colors">
                <div className="font-bold text-gray-700 mb-1">联系我们</div>
                <div className="text-xs text-forest-600">ContactPage</div>
              </Link>
              
              <div className="bg-gray-100 border-2 border-gray-400 rounded-lg p-3 text-center w-36">
                <div className="font-bold text-gray-700 mb-1">机构详情</div>
                <div className="text-xs text-forest-600">OrganizationDetailPage</div>
              </div>
              
              <Link to="/not-found-test" className="bg-gray-100 border-2 border-gray-400 rounded-lg p-3 text-center w-36 hover:bg-gray-200 transition-colors">
                <div className="font-bold text-gray-700 mb-1">404页面</div>
                <div className="text-xs text-forest-600">NotFoundPage</div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* 图例说明 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-cream-200 mt-8">
          <h2 className="text-xl font-bold text-forest-900 mb-4">页面跳转关系说明</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-forest-900 mb-3">主要导航路径</h3>
              <ul className="space-y-2 text-forest-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-primary-500 rounded-full mr-2"></span>
                  <span>首页是整个网站的入口，可以访问所有二级页面</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span>课程中心 → 课程详情 → 教案详情</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  <span>专家联盟 → 专家详情 → 专家培训详情</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span>资源库 → 资源详情</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                  <span>会员中心 → 机构管理中心（仅机构管理员可见）</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-forest-900 mb-3">特殊跳转关系</h3>
              <ul className="space-y-2 text-forest-700">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <span>智阅书库是独立功能模块，可直接从首页或导航访问</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <span>运营支持页面提供机构运营相关资源</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                  <span>关于我们、联系我们等页面可从页面底部导航访问</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                  <span>机构详情页可从课程详情页或资源详情页访问</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                  <span>404页面在访问不存在的路径时显示</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNavigationFlowchart;