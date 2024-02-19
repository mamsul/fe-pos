import { useState } from 'react';
import { Button } from '../../components/Button';
import ContentTitle from '../../components/Dashboard/ContentTitle';
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
          <ul className="flex h-full w-max items-center overflow-auto">
            {productTabs.map((tab) => (
              <li key={tab} className="h-full w-max text-xs lg:text-sm">
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
        <ContentTitle label="Product" />
      </DashboardWrapper>
    </>
  );
}
