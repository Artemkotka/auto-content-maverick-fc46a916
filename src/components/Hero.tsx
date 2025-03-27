
import React from 'react';
import { Button } from './Button';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden section-padding pt-36 md:pt-40 min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 transform rotate-[30deg] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block animate-fade-in px-3 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Автоматизация контента стала проще
          </span>
          
          <h1 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Создавайте потрясающий контент в <span className="text-primary">автоматическом режиме</span>
          </h1>
          
          <p className="animate-slide-up animation-delay-200 text-xl text-muted-foreground text-pretty mb-10 max-w-2xl mx-auto">
            Автоматизируйте создание, обработку и публикацию контента с помощью нашей интуитивно понятной платформы
          </p>
          
          <div className="animate-fade-in animation-delay-400 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Начать бесплатно
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Узнать больше
            </Button>
          </div>
          
          <div className="animate-fade-in animation-delay-600 mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              Без кредитной карты
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              Простая настройка
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              Поддержка 24/7
            </div>
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="animate-fade-in animation-delay-800 mt-16 relative max-w-5xl mx-auto">
          <div className="relative rounded-xl shadow-2xl overflow-hidden border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80" 
              alt="Content Automation Dashboard" 
              className="w-full h-auto object-cover animate-blur-in"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
