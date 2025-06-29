import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  Download,
  Play,
  Heart,
  MessageCircle,
  Share2,
  Image as ImageIcon,
  Send,
  Menu,
  X
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

const LessonPlanDetailPage: React.FC = () => {
  const { courseId, moduleId } = useParams<{ 
    courseId: string; 
    moduleId: string; 
  }>();
  
  const [activeTab, setActiveTab] = useState('绘本简介');
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: {
        name: '李老师',
        avatar: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      content: '这个教案设计得很棒！孩子们特别喜欢毛毛虫的故事，互动环节也很有趣。',
      likes: 12,
      liked: false,
      replies: [
        {
          id: 2,
          user: {
            name: '王老师',
            avatar: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
          },
          content: '同感！我也用过这个教案，效果确实不错。',
          likes: 5,
          liked: true,
          replies: [],
          timestamp: '2小时前'
        }
      ],
      timestamp: '3小时前'
    },
    {
      id: 3,
      user: {
        name: '张园长',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      content: '请问这个教案适合多大年龄的孩子？我们园里有3-4岁的小朋友。',
      images: ['https://images.pexels.com/photos/8535222/pexels-photo-8535222.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'],
      likes: 8,
      liked: false,
      replies: [],
      timestamp: '5小时前'
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
            <p className="text-forest-500">未找到教案信息</p>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    '绘本简介',
    '活动简介', 
    '所需材料',
    '活动流程',
    '延伸活动',
    '家庭互动',
    '教学视频',
    '讨论区'
  ];

  const toggleLesson = (lessonIndex: number) => {
    setExpandedLesson(expandedLesson === lessonIndex ? null : lessonIndex);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLike = (commentId: number) => {
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
      case '绘本简介':
        return (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">绘本简介</h3>
            <p className="text-forest-700 mb-4">
              本课程基于经典绘本设计，通过生动有趣的故事情节，
              帮助孩子们在阅读中学习知识、培养品格、发展能力。
            </p>
            <p className="text-forest-700 mb-4">
              绘本采用精美的插画和简洁的文字，特别适合幼儿阅读。
              通过这个故事，孩子们可以学习到重要的人生主题和价值观。
            </p>
          </div>
        );
      
      case '活动简介':
        return (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">活动设计理念</h3>
            <p className="text-forest-700 mb-4">
              本次活动以绘本为载体，通过多感官体验、角色扮演、
              手工制作等多种形式，帮助幼儿深入理解故事内容。
            </p>
            <h4 className="font-medium mb-2">活动目标：</h4>
            <ul className="list-disc list-inside text-forest-700 space-y-1 mb-4">
              <li>培养阅读兴趣和良好的阅读习惯</li>
              <li>提升语言表达和理解能力</li>
              <li>发展观察力和想象力</li>
              <li>增强社交能力和合作精神</li>
            </ul>
            <p className="text-forest-700">
              活动设计注重幼儿的主体性和参与性，通过游戏化的方式让学习变得有趣而有意义。
            </p>
          </div>
        );
      
      case '所需材料':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">教学材料清单</h3>
            <div className="space-y-4">
              <div className="bg-cream-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">基础材料：</h4>
                <ul className="list-disc list-inside text-forest-700 space-y-1 text-sm">
                  {module.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-cream-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">手工材料：</h4>
                <ul className="list-disc list-inside text-forest-700 space-y-1 text-sm">
                  <li>彩色卡纸</li>
                  <li>安全剪刀</li>
                  <li>胶水或双面胶</li>
                  <li>彩色笔或蜡笔</li>
                  <li>装饰材料</li>
                </ul>
              </div>
              
              {module.resources && module.resources.length > 0 && (
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">数字资源下载：</h4>
                  <div className="space-y-2">
                    {module.resources.map((resource) => (
                      <a key={resource.id} href={resource.url} className="flex items-center text-primary-600 hover:text-primary-800 text-sm">
                        <Download className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="break-all">{resource.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      case '活动流程':
        const lessons = [
          {
            title: '完整活动流程',
            content: module.lessonPlan?.content || '教案内容加载中...'
          }
        ];
        
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">完整活动流程</h3>
            <div className="space-y-3">
              {lessons.map((lessonItem, index) => (
                <div key={index} className="border border-cream-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 bg-cream-50 hover:bg-cream-100 transition-colors text-left"
                    onClick={() => toggleLesson(index)}
                  >
                    <span className="font-medium text-forest-800 text-sm sm:text-base">{lessonItem.title}</span>
                    {expandedLesson === index ? (
                      <ChevronUp className="h-5 w-5 text-forest-500 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-forest-500 flex-shrink-0 ml-2" />
                    )}
                  </button>
                  
                  {expandedLesson === index && (
                    <div className="p-4 bg-white border-t border-cream-200">
                      <div className="prose max-w-none text-sm">
                        {lessonItem.content.split('\n').map((line, lineIndex) => {
                          if (line.startsWith('**') && line.endsWith('**')) {
                            return (
                              <h4 key={lineIndex} className="font-medium text-forest-800 mt-4 mb-2 first:mt-0">
                                {line.replace(/\*\*/g, '')}
                              </h4>
                            );
                          } else if (line.startsWith('• ')) {
                            return (
                              <p key={lineIndex} className="text-forest-700 mb-1 ml-4">
                                {line}
                              </p>
                            );
                          } else if (line.startsWith('  - ')) {
                            return (
                              <p key={lineIndex} className="text-forest-600 mb-1 ml-8 text-xs">
                                {line}
                              </p>
                            );
                          } else if (line.trim() === '') {
                            return <br key={lineIndex} />;
                          } else {
                            return (
                              <p key={lineIndex} className="text-forest-700 mb-2">
                                {line}
                              </p>
                            );
                          }
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      case '延伸活动':
        return (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">延伸活动建议</h3>
            
            <div className="bg-primary-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2 text-sm sm:text-base">🌱 探索活动</h4>
              <p className="text-forest-700 text-sm">
                结合课程主题，设计相关的探索和观察活动，
                让幼儿在实践中深化理解和体验。
              </p>
            </div>
            
            <div className="bg-accent-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2 text-sm sm:text-base">🎨 创意美术活动</h4>
              <p className="text-forest-700 text-sm">
                用绘画、手工等方式创作相关的艺术作品，
                鼓励幼儿发挥想象力，表达自己的理解。
              </p>
            </div>
            
            <div className="bg-accent-100 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2 text-sm sm:text-base">🎭 角色扮演</h4>
              <p className="text-forest-700 text-sm">
                通过角色扮演和戏剧表演，让幼儿更深入地理解故事情节，
                培养表达能力和同理心。
              </p>
            </div>
          </div>
        );
      
      case '家庭互动':
        return (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">家庭互动指南</h3>
            
            <div className="bg-accent-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2 text-sm sm:text-base">📚 亲子共读建议</h4>
              <ul className="list-disc list-inside text-forest-700 space-y-1 text-sm">
                <li>每天安排固定的亲子阅读时间</li>
                <li>鼓励孩子复述故事情节</li>
                <li>引导孩子观察绘本中的细节</li>
                <li>与孩子讨论故事的意义和感受</li>
              </ul>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2 text-sm sm:text-base">🏠 家庭延伸活动</h4>
              <ul className="list-disc list-inside text-forest-700 space-y-1 text-sm">
                <li>在家中寻找与课程相关的物品或现象</li>
                <li>制作相关主题的手工作品</li>
                <li>观看相关的纪录片或视频</li>
                <li>进行相关的游戏和体验活动</li>
              </ul>
            </div>
            
            <div className="bg-accent-100 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-sm sm:text-base">💡 家长小贴士</h4>
              <p className="text-forest-700 text-sm">
                在与孩子互动时，要耐心倾听孩子的想法，鼓励他们提出问题。
                可以结合日常生活中的观察，帮助孩子更好地理解课程内容。
              </p>
            </div>
          </div>
        );
      
      case '教学视频':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">相关教学视频</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-cream-100 rounded-lg p-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-3">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-forest-400" />
                </div>
                <h4 className="font-medium mb-2 text-sm sm:text-base">绘本导读示范</h4>
                <p className="text-xs sm:text-sm text-forest-600 mb-3">专业教师示范如何生动地讲述绘本故事</p>
                <button className="btn btn-primary text-xs sm:text-sm w-full">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  观看视频
                </button>
              </div>
              
              <div className="bg-cream-100 rounded-lg p-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-3">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-forest-400" />
                </div>
                <h4 className="font-medium mb-2 text-sm sm:text-base">手工制作教程</h4>
                <p className="text-xs sm:text-sm text-forest-600 mb-3">详细演示相关手工制作的每个步骤</p>
                <button className="btn btn-primary text-xs sm:text-sm w-full">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  观看视频
                </button>
              </div>
              
              <div className="bg-cream-100 rounded-lg p-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-3">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-forest-400" />
                </div>
                <h4 className="font-medium mb-2 text-sm sm:text-base">互动游戏示范</h4>
                <p className="text-xs sm:text-sm text-forest-600 mb-3">展示如何组织有趣的课堂互动游戏</p>
                <button className="btn btn-primary text-xs sm:text-sm w-full">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  观看视频
                </button>
              </div>
              
              <div className="bg-cream-100 rounded-lg p-4">
                <div className="aspect-video bg-cream-200 rounded-lg flex items-center justify-center mb-3">
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-forest-400" />
                </div>
                <h4 className="font-medium mb-2 text-sm sm:text-base">课堂实录</h4>
                <p className="text-xs sm:text-sm text-forest-600 mb-3">真实课堂教学实录，学习实际应用技巧</p>
                <button className="btn btn-primary text-xs sm:text-sm w-full">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  观看视频
                </button>
              </div>
            </div>
          </div>
        );
      
      case '讨论区':
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">教师讨论区</h3>
            
            {/* Comment Input */}
            <div className="bg-cream-50 p-4 rounded-lg mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="分享您的教学心得或提出问题..."
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
                          onClick={() => handleLike(comment.id)}
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
                <p className="text-sm text-forest-600 mt-1">课程模块导航</p>
              </div>
              
              <div className="space-y-2">
                {course.modules.map((mod) => (
                  <div key={mod.id} className="border border-cream-200 rounded-lg overflow-hidden">
                    <div className="p-3">
                      <Link
                        to={`/courses/${courseId}/modules/${mod.id}`}
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
              {/* Module Header */}
              <div className="relative h-64">
                <img
                  src={course.coverImage}
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white">
                    <h1 className="text-2xl font-bold mb-2">{module.title}</h1>
                    <p className="text-cream-200">{module.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-cream-200">
                <div className="flex overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0",
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
                            to={`/courses/${courseId}/modules/${mod.id}`}
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
            {/* Mobile Module Header */}
            <div className="relative h-48">
              <img
                src={course.coverImage}
                alt={module.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-4 text-white">
                  <h1 className="text-xl font-bold mb-1">{module.title}</h1>
                  <p className="text-cream-200 text-sm">{module.description}</p>
                </div>
              </div>
            </div>
            
            {/* Mobile Tabs */}
            <div className="border-b border-cream-200">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-3 py-3 text-xs font-medium whitespace-nowrap border-b-2 transition-colors flex-shrink-0",
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

export default LessonPlanDetailPage;