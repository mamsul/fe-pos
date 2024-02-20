import { ChevronsRight, Search } from 'lucide-react';
import { useState } from 'react';
import ContentTitle from '../../components/Dashboard/ContentTitle';
import { FormInput } from '../../components/Form/FormInput';
import HeaderProtected from '../../components/Header/HeaderProtected';
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper';
import { cn } from '../../lib/utils';
import OrderDetails from './components/OrderDetails/index';
import OrderNavigation from './components/OrderNavigations';
import OrderProductList from './components/OrderProductList';

export default function Order() {
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  return (
    <>
      <HeaderProtected navigation={<OrderNavigation />} />

      <DashboardWrapper>
        <ContentTitle label="Order" />
        <FormInput
          wrapperClass="mt-5 w-full md:w-6/12 lg:w-4/12 h-10 md:h-10 lg:h-12 xl:h-12"
          icon={<Search className="w-5 text-gray-600" />}
          placeholder="Search for all products"
        />

        <OrderProductList wrapperClass="w-full lg:w-[57%] xl:w-[63%] pb-12 lg:pb-0" />
      </DashboardWrapper>

      {/* Order Detail Section - Mobile, Tab, Desktop */}
      <div
        className={cn(
          'fixed inset-y-0 z-20 w-full bg-white transition-all duration-300 lg:z-0 lg:block lg:w-[35%] xl:w-[30%]',
          openDetail ? 'right-0' : '-right-[100%] lg:-right-0',
        )}>
        <OrderDetails handleClose={() => setOpenDetail(false)} />
      </div>

      {/* Button Open Order Detail - Mobile & Tab */}
      <div className="fixed bottom-2 left-0 right-0 h-10 px-4 md:bottom-5 md:left-1/2 lg:hidden">
        <button
          className="flex h-full w-full items-center justify-between gap-3 rounded-2xl bg-yellow-500 px-5 shadow-lg"
          onClick={() => setOpenDetail(true)}>
          <span className="text-sm font-medium text-white">Order Details</span>
          <ChevronsRight className="w-5 text-white" />
        </button>
      </div>
    </>
  );
}
