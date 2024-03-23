interface ITabs {
  key: string;
  name: string;
}

interface ITableColumn {
  dataKey: string;
  title: string;
  render?: ({
    dataKey,
    item,
  }: {
    dataKey: any;
    item: any;
    idx?: number;
  }) => JSX.Element;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface IParams {
  [key: string]: any;
}

interface IApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
