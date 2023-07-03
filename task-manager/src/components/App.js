import React, { useState, useEffect } from "react";
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import { Routes } from "react-router-dom";
import AddTask from './AddTask';
import { v4 as uuid } from "uuid";
import TaskList from './TaskList';
import Header from './Header';
import api from '../api/tasks'
import EditTask from "./EditTask";

function App() {

  const retrieveTasks=async ()=>{
    const response=await api.get("/tasks")
    
    return response.data;

  }
  const LOCAL_STORAGE_KEY = "tasks";
  const [tasks, setTasks] = useState(
    []
  );

  //to retireve all previous tasks from server
  useEffect(() => {
  // The getAllContacts function is called within the useEffect to fetch all contacts. It is an async function that awaits the response from the retrieveContacts function. Once the response is received, it sets the retrieved contacts in the contacts state using the setContacts function.
    const getAllContacts=async()=>{
      const allTasks=await retrieveTasks();
      if(allTasks) setTasks(allTasks)
    }
    getAllContacts()
  }, []);

  const addTaskHandler = async(task) => {
    console.log(task);
   const request={
      id: uuid(), ...task
    }
    //one by one infor added to server
    const response=await api.post("/tasks",request)
    console.log(response);
    //this sets contacts value and this contacts is sent to contact list for display
    setTasks([...tasks, response.data]);
  };


  
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  // }, [tasks]);

  const deleteTask=async(id)=>{
    await api.delete(`/tasks/${id}`)
    const newTaskList=tasks.filter((task)=>{
      return task.id!==id;
    })
    setTasks(newTaskList)

  }

  const updateTaskHandler=async(task)=>{
    const response= await api.put(`/tasks/${task.id}`,task)
    const {id, name, email}=response.data
    setTasks(
      tasks.map((task)=>{
        return task.id===id?{...response.data}:task;
      })
    )

  }
  return (
    <div className="container">
  <Router>

 <Header/>
    <Routes>
    
    <Route exact path="/add" element={<AddTask addTaskHandler={addTaskHandler}/>} />
    <Route exact path="/" element={<TaskList tasks={tasks} getTaskId={deleteTask}/>} />
    <Route exact path="/edit/:id"  element={<EditTask updateTaskHandler={updateTaskHandler} />} />   
    
    </Routes>
  </Router>
     
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />  */}
      

  
    
    </div>
  );
}

export default App;
