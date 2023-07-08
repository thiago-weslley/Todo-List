import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [list, setList] = useState([]);
  const taskValue = useRef();

  const addTask = () => {
    if (taskValue.current.value.trim() === "") {
      return;
    }

    setList([...list, { id: uuidv4(), task: taskValue.current.value }]);
  };

  return (
    <div>
      <div>
        <input ref={taskValue} placeholder="O que tenho para fazer..." />
        <button onClick={addTask}>Adicionar</button>

        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
