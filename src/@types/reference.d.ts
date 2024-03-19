interface ITabs {
  key: string;
  name: string;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Params = {
  [key: string]: any;
};

interface IApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
