import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../lib/utils';
import AppTitle from '../AppTitle';
import SidebarMinimizeBtn from './SidebarMinimizeBtn';
import SidebarProtectedMenu from './SidebarProtectedMenu';
import SidebarSignoutBtn from './SidebarSignoutBtn';

export default function SidebarProtected() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const [smallSide, setSmallSide] = useState<boolean>(false);

  return (
    <aside
      className={cn(
        'relative z-20 h-full transform bg-white px-5 pt-8 transition-all duration-300',
        smallSide ? 'w-[5.5rem]' : 'w-2/12',
      )}>
      <AppTitle />

      <SidebarMinimizeBtn
        handleClick={() => setSmallSide(!smallSide)}
        isMinimize={smallSide}
      />

      <SidebarProtectedMenu isMinimize={smallSide} />

      <SidebarSignoutBtn isMinimize={smallSide} handleClick={handleLogout} />
    </aside>
  );
}
