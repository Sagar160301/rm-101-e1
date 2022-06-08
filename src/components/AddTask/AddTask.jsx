import React, { useEffect, useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const addNewTask = async () => {
    let count = 0;
    tasks.forEach((el) => {
      if (el.text !== task) {
        count++;
      }
    });
    if (count == tasks.length && task) {
      try {
        let res = await fetch("http://locolhost:8080/task", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        });
      } catch (error) {}
    }
  };
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
      <button data-testid="add-task-button" onClick={addNewTask}>
        <b>+</b>
      </button>
    </div>
  );
};

export default AddTask;
