
import React from 'react';
import { Card } from './Card';

export const AISystem = () => {
  const steps = [
    {
      icon: "🔹",
      title: "Шаг 1. Поиск трендов и конкурентов",
      description: "Находим, что реально залетает в твоей нише → убираем «мёртвые» темы."
    },
    {
      icon: "🔹",
      title: "Шаг 2. Сценарий под AI",
      description: "Ты получаешь формулы + шаблоны → пиши 1 раз, используй 100."
    },
    {
      icon: "🔹",
      title: "Шаг 3. Создание аватара и голоса",
      description: "Твой двойник, который будет говорить на видео вместо тебя."
    },
    {
      icon: "🔹",
      title: "Шаг 4. Монтаж и оформление",
      description: "Добавим субтитры, ритм, визуал — чтобы алгоритмы «влюбились» в ролик."
    },
    {
      icon: "🔹",
      title: "Шаг 5. Автозагрузка и воронка",
      description: "Контент публикуется сам. Заявки идут. А ты — отдыхаешь или продаёшь."
    }
  ];

  return (
    <section id="ai-system" className="section-padding py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI-система, которая создаёт Reels без тебя — шаг за шагом:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              hover={true}
            >
              <div className="flex gap-4 items-start">
                <div className="text-2xl text-primary">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-primary/10 p-6 rounded-xl">
          <p className="text-xl font-semibold mb-2">
            ⚙️ Эта система работает 24/7 и не требует тебя в кадре.
          </p>
          <p className="text-lg">
            Один вечер — и у тебя запущена машина контента.
          </p>
        </div>
      </div>
    </section>
  );
};
