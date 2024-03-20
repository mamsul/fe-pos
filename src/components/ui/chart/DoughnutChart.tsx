import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  data: ChartData<'doughnut'>;
  options?: ChartOptions<'doughnut'>;
};

export default function DoughnutChart({ data, options }: DoughnutChartProps) {
  return <Doughnut data={data} options={options} />;
}
