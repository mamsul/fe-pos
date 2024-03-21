import { Edit3Icon, Plus, Search, Trash2 } from 'lucide-react';
import Table from '../../../components/ui/Table';
import { Button } from '../../../components/ui/button/Button';
import IconButton from '../../../components/ui/button/IconButton';
import { FormInput } from '../../../components/ui/form/FormInput';
import { dummyModules } from '../../../lib/dummy';
import { referenceStore } from '../../../store/referenceStore';
import { moduleColumns } from '../column';
import ModuleForm from './ModuleForm';

export default function Modules() {
  const { handleModal } = referenceStore();
  const tableColumns: ITableColumn[] = [
    ...moduleColumns,
    {
      dataKey: 'action',
      title: 'Action',
      render: () => (
        <div className="flex w-max gap-2">
          <IconButton
            variant="warning"
            icon={<Edit3Icon className="h-4 w-4 group-hover:text-white" />}
            handleClick={() =>
              handleModal({
                show: true,
                content: <ModuleForm key="edit-module" type="edit" />,
              })
            }
          />
          <IconButton
            variant="danger"
            icon={<Trash2 className="h-4 w-4 group-hover:text-white" />}
          />
        </div>
      ),
    },
  ];

  const handleAddModule = () => {
    handleModal({ show: true, content: <ModuleForm key="add-module" /> });
  };

  return (
    <>
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center justify-between">
          <FormInput
            type="text"
            placeholder="Search by module name..."
            className="max-w-sm"
            wrapperClass="h-11 md:h-11 xl:h-11"
            icon={<Search className="h-5 w-5 text-gray-500" />}
          />

          <Button
            variant="highlight"
            className="flex h-11 w-max items-center px-3"
            onClick={handleAddModule}>
            <Plus className="me-3 h-5 w-5" />
            <p className="w-max">Add Module</p>
          </Button>
        </div>

        <Table column={tableColumns} data={dummyModules} />
      </div>
    </>
  );
}
