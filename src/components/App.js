import React, { useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

function App() {
  const initialTasks = [
    // Initialize with some tasks
  ];

  const initialCategories = ["All", "Work", "Personal", "Study", "Home"];

  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const filterTasks = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="app">
      <h1>Task Management App</h1>
      <CategoryFilter
        categories={initialCategories}
        selectedCategory={selectedCategory}
        filterTasks={filterTasks}
      />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
      <NewTaskForm categories={initialCategories} addTask={addTask} />
    </div>
  );
}

export default App;
