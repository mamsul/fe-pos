import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type LineChartProps = {
  options?: ChartOptions<'line'>;
  data: ChartData<'line'>;
};

const defaultLineChartOption: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export default function LineChart({
  data,
  options = defaultLineChartOption,
}: LineChartProps) {
  return <Line data={data} options={options} />;
}
