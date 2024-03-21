import { LayoutDashboard } from 'lucide-react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import { orderRoutes } from './orderRoutes';
import { productRoutes } from './productRoutes';
import { settingRoutes } from './settingRoutes';
import { userRoutes } from './userRoutes';

export const publicRoute = [
  {
    name: 'Login',
    path: '/',
    element: Login,
  },
] as IPageRoute[];

export const protectedRoute = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    element: Dashboard,
    icon: LayoutDashboard,
  },
  ...orderRoutes,
  ...userRoutes,
  ...productRoutes,
  ...settingRoutes,
] as IPageRoute[];
