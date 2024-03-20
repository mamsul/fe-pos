import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'highlight' | 'disabled';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'default', ...props }, ref) => {
    const styleVariant = {
      disabled: 'border border-gray-300 bg-gray-300 text-gray-600',
      default: '',
      highlight: 'bg-blue-600 text-white hover:bg-blue-700',
    };

    return (
      <button
        className={cn(
          'inline-flex h-full w-full items-center justify-center rounded-lg transition-all duration-300',
          styleVariant[variant],
          className,
        )}
        {...props}
        ref={ref}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
