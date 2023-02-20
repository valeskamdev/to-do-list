import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Trash, Check, ListWithoutItems } from './styles.js'

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');

  function inputChanged(event) {
    setInputTask(event.target.value)
  }

  function buttonClicked() {
    if (inputTask) {
      setList([ ...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function endTask(id) {
    const newList = list.map( item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }

  function deletedTask(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    
    <Container>
      <ToDoList>
      <Input onChange={inputChanged} type="text" placeholder="O que tenho para fazer..." />
      <Button onClick={buttonClicked}>Adicionar</Button>

      <ul>
        {

          list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => endTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletedTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <ListWithoutItems>Não há itens na lista</ListWithoutItems>
          )
        }
      </ul>
      </ToDoList>
    </Container>
  )
}

export default App
