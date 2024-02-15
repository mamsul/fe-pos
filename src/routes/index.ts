import {
  BookUser,
  LayoutDashboard,
  LucideIcon,
  Package,
  SettingsIcon,
  ShoppingBasket,
} from 'lucide-react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Order from '../pages/Order';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Settings from '../pages/Settings';
import Users from '../pages/Users';

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
    name: 'Order',
    path: '/dashboard/order',
    element: Order,
    icon: ShoppingBasket,
  },
  {
    name: 'Users',
    path: '/dashboard/users',
    element: Users,
    icon: BookUser,
  },
  {
    name: 'Product',
    path: '/dashboard/product',
    element: Product,
    icon: Package,
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    element: Settings,
    icon: SettingsIcon,
  },
];
