import { Pie } from 'react-chartjs-2';
import '../App.css';
import { Colors } from 'chart.js';
function ProgressChart({ completedCount,goalMax,deletedCount,ignoredCount}) {

  const progress = Math.min(completedCount, goalMax);

  const data = {
    labels: ['Completed', 'Deleted','Ignored'],
    datasets: [
      {
        data: [completedCount,deletedCount,ignoredCount],
        backgroundColor: ['#a0e92aff','#ff2b2b ','#ffb730'],hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 20,
          padding: 10,
          usePointStyle: true,
          font: {
            size: 12,
          },
          color: '#000',
        },
        position: 'top',
      },
    },
  };

  return (
    <div  style={{ width: 250, height: 250, margin: 'auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default ProgressChart;
