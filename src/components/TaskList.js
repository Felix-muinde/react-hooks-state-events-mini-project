import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => deleteTask(index)} />
      ))}
    </div>
  );
}

export default TaskList;
