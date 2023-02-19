import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FaTrash, FaCheck } from "react-icons/fa";

import { Container, ToDoList, Input, Button } from './styles.js'

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
      <Input onChange={inputMudou} type="text" placeholder="O que tenho para fazer..." />
      <Button onClick={cliequeiBotao}>Adicionar</Button>

      <ul>
        {
          list.map(item => (
            <div>
              <FaCheck />
              <li key={item.id}>{item.task}</li>
              <FaTrash />
            </div>
          ))
        }
      </ul>
      </ToDoList>
    </Container>
  )
}

export default App
