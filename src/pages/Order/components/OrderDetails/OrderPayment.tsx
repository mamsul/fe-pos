import { rupiah } from '../../../../lib/utils';

export default function OrderPayment() {
  return (
    <>
      <h3 className="text-sm font-medium xl:text-base">Payment Summary</h3>
      <div className="mt-4 flex items-center justify-between text-sm xl:text-base">
        <span className="font-light">Subtotal</span>
        <span>
          <strong>{rupiah(100000)}</strong>
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm xl:text-base">
        <span className="font-light">Tax</span>
        <span>
          <strong>0%</strong>
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm xl:text-base">
        <span className="font-light">Discount</span>
        <span>
          <strong>0%</strong>
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between bg-gray-50 py-3 text-sm xl:text-base">
        <span className="font-light">Total Payment</span>
        <span>
          <strong>{rupiah(100000)}</strong>
        </span>
      </div>
    </>
  );
}
