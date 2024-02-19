import { useState } from 'react';
import ContentTitle from '../../components/Dashboard/ContentTitle';
import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';
import { cn } from '../../lib/utils';
import BestSelling from './components/BestSelling';
import DailySales from './components/DailySales';
import EmployeeEarnings from './components/EmployeeEarnings';
import TotalIncome from './components/TotalIncome';
import TotalOrderAndCustomer from './components/TotalOrderAndCustomer';

const dashboardFilters: string[] = [
  'Yesterday',
  'Today',
  'Week',
  'Month',
  'Year',
];

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState<string>('Today');

  return (
    <>
      <HeaderProtected />

      {/* Title */}
      {/* Filter Options */}
      <DashboardWrapper>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <ContentTitle label="Dashboard" />

          <ul className="mt-4 flex items-center gap-2 border-b lg:mt-0">
            {dashboardFilters.map((filter) => (
              <button
                className={cn(
                  'h-full w-20 py-2 text-sm transition-all duration-200 hover:border-b-2 hover:border-yellow-500',
                  activeFilter === filter
                    ? 'border-b-2 border-yellow-500 font-medium'
                    : 'text-gray-600',
                )}
                onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-5 xl:gap-10">
          {/* Daily Sales */}
          <div className="h-[18rem] w-full rounded-3xl bg-white p-5 md:h-[20rem] lg:h-[17rem] xl:h-[20rem] 2xl:h-[23rem]">
            <DailySales />
          </div>

          {/* Total Income */}
          {/* Total Orders */}
          {/* New Customers */}
          <div className="h-max w-full rounded-3xl bg-transparent md:h-[20rem] lg:h-[17rem] xl:h-[20rem] 2xl:h-[23rem]">
            <div className="flex h-full w-full flex-col gap-8 md:flex-row lg:gap-5 xl:gap-10">
              <div className="h-full w-full rounded-3xl bg-white p-5 lg:w-1/2">
                <TotalIncome />
              </div>
              <div className="flex h-full w-full flex-col gap-8 lg:w-1/2 lg:gap-5 xl:gap-10">
                <div className="h-full w-full rounded-3xl bg-white p-5">
                  <TotalOrderAndCustomer
                    label="Total Order"
                    value="2400"
                    linkTo="/dashboard/order"
                  />
                </div>
                <div className="h-full w-full rounded-3xl bg-white p-5">
                  <TotalOrderAndCustomer
                    label="New Customers"
                    value="650"
                    linkTo="/dashboard/users"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Best Selling Products */}
          <div className="h-[18rem] w-full rounded-3xl bg-white p-5 lg:h-[25rem]">
            <BestSelling />
          </div>

          {/* Employee Earnings */}
          <div className="h-[18rem] w-full rounded-3xl bg-white p-5 lg:h-[25rem]">
            <EmployeeEarnings />
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}
