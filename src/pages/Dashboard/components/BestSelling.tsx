const RowItem = ({ product, count }: { product: IProduct; count: number }) => {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div className="flex flex-col gap-1">
        <span className="w-max rounded-lg bg-blue-400 p-1 text-[0.65rem] text-white">
          {product.category}
        </span>
        <span className="text-sm font-medium">{product.name}</span>
      </div>
      <span className="font-medium">{count}</span>
    </div>
  );
};

export default function BestSelling() {
  return (
    <div className="h-full w-full">
      <h2 className="font-medium">Best Selling Products</h2>

      <div className="relative mt-2 h-[90%] w-full overflow-auto">
        <div className="sticky top-0 h-10 w-full">
          <div className="flex h-full w-full items-center justify-between bg-gray-50 px-5 text-sm text-gray-700">
            <span>Products</span>
            <span>Orders</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 px-5 pt-5">
          <RowItem
            count={45}
            product={{
              name: 'Monitor Samsung A455L',
              category: 'computer',
            }}
          />
          <RowItem
            count={45}
            product={{
              name: 'Monitor Samsung A455L',
              category: 'computer',
            }}
          />
          <RowItem
            count={45}
            product={{
              name: 'Monitor Samsung A455L',
              category: 'computer',
            }}
          />
          <RowItem
            count={45}
            product={{
              name: 'Monitor Samsung A455L',
              category: 'computer',
            }}
          />
          <RowItem
            count={45}
            product={{
              name: 'Monitor Samsung A455L',
              category: 'computer',
            }}
          />
        </div>
      </div>
    </div>
  );
}
