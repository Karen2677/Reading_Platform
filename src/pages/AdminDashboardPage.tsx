import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  DollarSign,
  Star,
  Calendar,
  Settings,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  UserPlus,
  Shield,
  Clock,
  Target,
  Award,
  AlertCircle,
  CheckCircle,
  XCircle,
  LogOut
} from 'lucide-react';
import { cn } from '../utils/cn';
import { 
  teachersData, 
  courseAccessData, 
  classDataList, 
  organizationStats,
  Teacher,
  CourseAccess,
  ClassData
} from '../data/adminData';
import { coursesData } from '../data/coursesData';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'teachers' | 'courses' | 'analytics'>('overview');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isAddTeacherModalOpen, setIsAddTeacherModalOpen] = useState(false);
  const [isCourseAccessModalOpen, setIsCourseAccessModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive' | 'pending'>('all');

  // 过滤教师数据
  const filteredTeachers = teachersData.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || teacher.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // 获取教师的课程权限
  const getTeacherCourseAccess = (teacherId: number) => {
    return courseAccessData.filter(access => access.teacherId === teacherId);
  };

  // 获取教师的班级数据
  const getTeacherClasses = (teacherId: number) => {
    return classDataList.filter(classData => classData.teacherId === teacherId);
  };

  // 退出管理中心
  const handleLogout = () => {
    navigate('/account');
  };

  // 状态标签组件
  const StatusBadge: React.FC<{ status: 'active' | 'inactive' | 'pending' }> = ({ status }) => {
    const statusConfig = {
      active: { label: '活跃', color: 'bg-green-100 text-green-700', icon: CheckCircle },
      inactive: { label: '停用', color: 'bg-red-100 text-red-700', icon: XCircle },
      pending: { label: '待激活', color: 'bg-yellow-100 text-yellow-700', icon: AlertCircle }
    };
    
    const config = statusConfig[status];
    const Icon = config.icon;
    
    return (
      <span className={cn('inline-flex items-center px-2 py-1 rounded-full text-xs font-medium', config.color)}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </span>
    );
  };

  // 权限级别标签组件
  const AccessLevelBadge: React.FC<{ level: 'view' | 'edit' | 'admin' }> = ({ level }) => {
    const levelConfig = {
      view: { label: '查看', color: 'bg-blue-100 text-blue-700' },
      edit: { label: '编辑', color: 'bg-purple-100 text-purple-700' },
      admin: { label: '管理', color: 'bg-red-100 text-red-700' }
    };
    
    const config = levelConfig[level];
    
    return (
      <span className={cn('inline-flex items-center px-2 py-1 rounded-full text-xs font-medium', config.color)}>
        {config.label}
      </span>
    );
  };

  // 概览页面
  const OverviewTab = () => (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-forest-600">总教师数</p>
              <p className="text-2xl font-bold text-forest-900">{organizationStats.totalTeachers}</p>
              <p className="text-xs text-green-600 mt-1">活跃: {organizationStats.activeTeachers}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-forest-600">总学员数</p>
              <p className="text-2xl font-bold text-forest-900">{organizationStats.totalStudents}</p>
              <p className="text-xs text-green-600 mt-1">+{organizationStats.growthRate}% 本月</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-forest-600">课程总数</p>
              <p className="text-2xl font-bold text-forest-900">{organizationStats.totalCourses}</p>
              <p className="text-xs text-blue-600 mt-1">进行中: {organizationStats.totalClasses}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-forest-600">月度收入</p>
              <p className="text-2xl font-bold text-forest-900">¥{organizationStats.monthlyRevenue.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1">满意度: {organizationStats.satisfactionScore}/5</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* 最近活动 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-cream-200">
          <div className="p-6 border-b border-cream-200">
            <h3 className="text-lg font-medium text-forest-900">最近活动</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <UserPlus className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-forest-900">新教师加入</p>
                  <p className="text-xs text-forest-600">刘雅琴 加入小学教育部</p>
                  <p className="text-xs text-forest-400">2小时前</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-forest-900">课程权限更新</p>
                  <p className="text-xs text-forest-600">张小红 获得新课程管理权限</p>
                  <p className="text-xs text-forest-400">5小时前</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Award className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-forest-900">教学成果</p>
                  <p className="text-xs text-forest-600">李明华班级平均分达到88.9分</p>
                  <p className="text-xs text-forest-400">1天前</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-cream-200">
          <div className="p-6 border-b border-cream-200">
            <h3 className="text-lg font-medium text-forest-900">本月课程进度</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {classDataList.slice(0, 3).map((classData) => {
                const teacher = teachersData.find(t => t.id === classData.teacherId);
                const progress = (classData.completedSessions / classData.totalSessions) * 100;
                
                return (
                  <div key={classData.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-forest-900">{classData.className}</p>
                        <p className="text-xs text-forest-600">{teacher?.name} · {classData.studentCount}人</p>
                      </div>
                      <span className="text-xs text-forest-500">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-cream-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 教师管理页面
  const TeachersTab = () => (
    <div className="space-y-6">
      {/* 搜索和筛选 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-cream-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-forest-400" />
              <input
                type="text"
                placeholder="搜索教师姓名、邮箱或部门..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
            >
              <option value="all">全部状态</option>
              <option value="active">活跃</option>
              <option value="inactive">停用</option>
              <option value="pending">待激活</option>
            </select>
            
            <button
              onClick={() => setIsAddTeacherModalOpen(true)}
              className="btn btn-primary flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              添加教师
            </button>
          </div>
        </div>
      </div>

      {/* 教师列表 */}
      <div className="bg-white rounded-xl shadow-sm border border-cream-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-cream-50 border-b border-cream-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-forest-500 uppercase tracking-wider">教师信息</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-forest-500 uppercase tracking-wider">部门职位</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-forest-500 uppercase tracking-wider">状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-forest-500 uppercase tracking-wider">课程权限</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-forest-500 uppercase tracking-wider">教学数据</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-forest-500 uppercase tracking-wider">最后登录</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-forest-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-cream-200">
              {filteredTeachers.map((teacher) => {
                const teacherAccess = getTeacherCourseAccess(teacher.id);
                const teacherClasses = getTeacherClasses(teacher.id);
                
                return (
                  <tr key={teacher.id} className="hover:bg-cream-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={teacher.avatar}
                          alt={teacher.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-forest-900">{teacher.name}</div>
                          <div className="text-sm text-forest-500">{teacher.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-forest-900">{teacher.department}</div>
                      <div className="text-sm text-forest-500">{teacher.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={teacher.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-forest-900">{teacherAccess.length} 个课程</div>
                      <div className="flex gap-1 mt-1">
                        {teacherAccess.slice(0, 2).map((access) => (
                          <AccessLevelBadge key={access.id} level={access.accessLevel} />
                        ))}
                        {teacherAccess.length > 2 && (
                          <span className="text-xs text-forest-500">+{teacherAccess.length - 2}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-forest-900">{teacher.totalStudents} 学员</div>
                      <div className="text-sm text-forest-500">{teacherClasses.length} 个班级</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-forest-900">{teacher.lastLogin}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedTeacher(teacher)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTeacher(teacher);
                            setIsCourseAccessModalOpen(true);
                          }}
                          className="text-purple-600 hover:text-purple-900"
                        >
                          <Shield className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // 课程权限管理页面
  const CoursesTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-cream-200">
        <div className="p-6 border-b border-cream-200">
          <h3 className="text-lg font-medium text-forest-900">课程权限管理</h3>
          <p className="text-sm text-forest-600 mt-1">管理教师对各课程的访问权限</p>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-cream-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-forest-500 uppercase">教师</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-forest-500 uppercase">课程</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-forest-500 uppercase">权限级别</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-forest-500 uppercase">授权日期</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-forest-500 uppercase">状态</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-forest-500 uppercase">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {courseAccessData.map((access) => {
                  const teacher = teachersData.find(t => t.id === access.teacherId);
                  
                  return (
                    <tr key={access.id} className="hover:bg-cream-50">
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <img
                            src={teacher?.avatar}
                            alt={teacher?.name}
                            className="h-8 w-8 rounded-full object-cover mr-3"
                          />
                          <span className="text-sm font-medium text-forest-900">{teacher?.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-forest-900">{access.courseName}</span>
                      </td>
                      <td className="px-4 py-4">
                        <AccessLevelBadge level={access.accessLevel} />
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-forest-900">{access.grantedDate}</span>
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge status={access.status as any} />
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="text-green-600 hover:text-green-900">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // 数据分析页面
  const AnalyticsTab = () => (
    <div className="space-y-6">
      {/* 教学效果分析 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-cream-200">
          <div className="p-6 border-b border-cream-200">
            <h3 className="text-lg font-medium text-forest-900">班级教学数据</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {classDataList.map((classData) => {
                const teacher = teachersData.find(t => t.id === classData.teacherId);
                const progress = (classData.completedSessions / classData.totalSessions) * 100;
                
                return (
                  <div key={classData.id} className="border border-cream-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium text-forest-900">{classData.className}</h4>
                        <p className="text-sm text-forest-600">{teacher?.name} · {classData.studentCount}人</p>
                      </div>
                      <span className="text-sm font-medium text-primary-600">{Math.round(progress)}%</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-forest-500">出勤率</p>
                        <p className="text-sm font-medium text-forest-900">{classData.averageAttendance}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-forest-500">平均分</p>
                        <p className="text-sm font-medium text-forest-900">
                          {classData.averageScore > 0 ? `${classData.averageScore}分` : '无评分'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-cream-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-cream-200">
          <div className="p-6 border-b border-cream-200">
            <h3 className="text-lg font-medium text-forest-900">教师绩效排名</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {teachersData
                .filter(teacher => teacher.status === 'active')
                .sort((a, b) => b.totalStudents - a.totalStudents)
                .map((teacher, index) => {
                  const teacherClasses = getTeacherClasses(teacher.id);
                  const avgAttendance = teacherClasses.length > 0 
                    ? teacherClasses.reduce((sum, cls) => sum + cls.averageAttendance, 0) / teacherClasses.length 
                    : 0;
                  
                  return (
                    <div key={teacher.id} className="flex items-center justify-between p-3 bg-cream-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3",
                          index === 0 ? "bg-yellow-100 text-yellow-700" :
                          index === 1 ? "bg-gray-100 text-gray-700" :
                          index === 2 ? "bg-orange-100 text-orange-700" :
                          "bg-blue-100 text-blue-700"
                        )}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-forest-900">{teacher.name}</p>
                          <p className="text-sm text-forest-600">{teacher.totalStudents}名学员</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-forest-900">{avgAttendance.toFixed(1)}%</p>
                        <p className="text-xs text-forest-500">平均出勤</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* 月度趋势 */}
      <div className="bg-white rounded-xl shadow-sm border border-cream-200">
        <div className="p-6 border-b border-cream-200">
          <h3 className="text-lg font-medium text-forest-900">月度数据趋势</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">+{organizationStats.growthRate}%</div>
              <p className="text-sm text-forest-600">学员增长率</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{organizationStats.satisfactionScore}</div>
              <p className="text-sm text-forest-600">满意度评分</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">92.3%</div>
              <p className="text-sm text-forest-600">平均出勤率</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        {/* 页面头部 */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-forest-900 mb-2">机构管理中心</h1>
            <p className="text-forest-600">管理本机构的教师账号、课程权限和教学数据</p>
          </div>
          <button
            onClick={handleLogout}
            className="btn bg-red-50 text-red-600 hover:bg-red-100 flex items-center gap-2 border border-red-200"
          >
            <LogOut className="h-4 w-4" />
            退出管理中心
          </button>
        </div>

        {/* 标签导航 */}
        <div className="bg-white rounded-xl shadow-sm border border-cream-200 mb-8">
          <div className="flex overflow-x-auto">
            {[
              { key: 'overview', label: '概览', icon: TrendingUp },
              { key: 'teachers', label: '教师管理', icon: Users },
              { key: 'courses', label: '课程权限', icon: Shield },
              { key: 'analytics', label: '数据分析', icon: Target }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={cn(
                  "flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap border-b-2",
                  activeTab === key
                    ? "text-primary-600 border-primary-600"
                    : "text-forest-600 border-transparent hover:text-forest-800"
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 标签内容 */}
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'teachers' && <TeachersTab />}
        {activeTab === 'courses' && <CoursesTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}

        {/* 教师详情模态框 */}
        {selectedTeacher && !isCourseAccessModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-cream-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-forest-900">教师详情</h3>
                  <button
                    onClick={() => setSelectedTeacher(null)}
                    className="text-forest-400 hover:text-forest-600"
                  >
                    <XCircle className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={selectedTeacher.avatar}
                    alt={selectedTeacher.name}
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-forest-900">{selectedTeacher.name}</h4>
                    <p className="text-forest-600">{selectedTeacher.email}</p>
                    <div className="mt-2">
                      <StatusBadge status={selectedTeacher.status} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-medium text-forest-700">部门</p>
                    <p className="text-forest-900">{selectedTeacher.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest-700">职位</p>
                    <p className="text-forest-900">{selectedTeacher.position}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest-700">入职日期</p>
                    <p className="text-forest-900">{selectedTeacher.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest-700">最后登录</p>
                    <p className="text-forest-900">{selectedTeacher.lastLogin}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-medium text-forest-900 mb-3">课程权限</h5>
                  <div className="space-y-2">
                    {getTeacherCourseAccess(selectedTeacher.id).map((access) => (
                      <div key={access.id} className="flex items-center justify-between p-3 bg-cream-50 rounded-lg">
                        <span className="font-medium text-forest-900">{access.courseName}</span>
                        <AccessLevelBadge level={access.accessLevel} />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-medium text-forest-900 mb-3">教学班级</h5>
                  <div className="space-y-2">
                    {getTeacherClasses(selectedTeacher.id).map((classData) => (
                      <div key={classData.id} className="p-3 bg-cream-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-forest-900">{classData.className}</span>
                          <span className="text-sm text-forest-600">{classData.studentCount}人</span>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-forest-500">出勤率: </span>
                            <span className="font-medium">{classData.averageAttendance}%</span>
                          </div>
                          <div>
                            <span className="text-forest-500">平均分: </span>
                            <span className="font-medium">
                              {classData.averageScore > 0 ? `${classData.averageScore}分` : '无评分'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 课程权限管理模态框 */}
        {isCourseAccessModalOpen && selectedTeacher && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-lg w-full">
              <div className="p-6 border-b border-cream-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-forest-900">管理课程权限</h3>
                  <button
                    onClick={() => setIsCourseAccessModalOpen(false)}
                    className="text-forest-400 hover:text-forest-600"
                  >
                    <XCircle className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-sm text-forest-600 mt-1">为 {selectedTeacher.name} 分配课程权限</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {coursesData.slice(0, 4).map((course) => {
                    const hasAccess = getTeacherCourseAccess(selectedTeacher.id).some(
                      access => access.courseId === course.id
                    );
                    
                    return (
                      <div key={course.id} className="flex items-center justify-between p-3 border border-cream-200 rounded-lg">
                        <div>
                          <p className="font-medium text-forest-900">{course.title}</p>
                          <p className="text-sm text-forest-600">{course.ageGroup}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {hasAccess && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">已授权</span>
                          )}
                          <select className="text-sm border border-cream-300 rounded px-2 py-1">
                            <option value="">无权限</option>
                            <option value="view">查看</option>
                            <option value="edit">编辑</option>
                            <option value="admin">管理</option>
                          </select>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setIsCourseAccessModalOpen(false)}
                    className="btn btn-outline"
                  >
                    取消
                  </button>
                  <button className="btn btn-primary">
                    保存权限
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;