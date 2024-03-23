import React from 'react';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormSwitch = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="inline-flex w-max cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" ref={ref} {...props} />
        <div className="peer relative h-6 w-11 rounded-full bg-gray-800/30 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-black peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-0"></div>
        <span className="ms-3 text-sm font-medium text-black">{label}</span>
      </label>
    );
  },
);

FormSwitch.displayName = 'FormSwitch';

export { FormSwitch };
