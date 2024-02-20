import { useState } from 'react';
import { Button } from '../../../components/Button';
import { cn } from '../../../lib/utils';

const navigations: Array<string> = ['Staff', 'Customers'];

export default function UserNavigation() {
  const [activeTab, setActiveTab] = useState<string>('Staff');

  return (
    <ul className="flex h-full w-max items-center overflow-auto">
      {navigations.map((tab) => (
        <li key={tab} className="h-full w-max text-xs lg:text-sm">
          <Button
            onClick={() => setActiveTab(tab)}
            className={cn(
              'h-full rounded-none border-none px-4 tracking-wide',
              activeTab === tab
                ? 'bg-blue-500 font-medium text-white'
                : 'text-gray-800',
            )}>
            {tab}
          </Button>
        </li>
      ))}
    </ul>
  );
}
