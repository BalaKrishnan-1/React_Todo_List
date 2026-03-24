import {chart as ChartJS,defaults} from 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2';
import { useEffect } from 'react';
import '../App.css';
defaults.maintainAspectRatio=false;
defaults.responsive=true;
function ProgressChart({ completedCount,goalMax,deletedCount,ignoredCount}) {

  const progress = Math.min(completedCount, goalMax);

  useEffect(() => {
    localStorage.setItem(
      "progress",
      JSON.stringify({ completedCount, deletedCount, ignoredCount })
    );
  }, [completedCount, deletedCount, ignoredCount]);

  const data = {
    labels: ['Completed', 'Deleted','Ignored'],
    datasets: [
      {
        data: [completedCount,deletedCount,ignoredCount],
        backgroundColor: ['#65c95a','#ff2b2b ','#ffb730'],hoverOffset: 4,
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
    <div  style={{ width: 240, height: 240, margin: 'auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default ProgressChart;
