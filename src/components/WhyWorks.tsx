
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
    <section id="why-works" className="section-padding py-24">
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

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl font-semibold">
            Это не волшебство. Просто система, которую можно повторить.
          </p>
        </div>
      </div>
    </section>
  );
};
