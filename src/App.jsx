import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FaTrash, FaCheck } from "react-icons/fa";

import { Container, ToDoList, Input, Button, ListItem} from './styles.js'

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
            <ListItem>
              <FaCheck style={{ color: "#4F0FC5" }} />
              <li key={item.id}>{item.task}</li>
              <FaTrash style={{ color: "#FF0000" }} />
            </ListItem>
          ))
        }
      </ul>
      </ToDoList>
    </Container>
  )
}

export default App
