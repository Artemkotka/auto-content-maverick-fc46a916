
import React from 'react';
import { Card } from './Card';

export const Results = () => {
  const results = [
    {
      title: "У тебя будет система, которая делает Reels за тебя",
      description: "→ без съёмок, без монтажа, без кучи сервисов и ручной возни"
    },
    {
      title: "Ты перестанешь тратить часы на контент",
      description: "→ AI заменит редакторов, сценаристов и монтажёров"
    },
    {
      title: "В твоём аккаунте появится поток вирусных видео",
      description: "→ которые приносят охваты, подписки и клиентов"
    },
    {
      title: "Ты начнёшь продавать продукты и услуги",
      description: "→ без рекламы, через Reels, которые работают на тебя 24/7"
    },
    {
      title: "Ты почувствуешь:",
      description: "«Я могу генерировать контент, не выгорая»"
    }
  ];

  return (
    <section id="results" className="section-padding py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Что будет после воркшопа:
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {results.map((item, index) => (
            <Card 
              key={index}
              className="animate-slide-up flex items-start gap-4"
              style={{ animationDelay: `${index * 100}ms` }}
              hover={true}
            >
              <div className="text-2xl text-primary flex-shrink-0 pt-1">✅</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
