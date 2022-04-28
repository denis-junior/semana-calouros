import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  let navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          eveniet at voluptas, consequatur expedita iste?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
