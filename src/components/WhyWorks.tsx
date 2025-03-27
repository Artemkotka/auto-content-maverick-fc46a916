
import React from 'react';
import { Card } from './Card';

export const WhyWorks = () => {
  const reasons = [
    {
      icon: "📌",
      title: "Алгоритмы любят короткие видео",
      description: "Reels, Shorts и TikTok — это то, что дают охваты без бюджета. Наша система заточена именно под них."
    },
    {
      icon: "📌",
      title: "AI-контент = экономия времени и нервов",
      description: "Не надо снимать, монтировать, перезаписывать. Один раз сделал → запускается на автомате."
    },
    {
      icon: "📌",
      title: "Ты не остаешься один",
      description: "Есть шаблоны, инструкции, чат с участниками. Не получится — поможем. Вопросы — ответим."
    }
  ];

  return (
    <section id="why-works" className="section-padding py-24 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute top-40 right-20 transform rotate-[10deg] w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Почему система AI-контента реально работает
          </h2>
          <p className="text-xl text-muted-foreground">
            (а не "очередной курс")
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              hover={true}
            >
              <div className="text-2xl text-primary mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-muted/30 rounded-xl p-8 relative">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Доказанная эффективность</h3>
                <p className="mb-6">
                  Подписчики растут с 9,871 до 15,500+, и это не случайность.
                  Это работающая система, которую ты сможешь повторить.
                </p>
                <div className="text-lg font-semibold text-primary">
                  Это не волшебство. Просто система, которую можно повторить.
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="rounded-lg shadow-lg bg-white p-4 rotate-1 hover:rotate-0 transition-transform">
                  <img 
                    src="/lovable-uploads/f7fa3fe4-f283-4987-9f2c-2e19213f5150.png" 
                    alt="Рост подписчиков" 
                    className="w-full rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
