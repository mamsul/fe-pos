import React from 'react';
import { cn } from '../../lib/utils';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  wrapperClass?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, icon, wrapperClass, className, ...props }, ref) => {
    return (
      <div className={cn('relative h-10 w-full md:h-12 xl:h-14', wrapperClass)}>
        <div className="absolute left-2 top-1/2 -translate-y-1/2">{icon}</div>
        <input
          type={type}
          className={cn(
            'h-full w-full rounded-lg border bg-white text-sm outline-none transition-all duration-300 focus:border-gray-700 sm:text-base',
            icon ? 'pl-10 pr-4' : 'px-4',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';

export { FormInput };
