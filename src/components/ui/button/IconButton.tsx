import { cn } from '../../../lib/utils';

type Variant = 'warning' | 'danger';

type IconButtonProps = {
  handleClick?: () => void;
  icon: React.ReactNode;
  variant: Variant;
};

export default function IconButton({
  handleClick,
  icon,
  variant,
}: IconButtonProps) {
  const btnVariant = {
    warning: 'hover:bg-yellow-500',
    danger: 'hover:bg-red-500',
  };

  return (
    <button
      className={cn(
        'group flex items-center justify-center rounded-md bg-white p-1.5',
        btnVariant[variant],
      )}
      onClick={handleClick}>
      {icon}
    </button>
  );
}
