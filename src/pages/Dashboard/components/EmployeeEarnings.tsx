import { rupiah } from '../../../lib/utils';

const RowItem = ({ name, earn }: { name: string; earn: number }) => {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div className="flex flex-col gap-1">
        <span className="w-max rounded-lg bg-red-300 p-1 text-[0.65rem] text-white">
          Cashier
        </span>
        <span className="text-xs font-medium md:text-sm">{name}</span>
      </div>
      <span className="text-sm font-medium md:text-base">{rupiah(earn)}</span>
    </div>
  );
};

export default function EmployeeEarnings() {
  return (
    <div className="h-full w-full">
      <h2 className="font-medium">Top Employee Earnings</h2>

      <div className="relative mt-2 h-[90%] w-full overflow-auto">
        <div className="sticky top-0 h-10 w-full">
          <div className="flex h-full w-full items-center justify-between bg-gray-50 px-5 text-sm text-gray-700">
            <span>Employee</span>
            <span>Earnings</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 px-5 pt-5">
          <RowItem earn={450000} name="H. Isnin Bin Kamis" />
          <RowItem earn={450000} name="Mahmud Samsudin" />
          <RowItem earn={450000} name="Ahmad Sulawesi" />
          <RowItem earn={450000} name="Riko Darmawan" />
          <RowItem earn={450000} name="Susanti" />
        </div>
      </div>
    </div>
  );
}
