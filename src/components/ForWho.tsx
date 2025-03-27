
import React from 'react';
import { Card } from './Card';

export const ForWho = () => {
  const painPoints = [
    "Не любит сниматься и не знает, что говорить в кадре",
    "Устаёт от съёмок, монтажа и вечной гонки за охватами",
    "Пробовал ChatGPT, но получалось «ну такое»",
    "Понимает, что видео — это сила, но руки не доходят",
    "Боится, что AI делает "неживой" и странный контент",
    "Запускает Reels, а они не набирают даже 500 просмотров"
  ];

  return (
    <section id="for-who" className="section-padding py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Для тех, кто хочет клиентов из Reels, но…
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              variant="glass"
            >
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">–</span>
                <p>{point}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-4">
            Если ты эксперт, блогер, наставник или предприниматель — тебе нужен поток клиентов, а не новый гемор с контентом.
          </p>
          <p className="text-xl text-primary font-semibold">
            На воркшопе ты получишь систему, которая делает Reels без тебя — с трафиком, заявками и без рекламы.
          </p>
        </div>
      </div>
    </section>
  );
};
