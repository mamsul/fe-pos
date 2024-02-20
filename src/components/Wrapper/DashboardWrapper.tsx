import { motion as m } from 'framer-motion';
import React from 'react';

type DashboardWrapperProps = {
  children: React.ReactNode;
};

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <m.div
      className="p-5 lg:p-12"
      key="page"
      initial={{ x: '20%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-20%', opacity: 0, transition: { duration: 0.3 } }}
      transition={{ delay: 0, duration: 0.3 }}>
      {children}
    </m.div>
  );
}
