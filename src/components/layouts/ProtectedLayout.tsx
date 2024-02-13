import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SidebarProtected from '../Sidebar/SidebarProtected';

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen bg-blue-50">
      <SidebarProtected />

      <div className="h-full w-full px-10 pt-20">{outlet}</div>
    </div>
  );
}
