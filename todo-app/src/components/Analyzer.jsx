import '../chartSetup';
import {defaults,Chart as chart}from'chart.js'
import { useState, useEffect } from 'react'; 
import {Bar} from 'react-chartjs-2';
import "bootstrap/dist/css/bootstrap.min.css";
defaults.maintainAspectRatio=false;
defaults.responsive=true;
function Analyzer() {
  const [completedCount, setCompletedCount] = useState(0);
  const [deletedCount, setDeletedCount] = useState(0);
  const [ignoredCount, setIgnoredCount] = useState(0);  
  useEffect(() => {
    const saved = localStorage.getItem('progress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setCompletedCount(data.completedCount || 0);
        setDeletedCount(data.deletedCount || 0);
        setIgnoredCount(data.ignoredCount || 0);
      } catch (error) {
        console.error('Error loading progress data:', error);
      }
    }
  }, []);

  const Data={
    labels: ["Completed","Deleted","Ignored"],
   datasets:[{
   data:[completedCount,deletedCount,ignoredCount],
   backgroundColor: ['#65c95a','#ff2b2b','#ffb730'],
   barThickness: 70,
   barPercentage: 0.4,      // width of bar
   categoryPercentage: 0.6, // space between bars
  }]}

  const chartAreaBg = {
  id: 'chartAreaBg',
  beforeDraw(chart) {
    const { ctx, chartArea } = chart;
    ctx.save();
    ctx.fillStyle ='#f5f5f5'; // grid background color
    ctx.fillRect(
      chartArea.left,
      chartArea.top,
      chartArea.width,
      chartArea.height
    );
    ctx.restore();
  },
};

   const options={
    plugins:{
      legend:{
        display:false,
      },
         chartAreaBackground:{
          color:"#f5f5f5"
         },
  },
       scales: {
           x:{
            beginAtZero: true,   
           },
       },
          y: {
           beginAtZero: true,  
          ticks: {
           stepSize: 1, // This sets the interval to 1 (0, 1, 2, 3, 4...)
           precision: 0
      }}
}
  return (
   <>
    <h2 className="chart-title">Task Progress</h2>
    <div className="line mx-4">
<Bar data={Data} options={options} plugins={[chartAreaBg]}/>
    </div>
   </>
  );
}

export default Analyzer;

