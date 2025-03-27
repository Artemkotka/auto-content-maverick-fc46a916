
import React from 'react';
import { Card } from './Card';

export const Format = () => {
  const formatDetails = [
    {
      icon: "🧠",
      title: "Обучение в любое время",
      description: "Все материалы доступны сразу. Смотри, когда удобно."
    },
    {
      icon: "📍",
      title: "Telegram + Notion",
      description: "Уроки, гайды, ссылки, папки — всё в одном месте."
    },
    {
      icon: "📹",
      title: "Формат видео",
      description: "Уроки в .mov — легко смотреть с телефона или компа."
    },
    {
      icon: "🔄",
      title: "Доступ — бессрочный",
      description: "Открыл сегодня, вернулся через месяц — ничего не сгорит."
    }
  ];

  const suitableFor = [
    "Ты не умеешь монтировать",
    "Не снимал(а) себя ни разу",
    "Никогда не работал(а) с AI"
  ];

  return (
    <section id="format" className="section-padding py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Формат участия:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {formatDetails.map((item, index) => (
            <Card 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              hover={true}
            >
              <div className="flex gap-4 items-start">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              👌 Подходит даже если:
            </h3>
            <div className="space-y-3">
              {suitableFor.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-primary text-xl">–</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
