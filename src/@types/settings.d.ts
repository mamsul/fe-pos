interface IModule {
  id?: number | null;
  modulName?: string;
  moduleName?: string;
  pathName?: string;
  status: boolean;
}

interface IModuleQuery {
  page: number;
  moduleName?: string | null;
  status?: boolean | string;
}
