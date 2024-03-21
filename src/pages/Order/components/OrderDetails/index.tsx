import { Printer, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../../../../components/ui/button/Button';
import { FormInput } from '../../../../components/ui/form/FormInput';
import { cn } from '../../../../lib/utils';
import OrderItems from './OrderItems';
import OrderPayment from './OrderPayment';

const orderTypes: Array<IOrderType> = [
  { name: 'Dine In', value: 'dine_in' },
  { name: 'Take Away', value: 'take_away' },
  { name: 'Delivery', value: 'delivery' },
];

type OrderDetailsProps = {
  handleClose?: () => void;
};

export default function OrderDetails({ handleClose }: OrderDetailsProps) {
  const [orderType, setOrderType] = useState<string>('dine_in');

  return (
    <>
      <div className="relative flex h-full w-full flex-col overflow-auto px-5 pb-16 lg:pt-12">
        <div className="sticky inset-x-0 top-0 z-10 bg-white py-2 lg:top-0 xl:py-3">
          <div className="flex justify-end lg:hidden">
            <button onClick={handleClose}>
              <X className="w-6 text-gray-700" />
            </button>
          </div>
          <h2 className="text-base font-semibold xl:text-lg">Order Details</h2>
        </div>

        <div>
          <FormInput
            wrapperClass="h-8 md:h-10 xl:h-10 mt-3 xl:mt-6"
            className="text-xs sm:text-sm"
            placeholder="Orderer's name"
          />
        </div>

        <div className="mt-4 flex gap-3 lg:mt-7 xl:mt-10">
          {orderTypes.map((type) => (
            <Button
              key={type.value}
              onClick={() => setOrderType(type.value)}
              className={cn(
                'w-max rounded px-2 py-2 text-xs font-medium xl:px-6 xl:text-sm',
                orderType === type.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-500',
              )}>
              {type.name}
            </Button>
          ))}
        </div>

        <div className="mt-4 border-b pb-6 lg:mt-7 xl:mt-10">
          <OrderItems />
        </div>

        <div className="mt-4 pb-6 lg:mt-7 xl:mt-10">
          <OrderPayment />
        </div>
        <div className="mt-4 pb-6 lg:mt-7 xl:mt-10">
          <OrderPayment />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="flex h-14 flex-row gap-2 bg-white px-5 py-2 text-sm md:h-16 md:gap-4 lg:h-14 xl:h-16 xl:text-base">
          <Button className="w-5/12" variant="disabled">
            Save Order
          </Button>
          <Button className="w-5/12" variant="highlight">
            Pay Now
          </Button>
          <Button className="w-2/12">
            <Printer />
          </Button>
        </div>
      </div>
    </>
  );
}
