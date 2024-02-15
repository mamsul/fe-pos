import React from 'react';

type DashboardWrapperProps = {
  children: React.ReactNode;
};

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  return <div className="p-10">{children}</div>;
}
