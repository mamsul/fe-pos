import { useState } from 'react';
import { cn } from '../../../lib/utils';
import OrderItemCard from './OrderDetails/OrderItemCard';

const productCategories: Array<string> = [
  'All',
  'Food',
  'Electronic',
  'Furniture',
  'Sport',
];

interface IOrderProductListProps {
  wrapperClass?: string;
}

export default function OrderProductList({
  wrapperClass,
}: IOrderProductListProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const arrProducts = Array(25).fill('Food');

  return (
    <div className={cn('mt-2 flex flex-col gap-5 lg:mt-8', wrapperClass)}>
      <ul className="no-scrollbar mt-4 flex items-center gap-2 overflow-auto border-b lg:mt-0">
        {productCategories.map((filter) => (
          <button
            key={filter}
            className={cn(
              'h-full w-max px-2 py-2 text-sm transition-all duration-200 hover:border-b-4 hover:border-yellow-500 xl:w-20 xl:px-0',
              activeFilter === filter
                ? 'border-b-4 border-yellow-500 font-medium'
                : 'text-gray-600',
            )}
            onClick={() => setActiveFilter(filter)}>
            {filter}
          </button>
        ))}
      </ul>

      <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {arrProducts.map((item, idx) => (
          <OrderItemCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
}
