import React from "react";

const Task = (props) => {
  let status, statusChangeAction, taskDetail
  if(props.taskData.status){
    status="Done"
    statusChangeAction = "Incomplete"
    taskDetail = <span className="done-task">{props.taskIndex + 1}. {props.taskData.title}</span>
  }else{
    status="Incomplete"
    statusChangeAction = "Done"
    taskDetail = <span>{props.taskIndex + 1}. {props.taskData.title}</span>
  } 
  return (
    <div className="task">
        {taskDetail}
      <label className="status">{status}</label>
      <div className="task-button">
      <button className="btn" onClick={props.changeStatus}>Mark {statusChangeAction}</button>
      <button className="btn" onClick={props.editTask}>Edit</button>
      <button className="btn" onClick={props.deleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
