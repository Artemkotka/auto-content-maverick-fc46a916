
import React from 'react';
import { Button } from './Button';
import { Card } from './Card';

export const Guarantee = () => {
  return (
    <section id="guarantee" className="section-padding py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            💬 Гарантия, которая на твоей стороне
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 animate-scale-in border-primary/30">
            <div className="space-y-6 mb-8">
              <p className="text-lg">
                Я не обещаю волшебство. Я обещаю систему, которую ты сможешь применить уже на следующий день.
              </p>
              <p className="text-lg">
                Если ты смотришь, внедряешь — и видишь, что это не твоё → я верну тебе деньги в течение 14 дней после оплаты. 
                Без допросов и "оставьте заявку, мы перезвоним".
              </p>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">📌 Как это работает:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">–</span>
                    <span>Напиши в чат поддержки в течение 14 дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">–</span>
                    <span>Укажи, что ты пробовал, что не получилось</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">–</span>
                    <span>Мы без лишних слов возвращаем деньги</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg">
                Я на 100% уверен в том, что даю. Но ещё больше я за то, чтобы ты покупал спокойно, без страха.
              </p>
              <p className="text-lg font-semibold">
                Так что ты ничем не рискуешь!
              </p>
              <p className="text-lg">
                Ты только получаешь возможность улучшить свои воронки, тексты, сценарии и контент в соцсетях, и масштабировать медийность без раздувания команды. 
                Самое главное привлечь больше клиентов, быть узнаваемым и заработать больше денег.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Время принять решение</h3>
              <Button size="lg">
                Принять участие в воркшопе
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
