import { ChartOptions } from 'chart.js';
import DoughnutChart from '../../../components/Chart/DoughnutChart';
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
    cutout: 90,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <h2 className="font-mediu mb-2">Total Income</h2>
      <span className="mb-5 block truncate text-2xl font-bold">
        {rupiah(25250000)}
      </span>

      <div className="p-2">
        <DoughnutChart data={data} options={chartOptions} />
      </div>
    </div>
  );
}
