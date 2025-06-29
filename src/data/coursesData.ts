export interface Course {
  id: number;
  title: string;
  description: string;
  ageGroup: string;
  organization: string;
  organizationId: number;
  coverImage: string;
  type: 'classroom' | 'teacher';
  price: number;
  modules: {
    id: number;
    title: string;
    description: string;
    lesson: {
      id: number;
      title: string;
      description: string;
      materials: string[];
      videoUrl?: string;
      lessonPlan?: {
        id: number;
        title: string;
        content: string;
      };
      resources?: {
        id: number;
        title: string;
        type: 'document' | 'video' | 'image' | 'audio';
        url: string;
      }[];
    };
  }[];
  expertId?: number;
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: '启点阅读力课程',
    description: '针对6-9岁儿童的阅读能力培养课程，通过精选绘本和互动活动，培养孩子的阅读理解能力和思维表达能力。',
    ageGroup: '6-9岁',
    organization: '启点阅读',
    organizationId: 1,
    coverImage: 'https://dxtdryilaoahkcazxyuu.supabase.co/storage/v1/object/public/course//ChatGPT%20Image%20May%2030,%202025,%2007_57_57%20AM.png',
    type: 'classroom',
    price: 3980,
    modules: [
      {
        id: 1,
        title: '《大卫，不可以》教案',
        description: '通过这本经典绘本，引导孩子理解规则的重要性，培养观察力和语言表达能力。',
        lesson: {
          id: 1,
          title: '《大卫，不可以》',
          description: '通过这本书，引导孩子理解规则的重要性，同时培养观察力和语言表达能力。',
          materials: ['绘本《大卫，不可以》', '活动卡片', '贴纸'],
          lessonPlan: {
            id: 1,
            title: '《大卫，不可以》教案',
            content: `教学目标：
1. 理解故事内容，培养规则意识
2. 提高观察力和表达能力
3. 学会换位思考，理解他人感受

教学准备：
1. 绘本《大卫，不可以》
2. 活动卡片
3. 贴纸
4. 白板和白板笔

教学流程：
1. 导入活动（10分钟）
   - 通过情境游戏引入"规则"概念
   - 讨论"为什么需要规则"

2. 绘本阅读（15分钟）
   - 封面导读，预测故事内容
   - 分段阅读，观察大卫的行为
   - 讨论每个场景中的规则

3. 互动活动（20分钟）
   - 角色扮演：扮演大卫和妈妈
   - 制作规则卡片：画出自己遵守的规则

4. 延伸活动（15分钟）
   - 创编新故事：如果大卫遵守规则会怎样
   - 制作"我能做到"贴纸墙

5. 总结反思（10分钟）
   - 分享遵守规则的重要性
   - 制定个人行为计划`
          },
          resources: [
            {
              id: 1,
              title: '《大卫，不可以》绘本导读视频',
              type: 'video',
              url: 'https://example.com/video1'
            },
            {
              id: 2,
              title: '活动指导手册',
              type: 'document',
              url: 'https://example.com/doc1'
            }
          ]
        }
      },
      {
        id: 2,
        title: '《好饿的毛毛虫》教案',
        description: '通过这本经典绘本，教授孩子数字概念和生命成长的奇妙过程。',
        lesson: {
          id: 2,
          title: '《好饿的毛毛虫》',
          description: '通过这本经典绘本，教授孩子数字概念和生命成长的奇妙过程。',
          materials: ['绘本《好饿的毛毛虫》', '毛毛虫模型', '蝴蝶生长周期图'],
          lessonPlan: {
            id: 2,
            title: '《好饿的毛毛虫》教案',
            content: `教学目标：
1. 认识数字1-5，理解数量概念
2. 了解毛毛虫的生长过程
3. 培养观察能力和想象力

教学准备：
1. 绘本《好饿的毛毛虫》
2. 毛毛虫模型
3. 蝴蝶生长周期图
4. 水果图片卡片

教学流程：
1. 导入活动（10分钟）
   - 展示毛毛虫模型，激发兴趣
   - 讨论"你喜欢吃什么水果"

2. 绘本阅读（15分钟）
   - 封面导读，认识主角
   - 跟读故事，数一数水果数量
   - 观察毛毛虫的变化

3. 互动活动（20分钟）
   - 角色扮演：饿肚子的毛毛虫
   - 制作水果拼贴画
   - 学习蝴蝶的生长过程

4. 延伸活动（15分钟）
   - 创编新故事：毛毛虫的新菜单
   - 观察真实的蝴蝶标本

5. 总结反思（10分钟）
   - 复习学过的数字
   - 分享对成长的理解`
          },
          resources: [
            {
              id: 3,
              title: '蝴蝶生长周期视频',
              type: 'video',
              url: 'https://example.com/video2'
            },
            {
              id: 4,
              title: '数学游戏材料包',
              type: 'document',
              url: 'https://example.com/doc2'
            }
          ]
        }
      },
      {
        id: 3,
        title: '《爷爷一定有办法》教案',
        description: '学习问题解决的思维方式，培养创造性思维和坚持不懈的品质。',
        lesson: {
          id: 3,
          title: '《爷爷一定有办法》',
          description: '学习问题解决的思维方式，培养创造性思维和坚持不懈的品质。',
          materials: ['绘本《爷爷一定有办法》', '手工材料', '创意工作表'],
          lessonPlan: {
            id: 3,
            title: '《爷爷一定有办法》教案',
            content: `教学目标：
1. 培养解决问题的能力
2. 激发创造性思维
3. 学习积极乐观的态度

教学准备：
1. 绘本《爷爷一定有办法》
2. 手工材料
3. 创意工作表
4. 问题解决卡片

教学流程：
1. 导入活动（10分钟）
   - 分享生活中遇到的小困难
   - 讨论"如何解决问题"

2. 绘本阅读（15分钟）
   - 封面导读，预测故事内容
   - 观察爷爷的解决方法
   - 讨论每个解决方案的创意

3. 互动活动（20分钟）
   - 角色扮演：创意解决问题
   - 制作创意发明图
   - 小组讨论其他可能的解决方案

4. 延伸活动（15分钟）
   - 创编新故事：我也有好办法
   - 设计生活中的创意发明

5. 总结反思（10分钟）
   - 分享最喜欢的解决方案
   - 制定问题解决步骤表`
          },
          resources: [
            {
              id: 5,
              title: '创意思维训练视频',
              type: 'video',
              url: 'https://example.com/video3'
            },
            {
              id: 6,
              title: '问题解决工具包',
              type: 'document',
              url: 'https://example.com/doc3'
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: '乐米乐婴幼儿互动阅读课',
    description: '专为0-3岁婴幼儿设计的互动式阅读课程，通过丰富的感官体验和亲子互动，培养宝宝的早期语言能力和认知发展。',
    ageGroup: '0-3岁',
    organization: '乐米乐',
    organizationId: 2,
    coverImage: 'https://dxtdryilaoahkcazxyuu.supabase.co/storage/v1/object/public/course//ChatGPT%20Image%20May%2030,%202025,%2007_55_09%20AM.png',
    type: 'classroom',
    price: 4980,
    modules: [
      {
        id: 4,
        title: '触摸认知：动物朋友',
        description: '通过触摸不同质感的动物图案，认识常见动物及其特征。',
        lesson: {
          id: 4,
          title: '触摸认知：动物朋友',
          description: '通过触摸不同质感的动物图案，认识常见动物及其特征。',
          materials: ['触摸书《动物朋友》', '动物手偶', '动物音效卡']
        }
      }
    ]
  },
  {
    id: 3,
    title: '桃言阅读探究课',
    description: '针对3-6岁幼儿的深度阅读探究课程，通过主题式阅读和探究活动，培养孩子的思考能力和创造力。',
    ageGroup: '3-6岁',
    organization: '桃言阅读',
    organizationId: 3,
    coverImage: 'https://images.pexels.com/photos/8535222/pexels-photo-8535222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'classroom',
    price: 5980,
    modules: [
      {
        id: 5,
        title: '《种子旅行记》探究',
        description: '了解植物生长的奥秘，通过实际种植活动，观察记录植物生长过程。',
        lesson: {
          id: 5,
          title: '《种子旅行记》',
          description: '了解植物生长的奥秘，通过实际种植活动，观察记录植物生长过程。',
          materials: ['绘本《种子旅行记》', '种子套装', '观察记录本']
        }
      }
    ]
  },
  {
    id: 4,
    title: '阅读教学技巧与课堂管理',
    description: '为幼儿园和小学教师设计的专业培训课程，提供实用的阅读教学方法和高效的课堂管理技巧。',
    ageGroup: '教师培训',
    organization: '阅见未来',
    organizationId: 4,
    coverImage: 'https://images.pexels.com/photos/8471983/pexels-photo-8471983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'teacher',
    price: 2980,
    expertId: 1,
    modules: [
      {
        id: 6,
        title: '儿童阅读心理发展特点',
        description: '了解不同年龄段儿童的阅读心理特点，有针对性地选择适合的阅读材料和教学方法。',
        lesson: {
          id: 6,
          title: '儿童阅读心理发展特点',
          description: '了解不同年龄段儿童的阅读心理特点，有针对性地选择适合的阅读材料和教学方法。',
          materials: ['讲义', '案例分析表', '阅读发展评估工具'],
          videoUrl: 'https://example.com/video1'
        }
      }
    ]
  },
  {
    id: 5,
    title: '绘本解读与表达艺术',
    description: '帮助教师和家长掌握绘本解读技巧，提升讲述和表达能力，让绘本阅读更加生动有趣。',
    ageGroup: '教师培训',
    organization: '阅见未来',
    organizationId: 4,
    coverImage: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'teacher',
    price: 3280,
    expertId: 2,
    modules: [
      {
        id: 7,
        title: '绘本视觉语言的解读',
        description: '学习如何解读绘本中的视觉元素，包括构图、色彩、线条等，理解其传达的情感和含义。',
        lesson: {
          id: 7,
          title: '绘本视觉语言的解读',
          description: '学习如何解读绘本中的视觉元素，包括构图、色彩、线条等，理解其传达的情感和含义。',
          materials: ['精选绘本', '分析工作表', '视觉元素词典'],
          videoUrl: 'https://example.com/video2'
        }
      }
    ]
  },
  {
    id: 6,
    title: '儿童阅读环境创设与资源管理',
    description: '针对机构管理者和教师的专业培训，指导如何打造理想的儿童阅读环境并有效管理阅读资源。',
    ageGroup: '教师培训',
    organization: '阅见未来',
    organizationId: 4,
    coverImage: 'https://images.pexels.com/photos/8535215/pexels-photo-8535215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'teacher',
    price: 3580,
    expertId: 3,
    modules: [
      {
        id: 8,
        title: '儿童阅读区域的功能划分',
        description: '学习如何根据年龄特点和活动需求，合理划分和设计阅读区域，创造舒适有吸引力的阅读环境。',
        lesson: {
          id: 8,
          title: '儿童阅读区域的功能划分',
          description: '学习如何根据年龄特点和活动需求，合理划分和设计阅读区域，创造舒适有吸引力的阅读环境。',
          materials: ['空间设计指南', '案例图库', '空间规划模板'],
          videoUrl: 'https://example.com/video3'
        }
      }
    ]
  }
];