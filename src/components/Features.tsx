
import React from 'react';
import { Card } from './Card';

const features = [
  {
    title: 'Автоматическое создание контента',
    description: 'Используйте искусственный интеллект для создания высококачественного контента за считанные секунды.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="m4.93 4.93 4.24 4.24"></path>
        <path d="m14.83 9.17 4.24-4.24"></path>
        <path d="m14.83 14.83 4.24 4.24"></path>
        <path d="m9.17 14.83-4.24 4.24"></path>
        <circle cx="12" cy="12" r="4"></circle>
      </svg>
    ),
  },
  {
    title: 'Умное планирование публикаций',
    description: 'Оптимизируйте время публикации контента для максимального охвата вашей аудитории.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="m9 16 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: 'Многоканальная дистрибуция',
    description: 'Распространяйте контент во всех социальных сетях и платформах одним нажатием кнопки.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 3 12 18 7 3"></polyline>
        <circle cx="4" cy="8" r="2"></circle>
        <circle cx="12" cy="20" r="2"></circle>
        <circle cx="20" cy="8" r="2"></circle>
      </svg>
    ),
  },
  {
    title: 'Аналитика и отчетность',
    description: 'Отслеживайте эффективность контента с помощью подробных аналитических данных и отчетов.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="m19 9-5 5-4-4-3 3"></path>
      </svg>
    ),
  },
  {
    title: 'SEO-оптимизация',
    description: 'Автоматически оптимизируйте контент для лучшего ранжирования в поисковых системах.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
        <path d="M11 8v6"></path>
        <path d="M8 11h6"></path>
      </svg>
    ),
  },
  {
    title: 'Автоматическая модерация',
    description: 'Проверяйте контент на соответствие нормам и правилам перед публикацией.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m15 9-6 6"></path>
        <path d="m9 9 6 6"></path>
      </svg>
    ),
  },
];

export const Features = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Возможности
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Всё необходимое для автоматизации контента
          </h2>
          <p className="text-xl text-muted-foreground">
            Наша платформа предоставляет полный набор инструментов для создания, управления и распространения контента.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full flex flex-col" hover={true}>
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
