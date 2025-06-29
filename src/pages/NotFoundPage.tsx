import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen flex flex-col bg-cream-50">
      <div className="container-custom flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-medium text-forest-800 mb-6">页面未找到</h2>
          <p className="text-forest-600 mb-8 max-w-md mx-auto">
            抱歉，您访问的页面不存在或已被移除。请检查URL是否正确，或返回首页。
          </p>
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center"
          >
            <Home className="h-5 w-5 mr-2" />
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;