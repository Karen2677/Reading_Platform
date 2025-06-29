import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsResourcesDropdownOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: '首页', href: '/' },
    { name: '阅读教育中心', href: '/courses' },
    { name: '专家联盟', href: '/experts' },
    { 
      name: '资源库', 
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { name: '智阅书库', href: '/smart-library' },
        { name: '教学资源', href: '/resources' },
        { name: '运营资源', href: '/support' }
      ]
    },
    { name: '关于我们', href: '/about' },
    { name: '会员中心', href: '/account' },
  ];

  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled || isMenuOpen ? 'bg-white shadow-md border-b border-cream-200' : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="text-2xl font-bold text-primary-700">阅见未来阅读研习院</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={toggleResourcesDropdown}
                      className={cn(
                        'flex items-center text-base font-medium transition-colors',
                        location.pathname.startsWith('/resources') || 
                        location.pathname.startsWith('/smart-library') || 
                        location.pathname.startsWith('/support')
                          ? 'text-primary-700'
                          : 'text-forest-700 hover:text-primary-600'
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                    
                    {isResourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-cream-200 py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-forest-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'text-base font-medium transition-colors',
                      location.pathname === item.href
                        ? 'text-primary-700'
                        : 'text-forest-700 hover:text-primary-600'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-forest-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 animate-slide-down border-t border-cream-200">
          <div className="container-custom space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={toggleResourcesDropdown}
                      className={cn(
                        'flex items-center justify-between w-full py-2 text-base font-medium text-left',
                        location.pathname.startsWith('/resources') || 
                        location.pathname.startsWith('/smart-library') || 
                        location.pathname.startsWith('/support')
                          ? 'text-primary-700'
                          : 'text-forest-700'
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        isResourcesDropdownOpen && "transform rotate-180"
                      )} />
                    </button>
                    
                    {isResourcesDropdownOpen && (
                      <div className="pl-4 space-y-1 mt-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block py-2 text-sm text-forest-600 hover:text-primary-600"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'block py-2 text-base font-medium',
                      location.pathname === item.href
                        ? 'text-primary-700'
                        : 'text-forest-700'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;