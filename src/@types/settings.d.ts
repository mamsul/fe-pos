interface IModuleSelect {
  value: string;
  label: string;
  path: string;
}

interface IModule {
  id?: number | null;
  modulName?: string;
  moduleName?: string;
  pathName?: string;
  status: boolean;
  moduleSelect?: IModuleSelect | null;
}

interface IModuleQuery {
  page: number;
  moduleName?: string | null;
  status?: boolean | string;
}
