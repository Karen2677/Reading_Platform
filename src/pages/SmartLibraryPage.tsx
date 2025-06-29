import React, { useState } from 'react';
import { Search, Filter, BookOpen, Users, Building, ShoppingCart, Star, Download } from 'lucide-react';
import { cn } from '../utils/cn';

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  coverImage: string;
  ageGroup: string;
  category: string;
  rating: number;
  price: number;
  discountPrice?: number;
  description: string;
  isbn: string;
  pageCount: number;
  publishYear: number;
}

interface BookListConfig {
  libraryType: 'library' | 'reading-corner' | 'teaching';
  ageGroups: string[];
  categories: string[];
  copyCount: number;
  budget?: number;
}

const SmartLibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'configure' | 'results'>('configure');
  const [config, setConfig] = useState<BookListConfig>({
    libraryType: 'library',
    ageGroups: [],
    categories: [],
    copyCount: 1,
    budget: undefined
  });
  const [generatedBooks, setGeneratedBooks] = useState<Book[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<Set<number>>(new Set());
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock book data
  const mockBooks: Book[] = [
    {
      id: 1,
      title: '好饿的毛毛虫',
      author: '艾瑞克·卡尔',
      publisher: '明天出版社',
      coverImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '3-6岁',
      category: '认知启蒙',
      rating: 4.8,
      price: 39.8,
      discountPrice: 31.8,
      description: '经典绘本，讲述毛毛虫成长为蝴蝶的故事，适合幼儿认知启蒙。',
      isbn: '9787533271234',
      pageCount: 32,
      publishYear: 2019
    },
    {
      id: 2,
      title: '猜猜我有多爱你',
      author: '山姆·麦克布雷尼',
      publisher: '少年儿童出版社',
      coverImage: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '3-6岁',
      category: '情感教育',
      rating: 4.9,
      price: 35.0,
      discountPrice: 28.0,
      description: '温馨的亲子绘本，表达父母与孩子之间深深的爱意。',
      isbn: '9787532491234',
      pageCount: 40,
      publishYear: 2020
    },
    {
      id: 3,
      title: '小王子',
      author: '安托万·德·圣-埃克苏佩里',
      publisher: '人民文学出版社',
      coverImage: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '6-12岁',
      category: '文学经典',
      rating: 4.7,
      price: 28.0,
      discountPrice: 22.4,
      description: '世界经典文学作品，适合小学生阅读的哲理故事。',
      isbn: '9787020091234',
      pageCount: 120,
      publishYear: 2018
    },
    {
      id: 4,
      title: '窗边的小豆豆',
      author: '黑柳彻子',
      publisher: '南海出版公司',
      coverImage: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '6-12岁',
      category: '成长故事',
      rating: 4.6,
      price: 32.0,
      discountPrice: 25.6,
      description: '日本著名儿童文学作品，讲述小豆豆在巴学园的成长故事。',
      isbn: '9787544251234',
      pageCount: 280,
      publishYear: 2017
    },
    {
      id: 5,
      title: '不一样的卡梅拉',
      author: '克利斯提昂·约里波瓦',
      publisher: '二十一世纪出版社',
      coverImage: 'https://images.pexels.com/photos/8535222/pexels-photo-8535222.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '3-6岁',
      category: '冒险故事',
      rating: 4.5,
      price: 120.0,
      discountPrice: 96.0,
      description: '法国经典绘本系列，充满想象力的冒险故事。',
      isbn: '9787539141234',
      pageCount: 36,
      publishYear: 2021
    },
    {
      id: 6,
      title: '神奇校车',
      author: '乔安娜·柯尔',
      publisher: '贵州人民出版社',
      coverImage: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '6-12岁',
      category: '科普百科',
      rating: 4.8,
      price: 180.0,
      discountPrice: 144.0,
      description: '美国经典科普绘本系列，让孩子在故事中学习科学知识。',
      isbn: '9787221091234',
      pageCount: 48,
      publishYear: 2019
    },
    {
      id: 7,
      title: '爷爷一定有办法',
      author: '菲比·吉尔曼',
      publisher: '明天出版社',
      coverImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '3-6岁',
      category: '情感教育',
      rating: 4.7,
      price: 29.8,
      discountPrice: 23.8,
      description: '温馨的祖孙情深故事，教会孩子珍惜和创新。',
      isbn: '9787533271235',
      pageCount: 32,
      publishYear: 2020
    },
    {
      id: 8,
      title: '逃家小兔',
      author: '玛格丽特·怀兹·布朗',
      publisher: '明天出版社',
      coverImage: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '3-6岁',
      category: '情感教育',
      rating: 4.8,
      price: 32.8,
      discountPrice: 26.2,
      description: '经典亲子绘本，表达母爱的无私和伟大。',
      isbn: '9787533271236',
      pageCount: 32,
      publishYear: 2019
    },
    {
      id: 9,
      title: '月亮的味道',
      author: '麦克·格雷涅茨',
      publisher: '二十一世纪出版社',
      coverImage: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '3-6岁',
      category: '冒险故事',
      rating: 4.6,
      price: 35.0,
      discountPrice: 28.0,
      description: '充满想象力的故事，培养孩子的合作精神。',
      isbn: '9787539141237',
      pageCount: 40,
      publishYear: 2020
    },
    {
      id: 10,
      title: '彩虹鱼',
      author: '马库斯·菲斯特',
      publisher: '接力出版社',
      coverImage: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '3-6岁',
      category: '情感教育',
      rating: 4.5,
      price: 39.8,
      discountPrice: 31.8,
      description: '关于分享和友谊的美丽故事，培养孩子的社交能力。',
      isbn: '9787544251238',
      pageCount: 32,
      publishYear: 2018
    },
    {
      id: 11,
      title: '小黑鱼',
      author: '李欧·李奥尼',
      publisher: '南海出版公司',
      coverImage: 'https://images.pexels.com/photos/8535222/pexels-photo-8535222.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '3-6岁',
      category: '成长故事',
      rating: 4.7,
      price: 35.0,
      discountPrice: 28.0,
      description: '关于勇气和团队合作的经典绘本。',
      isbn: '9787544251239',
      pageCount: 40,
      publishYear: 2019
    },
    {
      id: 12,
      title: '花婆婆',
      author: '芭芭拉·库尼',
      publisher: '河北教育出版社',
      coverImage: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
      ageGroup: '6-12岁',
      category: '成长故事',
      rating: 4.8,
      price: 29.8,
      discountPrice: 23.8,
      description: '关于梦想和坚持的美丽故事，启发孩子追求美好。',
      isbn: '9787544251240',
      pageCount: 48,
      publishYear: 2020
    }
  ];

  const libraryTypes = [
    { value: 'library', label: '图书馆', description: '大型图书馆，需要丰富多样的藏书' },
    { value: 'reading-corner', label: '阅读角', description: '小型阅读空间，精选优质图书' },
    { value: 'teaching', label: '教学用书', description: '课堂教学专用，配套教案资源' }
  ];

  const ageGroups = [
    '0-3岁', '3-6岁', '6-9岁', '9-12岁', '12岁以上'
  ];

  const categories = [
    '认知启蒙', '情感教育', '科普百科', '文学经典', '成长故事', 
    '冒险故事', '艺术美学', '历史文化', '生活技能', '思维训练'
  ];

  const handleConfigChange = (key: keyof BookListConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleAgeGroupToggle = (ageGroup: string) => {
    setConfig(prev => ({
      ...prev,
      ageGroups: prev.ageGroups.includes(ageGroup)
        ? prev.ageGroups.filter(ag => ag !== ageGroup)
        : [...prev.ageGroups, ageGroup]
    }));
  };

  const handleCategoryToggle = (category: string) => {
    setConfig(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(cat => cat !== category)
        : [...prev.categories, category]
    }));
  };

  // 新增：全选功能
  const handleSelectAll = () => {
    if (selectedBooks.size === generatedBooks.length) {
      // 如果已经全选，则取消全选
      setSelectedBooks(new Set());
    } else {
      // 否则选择所有图书
      setSelectedBooks(new Set(generatedBooks.map(book => book.id)));
    }
  };

  // 检查是否全选状态
  const isAllSelected = selectedBooks.size === generatedBooks.length && generatedBooks.length > 0;
  const isPartialSelected = selectedBooks.size > 0 && selectedBooks.size < generatedBooks.length;

  const generateBookList = () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      // Filter books based on configuration
      let filteredBooks = mockBooks;
      
      if (config.ageGroups.length > 0) {
        filteredBooks = filteredBooks.filter(book => 
          config.ageGroups.includes(book.ageGroup)
        );
      }
      
      if (config.categories.length > 0) {
        filteredBooks = filteredBooks.filter(book => 
          config.categories.includes(book.category)
        );
      }
      
      setGeneratedBooks(filteredBooks);
      setActiveTab('results');
      setIsGenerating(false);
    }, 2000);
  };

  const toggleBookSelection = (bookId: number) => {
    setSelectedBooks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(bookId)) {
        newSet.delete(bookId);
      } else {
        newSet.add(bookId);
      }
      return newSet;
    });
  };

  const calculateTotal = () => {
    return generatedBooks
      .filter(book => selectedBooks.has(book.id))
      .reduce((total, book) => {
        const price = book.discountPrice || book.price;
        return total + (price * config.copyCount);
      }, 0);
  };

  const exportBookList = () => {
    const selectedBooksList = generatedBooks.filter(book => selectedBooks.has(book.id));
    const csvContent = [
      ['书名', '作者', '出版社', 'ISBN', '年龄段', '分类', '原价', '折扣价', '复本数', '小计'].join(','),
      ...selectedBooksList.map(book => [
        book.title,
        book.author,
        book.publisher,
        book.isbn,
        book.ageGroup,
        book.category,
        book.price,
        book.discountPrice || book.price,
        config.copyCount,
        (book.discountPrice || book.price) * config.copyCount
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = '智能书单.csv';
    link.click();
  };

  return (
    <div className="pt-24 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">智阅书库</h1>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto">
            基于专业算法和教育专家推荐，为您的图书馆、阅读角或教学需求智能生成个性化书单，
            享受联盟会员专属折扣优惠。
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-cream-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('configure')}
              className={cn(
                "px-6 py-2 rounded-md font-medium transition-colors",
                activeTab === 'configure'
                  ? "bg-white text-primary-600 shadow-sm"
                  : "text-forest-600 hover:text-forest-800"
              )}
            >
              配置需求
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={cn(
                "px-6 py-2 rounded-md font-medium transition-colors",
                activeTab === 'results'
                  ? "bg-white text-primary-600 shadow-sm"
                  : "text-forest-600 hover:text-forest-800"
              )}
              disabled={generatedBooks.length === 0}
            >
              智能书单
              {generatedBooks.length > 0 && (
                <span className="ml-2 bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs">
                  {generatedBooks.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Configuration Tab */}
        {activeTab === 'configure' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream-200">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-forest-900 mb-6">配置您的书单需求</h2>
                
                {/* Library Type Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-forest-800 mb-4">选择图书馆规模</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {libraryTypes.map((type) => (
                      <div
                        key={type.value}
                        onClick={() => handleConfigChange('libraryType', type.value)}
                        className={cn(
                          "p-4 border-2 rounded-lg cursor-pointer transition-all",
                          config.libraryType === type.value
                            ? "border-primary-500 bg-primary-50"
                            : "border-cream-200 hover:border-cream-300"
                        )}
                      >
                        <div className="flex items-center mb-2">
                          {type.value === 'library' && <Building className="h-5 w-5 mr-2 text-primary-600" />}
                          {type.value === 'reading-corner' && <BookOpen className="h-5 w-5 mr-2 text-primary-600" />}
                          {type.value === 'teaching' && <Users className="h-5 w-5 mr-2 text-primary-600" />}
                          <span className="font-medium">{type.label}</span>
                        </div>
                        <p className="text-sm text-forest-600">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Age Group Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-forest-800 mb-4">选择年龄段</h3>
                  <div className="flex flex-wrap gap-3">
                    {ageGroups.map((ageGroup) => (
                      <button
                        key={ageGroup}
                        onClick={() => handleAgeGroupToggle(ageGroup)}
                        className={cn(
                          "px-4 py-2 rounded-full border transition-colors",
                          config.ageGroups.includes(ageGroup)
                            ? "bg-primary-600 text-white border-primary-600"
                            : "bg-white text-forest-700 border-cream-300 hover:border-primary-300"
                        )}
                      >
                        {ageGroup}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-forest-800 mb-4">选择图书分类</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryToggle(category)}
                        className={cn(
                          "px-3 py-2 rounded-lg border text-sm transition-colors",
                          config.categories.includes(category)
                            ? "bg-primary-600 text-white border-primary-600"
                            : "bg-white text-forest-700 border-cream-300 hover:border-primary-300"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Copy Count and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      复本数量
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={config.copyCount}
                      onChange={(e) => handleConfigChange('copyCount', parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                    />
                    <p className="text-xs text-forest-500 mt-1">每本书的购买数量</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      预算范围（可选）
                    </label>
                    <input
                      type="number"
                      placeholder="请输入预算金额"
                      value={config.budget || ''}
                      onChange={(e) => handleConfigChange('budget', e.target.value ? parseFloat(e.target.value) : undefined)}
                      className="w-full px-3 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
                    />
                    <p className="text-xs text-forest-500 mt-1">系统将优先推荐预算内的图书</p>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="text-center">
                  <button
                    onClick={generateBookList}
                    disabled={isGenerating || config.ageGroups.length === 0}
                    className="btn btn-primary px-8 py-3 text-lg"
                  >
                    {isGenerating ? (
                      <>
                        <div className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        智能生成中...
                      </>
                    ) : (
                      <>
                        <Search className="h-5 w-5 mr-2" />
                        智能生成书单
                      </>
                    )}
                  </button>
                  {config.ageGroups.length === 0 && (
                    <p className="text-sm text-red-500 mt-2">请至少选择一个年龄段</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && generatedBooks.length > 0 && (
          <div>
            {/* Results Header */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-cream-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-forest-900 mb-2">智能推荐书单</h2>
                  <p className="text-forest-600">
                    根据您的需求，为您推荐了 {generatedBooks.length} 本优质图书
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-3">
                  <button
                    onClick={() => setActiveTab('configure')}
                    className="btn btn-outline"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    重新配置
                  </button>
                  <button
                    onClick={exportBookList}
                    disabled={selectedBooks.size === 0}
                    className="btn btn-secondary"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    导出书单
                  </button>
                </div>
              </div>
            </div>

            {/* 全选控制区域 */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-cream-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleSelectAll}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors",
                      isAllSelected
                        ? "bg-primary-600 text-white"
                        : isPartialSelected
                        ? "bg-primary-100 text-primary-700 border border-primary-300"
                        : "bg-cream-100 text-forest-700 hover:bg-cream-200"
                    )}
                  >
                    <div className={cn(
                      "w-4 h-4 border-2 rounded flex items-center justify-center",
                      isAllSelected
                        ? "border-white bg-white"
                        : isPartialSelected
                        ? "border-primary-600 bg-primary-100"
                        : "border-forest-400"
                    )}>
                      {isAllSelected && <span className="text-primary-600 text-xs">✓</span>}
                      {isPartialSelected && <span className="text-primary-600 text-xs">-</span>}
                    </div>
                    {isAllSelected ? '取消全选' : '全选图书'}
                  </button>
                  
                  <div className="text-sm text-forest-600">
                    已选择 <span className="font-medium text-primary-600">{selectedBooks.size}</span> / {generatedBooks.length} 本图书
                  </div>
                </div>
                
                {selectedBooks.size > 0 && (
                  <div className="text-sm text-forest-600">
                    预计总价：<span className="font-bold text-primary-600 text-lg">¥{calculateTotal().toFixed(2)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Book List - 固定高度可滚动的横条布局 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream-200 mb-6">
              <div className="p-4 border-b border-cream-200 bg-cream-50">
                <h3 className="font-medium text-forest-800">推荐图书列表</h3>
                <p className="text-sm text-forest-600 mt-1">
                  显示区域可容纳10本书，支持上下滚动浏览全部推荐图书
                </p>
              </div>
              
              {/* 固定高度的滚动容器 - 10本书的高度 */}
              <div 
                className="overflow-y-auto"
                style={{ 
                  height: '800px', // 10本书 × 80px每本 = 800px
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#cbd5e1 #f1f5f9'
                }}
              >
                <div className="divide-y divide-cream-200">
                  {generatedBooks.map((book) => (
                    <div
                      key={book.id}
                      className={cn(
                        "p-4 hover:bg-cream-50 transition-colors",
                        selectedBooks.has(book.id) && "bg-primary-50 border-l-4 border-primary-500"
                      )}
                      style={{ minHeight: '80px' }} // 确保每本书的最小高度
                    >
                      <div className="flex items-center gap-4">
                        {/* 图书封面 */}
                        <div className="flex-shrink-0">
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-16 h-20 object-cover rounded-lg shadow-sm"
                          />
                        </div>
                        
                        {/* 图书信息 */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0 mr-4">
                              {/* 书名 - 可点击进入详情页 */}
                              <h3 className="text-lg font-medium text-forest-900 hover:text-primary-600 cursor-pointer transition-colors mb-1 truncate">
                                {book.title}
                              </h3>
                              
                              {/* 作者和出版社 */}
                              <p className="text-sm text-forest-600 mb-2">
                                {book.author} · {book.publisher}
                              </p>
                              
                              {/* 标签和评分 */}
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                                  {book.ageGroup}
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-700">
                                  {book.category}
                                </span>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={cn(
                                        "h-3 w-3",
                                        i < Math.floor(book.rating) ? "text-accent-400 fill-current" : "text-cream-300"
                                      )}
                                    />
                                  ))}
                                  <span className="text-xs text-forest-500 ml-1">({book.rating})</span>
                                </div>
                              </div>
                              
                              {/* 描述 */}
                              <p className="text-sm text-forest-600 line-clamp-2">
                                {book.description}
                              </p>
                            </div>
                            
                            {/* 价格和操作区域 */}
                            <div className="flex-shrink-0 text-right">
                              {/* 价格 */}
                              <div className="mb-3">
                                <div className="flex items-center justify-end gap-2 mb-1">
                                  {book.discountPrice && (
                                    <span className="text-sm text-forest-400 line-through">¥{book.price}</span>
                                  )}
                                  <span className="text-xl font-bold text-primary-600">
                                    ¥{book.discountPrice || book.price}
                                  </span>
                                </div>
                                {book.discountPrice && (
                                  <div className="flex justify-end">
                                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                                      {Math.round((1 - book.discountPrice / book.price) * 100)}%折
                                    </span>
                                  </div>
                                )}
                              </div>
                              
                              {/* 加入书单按钮 */}
                              <button
                                onClick={() => toggleBookSelection(book.id)}
                                className={cn(
                                  "px-4 py-2 rounded-lg font-medium transition-colors text-sm min-w-[100px]",
                                  selectedBooks.has(book.id)
                                    ? "bg-primary-600 text-white"
                                    : "bg-cream-100 text-forest-700 hover:bg-cream-200 border border-cream-300"
                                )}
                              >
                                {selectedBooks.has(book.id) ? (
                                  <>
                                    <ShoppingCart className="h-4 w-4 mr-1 inline" />
                                    已选择
                                  </>
                                ) : (
                                  '加入书单'
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 滚动提示 */}
              {generatedBooks.length > 10 && (
                <div className="p-3 bg-cream-50 border-t border-cream-200 text-center">
                  <p className="text-xs text-forest-500">
                    共 {generatedBooks.length} 本图书，可上下滚动查看更多
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary */}
            {selectedBooks.size > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6 border border-cream-200">
                <h3 className="text-lg font-bold text-forest-900 mb-4">订单汇总</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>已选择图书：</span>
                    <span>{selectedBooks.size} 种</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>每种复本数：</span>
                    <span>{config.copyCount} 本</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>总计图书：</span>
                    <span>{selectedBooks.size * config.copyCount} 本</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>合计金额：</span>
                      <span className="text-primary-600">¥{calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-3">
                  <button className="btn btn-primary flex-1">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    立即采购
                  </button>
                  <button className="btn btn-outline">
                    联系客服咨询
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartLibraryPage;