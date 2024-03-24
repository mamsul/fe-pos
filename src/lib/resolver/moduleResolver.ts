import * as z from 'zod';

export type ModuleFormValues = Pick<IModule, keyof IModule>;

export const moduleSchema = z.object({
  moduleSelect: z.object({
    label: z.string(),
    path: z.string(),
    value: z.string(),
  }),
  pathName: z.string().nullable(),
  status: z.boolean(),
});
