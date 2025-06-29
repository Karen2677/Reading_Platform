import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Book, FileText, CreditCard, LogOut, Building, Mail, Lock, UserPlus, LogIn } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';
import { coursesData } from '../data/coursesData';

const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 模拟登录状态
  const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'personal' as 'personal' | 'teacher' | 'admin',
    organization: '',
    invitationCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Mock user data
  const user = {
    name: '张小明',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'xiaoming@example.com',
    membershipType: '个人会员',
    membershipStatus: '免费用户',
    organization: '阅见未来',
    role: '机构教师'
  };
  
  // Mock purchased courses
  const userCourses = coursesData.slice(0, 2);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsLoggedIn(true);
      }, 1500);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.username && registerForm.email && registerForm.password) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsLoggedIn(true);
      }, 1500);
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
    setRegisterForm({
      username: '',
      email: '',
      password: '',
      role: 'personal',
      organization: '',
      invitationCode: ''
    });
  };

  // 如果未登录，显示登录/注册页面
  if (!isLoggedIn) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex flex-col bg-cream-50">
        <div className="container-custom flex-grow flex items-center justify-center">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream-200">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-forest-900">
                    {activeForm === 'login' ? '用户登录' : '用户注册'}
                  </h1>
                  <p className="text-forest-600 mt-2">
                    {activeForm === 'login' ? '登录您的阅见未来账号' : '创建您的阅见未来账号'}
                  </p>
                </div>

                {/* 切换登录/注册 */}
                <div className="flex mb-6 bg-cream-100 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveForm('login')}
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                      activeForm === 'login'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-forest-600 hover:text-forest-800'
                    }`}
                  >
                    登录
                  </button>
                  <button
                    onClick={() => setActiveForm('register')}
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                      activeForm === 'register'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-forest-600 hover:text-forest-800'
                    }`}
                  >
                    注册
                  </button>
                </div>
                
                {activeForm === 'login' ? (
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-6">
                      <label htmlFor="email" className="form-label">邮箱</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-forest-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={loginForm.email}
                          onChange={handleLoginChange}
                          className="form-input pl-10"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="password" className="form-label">密码</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-forest-400" />
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={loginForm.password}
                          onChange={handleLoginChange}
                          className="form-input pl-10"
                          placeholder="********"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-cream-300 rounded"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-forest-700">
                          记住我
                        </label>
                      </div>
                      
                      <a href="#" className="text-sm text-primary-600 hover:text-primary-800">
                        忘记密码?
                      </a>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-full flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                      ) : (
                        <LogIn className="h-5 w-5 mr-2" />
                      )}
                      {isSubmitting ? '登录中...' : '登录'}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-6">
                      <label htmlFor="username" className="form-label">用户名</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-forest-400" />
                        </div>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={registerForm.username}
                          onChange={handleRegisterChange}
                          className="form-input pl-10"
                          placeholder="您的用户名"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="reg-email" className="form-label">邮箱</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-forest-400" />
                        </div>
                        <input
                          type="email"
                          id="reg-email"
                          name="email"
                          value={registerForm.email}
                          onChange={handleRegisterChange}
                          className="form-input pl-10"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="reg-password" className="form-label">密码</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-forest-400" />
                        </div>
                        <input
                          type="password"
                          id="reg-password"
                          name="password"
                          value={registerForm.password}
                          onChange={handleRegisterChange}
                          className="form-input pl-10"
                          placeholder="至少6个字符"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="role" className="form-label">身份选择</label>
                      <select
                        id="role"
                        name="role"
                        value={registerForm.role}
                        onChange={handleRegisterChange}
                        className="form-input"
                      >
                        <option value="personal">个人用户</option>
                        <option value="teacher">机构教师</option>
                        <option value="admin">机构管理员</option>
                      </select>
                    </div>
                    
                    {(registerForm.role === 'teacher' || registerForm.role === 'admin') && (
                      <>
                        <div className="mb-6">
                          <label htmlFor="organization" className="form-label">所在机构名称</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Building className="h-5 w-5 text-forest-400" />
                            </div>
                            <input
                              type="text"
                              id="organization"
                              name="organization"
                              value={registerForm.organization}
                              onChange={handleRegisterChange}
                              className="form-input pl-10"
                              placeholder="您所在的机构名称"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="invitationCode" className="form-label">邀请码</label>
                          <input
                            type="text"
                            id="invitationCode"
                            name="invitationCode"
                            value={registerForm.invitationCode}
                            onChange={handleRegisterChange}
                            className="form-input"
                            placeholder="机构提供的邀请码"
                            required
                          />
                          <p className="text-sm text-forest-500 mt-1">
                            如果没有邀请码，请选择"个人用户"身份注册
                          </p>
                        </div>
                      </>
                    )}
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-full flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                      ) : (
                        <UserPlus className="h-5 w-5 mr-2" />
                      )}
                      {isSubmitting ? '注册中...' : '注册'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 已登录，显示会员中心页面
  return (
    <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-forest-900 mb-12">我的账号</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream-200">
              {/* User Profile */}
              <div className="p-6 text-center border-b border-cream-200">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-forest-900">{user.name}</h2>
                <p className="text-forest-600">{user.email}</p>
              </div>
              
              {/* Membership Status */}
              <div className="p-6 border-b border-cream-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">会员状态</h3>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {user.membershipStatus}
                  </span>
                </div>
                <p className="text-forest-600 text-sm mb-4">
                  会员类型: {user.membershipType}
                </p>
                <button className="btn btn-outline w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  升级会员
                </button>
              </div>
              
              {/* Organization Info (for teachers/admins) */}
              <div className="p-6 border-b border-cream-200">
                <h3 className="font-medium mb-4">所属机构</h3>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-forest-500 mr-3" />
                  <div>
                    <p className="font-medium">{user.organization}</p>
                    <p className="text-sm text-forest-600">{user.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Logout Button */}
              <div className="p-6">
                <button
                  onClick={handleLogout}
                  className="btn w-full bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center border border-red-200"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  退出登录
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream-200">
              <div className="p-6 border-b border-cream-200">
                <h2 className="text-xl font-bold text-forest-900">我的课程</h2>
              </div>
              <div className="p-6">
                {userCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userCourses.map((course) => (
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
                  <div className="text-center py-8">
                    <Book className="h-12 w-12 text-forest-300 mx-auto mb-4" />
                    <p className="text-forest-500">您还没有购买任何课程</p>
                    <button className="btn btn-primary mt-4">
                      浏览课程
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* All Teaching Materials */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream-200">
              <div className="p-6 border-b border-cream-200">
                <h2 className="text-xl font-bold text-forest-900">全部教案</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="border border-cream-200 rounded-lg p-4 hover:bg-cream-50 transition-colors">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary-100 rounded-md mr-4">
                        <FileText className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-forest-900">《好饿的毛毛虫》教案</h3>
                        <p className="text-sm text-forest-600 mt-1">启点阅读力1阶 - 适用年龄：6-9岁</p>
                        <div className="mt-2">
                          <a href="#" className="text-sm text-primary-600 hover:text-primary-800">查看详情</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-cream-200 rounded-lg p-4 hover:bg-cream-50 transition-colors">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary-100 rounded-md mr-4">
                        <FileText className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-forest-900">《爷爷一定有办法》教案</h3>
                        <p className="text-sm text-forest-600 mt-1">启点阅读力2阶 - 适用年龄：6-9岁</p>
                        <div className="mt-2">
                          <a href="#" className="text-sm text-primary-600 hover:text-primary-800">查看详情</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;