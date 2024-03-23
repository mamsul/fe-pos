import { cn } from '../../lib/utils';

type SpinnerProps = {
  className?: string;
};

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div
      className={cn(
        'text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white',
        className,
      )}
      role="status">
      {/* <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span> */}
    </div>
  );
}
