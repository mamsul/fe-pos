import { motion as m } from 'framer-motion';
import { X } from 'lucide-react';
import { referenceStore } from '../../store/referenceStore';
import IconButton from './button/IconButton';

export default function Modal() {
  const { handleModal, modal } = referenceStore();

  const handleCloseModal = () => {
    handleModal({ show: false, content: null });
  };

  return (
    <>
      {/* Modal Backdrop */}
      <m.div
        className="fixed inset-0 z-20 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <m.div
        className="absolute inset-0 z-30 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: -50 }}
        transition={{ type: 'spring', bounce: 0.3 }}>
        <div className="max-h-[80vh] w-max overflow-auto rounded-lg bg-white p-2">
          <div className="flex items-center justify-end">
            <IconButton
              icon={<X className="h-5 w-5 group-hover:text-white" />}
              variant="danger"
              handleClick={handleCloseModal}
            />
          </div>
          <div className="px-3 pb-2 md:px-5 md:pb-4">{modal.content}</div>
        </div>
      </m.div>
    </>
  );
}
