import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '请输入留言内容';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-cream-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-forest-900 mb-12">联系我们</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-forest-900 mb-6">留言咨询</h2>
              
              {submitSuccess ? (
                <div className="bg-primary-50 border border-primary-200 text-primary-700 px-4 py-3 rounded-lg mb-6">
                  <p>您的留言已成功提交，我们将尽快与您联系！</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="form-label">姓名</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="form-label">邮箱</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">留言内容</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`}
                    ></textarea>
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    ) : (
                      <Send className="h-5 w-5 mr-2" />
                    )}
                    {isSubmitting ? '提交中...' : '提交'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-primary-600 rounded-xl shadow-md overflow-hidden text-white mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">联系方式</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">邮箱</h3>
                      <p>contact@yuejianweilai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">电话</h3>
                      <p>+86 010-12345678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">地址</h3>
                      <p>北京市朝阳区建国路88号</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream-200">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-forest-900 mb-6">工作时间</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-forest-600">周一至周五</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-forest-600">周六</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-forest-600">周日及法定节假日</span>
                    <span className="font-medium">休息</span>
                  </div>
                </div>
                
                <div className="mt-8 bg-primary-50 p-4 rounded-lg">
                  <p className="text-forest-700">
                    如需紧急联系，请发送邮件至 urgent@yuejianweilai.com，我们会尽快回复。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;