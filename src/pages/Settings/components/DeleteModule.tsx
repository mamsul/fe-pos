import { useMutation, useQueryClient } from 'react-query';
import { generateErrorMessage } from '../../../lib/utils';
import { deleteModule } from '../../../services/moduleService';
import { referenceStore } from '../../../store/referenceStore';
import CancelButton from './CancelButton';
import SubmitButton from './SubmitButton';

type DeleteModuleProps = {
  id: number;
  name: string;
};

export default function DeleteModule({ id, name }: DeleteModuleProps) {
  const { handleModal } = referenceStore();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({ mutationFn: deleteModule });

  const handleCloseModal = () => {
    handleModal({ show: false, content: null });
  };

  const handleDeleteModule = () => {
    mutate(id, {
      onSuccess() {
        handleCloseModal();
        queryClient.invalidateQueries({ queryKey: ['modules'] });
      },
      onError(error) {
        const err = generateErrorMessage(error);
        alert(err);
      },
    });
  };

  return (
    <div>
      <h2 className="mb-5 text-lg font-bold md:text-2xl">Confirm Deletion</h2>

      <span>
        Are you sure want to delete <strong>{name}</strong> Module
      </span>

      <div className="flex gap-4 pt-8">
        <CancelButton onClick={handleCloseModal} />
        <SubmitButton
          isLoading={isLoading}
          onClick={handleDeleteModule}
          label="Yes, Delete"
        />
      </div>
    </div>
  );
}
