import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div
        className="task-title"
        onClick={() => {
          handleTaskClick(task.id);
        }}
      >
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          onClick={() => {
            handleTaskDeletion(task.id);
          }}
          className="remove-task-button"
        >
          <CgClose />
        </button>

        <button
          className="see-task-details-button"
          onClick={() => {
            navigate(`/${task.title}`);
          }}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
  //   <div className="task-container">{task.title}</div>;
};

export default Task;
