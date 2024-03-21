import Badge from '../../components/ui/Badge';

export const moduleColumns: ITableColumn[] = [
  {
    dataKey: 'name',
    title: 'Name',
    render: ({ dataKey, item }) => <div>{item[dataKey]}</div>,
  },
  {
    dataKey: 'path',
    title: 'Path',
    render: ({ dataKey, item }) => <div>{item[dataKey]}</div>,
  },
  {
    dataKey: 'status',
    title: 'Status',
    render: ({ dataKey, item }) => (
      <div>
        {item[dataKey] ? (
          <Badge label="Active" variant="info" />
        ) : (
          <Badge label="Active" variant="warning" />
        )}
      </div>
    ),
  },
];
