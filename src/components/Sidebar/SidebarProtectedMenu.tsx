import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { protectedRoute } from '../../routes';

type SidebarProtectedMenuProps = {
  isMinimize: boolean;
};

export default function SidebarProtectedMenu({
  isMinimize,
}: SidebarProtectedMenuProps) {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <ul className="mt-20 flex flex-col gap-2">
      {protectedRoute.map((route) => (
        <li key={route.path} className="group relative">
          <Link
            to={route.path}
            className={cn(
              'inline-flex w-full items-center rounded-lg p-3',
              activePath === route.path
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-500',
            )}>
            {route.icon && (
              <route.icon className={cn(isMinimize ? '' : 'me-2 h-4 w-4')} />
            )}
            {!isMinimize && route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
