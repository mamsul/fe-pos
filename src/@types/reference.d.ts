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

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Params = {
  [key: string]: any;
};

interface IApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
