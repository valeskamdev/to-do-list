import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const [list, setList] = useState([{id: uuid(), task: "Olá"}]);

  function inputMudou(event) {
    setList([{ id: uuid(), task: event.target.value}])
    console.log(list);
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
