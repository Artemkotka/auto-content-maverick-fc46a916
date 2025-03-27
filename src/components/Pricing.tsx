
import React from 'react';
import { Button } from './Button';
import { Card } from './Card';

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Стоимость участия
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 animate-scale-in border-primary/30">
            <div className="flex justify-between items-center flex-col md:flex-row mb-6">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-muted-foreground mb-2">Стоимость участия:</p>
                <div className="flex items-center gap-4">
                  <h3 className="text-4xl font-bold text-primary">4950 ₽</h3>
                  <span className="text-muted-foreground line-through">9900 ₽</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">по промокоду из Telegram-бота - действителен</p>
                <p className="text-sm">Промокод действует 24 часа после получения</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <Button size="lg" className="w-full sm:w-auto">
                Принять участие в воркшопе
              </Button>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Материалы открываются сразу после оплаты.<br />
                Всё готово — просто начни.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
