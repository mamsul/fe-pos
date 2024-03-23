import api from './api';

const getAllModules = async (params: IModuleQuery) => {
  try {
    const res = await api.get<IApiResponse<IModule[]>>('/admin/module', params);
    return res;
  } catch (error) {
    throw error;
  }
};

const createModule = async (data: IModule) => {
  const payload = {
    moduleName: data.modulName,
    status: data.status,
  } as IModule;

  try {
    const res = await api.post<IApiResponse<IModule>, IModule>(
      '/admin/module',
      payload,
    );
    return res;
  } catch (error) {
    throw error;
  }
};

const updateModule = async (data: IModule) => {
  const payload = {
    moduleName: data.modulName,
    status: data.status,
  } as IModule;

  try {
    const res = await api.update<IApiResponse<IModule>, IModule>(
      `/admin/module/${data.id}`,
      payload,
    );
    return res;
  } catch (error) {
    throw error;
  }
};

const changeModuleStatus = async (
  payload: Pick<IModule, 'status'>,
  id: string,
) => {
  try {
    const res = await api.patch<IApiResponse<IModule>, Pick<IModule, 'status'>>(
      `/admin/module/${id}/change-status`,
      payload,
    );
    return res;
  } catch (error) {
    throw error;
  }
};

const getModuleById = async (id: number) => {
  try {
    const res = await api.get<IApiResponse<IModule>>(`/admin/module/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

const deleteModule = async (id: number) => {
  try {
    const res = await api.delete<IApiResponse<IModule>>(`/admin/module/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export {
  changeModuleStatus,
  createModule,
  deleteModule,
  getAllModules,
  getModuleById,
  updateModule,
};
