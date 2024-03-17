import {
  BookUser,
  LayoutDashboard,
  Package,
  SettingsIcon,
  ShoppingBasket,
} from 'lucide-react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Order from '../pages/Order';
import Product from '../pages/Product';
import ManageCategory from '../pages/Product/ManageCategory';
import Settings from '../pages/Settings';
import ManageMenu from '../pages/Settings/ManageMenu';
import Users from '../pages/Users';

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
    children: [
      {
        name: 'Manage Category',
        path: '/dashboard/product/manage-category',
        element: ManageCategory,
      },
    ],
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    element: Settings,
    icon: SettingsIcon,
    children: [
      {
        name: 'Manage Menu',
        path: '/dashboard/settings/manage-menu',
        element: ManageMenu,
      },
    ],
  },
] as IPageRoute[];
