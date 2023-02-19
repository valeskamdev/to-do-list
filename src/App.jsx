import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FaTrash, FaCheck } from "react-icons/fa";

import { Container, ToDoList, Input, Button, ListItem} from './styles.js'

function App() {
  const [list, setList] = useState([{id: uuid(), task: "Olá", finished: true }]);
  const [inputTask, setInputTask] = useState('');

  function inputChanged(event) {
    setInputTask(event.target.value)
  }

  function buttonClicked() {
    setList([ ...list, { id: uuid(), task: inputTask, finished: false }])
    console.log(list);
  }

  function endTask(id) {
    const newList = list.map( item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }

  return (
    
    <Container>
      <ToDoList>
      <Input onChange={inputChanged} type="text" placeholder="O que tenho para fazer..." />
      <Button onClick={buttonClicked}>Adicionar</Button>

      <ul>
        {
          list.map(item => (
            <ListItem isFinished={item.finished} key={item.id}>
              <FaCheck onClick={() => endTask(item.id)} style={{ color: "#4F0FC5" }} />
              <li>{item.task}</li>
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
