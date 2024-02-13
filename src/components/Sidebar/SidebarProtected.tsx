import { ChevronLeft, ChevronRight, LogOutIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../lib/utils';
import { protectedRoute } from '../../routes';
import { Button } from '../Button';

export default function SidebarProtected() {
  const loc = useLocation();
  const { logout } = useAuth();
  const activePath = loc.pathname;

  const handleLogout = () => {
    logout();
  };

  const [smallSide, setSmallSide] = useState<boolean>(false);

  return (
    <aside
      className={cn(
        'relative h-full transform bg-white px-5 pt-8 transition-all duration-300',
        smallSide ? 'w-[5.5rem]' : 'w-2/12',
      )}>
      <Link
        to="/dashboard"
        className="rounded-lg bg-black px-4 py-2 text-2xl font-bold text-white">
        {smallSide ? 'P' : 'POS'}
      </Link>

      <Button
        className="top-15 absolute -right-4 h-8 w-8 border-none bg-gray-200"
        onClick={() => setSmallSide(!smallSide)}>
        {smallSide ? (
          <ChevronRight className="h-5 w-5" />
        ) : (
          <ChevronLeft className="h-5 w-5" />
        )}
      </Button>

      <ul className="mt-20 flex flex-col gap-2">
        {protectedRoute.map((route) => (
          <li key={route.path}>
            <Link
              to={route.path}
              className={cn(
                'inline-flex w-full items-center rounded-lg p-3',
                activePath === route.path
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-500',
              )}>
              {route.icon && (
                <route.icon className={cn(smallSide ? '' : 'me-2 h-4 w-4')} />
              )}
              {!smallSide && route.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="absolute inset-x-5 bottom-5 flex items-center justify-center rounded-lg bg-red-50 p-3"
        onClick={handleLogout}>
        <span className="inline-flex items-center text-red-700">
          <LogOutIcon className={`h-4 w-4 ${smallSide ? 'me-0' : 'me-2'}`} />{' '}
          {!smallSide && 'Sign Out'}
        </span>
      </button>
    </aside>
  );
}
