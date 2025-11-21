import { Doughnut } from 'react-chartjs-2';

function ProgressChart({ completedCount, goalMax }) {

  const progress = Math.min(completedCount, goalMax);

  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [progress, goalMax - progress],
        backgroundColor: ['#4ade80', '#e5e7eb'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div style={{ width: 180, height: 180 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ProgressChart;

const config = {
  type: 'pie',
  data: data,
};
const data = {
  labels: [
    'Completed',
    'Deleted',
    'Ignored'
  ],
  datasets: [{
    label: 'Task Data',
    data: [300, 50, 100],
    backgroundColor: [
      'forestgreen',
      'tomato',
      'orangered'
    ],
    hoverOffset: 4
  }]
};