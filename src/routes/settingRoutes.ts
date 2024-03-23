import { SettingsIcon } from 'lucide-react';
import Settings from '../pages/Settings';

export const settingRoutes = [
  {
    name: 'Settings',
    path: '/dashboard/settings',
    element: Settings,
    icon: SettingsIcon,
  },
] as IPageRoute[];
