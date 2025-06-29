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
        title: '启点阅读力1阶-课程1',
        description: '通过经典绘本《好饿的毛毛虫》，培养儿童基础阅读能力',
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
      },
      {
        id: 2,
        title: '启点阅读力1阶-课程2',
        description: '通过经典绘本《爷爷一定有办法》，培养儿童逻辑思维能力',
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
      },
      {
        id: 3,
        title: '启点阅读力1阶-课程3',
        description: '通过经典绘本《猜猜我有多爱你》，培养儿童情感表达能力',
        materials: [
          '《猜猜我有多爱你》绘本',
          '小兔子手偶',
          '大兔子手偶',
          '爱心贴纸',
          '彩色卡纸'
        ],
        lessonPlan: {
          content: `**课前准备**
• 准备《猜猜我有多爱你》绘本
• 准备小兔子和大兔子手偶
• 准备爱心贴纸和彩色卡纸

**情感导入（5分钟）**
• 出示小兔子手偶，引起幼儿兴趣
• 提问：你们爱自己的爸爸妈妈吗？有多爱？
• 引出今天的故事主题

**绘本阅读（20分钟）**
• 用手偶演示故事情节
• 重点关注小兔子和大兔子表达爱的方式
• 引导幼儿理解"爱"的深度和广度

**情感表达（15分钟）**
• 讨论：你会怎样表达对家人的爱？
• 角色扮演：模仿小兔子的动作
• 创编：想出更多表达爱的方式

**制作活动（10分钟）**
• 制作爱心卡片
• 写下或画出对家人的爱
• 准备带回家送给家人

**分享总结（5分钟）**
• 分享自己制作的爱心卡片
• 表达对家人的爱意
• 约定回家后的行动`
        }
      },
      {
        id: 4,
        title: '启点阅读力1阶-课程4',
        description: '通过经典绘本《小蓝和小黄》，认识颜色和友谊',
        materials: [
          '《小蓝和小黄》绘本',
          '蓝色和黄色颜料',
          '调色盘',
          '画笔',
          '白纸',
          '彩色圆片'
        ]
      },
      {
        id: 5,
        title: '启点阅读力1阶-课程5',
        description: '通过经典绘本《逃家小兔》，理解母爱的伟大',
        materials: [
          '《逃家小兔》绘本',
          '小兔子头饰',
          '妈妈兔子头饰',
          '各种道具（帆船、花朵等）'
        ]
      },
      {
        id: 6,
        title: '启点阅读力1阶-课程6',
        description: '通过经典绘本《月亮的味道》，培养想象力和合作精神',
        materials: [
          '《月亮的味道》绘本',
          '动物头饰',
          '月亮道具',
          '各种食物图片'
        ]
      },
      {
        id: 7,
        title: '启点阅读力1阶-课程7',
        description: '通过经典绘本《彩虹鱼》，学习分享和友谊',
        materials: [
          '《彩虹鱼》绘本',
          '彩色鳞片贴纸',
          '鱼形卡纸',
          '亮片装饰材料'
        ]
      },
      {
        id: 8,
        title: '启点阅读力1阶-课程8',
        description: '通过经典绘本《小黑鱼》，培养勇气和团队合作',
        materials: [
          '《小黑鱼》绘本',
          '黑色和红色卡纸',
          '海洋背景图',
          '鱼群贴纸'
        ]
      },
      {
        id: 9,
        title: '启点阅读力1阶-课程9',
        description: '通过经典绘本《花婆婆》，理解美好愿望的实现',
        materials: [
          '《花婆婆》绘本',
          '花种子',
          '小花盆',
          '土壤',
          '花朵贴纸'
        ]
      },
      {
        id: 10,
        title: '启点阅读力1阶-课程10',
        description: '通过经典绘本《要是你给老鼠吃饼干》，理解因果关系',
        materials: [
          '《要是你给老鼠吃饼干》绘本',
          '小老鼠手偶',
          '饼干道具',
          '故事卡片'
        ]
      },
      {
        id: 11,
        title: '启点阅读力1阶-课程11',
        description: '通过经典绘本《大卫，不可以》，学习规则和自控',
        materials: [
          '《大卫，不可以》绘本',
          '规则卡片',
          '笑脸和哭脸贴纸',
          '行为记录表'
        ]
      },
      {
        id: 12,
        title: '启点阅读力1阶-课程12',
        description: '通过经典绘本《我妈妈》，表达对妈妈的爱',
        materials: [
          '《我妈妈》绘本',
          '妈妈照片',
          '彩色卡纸',
          '装饰材料'
        ]
      },
      {
        id: 13,
        title: '启点阅读力1阶-课程13',
        description: '通过经典绘本《我爸爸》，了解爸爸的特点',
        materials: [
          '《我爸爸》绘本',
          '爸爸照片',
          '超人斗篷',
          '各种职业道具'
        ]
      },
      {
        id: 14,
        title: '启点阅读力1阶-课程14',
        description: '通过经典绘本《鳄鱼怕怕牙医怕怕》，克服看医生的恐惧',
        materials: [
          '《鳄鱼怕怕牙医怕怕》绘本',
          '鳄鱼头饰',
          '医生帽',
          '牙刷道具'
        ]
      },
      {
        id: 15,
        title: '启点阅读力1阶-课程15',
        description: '通过经典绘本《小熊和最好的爸爸》，感受父爱的温暖',
        materials: [
          '《小熊和最好的爸爸》绘本',
          '小熊手偶',
          '爸爸熊手偶',
          '温馨场景道具'
        ]
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
        id: 16,
        title: '乐米乐早期阅读启蒙-课程1',
        description: '通过触摸书和感官游戏，启发婴幼儿的认知能力',
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
      },
      {
        id: 17,
        title: '乐米乐早期阅读启蒙-课程2',
        description: '通过声音和韵律，培养宝宝的听觉能力',
        materials: [
          '音乐绘本',
          '小铃铛',
          '沙锤',
          '音乐播放设备',
          '彩色丝巾'
        ]
      },
      {
        id: 18,
        title: '乐米乐早期阅读启蒙-课程3',
        description: '通过颜色认知，刺激宝宝的视觉发展',
        materials: [
          '彩色认知书',
          '彩色球球',
          '彩色布条',
          '彩色灯光'
        ]
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
        id: 19,
        title: '桃言主题式阅读探究-课程1',
        description: '通过自然主题的绘本和活动，培养幼儿的观察力和探究精神',
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
      },
      {
        id: 20,
        title: '桃言主题式阅读探究-课程2',
        description: '通过动物主题探究，了解动物的生活习性',
        materials: [
          '《动物的家》绘本',
          '动物图片卡',
          '动物栖息地模型',
          '观察记录本'
        ]
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
        id: 21,
        title: '儿童阅读心理发展-模块1',
        description: '系统学习不同年龄段儿童的阅读心理发展规律和特点',
        materials: [
          '儿童发展心理学理论资料',
          '不同年龄段阅读案例',
          '阅读能力评估工具',
          '教学实践指导手册'
        ]
      },
      {
        id: 22,
        title: '儿童阅读心理发展-模块2',
        description: '深入理解阅读动机与兴趣培养的理论与实践',
        materials: [
          '阅读动机理论资料',
          '兴趣培养案例集',
          '评估工具包',
          '实践指导手册'
        ]
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
        id: 23,
        title: '绘本教学设计与实施-模块1',
        description: '学习绘本教学的理论基础和实践方法',
        materials: [
          '绘本教学理论资料',
          '优秀教学案例集',
          '教学设计模板',
          '评估工具和方法'
        ]
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
        id: 24,
        title: '阅读评估与诊断-模块1',
        description: '掌握科学的阅读评估方法和诊断技巧',
        materials: [
          '阅读评估理论资料',
          '标准化评估工具',
          '诊断报告模板',
          '个性化教学方案示例'
        ]
      }
    ]
  }
];