import { useState } from 'react';
function Container(){
const [tasks, setTasks] = useState([]);
const [inputValue, setInputValue] = useState('');
const li =document.getElementsByClassName("li");
  const Add = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }};
return(
  <>
<div className="Container">
    <div className="content">
<input
          type="text"
          value={inputValue}
          placeholder="Enter your Task Here"
          onChange={e => setInputValue(e.target.value)}
        />
<button onClick={Add}>Add</button>
    </div>
</div>
 <div className="Todo-list" id="todo">
        <ul>
          {tasks.map((task, index) => (
            <li className="li" key={index}>{task}</li>
          ))}
        </ul>
    </div></>
);
}
export default Container;