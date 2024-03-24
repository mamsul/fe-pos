import React from 'react';

type FormGroupProps = {
  label: string;
  labelFor: string;
  children: React.ReactNode;
  errors?: string | null;
};

export default function FormGroup({
  label,
  labelFor,
  children,
  errors,
}: FormGroupProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-gray-700" htmlFor={labelFor}>
        {label}
      </label>

      {children}

      {errors && <span className="text-sm text-red-400">{errors}</span>}
    </div>
  );
}
