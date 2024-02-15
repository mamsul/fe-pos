import { useState } from 'react';
import { Button } from '../../components/Button';
import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';
import { cn } from '../../lib/utils';

const productTabs: string[] = [
  'Manage Product',
  'Manage Category',
  'Manage Add Ons',
];

export default function Product() {
  const [activeTab, setActiveTab] = useState<string>('Manage Product');

  return (
    <>
      <HeaderProtected
        navigation={
          <ul className="flex h-full w-full items-center">
            {productTabs.map((tab) => (
              <li key={tab} className="h-full">
                <Button
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'h-full rounded-none border-none px-4',
                    activeTab === tab
                      ? 'bg-blue-500 font-medium text-white'
                      : 'text-gray-800',
                  )}>
                  {tab}
                </Button>
              </li>
            ))}
          </ul>
        }
      />

      <DashboardWrapper>
        <h1 className="text-4xl font-bold">Product</h1>
      </DashboardWrapper>
    </>
  );
}
