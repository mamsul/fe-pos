import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../lib/utils';
import { referenceStore } from '../../store/referenceStore';
import SidebarMobile from '../sections/sidebar/SidebarMobile';
import SidebarProtected from '../sections/sidebar/SidebarProtected';
import Modal from '../ui/Modal';

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const { user } = useAuth();
  const { showSidebar, handleSidebar, modal, handleModal } = referenceStore();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar for Desktop Mode */}
      <SidebarProtected />

      {/* Backdrop for Sidebar Mobile Mode */}
      {showSidebar && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-30"
          onClick={() => handleSidebar(!showSidebar)}
        />
      )}

      {/* Sidebar for Mobile Mode */}
      <div
        className={cn(
          'fixed inset-y-0  z-40 w-[60%] bg-white transition-all duration-300 md:w-[40%]',
          showSidebar ? 'left-0' : '-left-[60%] md:-left-[40%]',
        )}>
        <SidebarMobile />
      </div>

      {/* Content */}
      <div className="h-screen w-full overflow-auto">{outlet}</div>

      {/* Modal */}
      {modal.show && <Modal />}
    </div>
  );
}
