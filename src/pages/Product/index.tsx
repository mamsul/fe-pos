import ContentTitle from '../../components/ContentTitle';
import HeaderProtected from '../../components/sections/header/HeaderProtected';
import DashboardWrapper from '../../components/wrapper/DashboardWrapper';
import { cn } from '../../lib/utils';

export default function Product() {
  const isActive = false;

  return (
    <>
      <HeaderProtected
        navigation={
          <ul className="flex h-full w-max items-center overflow-auto">
            <li className="h-full w-max">
              <span
                className={cn(
                  'flex h-full items-center px-4',
                  isActive
                    ? 'bg-blue-500 font-medium text-white'
                    : 'text-gray-800',
                )}>
                <span className="text-xs lg:text-sm">Category</span>
              </span>
            </li>
          </ul>
        }
      />

      <DashboardWrapper>
        <ContentTitle label="Product" />
      </DashboardWrapper>
    </>
  );
}
