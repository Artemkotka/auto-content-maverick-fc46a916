
import React from 'react';
import { Card } from './Card';
import { ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const AISystem = () => {
  const isMobile = useIsMobile();
  const steps = [
    {
      icon: "1",
      title: "Шаг 1. Поиск трендов и конкурентов",
      description: "Находим, что реально залетает в твоей нише → убираем «мёртвые» темы."
    },
    {
      icon: "2",
      title: "Шаг 2. Сценарий под AI",
      description: "Ты получаешь формулы + шаблоны → пиши 1 раз, используй 100."
    },
    {
      icon: "3",
      title: "Шаг 3. Создание аватара и голоса",
      description: "Твой двойник, который будет говорить на видео вместо тебя."
    },
    {
      icon: "4",
      title: "Шаг 4. Монтаж и оформление",
      description: "Добавим субтитры, ритм, визуал — чтобы алгоритмы «влюбились» в ролик."
    },
    {
      icon: "5",
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

        <div className="max-w-4xl mx-auto relative mb-12">
          {/* Path line */}
          {!isMobile && (
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>
          )}
          
          {/* Steps */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex ${isMobile ? 'flex-row mb-8' : 'items-center'}`}
              >
                <div className={`
                  ${isMobile ? 'flex-row items-start' : 'flex-col items-center'} 
                  ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'} 
                  relative flex gap-4 w-full md:w-[85%] animate-scale-in
                `}
                style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step card */}
                  <Card 
                    className={`
                      border-primary/30 shadow-md bg-card/90 backdrop-blur-sm
                      ${isMobile ? 'w-full' : index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
                    `}
                    hover={true}
                  >
                    <div className="flex gap-4 p-4 items-start">
                      {/* Step number bubble */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                        {step.icon}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Arrow */}
                  {!isMobile && index < steps.length - 1 && (
                    <div className={`
                      absolute ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} 
                      top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white
                      flex items-center justify-center z-20 animate-pulse
                    `}>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-primary/10 p-6 rounded-xl animate-fade-in">
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
