import React from "react";
// import user from "../images/user.png";
import { Link } from "react-router-dom";

import { FaTrash } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";

const ContactCard = (props) => {
  const { id, taskName, startDate, endDate } = props.task;
  //to make in correct date format
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  const sdate = new Date(startDate).toLocaleString("en-GB", options);
  const edate = new Date(endDate).toLocaleString("en-GB", options);
  return (
    <div className="item" style={{ marginTop: "40px" }}>
      {/* image retrival */}
      {/* <img className=" Avatarimage" src={user} alt="user" /> */}
      <div className="align">
        <div className="content">
          {/* 
        when u click on name and email go to contact page which is unique */}

          <div className="name">
            <GrTasks
              className="taskIcon"
              onClick={() => props.clickHandler(id)}
            />
            <div className="headers"> {taskName}</div>
          </div>
          <p className="schedule"> Schedule</p>
          <div className="schedule">
            <div className="startDate"> Start : {sdate} </div>
            <div className="endDate">End : {edate}</div>
          </div>
        </div>

        <FaTrash className="trashIcon" onClick={() => props.clickHandler(id)} />
        {/* here the whole task is passed to the function in which the path is defined */}
        <Link to={`/edit/${id}`} state={props.task}>
          <AiFillEdit className="editIcon" />
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
