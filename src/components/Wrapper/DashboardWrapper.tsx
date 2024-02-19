import React from 'react';

type DashboardWrapperProps = {
  children: React.ReactNode;
};

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  return <div className="p-5 lg:p-12">{children}</div>;
}
