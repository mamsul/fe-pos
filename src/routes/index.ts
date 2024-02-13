import { LayoutDashboard, LucideIcon, SettingsIcon } from 'lucide-react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Settings from '../pages/Settings';

interface IRoute {
  name: string;
  path: string;
  element: () => JSX.Element;
  icon?: LucideIcon;
}

export const publicRoute: IRoute[] = [
  {
    name: 'Login',
    path: '/',
    element: Login,
  },
  {
    name: 'Register',
    path: '/register',
    element: Register,
  },
];

export const protectedRoute: IRoute[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    element: Dashboard,
    icon: LayoutDashboard,
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    element: Settings,
    icon: SettingsIcon,
  },
];
