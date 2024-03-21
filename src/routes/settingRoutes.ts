import { SettingsIcon } from 'lucide-react';
import Settings from '../pages/Settings';
import AddModule from '../pages/Settings/Modules/AddModule';

export const settingRoutes = [
  {
    name: 'Settings',
    path: '/dashboard/settings',
    element: Settings,
    icon: SettingsIcon,
  },
  {
    name: 'Add Module',
    path: '/dashboard/settings/add-module',
    element: AddModule,
  },
] as IPageRoute[];
