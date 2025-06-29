import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-l font-bold text-white">阅见未来阅读研习院</span>
            </div>
            <p className="text-cream-200 text-sm mt-4">
              致力于推动儿童阅读教育在中国的发展，打造最值得信赖的儿童阅读教育支持平台。
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">快速链接</h3>
            <ul className="space-y-2 text-cream-200">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  课程中心
                </Link>
              </li>
              <li>
                <Link to="/experts" className="hover:text-white transition-colors">
                  专家培训
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  资源库
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">更多</h3>
            <ul className="space-y-2 text-cream-200">
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  运营支持
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition-colors">
                  登录 | 注册
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">联系我们</h3>
            <ul className="space-y-3 text-cream-200">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@yuejianweilai.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+86 010-12345678</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>北京市朝阳区建国路88号</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-forest-800 mt-8 pt-6 text-center text-cream-300 text-sm">
          <p>© {currentYear} 阅见未来儿童阅读教育联盟. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;