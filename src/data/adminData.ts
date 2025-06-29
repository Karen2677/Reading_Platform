export interface Teacher {
  id: number;
  name: string;
  email: string;
  avatar: string;
  department: string;
  position: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'pending';
  courseAccess: number[];
  lastLogin: string;
  totalStudents: number;
  totalCourses: number;
}

export interface CourseAccess {
  id: number;
  teacherId: number;
  courseId: number;
  courseName: string;
  accessLevel: 'view' | 'edit' | 'admin';
  grantedDate: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'revoked';
}

export interface ClassData {
  id: number;
  teacherId: number;
  courseId: number;
  className: string;
  studentCount: number;
  startDate: string;
  endDate: string;
  totalSessions: number;
  completedSessions: number;
  averageAttendance: number;
  averageScore: number;
}

export interface OrganizationStats {
  totalTeachers: number;
  activeTeachers: number;
  totalStudents: number;
  totalCourses: number;
  totalClasses: number;
  monthlyRevenue: number;
  growthRate: number;
  satisfactionScore: number;
}

// Mock data
export const teachersData: Teacher[] = [
  {
    id: 1,
    name: '张小红',
    email: 'zhang.xiaohong@example.com',
    avatar: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    department: '幼儿教育部',
    position: '主班教师',
    joinDate: '2023-03-15',
    status: 'active',
    courseAccess: [1, 2, 3],
    lastLogin: '2024-01-15 09:30',
    totalStudents: 25,
    totalCourses: 3
  },
  {
    id: 2,
    name: '李明华',
    email: 'li.minghua@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    department: '小学教育部',
    position: '语文教师',
    joinDate: '2022-09-01',
    status: 'active',
    courseAccess: [1, 4, 5],
    lastLogin: '2024-01-14 16:45',
    totalStudents: 32,
    totalCourses: 3
  },
  {
    id: 3,
    name: '王美丽',
    email: 'wang.meili@example.com',
    avatar: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    department: '幼儿教育部',
    position: '副班教师',
    joinDate: '2023-08-20',
    status: 'active',
    courseAccess: [2, 3],
    lastLogin: '2024-01-15 08:15',
    totalStudents: 18,
    totalCourses: 2
  },
  {
    id: 4,
    name: '陈志强',
    email: 'chen.zhiqiang@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    department: '培训部',
    position: '培训师',
    joinDate: '2023-01-10',
    status: 'inactive',
    courseAccess: [4, 5, 6],
    lastLogin: '2024-01-10 14:20',
    totalStudents: 0,
    totalCourses: 3
  },
  {
    id: 5,
    name: '刘雅琴',
    email: 'liu.yaqin@example.com',
    avatar: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    department: '小学教育部',
    position: '数学教师',
    joinDate: '2023-11-05',
    status: 'pending',
    courseAccess: [],
    lastLogin: '从未登录',
    totalStudents: 0,
    totalCourses: 0
  }
];

export const courseAccessData: CourseAccess[] = [
  {
    id: 1,
    teacherId: 1,
    courseId: 1,
    courseName: '启点阅读力1阶',
    accessLevel: 'admin',
    grantedDate: '2023-03-15',
    status: 'active'
  },
  {
    id: 2,
    teacherId: 1,
    courseId: 2,
    courseName: '乐米乐早期阅读启蒙',
    accessLevel: 'edit',
    grantedDate: '2023-04-01',
    status: 'active'
  },
  {
    id: 3,
    teacherId: 2,
    courseId: 1,
    courseName: '启点阅读力1阶',
    accessLevel: 'view',
    grantedDate: '2022-09-01',
    expiryDate: '2024-09-01',
    status: 'active'
  },
  {
    id: 4,
    teacherId: 3,
    courseId: 2,
    courseName: '乐米乐早期阅读启蒙',
    accessLevel: 'edit',
    grantedDate: '2023-08-20',
    status: 'active'
  }
];

export const classDataList: ClassData[] = [
  {
    id: 1,
    teacherId: 1,
    courseId: 1,
    className: '小班A组',
    studentCount: 15,
    startDate: '2024-01-08',
    endDate: '2024-03-08',
    totalSessions: 20,
    completedSessions: 8,
    averageAttendance: 92.5,
    averageScore: 85.3
  },
  {
    id: 2,
    teacherId: 1,
    courseId: 1,
    className: '小班B组',
    studentCount: 12,
    startDate: '2024-01-10',
    endDate: '2024-03-10',
    totalSessions: 20,
    completedSessions: 7,
    averageAttendance: 88.7,
    averageScore: 82.1
  },
  {
    id: 3,
    teacherId: 2,
    courseId: 1,
    className: '中班A组',
    studentCount: 18,
    startDate: '2024-01-05',
    endDate: '2024-03-05',
    totalSessions: 24,
    completedSessions: 10,
    averageAttendance: 95.2,
    averageScore: 88.9
  },
  {
    id: 4,
    teacherId: 3,
    courseId: 2,
    className: '托班A组',
    studentCount: 8,
    startDate: '2024-01-12',
    endDate: '2024-02-28',
    totalSessions: 16,
    completedSessions: 6,
    averageAttendance: 90.0,
    averageScore: 0 // 托班不评分
  }
];

export const organizationStats: OrganizationStats = {
  totalTeachers: 5,
  activeTeachers: 3,
  totalStudents: 53,
  totalCourses: 6,
  totalClasses: 4,
  monthlyRevenue: 45600,
  growthRate: 12.5,
  satisfactionScore: 4.7
};