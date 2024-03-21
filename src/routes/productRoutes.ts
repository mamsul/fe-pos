import { Package } from 'lucide-react';
import Product from '../pages/Product';

export const productRoutes = [
  {
    name: 'Product',
    path: '/dashboard/product',
    element: Product,
    icon: Package,
  },
] as IPageRoute[];
