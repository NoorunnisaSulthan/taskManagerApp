// import React, { useState } from "react";
// import "./App.css";

// const AddTask = ({addTaskHandler}) => {
//   const [taskName, setTaskName] = useState("-");
//   const [startDate, setStartDate] = useState(
//   ""
//   );
//   const [endDate, setEndDate] = useState("");
// //   const [isChecked, setIsChecked] = useState(false);
// //   console.log(isChecked);

//   const add=(e)=>{
//     e.preventDefault();
//     if (taskName === '') {
//         alert('taskName is mandatory');
//         return;
//       }
//       addTaskHandler({taskName,startDate,endDate})
//       setTaskName("")
//       setEndDate("")
//       setStartDate("")
//   }

//   return (
//     <div className="acontainer">
//       <div className="aHeading">
     
//         <h2> Add New Task</h2>
//       </div>
//       <form onSubmit={add}>
//         <div className="field1">
//           <label>Task Name</label>
//           <input
//             className="taskInputBox"
//             type="text"
//             name="taskName"
//             placeholder="Enter your task here..."
//             value={taskName}
//             onChange={(e) => setTaskName(e.target.value)}
//           />
//         </div>
//         <div className="column">
//           <div className="field1">
//             <label>Start Date & Time</label>
//             <input
//               className="dateInputBox"
//               type="datetime-local"
//               name="startDate"
//               placeholder="start now..."
//               value={startDate}
//               onChange={(e) => {

//                 setStartDate( new Date(e.target.value).toLocaleString())
//               }}
//             />
//           </div>
//           <div className="field1">
//             <label>End Date & Time</label>
//             <input
//               className="dateInputBox"
//               type="datetime-local"
//               name="endDate"
//               placeholder="your deadline..."
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </div>
//         </div>
//         {/* <div className="field1">
//           <p> Are you done?</p>
//           <label>Done</label>
//           <input
//             className="checkbox "
//             type="checkbox"
//             name="checkbox1"
//             placeholder="your deadline..."
//             checked={isChecked}
//             onChange={() => setIsChecked(!isChecked)}
//           />
//         </div> */}
//          <div className="field1">
       
//        <button className="addTaskButton">ADD TASK</button>
//      </div>
//       </form>
     
//     </div>
//   );
// };

// export default AddTask;


import React, { useState } from "react";
import "./App.css";
import { useNavigate } from 'react-router-dom';
import{ useLocation} from "react-router-dom"


const EditTask = ({ updateTaskHandler }) => {
    const loc=useLocation()
    console.log(loc);
  const [taskName, setTaskName] = useState(loc.state.taskName);
  const [startDate, setStartDate] = useState(loc.state.startDate);
  const [endDate, setEndDate] = useState(loc.state.endDate);
  const [id, setId] = useState(loc.state.id);
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (taskName === "") {
      alert("taskName is mandatory");
      return;
    }
    const formattedStartDate = formatStartDate(startDate);
    updateTaskHandler({ id,taskName, startDate: formattedStartDate, endDate });
    setTaskName("");
    setEndDate("");
    setStartDate("");
    navigate('/');
  };

  const formatStartDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="acontainer">
      <div className="aHeading">
        <h2> Edit Task</h2>
      </div>
      <form onSubmit={update}>
        <div className="field1">
          <label>Task Name</label>
          <input
            className="taskInputBox"
            type="text"
            name="taskName"
            placeholder="Enter your task here..."
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="column">
          <div className="field1">
            <label>Start Date & Time</label>
            <input
              className="dateInputBox"
              type="datetime-local"
              name="startDate"
              placeholder="start now..."
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="field1">
            <label>End Date & Time</label>
            <input
              className="dateInputBox"
              type="datetime-local"
              name="endDate"
              placeholder="your deadline..."
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="field1">
          <button className="addTaskButton">UPDATE</button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
