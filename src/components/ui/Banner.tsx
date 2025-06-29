import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

interface BannerSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: '阅见未来',
    description: '打造中国最值得信赖的儿童阅读教育支持平台',
    link: '/about'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: '优质课程资源',
    description: '为孩子提供更有深度与温度的阅读教育',
    link: '/courses'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3928260/pexels-photo-3928260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: '专业培训体系',
    description: '邀请国内外阅读教育专家，为教师提供系统性成长支持',
    link: '/experts'
  }
];

const Banner: React.FC = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`relative w-full h-[500px] md:h-[600px] mt-20 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className="h-full w-full"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container-custom text-center text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
                    {slide.description}
                  </p>
                  <Link 
                    to={slide.link} 
                    className="btn btn-primary text-lg px-8 py-3 animate-slide-up animation-delay-400"
                  >
                    了解更多
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation Buttons */}
      <div 
        ref={navigationPrevRef} 
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-2 cursor-pointer hover:bg-opacity-50 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </div>
      <div 
        ref={navigationNextRef} 
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-2 cursor-pointer hover:bg-opacity-50 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default Banner;