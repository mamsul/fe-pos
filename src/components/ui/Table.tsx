import { cn, generateErrorMessage } from '../../lib/utils';
import Spinner from './Spinner';

type TableProps<T> = {
  column: ITableColumn[];
  data: Array<T>;
  isLoading?: boolean;
  error?: unknown | null;
};

export default function Table<T>({
  column,
  data,
  isLoading,
  error,
}: TableProps<T>) {
  const thStyle =
    'px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-semibold uppercase tracking-wider';
  const tdStyle = 'whitespace-nowrap px-3 sm:px-6 py-2 sm:py-4';

  return (
    <>
      <div className="relative flex h-auto overflow-auto">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Spinner />
          </div>
        )}

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

      {!isLoading && error !== null && (
        <div className="w-max bg-red-400 p-3">
          <p className="text-sm text-white">
            Error: <strong>{generateErrorMessage(error)}</strong>
          </p>
        </div>
      )}

      {!isLoading && !error && data.length < 1 && (
        <div className="flex w-full items-center justify-center border p-8">
          <span className="text-2xl font-semibold">No data found!</span>
        </div>
      )}
    </>
  );
}
