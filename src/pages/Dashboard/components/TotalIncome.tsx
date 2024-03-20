import { ChartOptions } from 'chart.js';
import DoughnutChart from '../../../components/ui/chart/DoughnutChart';
import { rupiah } from '../../../lib/utils';

const labels = ['Food', 'Computer', 'Furniture'];
const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [1200000, 5000000, 8250000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(53, 162, 235)',
        'rgb(244, 250, 9)',
      ],
    },
  ],
};

export default function TotalIncome() {
  const chartOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <h2 className="font-mediu mb-2">Total Income</h2>
      <span className="mb-5 block truncate text-xl font-bold md:text-2xl">
        {rupiah(25250000)}
      </span>

      <div className="flex h-[10rem] justify-center md:h-[12rem] lg:h-[17rem] xl:h-[15rem]">
        <DoughnutChart data={data} options={chartOptions} />
      </div>
    </div>
  );
}
