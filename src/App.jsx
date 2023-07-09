import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsFillBookmarkCheckFill, BsFillTrash3Fill } from "react-icons/bs";
import { Container, InputTask, Input, Button, Task } from "./styles";

const App = () => {
  const [list, setList] = useState([]);
  const taskValue = useRef();

  const addTask = () => {
    if (taskValue.current.value.trim() === "") {
      return;
    }

    setList([...list, { id: uuidv4(), task: taskValue.current.value, finished: false }]);
  };

  return (
    <Container>
      <InputTask>
        <Input ref={taskValue} placeholder="O que tenho para fazer..." />
        <Button onClick={addTask}>Adicionar</Button>
      </InputTask>
      <ul>
        <Task>
          {list.map((item) => (
            <li key={item.id}>
              <BsFillBookmarkCheckFill />
              {item.task}
              <BsFillTrash3Fill />
            </li>
          ))}
        </Task>
      </ul>
    </Container>
  );
};

export default App;
