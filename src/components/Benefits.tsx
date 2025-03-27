
import React from 'react';
import { Card } from './Card';

export const Benefits = () => {
  const benefits = [
    {
      icon: "🎥",
      title: "8 видеоуроков",
      description: "От регистрации до публикации Reels с AI — пошагово, понятно, без воды. Уроки по 10 минут."
    },
    {
      icon: "📚",
      title: "Гайды и промты",
      description: "Чёткие инструкции, сервисы, готовые фразы — не надо ничего гуглить."
    },
    {
      icon: "🛠",
      title: "Шаблоны и бонусные папки",
      description: "Для монтажа, Telegram-связок и автоматической загрузки."
    },
    {
      icon: "🤖",
      title: "Создание цифрового аватара и голоса",
      description: "Ты сам в кадре? Необязательно. AI всё скажет и покажет за тебя."
    },
    {
      icon: "💬",
      title: "Чат и поддержка",
      description: "Вопросы? Ответим. Ошибся? Поможем. Всё — в одном месте."
    },
    {
      icon: "🚀",
      title: "Система Reels 24/7",
      description: "Настроил один раз — работает на тебя каждый день. Даже ночью."
    }
  ];

  return (
    <section id="benefits" className="section-padding py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ты получаешь всё, чтобы запустить контент-машину за 1 вечер:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              hover={true}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
