import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const [list, setList] = useState([{id: uuid(), task: "Olá"}]);
  const [inputTask, setInputTask] = useState('');

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliequeiBotao() {
    setList([ ...list, { id: uuid(), task: inputTask }])
    console.log(list);
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
