import React, { Component } from "react";
import Task from "./task";
import "./todolist.css"

class Todolist extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { title: "Task1", status: false },
        { title: "Task2", status: false },
        { title: "Task3", status: false },
      ],
      editFlag: false,
    };
  }
  editIndex;

  addTask = (taskTitle) => {
    this.setState(
      (prevState) => ({
        tasks: [...prevState.tasks, { title: taskTitle, status: false }],
      }),
      () => {
        alert(`Add ${taskTitle} to the list?`);
        document.getElementById("taskTitle").value = "";
      }
    );
  };

  saveTask = (taskTitle) => {
    let updatedTasks = this.state.tasks;
    updatedTasks[this.editIndex].title = taskTitle
    updatedTasks[this.editIndex].status = false
    this.setState(
      () => ({
        tasks: updatedTasks,
        editFlag: false,
      }),
      () => {
        alert(`Update ${taskTitle} for Task ${this.editIndex+1} ?`);
        document.getElementById("taskTitle").value = "";
      }
    );
  };

  deleteTask = (taskIndex) => {
    this.setState(
      (prevState) => {
        prevState.tasks.splice(taskIndex, 1);
        return { tasks: [...prevState.tasks] };
      },
      () => alert(`Delete Task ${taskIndex + 1}?`)
    );
  };

  editTask = (taskIndex) => {
    document.getElementById("taskTitle").value =
      this.state.tasks[taskIndex].title;
      this.editIndex=taskIndex
    this.setState(
      () => {
        return { editFlag: true };
      },
      () => alert(`Edit Task ${taskIndex + 1}?`)
    );
  };

  changeTaskStatus = (taskIndex) => {
    let updatedTasks = this.state.tasks;
    updatedTasks[taskIndex].status =
      !updatedTasks[taskIndex].status;
    this.setState(
      () => {
        return { tasks: updatedTasks };
      },
      () => alert(`Update Status of Task ${taskIndex + 1}?`)
    );
  };

  render() {
    const tasks = this.state.tasks.map((task, index) => {
      return (
        <Task
          key={index}
          taskData={task}
          taskIndex={index}
          deleteTask={() => this.deleteTask(index)}
          editTask={() => this.editTask(index)}
          changeStatus={() => this.changeTaskStatus(index)}
        ></Task>
      );
    });
    let button;
    if (this.state.editFlag) {
      button = (
        <button
        className="btn"
          onClick={() =>
            this.saveTask(document.getElementById("taskTitle").value)
          }
        >
          Save Task
        </button>
      );
    } else {
      button = (
        <button
        className="btn"
          onClick={() =>
            this.addTask(document.getElementById("taskTitle").value)
          }
        >
          Add Task
        </button>
      );
    }
    return (
      <div>
        <h1 className="title">Todo List:</h1>
        <hr></hr>
        <input className="taskInput" type="text" id="taskTitle"></input>
        {button}
        <div className="task-list">
        <h2 className="title">Tasks:</h2>
        {tasks}
        </div>
        
      </div>
    );
  }
}

export default Todolist;
