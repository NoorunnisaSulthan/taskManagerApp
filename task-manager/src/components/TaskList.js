import React from "react";
import TaskCard from "./TaskCard"
import{Link} from "react-router-dom"
const TaskList=(props)=>{
    const deleteHandler= (id)=>{
        props.getTaskId(id)
    }
    const renderTaskList = props.tasks.map((task) => {
  
        return (
          <TaskCard task={task} clickHandler={deleteHandler}  key={task.id}/>
        );
      });
    return(
      
    <div className="acontainer">
            <Link to="/add">
      <button className="addTaskBtn"> + New Task</button></Link>
    <div className="tHeading"><h2>Task List</h2> 
    </div>
    <div>{renderTaskList}</div>
    
</div>);


}

export default TaskList;