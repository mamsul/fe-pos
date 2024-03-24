import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Select from 'react-tailwindcss-select';
import FormGroup from '../../../components/ui/form/FormGroup';
import { FormInput } from '../../../components/ui/form/FormInput';
import { FormSwitch } from '../../../components/ui/form/FormSwitch';
import { ModuleFormValues, moduleSchema } from '../../../lib/resolver';
import { generateErrorMessage } from '../../../lib/utils';
import { protectedRoute } from '../../../routes/index';
import {
  createModule,
  getModuleById,
  updateModule,
} from '../../../services/moduleService';
import { referenceStore } from '../../../store/referenceStore';
import CancelButton from '../components/CancelButton';
import SubmitButton from '../components/SubmitButton';

type ModuleFormProps = {
  moduleId?: number;
};

export default function ModuleForm({ moduleId }: ModuleFormProps) {
  const { handleModal } = referenceStore();
  const queryClient = useQueryClient();

  const { mutate: postMutate, isLoading: postLoading } = useMutation({
    mutationFn: createModule,
  });

  const { mutate: putMutate, isLoading: putLoading } = useMutation({
    mutationFn: updateModule,
  });

  const { data } = useQuery({
    queryKey: ['module-detail'],
    queryFn: () => getModuleById(moduleId as number),
    enabled: moduleId ? true : false,
    cacheTime: 0,
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<ModuleFormValues>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      status: true,
    },
  });

  const routeOptions: IModuleSelect[] = protectedRoute.map((item) => ({
    value: item.name,
    label: item.name,
    path: item.path,
  }));

  useEffect(() => {
    if (data?.data) {
      const selectedModule = routeOptions.find(
        (e) => e.value == data.data.modulName,
      );

      setValue('moduleSelect', selectedModule);
      setValue('pathName', selectedModule?.path);
      setValue('status', data?.data?.status);
    }
  }, [data]);

  const handleCloseModal = () => {
    handleModal({ show: false, content: null });
  };

  const handleSelectModule = (value: IModuleSelect) => {
    setValue('moduleSelect', value);
    setValue('pathName', value?.path);
  };

  const onSubmit: SubmitHandler<ModuleFormValues> = (data) => {
    const newData: IModule = { ...data, id: moduleId ?? null };
    const mutationFunction = moduleId ? putMutate : postMutate;

    mutationFunction(newData, {
      onSuccess() {
        reset();
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
    <div className="w-[85vw] md:w-[50vw] lg:w-[50vw] xl:w-[40vw]">
      <h2 className="mb-5 text-lg font-semibold md:text-2xl">
        {!moduleId ? 'Add' : 'Edit'} Module
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormGroup
          label="Select Module"
          labelFor="module"
          errors={(errors?.moduleSelect?.message as string) ?? null}>
          <Select
            primaryColor={'blue'}
            value={watch('moduleSelect') as IModuleSelect}
            onChange={(item: any) => handleSelectModule(item)}
            options={routeOptions}
            isSearchable
            placeholder=""
            classNames={{
              menuButton: () =>
                'flex rounded-lg border bg-white text-sm outline-none sm:text-base py-0.5 cursor-pointer',
            }}
          />
        </FormGroup>

        <FormGroup label="Path" labelFor="path">
          <FormInput
            {...register('pathName')}
            id="path"
            type="text"
            disabled
            wrapperClass="h-11 md:h-11 xl:h-11"
          />
        </FormGroup>

        <FormGroup label="Status" labelFor="status">
          <FormSwitch
            {...register('status')}
            id="status"
            label={watch('status') ? 'Active' : 'Inactive'}
            onChange={(e) => setValue('status', e.target.checked)}
          />
        </FormGroup>

        <div className="flex gap-4 pt-8">
          <CancelButton onClick={handleCloseModal} />
          <SubmitButton isLoading={postLoading || putLoading} />
        </div>
      </form>
    </div>
  );
}
