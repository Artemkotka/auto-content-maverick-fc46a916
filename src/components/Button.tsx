
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    icon, 
    iconPosition = 'left', 
    children, 
    disabled, 
    ...props 
  }, ref) => {
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 border-transparent',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
      outline: 'bg-transparent border-border hover:bg-accent text-foreground',
      ghost: 'bg-transparent hover:bg-accent text-foreground border-transparent',
      link: 'bg-transparent text-primary underline-offset-4 hover:underline border-transparent p-0 h-auto font-normal'
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4',
      lg: 'h-12 px-6 text-lg'
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          'relative inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border',
          variants[variant],
          sizes[size],
          isLoading && 'cursor-wait',
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="animate-spin h-5 w-5" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        <span className={cn(isLoading && 'opacity-0')}>
          {icon && iconPosition === 'left' && (
            <span className="mr-2 -ml-1">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="ml-2 -mr-1">{icon}</span>
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
