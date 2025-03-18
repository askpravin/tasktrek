import React from "react";
import Todo from "../assets/direct-hit.png";
import "./taskColumn.css";
import TaskCard from "./TaskCard";

const taskColumn = ({ title, icon }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} className="task_column_icon" /> {title}
      </h2>
      <TaskCard />
    </section>
  );
};

export default taskColumn;
