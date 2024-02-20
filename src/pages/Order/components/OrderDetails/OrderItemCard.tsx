import { AnimatePresence, motion as m } from 'framer-motion';
import { useState } from 'react';
import { rupiah } from '../../../../lib/utils';

export default function OrderItemCard({
  item,
  idx,
}: {
  item: string;
  idx: number;
}) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <m.div
      className="relative flex h-48 w-full flex-col items-center overflow-hidden rounded-xl bg-white p-5"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}>
      <AnimatePresence>
        {isHover && (
          <m.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}>
            <div className="pointer-events-none absolute h-full w-full bg-black opacity-50" />
            <m.button
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              className="z-10 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium">
              Add to Cart
            </m.button>
          </m.div>
        )}
      </AnimatePresence>

      <div className="h-20 w-full">
        <img
          src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=1480&t=st=1708398962~exp=1708399562~hmac=d411c3d5d4d94c387716d31ab6e44e44f1bed987a5be572847388554cb76e097"
          alt="product"
          className="h-full w-full object-contain object-center"
        />
      </div>
      <span className="mt-5 w-full truncate text-center text-sm font-medium">
        {item} {idx + 1}
      </span>
      <span className="mt-2 text-sm font-semibold text-blue-800">
        {rupiah(25000)}
      </span>
    </m.div>
  );
}
