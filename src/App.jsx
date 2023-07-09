import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, InputTask, Input, Button, Task, Check, Trash, Title } from "./styles";

const App = () => {
  const [list, setList] = useState([]);
  const taskValue = useRef();

  const addTask = () => {
    if (taskValue.current.value) {
      setList([
        ...list,
        { id: uuidv4(), task: taskValue.current.value, finished: false },
      ]);
    }
  };

  const taskCompleted = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  };

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  return (
    <Container>
      <InputTask>
        <Input ref={taskValue} placeholder="O que tenho para fazer..." />
        <Button onClick={addTask}>Adicionar</Button>
      </InputTask>

      <ul>
        {
        list.length > 0 ? (

        list.map((item) => (
          <Task isFinished={item.finished} key={item.id}>
            <li>
              <Check onClick={() => taskCompleted(item.id)} />
              <span>{item.task}</span>
              <Trash onClick={() => deleteTask(item.id)} />
            </li>
          </Task>
        ))
        ) : <Title>Não há tarefas no momento...</Title>
        }
      </ul>
    </Container>
  );
};

export default App;
