import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { 
  ChevronLeft, 
  Play,
  Heart,
  MessageCircle,
  Share2,
  Image as ImageIcon,
  Send,
  Menu,
  X,
  Bookmark
} from 'lucide-react';
import { cn } from '../utils/cn';

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  images?: string[];
  likes: number;
  liked: boolean;
  replies: Comment[];
  timestamp: string;
}

const ExpertLessonPlanDetailPage: React.FC = () => {
  const { courseId, moduleId } = useParams<{ 
    courseId: string; 
    moduleId: string; 
  }>();
  
  const [activeTab, setActiveTab] = useState('活动简介');
  const [newComment, setNewComment] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(89);
  const [bookmarkCount, setBookmarkCount] = useState(34);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: {
        name: '张老师',
        avatar: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      content: '王明教授的这个培训内容非常实用，特别是关于儿童阅读心理发展的部分，让我对不同年龄段孩子的特点有了更深入的理解。',
      likes: 15,
      liked: false,
      replies: [
        {
          id: 2,
          user: {
            name: '李园长',
            avatar: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
          },
          content: '同感！我们园里已经开始按照这个理论调整教学方法了，效果很明显。',
          likes: 8,
          liked: true,
          replies: [],
          timestamp: '1小时前'
        }
      ],
      timestamp: '2小时前'
    },
    {
      id: 3,
      user: {
        name: '王主任',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      content: '请问教授，对于3-4岁的孩子，如何判断他们是否真正理解了故事内容？有什么具体的评估方法吗？',
      images: ['https://images.pexels.com/photos/8535222/pexels-photo-8535222.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'],
      likes: 12,
      liked: false,
      replies: [],
      timestamp: '3小时前'
    }
  ]);

  // Find the course and module
  const course = coursesData.find((c) => c.id === Number(courseId));
  const module = course?.modules.find((m) => m.id === Number(moduleId));

  if (!course || !module) {
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

  // Only show these tabs for expert training courses
  const tabs = ['活动简介', '教学视频', '讨论区'];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    setBookmarkCount(prev => isBookmarked ? prev - 1 : prev + 1);
  };

  const handleCommentLike = (commentId: number) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          liked: !comment.liked,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1
        };
      }
      return comment;
    }));
  };

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        user: {
          name: '我',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
        },
        content: newComment,
        likes: 0,
        liked: false,
        replies: [],
        timestamp: '刚刚'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case '活动简介':
        return (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">课程内容概述</h3>
            <p className="text-forest-700 mb-4">
              本课程深入探讨儿童阅读心理发展的核心理论与实践应用。通过系统性的理论学习和案例分析，
              帮助教师全面理解不同年龄段儿童的阅读心理特点，掌握科学的阅读教学方法。
            </p>
            
            <h4 className="font-medium mb-3 text-base">学习目标</h4>
            <div className="bg-primary-50 p-4 rounded-lg mb-4">
              <ul className="list-disc list-inside text-forest-700 space-y-2 text-sm">
                <li>深入理解0-12岁儿童阅读心理发展的阶段性特征</li>
                <li>掌握不同年龄段儿童的阅读能力评估方法</li>
                <li>学会根据儿童发展特点选择适宜的阅读材料</li>
                <li>提升个性化阅读指导的专业能力</li>
                <li>建立科学的阅读教学观念和方法体系</li>
              </ul>
            </div>
            
            <h4 className="font-medium mb-3 text-base">核心内容</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-accent-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2 text-sm">理论基础</h5>
                <ul className="text-xs text-forest-700 space-y-1">
                  <li>• 儿童认知发展理论</li>
                  <li>• 语言习得与阅读发展</li>
                  <li>• 阅读动机与兴趣培养</li>
                  <li>• 多元智能理论应用</li>
                </ul>
              </div>
              
              <div className="bg-accent-100 p-4 rounded-lg">
                <h5 className="font-medium mb-2 text-sm">实践应用</h5>
                <ul className="text-xs text-forest-700 space-y-1">
                  <li>• 阅读材料分级与选择</li>
                  <li>• 个性化教学策略设计</li>
                  <li>• 阅读困难儿童的支持</li>
                  <li>• 家校合作指导方法</li>
                </ul>
              </div>
            </div>
            
            <h4 className="font-medium mb-3 text-base">适用对象</h4>
            <div className="bg-primary-100 p-4 rounded-lg">
              <p className="text-forest-700 text-sm">
                本课程适合幼儿园教师、小学语文教师、阅读推广人员、儿童图书馆员、
                教育管理者以及对儿童阅读教育感兴趣的家长和教育工作者。
              </p>
            </div>
          </div>
        );
      
      case '教学视频':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">专家讲座视频</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Main Video */}
              <div className="lg:col-span-2 bg-cream-100 rounded-lg p-6 mb-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-forest-400 mx-auto mb-4" />
                    <h4 className="font-medium text-forest-700 mb-2">主讲视频：儿童阅读心理发展特点</h4>
                    <p className="text-sm text-forest-600 mb-4">王明教授详细讲解不同年龄段儿童的阅读心理特征</p>
                    <button className="btn btn-primary">
                      <Play className="h-5 w-5 mr-2" />
                      开始学习 (45分钟)
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Supplementary Videos */}
              <div className="bg-cream-100 rounded-lg p-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-3">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-forest-400" />
                </div>
                <h4 className="font-medium mb-2 text-sm sm:text-base">案例分析：3-4岁幼儿阅读指导</h4>
                <p className="text-xs sm:text-sm text-forest-600 mb-3">实际案例演示如何进行有效的阅读指导</p>
                <button className="btn btn-outline text-xs sm:text-sm w-full">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  观看视频 (20分钟)
                </button>
              </div>
              
              <div className="bg-cream-100 rounded-lg p-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-3">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-forest-400" />
                </div>
                <h4 className="font-medium mb-2 text-sm sm:text-base">实操演示：阅读能力评估方法</h4>
                <p className="text-xs sm:text-sm text-forest-600 mb-3">专业的阅读能力评估工具使用方法</p>
                <button className="btn btn-outline text-xs sm:text-sm w-full">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  观看视频 (15分钟)
                </button>
              </div>
              
              <div className="bg-cream-100 rounded-lg p-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-3">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-forest-400" />
                </div>
                <h4 className="font-medium mb-2 text-sm sm:text-base">互动答疑：常见问题解答</h4>
                <p className="text-xs sm:text-sm text-forest-600 mb-3">王明教授回答学员常见问题</p>
                <button className="btn btn-outline text-xs sm:text-sm w-full">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  观看视频 (25分钟)
                </button>
              </div>
              
              <div className="bg-cream-100 rounded-lg p-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-3">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-forest-400" />
                </div>
                <h4 className="font-medium mb-2 text-sm sm:text-base">延伸学习：最新研究成果分享</h4>
                <p className="text-xs sm:text-sm text-forest-600 mb-3">国际前沿的儿童阅读研究动态</p>
                <button className="btn btn-outline text-xs sm:text-sm w-full">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  观看视频 (30分钟)
                </button>
              </div>
            </div>
            
            {/* Learning Progress */}
            <div className="mt-6 bg-primary-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">学习进度</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>主讲视频</span>
                  <span className="text-primary-600">已完成</span>
                </div>
                <div className="w-full bg-cream-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm mt-3">
                  <span>补充视频</span>
                  <span className="text-forest-600">2/4 已观看</span>
                </div>
                <div className="w-full bg-cream-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case '讨论区':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">学员讨论区</h3>
            
            {/* Comment Input */}
            <div className="bg-cream-50 p-4 rounded-lg mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="分享您的学习心得，提出疑问，或与其他学员交流..."
                className="w-full p-3 border border-cream-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm bg-white"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3">
                <button className="flex items-center text-forest-500 hover:text-forest-700 text-sm">
                  <ImageIcon className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">添加图片</span>
                  <span className="sm:hidden">图片</span>
                </button>
                <button
                  onClick={handleSubmitComment}
                  className="btn btn-primary text-sm"
                  disabled={!newComment.trim()}
                >
                  <Send className="h-4 w-4 mr-2" />
                  发布
                </button>
              </div>
            </div>
            
            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-white p-4 rounded-lg border border-cream-200">
                  <div className="flex items-start space-x-3">
                    <img
                      src={comment.user.avatar}
                      alt={comment.user.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-forest-900 text-sm">{comment.user.name}</span>
                        <span className="text-xs text-forest-500">{comment.timestamp}</span>
                      </div>
                      
                      <p className="text-forest-700 mb-3 text-sm break-words">{comment.content}</p>
                      
                      {comment.images && comment.images.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {comment.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt=""
                              className="w-full h-24 sm:h-32 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleCommentLike(comment.id)}
                          className={cn(
                            "flex items-center space-x-1 text-xs sm:text-sm",
                            comment.liked ? "text-red-500" : "text-forest-500 hover:text-red-500"
                          )}
                        >
                          <Heart className={cn("h-3 w-3 sm:h-4 sm:w-4", comment.liked && "fill-current")} />
                          <span>{comment.likes}</span>
                        </button>
                        
                        <button className="flex items-center space-x-1 text-xs sm:text-sm text-forest-500 hover:text-primary-500">
                          <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>回复</span>
                        </button>
                        
                        <button className="flex items-center space-x-1 text-xs sm:text-sm text-forest-500 hover:text-primary-500">
                          <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">分享</span>
                        </button>
                      </div>
                      
                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 pl-2 sm:pl-4 border-l-2 border-cream-100 space-y-3">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start space-x-2 sm:space-x-3">
                              <img
                                src={reply.user.avatar}
                                alt={reply.user.name}
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                              />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-medium text-forest-900 text-xs sm:text-sm">{reply.user.name}</span>
                                  <span className="text-xs text-forest-500">{reply.timestamp}</span>
                                </div>
                                <p className="text-forest-700 text-xs sm:text-sm mb-2 break-words">{reply.content}</p>
                                <div className="flex items-center space-x-3">
                                  <button className={cn(
                                    "flex items-center space-x-1 text-xs",
                                    reply.liked ? "text-red-500" : "text-forest-500 hover:text-red-500"
                                  )}>
                                    <Heart className={cn("h-3 w-3", reply.liked && "fill-current")} />
                                    <span>{reply.likes}</span>
                                  </button>
                                  <button className="text-xs text-forest-500 hover:text-primary-500">回复</button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <div>内容加载中...</div>;
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen bg-cream-50">
      <div className="container-custom">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white rounded-xl shadow-sm p-4 mb-4 border border-cream-200">
          <div className="flex items-center justify-between">
            <Link
              to={`/courses/${courseId}`}
              className="flex items-center text-primary-600 hover:text-primary-800"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span className="text-sm">返回课程</span>
            </Link>
            <button
              onClick={toggleSidebar}
              className="flex items-center text-forest-600 hover:text-forest-800"
            >
              <Menu className="h-5 w-5 mr-1" />
              <span className="text-sm">目录</span>
            </button>
          </div>
          <h1 className="text-lg font-bold text-forest-900 mt-2 truncate">{module.title}</h1>
          <p className="text-sm text-forest-600">{module.description}</p>
        </div>

        {/* Desktop Layout: Left-Right Two Columns */}
        <div className="hidden lg:flex gap-8">
          {/* Left Sidebar - Course Modules (Desktop Only) */}
          <div className="w-80 shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto border border-cream-200">
              <div className="mb-6">
                <Link
                  to={`/courses/${courseId}`}
                  className="flex items-center text-primary-600 hover:text-primary-800 mb-4"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  返回课程
                </Link>
                <h2 className="text-lg font-bold text-forest-900">{course.title}</h2>
                <p className="text-sm text-forest-600 mt-1">专家培训课程</p>
              </div>
              
              <div className="space-y-2">
                {course.modules.map((mod) => (
                  <div key={mod.id} className="border border-cream-200 rounded-lg overflow-hidden">
                    <div className="p-3">
                      <Link
                        to={`/expert-courses/${courseId}/modules/${mod.id}`}
                        className={cn(
                          "block p-2 rounded text-sm transition-colors",
                          mod.id === Number(moduleId)
                            ? "bg-primary-100 text-primary-700 font-medium"
                            : "text-forest-600 hover:bg-cream-100"
                        )}
                      >
                        {mod.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area (Desktop Only) */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-cream-200">
              {/* Course Information - Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                {/* Left: Course Image */}
                <div className="lg:order-1">
                  <div className="relative">
                    <img
                      src={course.coverImage}
                      alt={module.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
                      专家培训
                    </div>
                  </div>
                </div>
                
                {/* Right: Course Basic Information */}
                <div className="lg:order-2 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-2xl font-bold text-forest-900 mb-2">{module.title}</h1>
                      <p className="text-forest-600">{module.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <span className="text-forest-500 w-20">所属课程：</span>
                        <span className="font-medium text-forest-800">{course.title}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <span className="text-forest-500 w-20">课程类型：</span>
                        <span className="font-medium text-forest-800">专家培训</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <span className="text-forest-500 w-20">学习时长：</span>
                        <span className="font-medium text-forest-800">135分钟</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <span className="text-forest-500 w-20">视频数量：</span>
                        <span className="font-medium text-forest-800">5 个</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <span className="text-forest-500 w-20">学习进度：</span>
                        <span className="font-medium text-forest-800">60% 已完成</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleLike}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                          isLiked 
                            ? "bg-red-50 text-red-600 border border-red-200" 
                            : "bg-cream-100 text-forest-700 hover:bg-cream-200 border border-cream-300"
                        )}
                      >
                        <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
                        <span>{likeCount}</span>
                      </button>
                      
                      <button
                        onClick={handleBookmark}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                          isBookmarked 
                            ? "bg-blue-50 text-blue-600 border border-blue-200" 
                            : "bg-cream-100 text-forest-700 hover:bg-cream-200 border border-cream-300"
                        )}
                      >
                        <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
                        <span>{bookmarkCount}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="border-t border-cream-200">
                <div className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
                        activeTab === tab
                          ? "border-primary-500 text-primary-600"
                          : "border-transparent text-forest-500 hover:text-forest-700"
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Single Column */}
        <div className="lg:hidden">
          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleSidebar}>
              <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="p-4 border-b border-cream-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-forest-900">课程目录</h2>
                    <button onClick={toggleSidebar} className="text-forest-500 hover:text-forest-700">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="p-4 overflow-y-auto h-full pb-20">
                  <div className="space-y-2">
                    {course.modules.map((mod) => (
                      <div key={mod.id} className="border border-cream-200 rounded-lg overflow-hidden">
                        <div className="p-3">
                          <Link
                            to={`/expert-courses/${courseId}/modules/${mod.id}`}
                            onClick={toggleSidebar}
                            className={cn(
                              "block p-2 rounded text-sm transition-colors",
                              mod.id === Number(moduleId)
                                ? "bg-primary-100 text-primary-700 font-medium"
                                : "text-forest-600 hover:bg-cream-100"
                            )}
                          >
                            {mod.title}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Mobile Content */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-cream-200">
            {/* Mobile Course Information - Two Column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              {/* Course Image */}
              <div className="sm:order-1">
                <div className="relative">
                  <img
                    src={course.coverImage}
                    alt={module.title}
                    className="w-full h-48 sm:h-56 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">
                    专家培训
                  </div>
                </div>
              </div>
              
              {/* Course Basic Information */}
              <div className="sm:order-2 flex flex-col justify-center">
                <div className="space-y-3">
                  <div>
                    <h1 className="text-lg font-bold text-forest-900 mb-1">{module.title}</h1>
                    <p className="text-sm text-forest-600">{module.description}</p>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex">
                      <span className="text-forest-500 w-16">课程：</span>
                      <span className="font-medium text-forest-800">{course.title}</span>
                    </div>
                    
                    <div className="flex">
                      <span className="text-forest-500 w-16">类型：</span>
                      <span className="font-medium text-forest-800">专家培训</span>
                    </div>
                    
                    <div className="flex">
                      <span className="text-forest-500 w-16">时长：</span>
                      <span className="font-medium text-forest-800">135分钟</span>
                    </div>
                    
                    <div className="flex">
                      <span className="text-forest-500 w-16">进度：</span>
                      <span className="font-medium text-forest-800">60%</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={handleLike}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-colors text-xs flex-1",
                        isLiked 
                          ? "bg-red-50 text-red-600 border border-red-200" 
                          : "bg-cream-100 text-forest-700 hover:bg-cream-200 border border-cream-300"
                      )}
                    >
                      <Heart className={cn("h-3 w-3", isLiked && "fill-current")} />
                      <span>{likeCount}</span>
                    </button>
                    
                    <button
                      onClick={handleBookmark}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-colors text-xs flex-1",
                        isBookmarked 
                          ? "bg-blue-50 text-blue-600 border border-blue-200" 
                          : "bg-cream-100 text-forest-700 hover:bg-cream-200 border border-cream-300"
                      )}
                    >
                      <Bookmark className={cn("h-3 w-3", isBookmarked && "fill-current")} />
                      <span>{bookmarkCount}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Tabs */}
            <div className="border-t border-cream-200">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "flex-1 px-3 py-3 text-xs font-medium border-b-2 transition-colors",
                      activeTab === tab
                        ? "border-primary-500 text-primary-600"
                        : "border-transparent text-forest-500 hover:text-forest-700"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Tab Content */}
            <div className="p-4">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertLessonPlanDetailPage;