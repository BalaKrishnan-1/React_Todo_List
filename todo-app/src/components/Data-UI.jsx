import '../App.css';
import { useState } from 'react';
  function DataUI({ completed, goalMax,onGoalChange}) {
const radius = 45;
const circumference = 2 * Math.PI * radius;

const progressPercentage = Math.min(100, (completed / goalMax) * 100);

const strokeDashoffset =
  circumference - (circumference * progressPercentage) / 100;

const[ShowGoalInput,setShowGoalInput] = useState(false);
const setGoalAndHide = () => {
  setShowGoalInput(false);
};
return (
    <>
    <div className='Sidebar'>
      <div className="goal-counter">
        <div className="circular-progress">
          <svg viewBox="0 0 100 100" className="progress-ring">
            <circle cx="50" cy="50" r="45" className="progress-background"/>
            <circle 
              cx="50" 
              cy="50" 
              r={radius}
  strokeDasharray={circumference}
  strokeDashoffset={strokeDashoffset}
              className="progress-fill"
              style={{
                 
              }}
            />
          </svg>
          <div className="progress-text">
            <span className="progress-number">{completed}</span>
            <span className="progress-label"> / {goalMax}</span>
          </div>
        </div>
        <p className="goal-label">Daily Goal</p>
        <br></br>
        {!ShowGoalInput &&(
        <button className="goal-input" onClick={()=>setShowGoalInput(true)}>Edit Goal </button>)}
           <input
            type="number"
            min="1"
            onChange={onGoalChange}
            value={goalMax}
            on KeyDown={(e)=>{if(e.key==='Enter'){setGoalAndHide();}}}
          />
          <button className='set' onClick={setGoalAndHide}>Set</button>
      </div></div>
    </>
  );
}

export default DataUI;


