import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import FormError from '../../../components/ui/form/FormError';
import { FormInput } from '../../../components/ui/form/FormInput';
import FormLabel from '../../../components/ui/form/FormLabel';
import { FormSwitch } from '../../../components/ui/form/FormSwitch';
import { ModuleFormValues, moduleResolver } from '../../../lib/resolver';
import { generateErrorMessage } from '../../../lib/utils';
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
    resolver: moduleResolver,
    defaultValues: {
      status: true,
    },
  });

  useEffect(() => {
    if (data?.data) {
      setValue('modulName', data?.data?.modulName);
      setValue('status', data?.data?.status);
    }
  }, [data]);

  const handleCloseModal = () => {
    handleModal({ show: false, content: null });
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
    <div>
      <h2 className="mb-5 text-lg font-semibold md:text-2xl">
        {!moduleId ? 'Add' : 'Edit'} Module
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <FormLabel id="name" label="Module Name" />
          <FormInput
            {...register('modulName')}
            id="name"
            type="text"
            wrapperClass="h-11 md:h-11 xl:h-11"
          />
          {errors?.modulName && (
            <FormError message={errors?.modulName?.message as string} />
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <FormLabel id="name" label="Path/URL" />
          <FormInput
            {...register('pathName')}
            id="name"
            type="text"
            wrapperClass="h-11 md:h-11 xl:h-11"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <FormLabel id="name" label="Status" />
          <FormSwitch
            {...register('status')}
            label={watch('status') ? 'Active' : 'Inactive'}
            onChange={(e) => setValue('status', e.target.checked)}
          />
        </div>

        <div className="flex gap-4 pt-8">
          <CancelButton onClick={handleCloseModal} />
          <SubmitButton isLoading={postLoading || putLoading} />
        </div>
      </form>
    </div>
  );
}
