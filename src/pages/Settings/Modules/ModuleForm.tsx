import { Button } from '../../../components/ui/button/Button';
import { FormInput } from '../../../components/ui/form/FormInput';
import { referenceStore } from '../../../store/referenceStore';

type ModuleFormProps = {
  type?: 'edit' | 'add';
};

export default function ModuleForm({ type = 'add' }: ModuleFormProps) {
  const { handleModal } = referenceStore();

  const handleCancelForm = () => {
    handleModal({ show: false, content: null });
  };

  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold md:text-xl">
        {type == 'add' ? 'Add' : 'Edit'} Module
      </h2>
      <form action="#" className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700" htmlFor="name">
            Module Name
          </label>
          <FormInput
            id="name"
            type="text"
            wrapperClass="h-11 md:h-11 xl:h-11"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700" htmlFor="name">
            Module Path
          </label>
          <FormInput
            id="path"
            type="text"
            wrapperClass="h-11 md:h-11 xl:h-11"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-gray-700" htmlFor="status">
            Status
          </label>
          <FormInput
            id="status"
            type="text"
            wrapperClass="h-11 md:h-11 xl:h-11"
            required
          />
        </div>

        <div className="flex gap-4 pt-8">
          <Button
            type="submit"
            variant="default"
            className="h-11 md:h-12"
            onClick={handleCancelForm}>
            Cancel
          </Button>
          <Button type="submit" variant="highlight" className="h-11 md:h-12">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
