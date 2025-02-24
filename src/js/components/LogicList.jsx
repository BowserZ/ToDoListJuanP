import { useState } from "react";

export default function LogicList() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);

  // Add a new task
  function handleAddTask() {
    const newTask = {
      id: Date.now(),
      text: "Nueva tarea",
      originalText: "Nueva tarea",
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  // Delete a task
  function handleDeleteTask(id) {
    if (window.confirm("¿Seguro que deseas eliminar esta tarea?")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  }

  // Delete all tasks
  function handleDeleteAllTasks() {
    if (window.confirm("¿Seguro que deseas eliminar todas las tareas?")) {
      setTasks([]);
    }
  }

  // Mark task as completed or not
  function handleCompleteTask(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        if (!task.isCompleted) {
          if (window.confirm("¿Completaste esta tarea?")) {
            task.originalText = task.text;
            task.text = "¡Buen trabajo!";
            task.isCompleted = true;
          }
        } else {
          task.isCompleted = false;
          task.text = task.originalText;
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // Edit task text
  function handleEditTask(e, id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id && !task.isCompleted) {
        task.text = e.target.value;
        task.originalText = e.target.value;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

// Return tasks and task handlers
  return {
    tasks,
    handleAddTask,
    handleDeleteTask,
    handleDeleteAllTasks,
    handleCompleteTask,
    handleEditTask,
  };
}









