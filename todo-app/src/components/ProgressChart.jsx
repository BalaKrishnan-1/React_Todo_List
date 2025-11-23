import { Pie } from 'react-chartjs-2';
import '../App.css';
function ProgressChart({ completedCount,goalMax,deletedCount,ignoredCount}) {

  const progress = Math.min(completedCount, goalMax);

  const data = {
    labels: ['Completed', 'Deleted','Ignored'],
    datasets: [
      {
        data: [completedCount,deletedCount,ignoredCount],
        backgroundColor: ['rgb(54, 162, 235)','rgba(255, 12, 12, 1)','rgb(255, 205, 86)'],hoverOffset: 4,
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
