import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import List from './components/List'

function App() {

  const [taskList, setTaskList] = useState([])

  const addTask = (newTask) => setTaskList([...taskList, newTask]);

  return (
    <div className="App">
     <h1>App</h1>
     <Form />
     <List />
    </div>
  );
}

export default App;
