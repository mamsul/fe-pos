import { Resolver } from 'react-hook-form';

export type ModuleFormValues = Pick<IModule, keyof IModule>;

export const moduleResolver: Resolver<ModuleFormValues> = async (values) => {
  return {
    values: values.modulName ? values : {},
    errors: !values.modulName
      ? {
          modulName: {
            type: 'required',
            message: 'This field is required.',
          },
        }
      : {},
  };
};
