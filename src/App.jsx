import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList } from './styles.js'

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
    
    <Container>
      <ToDoList>
      <input onChange={inputMudou} type="text" placeholder="O que tenho para fazer..." />
      <button onClick={cliequeiBotao}>Adicionar</button>

      <ul>
        {
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
      </ToDoList>
    </Container>
  )
}

export default App
