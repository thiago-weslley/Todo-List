const App = () => {
  const list = [{ id: 1, task: "Levar o Ted para passear"}, 
  { id: 2, task: "Ler um livro sobre programação"}];

  return (
    <div>
      <input placeholder="O que tenho para fazer..." />
      <button>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
