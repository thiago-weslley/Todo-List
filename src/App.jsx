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

    setList([
      ...list,
      { id: uuidv4(), task: taskValue.current.value, finished: false },
    ]);
  };

  const taskCompleted = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  };

  return (
    <Container>
      <InputTask>
        <Input ref={taskValue} placeholder="O que tenho para fazer..." />
        <Button onClick={addTask}>Adicionar</Button>
      </InputTask>
      <ul>
        {list.map((item) => (
          <Task isFinished={item.finished} key={item.id}>
            <li>
              <BsFillBookmarkCheckFill onClick={() => taskCompleted(item.id)} />
              <span>{item.task}</span>
              <BsFillTrash3Fill />
            </li>
          </Task>
        ))}
      </ul>
    </Container>
  );
};

export default App;
