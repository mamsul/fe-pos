import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { cn } from '../../../lib/utils';
import AppTitle from '../../AppTitle';
import SidebarMinimizeBtn from './SidebarMinimizeBtn';
import SidebarProtectedMenu from './SidebarProtectedMenu';
import SidebarSignoutBtn from './SidebarSignoutBtn';

export default function SidebarProtected() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const [isMinimize, setMinimize] = useState<boolean>(false);

  return (
    <aside
      className={cn(
        'relative z-20 hidden h-full transform bg-white px-5 pt-8 transition-all duration-300 lg:block',
        isMinimize ? 'w-[5.5rem]' : 'w-2/12',
      )}>
      <AppTitle showText={!isMinimize} />

      <SidebarMinimizeBtn
        handleClick={() => setMinimize(!isMinimize)}
        isMinimize={isMinimize}
      />

      <SidebarProtectedMenu isMinimize={isMinimize} />

      <SidebarSignoutBtn isMinimize={isMinimize} handleClick={handleLogout} />
    </aside>
  );
}
