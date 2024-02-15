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

      <div className="h-screen w-full overflow-auto">{outlet}</div>
    </div>
  );
}
