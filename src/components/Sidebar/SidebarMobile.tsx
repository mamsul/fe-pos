import { useAuth } from '../../hooks/useAuth';
import AppTitle from '../AppTitle';
import SidebarProtectedMenu from './SidebarProtectedMenu';
import SidebarSignoutBtn from './SidebarSignoutBtn';

export default function SidebarMobile() {
  const { logout } = useAuth();

  return (
    <div className="relative h-full w-full overflow-auto p-5">
      <AppTitle />

      <SidebarProtectedMenu />

      <SidebarSignoutBtn handleClick={() => logout()} />
    </div>
  );
}
