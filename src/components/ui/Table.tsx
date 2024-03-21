import { cn } from '../../lib/utils';

type TableProps<T> = {
  column: ITableColumn[];
  data: Array<T>;
};

export default function Table<T>({ column, data }: TableProps<T>) {
  const thStyle =
    'px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold uppercase tracking-wider';
  const tdStyle = 'whitespace-nowrap px-3 sm:px-6 py-2 sm:py-4';

  return (
    <>
      <div className="flex h-auto overflow-auto">
        <table className="min-w-full">
          <thead className="bg-teal-400/20 text-gray-900">
            <tr>
              <th className={thStyle}>No.</th>
              {column.map((col, idx) => (
                <th
                  key={`${col.dataKey}-${idx}`}
                  className={cn(thStyle, {
                    'text-right': col.dataKey == 'action',
                  })}>
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-b text-sm text-gray-800">
            {data.map((item, idxItem) => {
              const dataIndex = idxItem;

              return (
                <tr key={++idxItem}>
                  <td className={tdStyle}>{++idxItem}.</td>

                  {column.map((col, idxCol) => (
                    <td
                      key={`${col.dataKey}-${idxCol}`}
                      className={cn(tdStyle, {
                        'flex justify-end': col.dataKey == 'action',
                      })}>
                      {col.render &&
                        col.render({
                          dataKey: col.dataKey,
                          item,
                          idx: dataIndex,
                        })}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
