import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type TotalOrderAndCustomerProps = {
  label: 'Total Order' | 'New Customers';
  value: string;
  linkTo: string;
};
export default function TotalOrderAndCustomer({
  label,
  value,
  linkTo,
}: TotalOrderAndCustomerProps) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-medium">{label}</h2>
        <Link to={linkTo}>
          <ArrowRight />
        </Link>
      </div>

      <div className="flex h-[70%] items-center lg:h-[40%] xl:h-[80%]">
        <span className="text-2xl font-bold xl:text-5xl">{value}</span>
      </div>
    </>
  );
}
