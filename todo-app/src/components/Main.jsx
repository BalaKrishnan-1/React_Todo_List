import { useState } from 'react';
import confetti from 'canvas-confetti';
import DataUI from '../components/Data-UI.jsx';
function Container(){
const [tasks, setTasks] = useState([]);
const [inputValue, setInputValue] = useState('');
const [completed, setCompleted] = useState([0]);
const [goalMax, setGoalMax] = useState([1]);

  const Add = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }};
    
    const done = (index) => {
      setCompleted(prev => {
        if (prev.includes(index)) return prev; // already completed — no-op
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
        });
        return [...prev, index];
      });
    };
    
    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
      setCompleted(completed.filter(i => i !== index));
    };
  const onGoalChange = (e) => {
    const value = Math.max(1, Number(e.target.value) || 1);
     setGoalMax(value);
  };
return(
  <>
  <div className="Container">
    <div className='heading'>
          <h1>Write your Tasks Below </h1>
        </div>
    <div className="content">
      <input
        type="text"
        value={inputValue}
        placeholder="Enter your Task Here"
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={(e)=>{if(e.key==='Enter'){Add();}}}
      />    
      <button  onClick={Add}>Add</button>
    </div>
    {tasks.length > 0 && (
      <>
      {tasks.map((task, index) => (
        <div className={`Todo-list ${completed.includes(index) ? 'fade-out' : ''}`} key={index}>
          <ul>     
            <li>{task}</li>
          </ul>
          <button className='delete' onClick={() => deleteTask(index)}>
            delete&nbsp;
            <i className='bi bi-trash3-fill'></i>
          </button>

          <button
            className='complete'
            onClick={() => done(index)}
            disabled={completed.includes(index)}
            aria-pressed={completed.includes(index)}
          >
            completed&nbsp;
            <i className="bi bi-check2-square"></i>
          </button>
        </div>
      ))}
      </>
    )}
  </div>
  <aside>
    <DataUI completed={completed} goalMax={goalMax}  onGoalChange={onGoalChange}/>
  </aside>
  </>
);
}
export default Container;
