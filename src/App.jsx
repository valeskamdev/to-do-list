import { v4 as uuid } from 'uuid';

function App() {

  const list = [
    { id: uuid(), task: "Aprender os fundamentos da programação"},
    { id: uuid(), task: "Escolher uma linguagem de programação"},
    { id: uuid(), task: "Aprender a usar o Git e o GitHub"}
  ]

  console.log(list);

  function inputMudou(event) {
    console.log(event);
  }

  function cliequeiBotao() {
    console.log('cliquei no botao');
  }

  return (
    
    <div>
      <input onChange={inputMudou} type="text" placeholder="O que tenha para fazer..." />
      <button onClick={cliequeiBotao}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
      
    </div>
  )
}

export default App
