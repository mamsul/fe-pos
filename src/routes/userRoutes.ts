import { BookUser } from 'lucide-react';
import Users from '../pages/Users';

export const userRoutes = [
  {
    name: 'Users',
    path: '/dashboard/users',
    element: Users,
    icon: BookUser,
  },
] as IPageRoute[];
