import { Navigate, useLocation, useOutlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import HeaderPublic from '../Header/HeaderPublic';

export default function PublicLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const { user } = useAuth();

  const currentRoute = location.pathname;

  const accessibleRoute = [''].includes(currentRoute);

  if (user && !accessibleRoute) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="h-screen w-full">
      <HeaderPublic />
      {outlet}
    </div>
  );
}
