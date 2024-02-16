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

      <div className="flex h-24 items-center">
        <span className="text-5xl font-bold">{value}</span>
      </div>
    </>
  );
}
