import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, InputTask, Input, Button } from "./styles";

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
    <Container>
      <InputTask>
        <Input ref={taskValue} placeholder="O que tenho para fazer..." />
        <Button onClick={addTask}>Adicionar</Button>
      </InputTask>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </Container>
  );
};

export default App;
