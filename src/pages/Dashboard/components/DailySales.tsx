import LineChart from '../../../components/ui/chart/LineChart';

const labels = ['08:00 AM', '12:00 PM', '03:00 PM', '06:00 PM', '09:00 PM'];
const data = {
  labels,
  datasets: [
    {
      label: 'Food',
      data: [1000, 500000, 200000, 2300000, 320000],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Computer',
      data: [1300, 700000, 2200000, 1300000, 320000],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Furniture',
      data: [1000000, 780000, 540000, 2300000, 800000],
      borderColor: 'rgb(244, 250, 9)',
      backgroundColor: 'rgba(244, 250, 9, 0.5)',
    },
  ],
};

export default function DailySales() {
  return (
    <div>
      <h2 className="mb-5 font-medium">Daily Sales</h2>
      <div className="flex h-[10rem] justify-center md:h-[15rem] lg:h-[19rem] xl:h-[17rem]">
        <LineChart data={data} />
      </div>
    </div>
  );
}
