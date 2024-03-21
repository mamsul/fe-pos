import { cn } from '../../lib/utils';

type TabNavigationProps = {
  tabs: { label: string; content: React.ReactNode }[];
  activeTab: number;
  setActiveTab: (index: number) => void;
};
export default function TabNavigation({
  tabs,
  activeTab,
  setActiveTab,
}: TabNavigationProps) {
  return (
    <ul className="flex h-full w-max items-center overflow-auto">
      {tabs.map((tab, index) => (
        <li className="h-full w-max" key={index}>
          <button
            className={cn(
              'flex h-full items-center px-4',
              activeTab === index
                ? 'bg-blue-500 font-medium text-white'
                : 'text-gray-800',
            )}
            onClick={() => setActiveTab(index)}>
            <span className="text-xs lg:text-sm">{tab.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
