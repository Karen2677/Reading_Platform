export interface Course {
  id: number;
  title: string;
  organization: string;
  organizationId: number;
  ageGroup: string;
  coverImage: string;
  description: string;
  price: number;
  type: 'classroom' | 'teacher'; // classroom: 课堂教学, teacher: 教师培训
  expertId?: number; // 仅教师培训课程有专家ID
  modules: CourseModule[];
}

export interface CourseModule {
  id: number;
  title: string;
  description: string;
  lesson: Lesson;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  materials: string[];
  lessonPlan?: {
    content: string;
  };
  resources?: Resource[];
}

export interface Resource {
  id: number;
  title: string;
  url: string;
  type: 'pdf' | 'video' | 'image' | 'audio';
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: '启点阅读力1阶',
    organization: '启点阅读',
    organizationId: 1,
    ageGroup: '6-9岁',
    coverImage: 'https://images.pexels.com/photos/8423121/pexels-photo-8423121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '通过经典绘本阅读，培养儿童的观察力、理解力和表达能力，建立良好的阅读习惯。',
    price: 299,
    type: 'classroom',
    modules: [
      {
        id: 1,
        title: '启点阅读力1阶',
        description: '通过经典绘本《好饿的毛毛虫》，培养儿童基础阅读能力',
        lesson: {
          id: 1,
          title: '《好饿的毛毛虫》',
          description: '通过《好饿的毛毛虫》这本经典绘本，帮助孩子认识数字、星期、食物，理解生命成长的过程。',
          materials: [
            '《好饿的毛毛虫》绘本',
            '数字卡片1-5',
            '星期卡片',
            '水果图片卡',
            '毛毛虫手偶',
            '蝴蝶贴纸'
          ],
          lessonPlan: {
            content: `**课前准备**
• 准备《好饿的毛毛虫》绘本
• 准备数字卡片1-5
• 准备各种水果的图片或实物
• 准备毛毛虫手偶和蝴蝶贴纸

**导入环节（5分钟）**
• 出示毛毛虫手偶，引起幼儿兴趣
• 提问：小朋友们见过毛毛虫吗？它会变成什么？
• 引出今天要学习的绘本《好饿的毛毛虫》

**绘本阅读（15分钟）**
• 展示绘本封面，引导幼儿观察
• 逐页阅读，重点关注：
  - 数字的认识（1个苹果、2个梨...）
  - 星期的概念
  - 不同食物的名称
• 引导幼儿跟读重复的句式

**互动游戏（10分钟）**
• 数字游戏：用手指表示毛毛虫吃了几个水果
• 排序游戏：按照故事顺序排列水果卡片
• 角色扮演：幼儿模仿毛毛虫爬行和蝴蝶飞舞

**拓展活动（8分钟）**
• 讨论：毛毛虫为什么会变成蝴蝶？
• 联系生活：我们也在慢慢长大，就像毛毛虫一样
• 分享：你最喜欢吃什么水果？

**总结回顾（2分钟）**
• 回顾故事主要内容
• 奖励表现好的幼儿蝴蝶贴纸
• 预告下次活动内容`
          },
          resources: [
            {
              id: 1,
              title: '《好饿的毛毛虫》PPT课件',
              url: '/resources/hungry-caterpillar-ppt.pdf',
              type: 'pdf'
            },
            {
              id: 2,
              title: '数字卡片打印版',
              url: '/resources/number-cards.pdf',
              type: 'pdf'
            },
            {
              id: 3,
              title: '水果图片素材包',
              url: '/resources/fruit-images.zip',
              type: 'image'
            }
          ]
        }
      },
      {
        id: 2,
        title: '启点阅读力2阶',
        description: '通过经典绘本《爷爷一定有办法》，培养儿童逻辑思维能力',
        lesson: {
          id: 2,
          title: '《爷爷一定有办法》',
          description: '通过这个温馨的故事，让孩子理解传承、创新和珍惜的意义，培养解决问题的思维能力。',
          materials: [
            '《爷爷一定有办法》绘本',
            '各种布料样品',
            '针线道具',
            '小毯子、外套等道具',
            '手工制作材料'
          ],
          lessonPlan: {
            content: `**课前准备**
• 准备《爷爷一定有办法》绘本
• 准备各种布料样品供幼儿触摸
• 准备手工制作的简单材料

**故事导入（5分钟）**
• 展示一块漂亮的布料
• 提问：这块布可以做什么？
• 引出爷爷的故事

**绘本阅读（20分钟）**
• 仔细阅读每一页，重点关注：
  - 毯子变外套的过程
  - 外套变背心的过程
  - 每次改造的原因和方法
• 引导幼儿预测下一步会变成什么

**思维训练（10分钟）**
• 讨论：为什么爷爷总是有办法？
• 思考：如果是你，你会怎么办？
• 培养解决问题的思维

**创意活动（10分钟）**
• 用手工材料制作简单的小物件
• 体验"变废为宝"的乐趣
• 分享自己的创意想法

**情感教育（5分钟）**
• 讨论爷爷对约瑟的爱
• 分享自己和爷爷奶奶的故事
• 培养感恩之心`
          },
          resources: [
            {
              id: 4,
              title: '《爷爷一定有办法》教学视频',
              url: '/resources/grandpa-story-video.mp4',
              type: 'video'
            },
            {
              id: 5,
              title: '手工制作指导手册',
              url: '/resources/craft-guide.pdf',
              type: 'pdf'
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: '乐米乐早期阅读启蒙',
    organization: '乐米乐',
    organizationId: 2,
    ageGroup: '0-3岁',
    coverImage: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '专为0-3岁婴幼儿设计的早期阅读启蒙课程，通过感官互动激发阅读兴趣和语言潜能。',
    price: 199,
    type: 'classroom',
    modules: [
      {
        id: 3,
        title: '感官认知启蒙',
        description: '通过触摸书和感官游戏，启发婴幼儿的认知能力',
        lesson: {
          id: 3,
          title: '《小手摸摸》触感认知',
          description: '通过不同材质的触摸体验，帮助宝宝认识世界，发展触觉和语言能力。',
          materials: [
            '触摸认知书',
            '不同材质的布料',
            '安全的触摸玩具',
            '音乐播放设备',
            '柔软的垫子'
          ],
          lessonPlan: {
            content: `**环境准备**
• 铺设柔软安全的地垫
• 准备各种材质的触摸材料
• 播放轻柔的背景音乐

**亲子互动开始（5分钟）**
• 家长和宝宝一起坐在地垫上
• 简单的手指游戏热身
• 营造轻松愉快的氛围

**触感探索（15分钟）**
• 引导宝宝触摸不同材质：
  - 柔软的毛绒
  - 光滑的丝绸
  - 粗糙的麻布
  - 凉爽的金属
• 用简单的词汇描述感受："软软的"、"滑滑的"

**语言启蒙（10分钟）**
• 重复简单的词汇和声音
• 鼓励宝宝模仿发音
• 用夸张的表情和语调吸引注意

**亲子共读（10分钟）**
• 选择适合的触摸书
• 家长用温柔的声音朗读
• 引导宝宝触摸书中的不同材质

**放松结束（5分钟）**
• 轻柔的音乐和抚触
• 总结今天的活动
• 给宝宝温暖的拥抱`
          }
        }
      }
    ]
  },
  {
    id: 3,
    title: '桃言主题式阅读探究',
    organization: '桃言阅读',
    organizationId: 3,
    ageGroup: '3-6岁',
    coverImage: 'https://images.pexels.com/photos/8422503/pexels-photo-8422503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '以主题探究为特色的幼儿阅读课程，培养好奇心、探索精神和创造力。',
    price: 399,
    type: 'classroom',
    modules: [
      {
        id: 4,
        title: '自然探索主题',
        description: '通过自然主题的绘本和活动，培养幼儿的观察力和探究精神',
        lesson: {
          id: 4,
          title: '《小种子的旅行》自然探索',
          description: '跟随小种子的成长旅程，了解植物的生长过程，培养对自然的热爱和观察能力。',
          materials: [
            '《小种子的旅行》绘本',
            '各种植物种子',
            '放大镜',
            '小花盆和土壤',
            '观察记录表',
            '植物成长图片'
          ],
          lessonPlan: {
            content: `**探究导入（8分钟）**
• 出示神秘盒子，里面装着各种种子
• 让幼儿猜测盒子里是什么
• 引出今天的探究主题：种子的秘密

**绘本共读（15分钟）**
• 阅读《小种子的旅行》
• 重点关注：
  - 种子是如何传播的
  - 种子需要什么条件才能发芽
  - 植物的成长过程
• 鼓励幼儿提出问题

**科学探究（20分钟）**
• 观察活动：用放大镜观察不同的种子
• 分类活动：按大小、颜色、形状分类种子
• 种植实验：每个幼儿种下一颗种子
• 记录观察：画下种子的样子

**创意表达（12分钟）**
• 用身体动作模仿种子发芽长大
• 画出自己想象中的神奇植物
• 编一个关于种子的小故事

**总结分享（5分钟）**
• 分享今天的发现和感受
• 制定观察计划：每天观察种子的变化
• 预告下次活动：观察记录分享`
          }
        }
      }
    ]
  },
  {
    id: 4,
    title: '儿童阅读心理发展',
    organization: '阅见未来',
    organizationId: 4,
    ageGroup: '教师培训',
    coverImage: 'https://images.pexels.com/photos/4161775/pexels-photo-4161775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '深入了解不同年龄段儿童的阅读心理特点，掌握科学的阅读指导方法。',
    price: 599,
    type: 'teacher',
    expertId: 1,
    modules: [
      {
        id: 5,
        title: '0-12岁儿童阅读心理发展特点',
        description: '系统学习不同年龄段儿童的阅读心理发展规律和特点',
        lesson: {
          id: 5,
          title: '儿童阅读心理发展的阶段性特征',
          description: '深入理解0-12岁儿童阅读心理发展的核心理论与实践应用，掌握科学的阅读教学方法。',
          materials: [
            '儿童发展心理学理论资料',
            '不同年龄段阅读案例',
            '阅读能力评估工具',
            '教学实践指导手册'
          ]
        }
      }
    ]
  },
  {
    id: 5,
    title: '绘本教学设计与实施',
    organization: '阅见未来',
    organizationId: 4,
    ageGroup: '教师培训',
    coverImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '系统学习绘本教学的设计原理和实施技巧，提升课堂教学效果。',
    price: 499,
    type: 'teacher',
    expertId: 2,
    modules: [
      {
        id: 6,
        title: '绘本教学设计原理与方法',
        description: '学习绘本教学的理论基础和实践方法',
        lesson: {
          id: 6,
          title: '绘本教学的设计原理与实施策略',
          description: '掌握绘本教学的核心理念，学会设计有效的绘本教学活动，提升教学质量。',
          materials: [
            '绘本教学理论资料',
            '优秀教学案例集',
            '教学设计模板',
            '评估工具和方法'
          ]
        }
      }
    ]
  },
  {
    id: 6,
    title: '阅读评估与诊断',
    organization: '阅见未来',
    organizationId: 4,
    ageGroup: '教师培训',
    coverImage: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '学习专业的阅读能力评估工具和方法，为个性化教学提供科学依据。',
    price: 399,
    type: 'teacher',
    expertId: 3,
    modules: [
      {
        id: 7,
        title: '阅读能力评估理论与实践',
        description: '掌握科学的阅读评估方法和诊断技巧',
        lesson: {
          id: 7,
          title: '阅读能力的科学评估与个性化诊断',
          description: '学习使用专业的评估工具，准确诊断儿童阅读能力水平，制定个性化教学方案。',
          materials: [
            '阅读评估理论资料',
            '标准化评估工具',
            '诊断报告模板',
            '个性化教学方案示例'
          ]
        }
      }
    ]
  }
];