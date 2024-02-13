import React from 'react';
import { cn } from '../../lib/utils';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'h-10 w-full rounded-lg border bg-white px-4 text-sm outline-none transition-all duration-300 focus:border-gray-700 sm:text-base lg:h-12 xl:h-14',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

FormInput.displayName = 'FormInput';

export { FormInput };
