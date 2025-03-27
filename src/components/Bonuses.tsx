
import React from 'react';
import { Card } from './Card';

export const Bonuses = () => {
  const bonusGroups = [
    {
      title: "📽 Видео-бонусы:",
      items: [
        "Как создать лид-магнит через AI за 5 минут",
        "Как подключить автоворонку к Instagram и Telegram",
        "Как быстро набрать подписчиков через кодовые слова"
      ]
    },
    {
      title: "🧠 Mind-карта "AI-машина контента"",
      description: "Полная схема системы — смотри на одном экране, как всё работает."
    },
    {
      title: "📁 Notion-библиотека с инструкциями:",
      items: [
        "Регистрация в ChatGPT и китайские аналоги",
        "Как оплачивать зарубежные сервисы",
        "Готовые промты, монтаж и создание аватара",
        "Подключение Instagram к воронке и mind-карты"
      ]
    },
    {
      title: "📄 Гайд "Контентная связка для Telegram"",
      description: "8 шагов — от упаковки Telegram до автоматических рассылок подписчикам."
    },
    {
      title: "💬 Чат участников",
      description: "Можно задать вопрос, поделиться результатами, получить поддержку."
    },
    {
      title: "🆕 А ещё — будут обновления",
      description: "Все новые бонусы, гайды и фишки будут добавляться в твою библиотеку."
    }
  ];

  return (
    <section id="bonuses" className="section-padding py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ты получаешь не просто воркшоп — а полноценную базу, к которой хочется возвращаться:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bonusGroups.map((group, index) => (
            <Card 
              key={index}
              className="animate-scale-in h-full"
              style={{ animationDelay: `${index * 100}ms` }}
              hover={true}
            >
              <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
              {group.description && (
                <p className="text-muted-foreground">{group.description}</p>
              )}
              {group.items && (
                <ul className="space-y-2 mt-3">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
