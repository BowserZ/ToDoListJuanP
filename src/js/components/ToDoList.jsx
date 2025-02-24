import React from "react";
import LogicList from "./LogicList";

export default function ToDoList({ textColor }) {

  const { tasks, handleAddTask, handleDeleteTask, handleDeleteAllTasks, handleCompleteTask, handleEditTask } = LogicList();

  return (
    <section className="position-absolute top-50 start-50 translate-middle">
      <div className="card">

        {/* Use textColor prop*/}
        <div className="card-header text-center" style={{ color: textColor }}>
          Things you should do!
        </div>
        <ul className="list-group list-group-flush">

          {/* Goes through all tasks */}
          {tasks.map(task => (
            <li className="list-group-item" key={task.id}>
              {/* Checkbox */}
              <input
                onChange={() => handleCompleteTask(task.id)}
                className="form-check-input"
                type="checkbox"
                checked={task.isCompleted}
              />
              
              {/* Edit task text */}
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleEditTask(e, task.id)}
                disabled={task.isCompleted}
                className="task-text"
                style={{ color: textColor }}
              />

              {/* Delete a task button */}
              <button className="btn" onClick={() => handleDeleteTask(task.id)}>
                <i className="fa fa-close"></i>
              </button>
            </li>
          ))}
        </ul>
        <div className="card-footer text-center">

          {/* Add a new task button */}
          <button className="btn add-new-task-button" onClick={handleAddTask}>
            <i className="fa fa-plus"></i> Add Task
          </button>
        </div>
        <div className="text-center p-2 m-2">

          {/* Delete all tasks button*/}
          <button type="button" className="btn btn-danger" onClick={handleDeleteAllTasks}>
            Eliminate all tasks!
          </button>
        </div>
      </div>
    </section>
  );
}


