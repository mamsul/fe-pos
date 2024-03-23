import { cn } from '../../lib/utils';

type BadgeProps = {
  label: string;
  variant:
    | 'success'
    | 'warning'
    | 'info'
    | 'danger'
    | 'outline-success'
    | 'outline-info'
    | 'outline-warning';
};

export default function Badge({ variant, label }: BadgeProps) {
  const badgeVariant = {
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-400 text-white',
    info: 'bg-blue-400 text-white',
    danger: 'bg-red-400 text-white',
    'outline-info': 'border border-blue-400 text-blue-400',
    'outline-success': 'border border-green-400 text-green-400',
    'outline-warning': 'border border-yellow-400 text-yellow-400',
  };

  return (
    <span className={cn('rounded-xl px-3 py-1 text-xs', badgeVariant[variant])}>
      {label}
    </span>
  );
}
