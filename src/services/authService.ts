import api from './api';

const signinAdmin = async (payload: ILogin) => {
  try {
    const res = await api.post<IApiResponse<IUser>, ILogin>(
      '/admin/signin',
      payload,
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export { signinAdmin };
