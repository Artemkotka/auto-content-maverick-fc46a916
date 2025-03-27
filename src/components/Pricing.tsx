
import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { useIsMobile } from '@/hooks/use-mobile';
export const Pricing = () => {
  const isMobile = useIsMobile();
  return <section id="pricing" className="section-padding py-24 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Стоимость участия
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-4 sm:p-8 animate-scale-in border-primary/30 relative">
            {/* Results preview - floating element */}
            <div className="absolute -top-16 md:-top-10 md:-right-10 z-10 bg-white rounded-lg shadow-xl p-3 rotate-3 hidden md:block">
              <img 
                src="/lovable-uploads/f7fa3fe4-f283-4987-9f2c-2e19213f5150.png" 
                alt="Результаты роста подписчиков" 
                className="w-48 rounded"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">
                Ваш результат
              </div>
            </div>
            
            <div className="flex justify-between items-center flex-col md:flex-row mb-6">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <p className="text-muted-foreground mb-2">Стоимость участия:</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <h3 className="text-4xl font-bold text-primary">4950 ₽</h3>
                  <span className="text-muted-foreground line-through">9900 ₽</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">по промокоду из Telegram-бота </p>
                <p className="text-sm">Промокод действует 24 часа после получения в боте </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <Button href="https://payform.ru/816v9Ud/" size={isMobile ? "default" : "lg"} className={`w-full ${isMobile ? 'text-base py-6' : 'sm:w-auto text-lg'} font-medium`}>
                Оплачиваю
              </Button>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Материалы открываются сразу после оплаты.<br />
                Всё готово — просто начни.
              </p>
            </div>
            
            {/* Mobile-only results display */}
            <div className="mt-8 md:hidden">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-center">Результаты участников:</h4>
                <div className="flex justify-center">
                  <div className="bg-white rounded-lg shadow p-2 w-48">
                    <img 
                      src="/lovable-uploads/f7fa3fe4-f283-4987-9f2c-2e19213f5150.png" 
                      alt="Результаты роста подписчиков" 
                      className="w-full rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
