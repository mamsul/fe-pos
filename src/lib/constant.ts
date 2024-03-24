import {
  BookUser,
  LayoutDashboard,
  Package,
  SettingsIcon,
  ShoppingBasket,
} from 'lucide-react';

const ENV = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
};

const SIDEBAR_MENU = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Order',
    path: '/dashboard/order',
    icon: ShoppingBasket,
  },
  {
    name: 'Users',
    path: '/dashboard/users',
    icon: BookUser,
  },
  {
    name: 'Product',
    path: '/dashboard/product',
    icon: Package,
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    icon: SettingsIcon,
  },
] as IRoute[];

export { ENV, SIDEBAR_MENU };
