import React, { useState } from "react";
import Task from "./task";

function TodolistFunction() {
  const [tasks, setTasks] = useState([
    { title: "Task1", status: false },
    { title: "Task2", status: false },
    { title: "Task3", status: false },
  ]);

  const [editFlag, setEditFlag] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [editIndex, setEditIndex] = useState(undefined);

  const addTask = () => {
    const taskslist = [...tasks, { title: currentTask, status: false }];
    setTasks(taskslist);
    setCurrentTask("");
  };

  const saveTask = () => {
    let updatedTasks = [...tasks];
    updatedTasks[editIndex].title = currentTask;
    updatedTasks[editIndex].status = false;
    setTasks(updatedTasks);
    setEditFlag(false);
    setCurrentTask("");
  };

  const deleteTask = (taskIndex) => {
    let updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
  };

  const editTask = (taskIndex) => {
    setCurrentTask(tasks[taskIndex].title);
    setEditIndex(taskIndex);
    setEditFlag(true);
  };

  const changeTaskStatus = (taskIndex) => {
    let updatedTasks = [...tasks];
    updatedTasks[taskIndex].status = !updatedTasks[taskIndex].status;
    setTasks(updatedTasks);
  };

  const taskList = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        taskData={task}
        taskIndex={index}
        deleteTask={()=>deleteTask(index)}
        editTask={() => editTask(index)}
        changeStatus={() => changeTaskStatus(index)}
      ></Task>
    );
  });
  return (
    <div className="container">
      <h1 className="title">Todo List:</h1>
      <hr></hr>
      <input
        className="taskInput"
        type="text"
        value={currentTask}
        onChange={(e) => {
          setCurrentTask(e.target.value);
        }}
      ></input>
      <button
        className="btn"
        onClick={editFlag ? () => saveTask() : () => addTask()}
      >
        {editFlag ? "Save Task" : "Add Task"}
      </button>
      <div className="task-list">
        <h2 className="title">Tasks:</h2>
        {taskList}
      </div>
    </div>
  );
}

export default TodolistFunction;
