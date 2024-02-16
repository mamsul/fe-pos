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
        <div className="flex items-end justify-between">
          <ContentTitle label="Dashboard" />
          <ul className="flex items-center gap-2 border-b">
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

        <div className="mt-10 grid grid-cols-2 gap-12">
          {/* Daily Sales */}
          <div className="h-[25rem] w-full rounded-3xl bg-white p-5">
            <DailySales />
          </div>

          {/* Total Income */}
          {/* Total Orders */}
          {/* New Customers */}
          <div className="h-[25rem] w-full rounded-3xl bg-transparent">
            <div className="flex h-full w-full gap-12">
              <div className="h-full w-1/2 rounded-3xl bg-white p-5">
                <TotalIncome />
              </div>
              <div className="flex h-full w-1/2 flex-col gap-12">
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
          <div className="h-[25rem] w-full rounded-3xl bg-white p-5">
            <BestSelling />
          </div>

          {/* Employee Earnings */}
          <div className="h-[25rem] w-full rounded-3xl bg-white p-5">
            <EmployeeEarnings />
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}
