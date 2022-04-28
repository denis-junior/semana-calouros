import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";

import "./App.css";
import axios from "axios";

const App = () => {
  // const message = "My variable"
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />r
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
              </>
            }
          />

          <Route path="/:taskTitle" exact element={<TaskDetails/>} />
          <Route path="*" element={<sErrorPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
