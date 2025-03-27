
import React from 'react';
import { Card } from './Card';

export const Workshop = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Поймёшь, как работает нейросеть",
      description: "И зачем она тебе вообще — в контенте, в продажах и в жизни."
    },
    {
      number: "2️⃣",
      title: "Научишься писать промты, которые реально цепляют",
      description: "Без "сочини мне сценарий" — получишь формулы, которые дают просмотры."
    },
    {
      number: "3️⃣",
      title: "Разберёшься, как устроены Reels и контентные воронки",
      description: "Чтобы каждый ролик вел к заявке, а не просто набирал лайки."
    },
    {
      number: "4️⃣",
      title: "Проведёшь анализ конкурентов и найдёшь рабочие тренды",
      description: "Не нужно гадать — что сейчас «зайдёт», а что нет."
    },
    {
      number: "5️⃣",
      title: "Скачаешь видео, получишь транскрибацию и адаптируешь под себя",
      description: "Сценарий → правки → готово."
    },
    {
      number: "6️⃣",
      title: "Создашь свой AI-аватар и клонируешь голос",
      description: "Он будет говорить и выглядеть как ты — без съёмок."
    },
    {
      number: "7️⃣",
      title: "Соберёшь финальное видео + запустишь автоворонку",
      description: "Видео публикуется — заявки приходят. Всё автоматом."
    }
  ];

  return (
    <section id="workshop" className="section-padding py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Что ты сделаешь на воркшопе
          </h2>
          <p className="text-xl text-muted-foreground">
            (даже если никогда не работал с AI)
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              hover={true}
            >
              <div className="flex gap-4 items-start">
                <div className="text-3xl text-primary font-bold">{step.number}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
