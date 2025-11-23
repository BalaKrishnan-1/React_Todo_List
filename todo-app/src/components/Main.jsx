import { useCallback, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import DataUI from '../components/Data-UI.jsx';
import ProgressChart from './ProgressChart.jsx';

function Container() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [completed, setCompleted] = useState([]);
  const [ignored, setIgnored] = useState([]);
  const [goalMax, setGoalMax] = useState(10);
  const [hasReachedGoal, setHasReachedGoal] = useState(false);
  const [deletedCount, setDeletedCount] = useState(0);
  const [ignoredCount, setIgnoredCount] = useState(0);

  const Add = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const done = (index) => {
    setCompleted(prev => {
      if (prev.includes(index)) return prev; // already completed — no-op
      if (prev.length >= goalMax) return prev;
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
    setIgnored(ignored.filter(i => i !== index));
    setDeletedCount(prev => prev + 1);
  };

  const ignoredTask = (index) => {
    // If already ignored, do nothing
    if (ignored.includes(index)) return;

    const ignoredTaskItem = tasks[index];
    const filteredTasks = tasks.filter((_, i) => i !== index);
    // Re-add the ignored task to the end of the list
    const reorderedTasks = [...filteredTasks, ignoredTaskItem];

    setTasks(reorderedTasks);

    // Update ignored indexes, adjusting indexes for shifted tasks
    const newIgnored = ignored.map(i => (i > index ? i - 1 : i));
    setIgnored([...newIgnored, reorderedTasks.length - 1]);

    // Remove ignored task index from completed if present, adjusting completed indexes as well
    const newCompleted = completed.filter(i => i !== index).map(i => (i > index ? i - 1 : i));
    setCompleted(newCompleted);

    setIgnoredCount(prev => prev + 1);
  };

  const onGoalChange = (e) => {
    const value = Math.max(1, Number(e.target.value) || 1);
    setGoalMax(value);
  };

  useEffect(() => {
    if (completed.length === goalMax && !hasReachedGoal) {
      setHasReachedGoal(true);
      setTimeout(() => {
        alert('Congrats!!!,You have reached your Daily goal!🎉🎉');
      }, 1000);
    }
  }, [completed.length, goalMax, hasReachedGoal]);

  return (
    <>
      <div className="Container">
        <div className="heading">
          <h1>Write your Tasks Below </h1>
        </div>
        <div className="content">
          <input
            type="text"
            value={inputValue}
            placeholder="Enter your Task Here"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(a) => {
              if (a.key === 'Enter') {
                Add();
              }
            }}
          />
          <button onClick={Add}>Add</button>
        </div>

        {tasks.length > 0 && (
          <>
            {tasks.map((task, index) => (
              <div
                className={`Todo-list ${
                  completed.includes(index)
                    ? 'fade-out'
                    : ''
                }`}
                key={index}
              >
                <ul>
                  <li>{task}</li>
                </ul>
                <button className="delete" onClick={() => deleteTask(index)}>
                  delete&nbsp;
                  <i className="bi bi-trash3-fill"></i>
                </button>
                <button className="ignore" onClick={() => ignoredTask(index)}>
                  ignore&nbsp;
                  <i className="bi bi-alarm-fill"></i>
                </button>

                <button
                  className="complete"
                  onClick={() => done(index)}
                  disabled={completed.includes(index) || completed.length >= goalMax}
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
        <DataUI 
          completed={completed} 
          goalMax={goalMax} 
          onGoalChange={onGoalChange} 
          deletedCount={deletedCount} 
          ignoredCount={ignoredCount} 
        />
      </aside>
    </>
  );
}

export default Container;
