import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { useIsMobile } from '@/hooks/use-mobile';
export const Pricing = () => {
  const isMobile = useIsMobile();
  return <section id="pricing" className="section-padding py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Стоимость участия
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-4 sm:p-8 animate-scale-in border-primary/30">
            <div className="flex justify-between items-center flex-col md:flex-row mb-6">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <p className="text-muted-foreground mb-2">Стоимость участия:</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <h3 className="text-4xl font-bold text-primary">4950 ₽</h3>
                  <span className="text-muted-foreground line-through">9900 ₽</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">по промокоду из Telegram-бота </p>
                <p className="text-sm">Промокод действует 24 часа после получения в боте </p>
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
          </Card>
        </div>
      </div>
    </section>;
};