import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addNewTask }) => {
  const [task, setTask] = useState();

  // NOTE: do not delete `data-testid` key value pair

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        data-testid="add-task-button"
        onClick={() => {
          addNewTask(task);
        }}
      >
        <b>+</b>
      </button>
    </div>
  );
};

export default AddTask;
