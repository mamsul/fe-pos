import { Edit, Trash2 } from 'lucide-react';
import { rupiah } from '../../../../lib/utils';

export default function OrderItems() {
  return (
    <div className="flex flex-col text-sm xl:text-base">
      <div className="flex flex-row items-center border-b py-3 font-medium">
        <div className="w-6/12">
          <span>Items</span>
        </div>
        <div className="w-2/12">
          <span>Qty</span>
        </div>
        <div className="w-2/12">
          <span>Price</span>
        </div>
        <div className="w-2/12" />
      </div>
      {Array(4)
        .fill('Food')
        .map((item, idx) => (
          <div
            key={idx}
            className="mt-2 flex flex-row items-center py-2 text-sm font-light">
            <div className="w-6/12">
              Special {item} {idx}
            </div>
            <div className="w-2/12">2</div>
            <div className="w-2/12">
              <strong>{rupiah(25000)}</strong>
            </div>
            <div className="flex w-2/12 items-center justify-end gap-3">
              <Edit className="w-4 cursor-pointer text-blue-600" />
              <Trash2 className="w-4 cursor-pointer text-red-300" />
            </div>
          </div>
        ))}
    </div>
  );
}
