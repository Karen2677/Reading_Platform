import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { resourcesData } from '../data/resourcesData';
import { 
  FileText, 
  Download, 
  Video, 
  Image, 
  FileAudio, 
  Heart, 
  Bookmark, 
  MessageCircle, 
  Share2, 
  Send,
  Image as ImageIcon
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

const ResourceDetailPage: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  
  // Find the resource
  const resource = resourcesData.find((r) => r.id === Number(resourceId));

  // 新增状态管理
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(156); // 模拟点赞数
  const [bookmarkCount, setBookmarkCount] = useState(89); // 模拟收藏数
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: {
        name: '张老师',
        avatar: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      content: '这个教案资源非常实用！详细的流程设计和丰富的材料清单让我在实际教学中受益匪浅。特别是互动环节的设计，孩子们都很喜欢。',
      likes: 23,
      liked: false,
      replies: [
        {
          id: 2,
          user: {
            name: '李园长',
            avatar: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
          },
          content: '同感！我们园里的老师都在使用这套教案，效果确实很好。',
          likes: 12,
          liked: true,
          replies: [],
          timestamp: '2小时前'
        }
      ],
      timestamp: '4小时前'
    },
    {
      id: 3,
      user: {
        name: '王主任',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      content: '请问这个教案适合多大班级使用？我们是混龄班，有3-5岁的孩子。另外，材料准备大概需要多长时间？',
      images: ['https://images.pexels.com/photos/8535222/pexels-photo-8535222.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'],
      likes: 8,
      liked: false,
      replies: [],
      timestamp: '6小时前'
    },
    {
      id: 4,
      user: {
        name: '陈老师',
        avatar: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      content: '下载了这个资源，质量很高！PPT制作精美，教学视频也很清晰。希望能有更多这样的优质资源。',
      likes: 15,
      liked: false,
      replies: [],
      timestamp: '1天前'
    }
  ]);

  if (!resource) {
    return (
      <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-xl text-center border border-cream-200">
            <p className="text-forest-500">未找到资源信息</p>
          </div>
        </div>
      </div>
    );
  }

  const typeIcons = {
    document: <FileText className="h-6 w-6" />,
    video: <Video className="h-6 w-6" />,
    image: <Image className="h-6 w-6" />,
    audio: <FileAudio className="h-6 w-6" />,
  };

  const typeLabels = {
    document: '文档资料',
    video: '视频资源',
    image: '图片素材',
    audio: '音频资源',
  };

  // 处理点赞
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  // 处理收藏
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    setBookmarkCount(prev => isBookmarked ? prev - 1 : prev + 1);
  };

  // 处理评论点赞
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

  // 提交评论
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

  return (
    <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        {/* Resource Header */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8 border border-cream-200">
          <div className="relative h-64 md:h-80">
            <img 
              src={resource.coverImage} 
              alt={resource.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center">
              {typeIcons[resource.type]}
              <span className="ml-2">{typeLabels[resource.type]}</span>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-forest-900 mb-4">{resource.title}</h1>
            <p className="text-forest-700 mb-6">{resource.description}</p>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center text-forest-600">
                <Download className="h-5 w-5 mr-2" />
                <span>{resource.downloadCount} 次下载</span>
              </div>
              
              <div className="flex items-center gap-3">
                {/* 点赞按钮 */}
                <button
                  onClick={handleLike}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                    isLiked 
                      ? "bg-red-50 text-red-600 border border-red-200" 
                      : "bg-cream-100 text-forest-700 hover:bg-cream-200 border border-cream-300"
                  )}
                >
                  <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
                  <span>{likeCount}</span>
                </button>

                {/* 收藏按钮 */}
                <button
                  onClick={handleBookmark}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                    isBookmarked 
                      ? "bg-blue-50 text-blue-600 border border-blue-200" 
                      : "bg-cream-100 text-forest-700 hover:bg-cream-200 border border-cream-300"
                  )}
                >
                  <Bookmark className={cn("h-5 w-5", isBookmarked && "fill-current")} />
                  <span>{bookmarkCount}</span>
                </button>

                {/* 下载按钮 */}
                {resource.downloadUrl && (
                  <a
                    href={resource.downloadUrl}
                    className="btn btn-primary flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    下载资源
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Resource Content */}
        <div className="bg-white rounded-xl shadow-md mb-8 border border-cream-200">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-forest-900 mb-6">资源详情</h2>
            
            {resource.type === 'video' && resource.videoUrl ? (
              <div className="mb-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center p-8">
                    <Video className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">视频预览区域</p>
                    <a
                      href={resource.videoUrl}
                      className="mt-4 inline-block btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      观看视频
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
            
            <div className="prose max-w-none">
              {resource.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-2xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-xl font-bold mt-5 mb-3">{line.substring(3)}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{line.substring(4)}</h3>;
                } else if (line.startsWith('- ')) {
                  return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
                } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || 
                           line.startsWith('4. ') || line.startsWith('5. ') || line.startsWith('6. ')) {
                  return <li key={index} className="ml-6 list-decimal mb-1">{line.substring(3)}</li>;
                } else if (line === '') {
                  return <br key={index} />;
                } else {
                  return <p key={index} className="mb-4">{line}</p>;
                }
              })}
            </div>
          </div>
        </div>

        {/* 评论区 */}
        <div className="bg-white rounded-xl shadow-md border border-cream-200">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-forest-900 mb-6">用户评论</h2>
            
            {/* 评论输入区 */}
            <div className="bg-cream-50 p-4 rounded-lg mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="分享您的使用心得，提出建议或问题..."
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
                  发布评论
                </button>
              </div>
            </div>
            
            {/* 评论列表 */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-cream-50 p-4 rounded-lg border border-cream-200">
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
                      
                      {/* 回复列表 */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 pl-2 sm:pl-4 border-l-2 border-cream-200 space-y-3">
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

            {/* 加载更多评论 */}
            <div className="text-center mt-6">
              <button className="btn btn-outline">
                加载更多评论
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailPage;