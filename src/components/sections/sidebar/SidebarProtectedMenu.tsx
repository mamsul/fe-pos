import { Link, useLocation } from 'react-router-dom';
import { SIDEBAR_MENU } from '../../../lib/constant';
import { cn } from '../../../lib/utils';

type SidebarProtectedMenuProps = {
  isMinimize?: boolean;
};

export default function SidebarProtectedMenu({
  isMinimize,
}: SidebarProtectedMenuProps) {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <ul className="mt-20 flex flex-col gap-2">
      {SIDEBAR_MENU.map((menu) => (
        <li key={menu.path} className="group relative">
          <Link
            to={menu.path}
            className={cn(
              'inline-flex w-full items-center rounded-lg p-3 text-sm md:text-base',
              activePath === menu.path
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-500',
            )}>
            {menu.icon && (
              <menu.icon className={cn(isMinimize ? '' : 'me-2 h-4 w-4')} />
            )}
            {!isMinimize && menu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
