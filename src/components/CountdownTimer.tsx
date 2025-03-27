
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ className }) => {
  const calculateTimeLeft = (): TimeLeft => {
    // Set end date to 24 hours from now 
    const now = new Date();
    const endTime = new Date(now);
    endTime.setHours(endTime.getHours() + 24);
    
    const difference = endTime.getTime() - now.getTime();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center text-primary mb-1">
        <Clock className="w-4 h-4 mr-1" />
        <span className="text-sm font-medium">Предложение заканчивается через:</span>
      </div>
      <div className="flex gap-2 justify-center">
        {timeLeft.days > 0 && (
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 rounded-md px-2 py-1 min-w-[2.5rem] text-center font-bold text-primary">
              {timeLeft.days}
            </div>
            <span className="text-xs text-muted-foreground mt-1">дн.</span>
          </div>
        )}
        <div className="flex flex-col items-center">
          <div className="bg-primary/10 rounded-md px-2 py-1 min-w-[2.5rem] text-center font-bold text-primary">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <span className="text-xs text-muted-foreground mt-1">час.</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary/10 rounded-md px-2 py-1 min-w-[2.5rem] text-center font-bold text-primary">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-xs text-muted-foreground mt-1">мин.</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-primary/10 rounded-md px-2 py-1 min-w-[2.5rem] text-center font-bold text-primary">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <span className="text-xs text-muted-foreground mt-1">сек.</span>
        </div>
      </div>
    </div>
  );
};
