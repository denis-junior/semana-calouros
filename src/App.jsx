import React, { useState } from 'react';
import './App.css'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {

  // const message = "My variable"
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ])

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false,
    }]

    setTasks(newTask)
  }

  return ( 
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/> 
        oi
      </div>
    </>
   );
}
 
export default App;