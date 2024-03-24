import { Edit3Icon, Plus, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Table from '../../../components/ui/Table';
import { Button } from '../../../components/ui/button/Button';
import IconButton from '../../../components/ui/button/IconButton';
import { FormInput } from '../../../components/ui/form/FormInput';
import useDebounce from '../../../hooks/useDebounce';
import { getAllModules } from '../../../services/moduleService';
import { referenceStore } from '../../../store/referenceStore';
import { moduleColumns } from '../column';
import DeleteModule from '../components/DeleteModule';
import ModuleForm from './ModuleForm';

export default function Modules() {
  const { handleModal } = referenceStore();

  const [search, setSearch] = useState<string>('');
  const debounceSearch = useDebounce(search, 700);

  // Modules fetch query
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['modules', debounceSearch],
    queryFn: () =>
      getAllModules({
        page: 1,
        moduleName: debounceSearch === '' ? null : debounceSearch,
      }),
    enabled: true,
    keepPreviousData: true,
  });

  // Handling open modal -> form module
  const handleFormModal = (moduleId?: number) => {
    handleModal({
      show: true,
      content: <ModuleForm moduleId={moduleId} />,
    });
  };

  // Handling open modal -> delete module
  const handleDeleteModal = (id: number, name: string) => {
    handleModal({ show: true, content: <DeleteModule id={id} name={name} /> });
  };

  // Table columns definition
  const tableColumns: ITableColumn[] = [
    ...moduleColumns,
    {
      dataKey: 'action',
      title: 'Action',
      render: ({ item }) => (
        <div className="flex w-max gap-2">
          <IconButton
            variant="warning"
            icon={<Edit3Icon className="h-4 w-4 group-hover:text-white" />}
            handleClick={() => handleFormModal(item?.id)}
          />
          <IconButton
            variant="danger"
            icon={<Trash2 className="h-4 w-4 group-hover:text-white" />}
            handleClick={() => handleDeleteModal(item?.id, item?.modulName)}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-0">
          <FormInput
            type="text"
            placeholder="Search by module name..."
            className="max-w-sm"
            wrapperClass="h-9 sm:h-11 md:h-11 xl:h-11"
            icon={
              <Search className="h-3.5 w-3.5 text-gray-500 sm:h-5 sm:w-5" />
            }
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button
            variant="highlight"
            className="flex h-9 w-max items-center px-2 sm:h-11 sm:px-3"
            onClick={() => handleFormModal()}>
            <Plus className="me-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="w-max text-xs sm:text-sm">Add Module</span>
          </Button>
        </div>

        <Table
          column={tableColumns}
          data={data?.data ?? []}
          isLoading={isLoading || isFetching}
          error={error}
        />
      </div>
    </>
  );
}
