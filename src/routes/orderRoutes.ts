import { ShoppingBasket } from 'lucide-react';
import Order from '../pages/Order';

export const orderRoutes = [
  {
    name: 'Order',
    path: '/dashboard/order',
    element: Order,
    icon: ShoppingBasket,
  },
] as IPageRoute[];
