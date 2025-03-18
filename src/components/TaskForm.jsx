import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input type="text" className="task_input" placeholder="Enter a task" />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JS " />
            <Tag tagName="React" />
          </div>
          <div>
            <select className="task_status">
              <option value="todo">TO Do</option>
              <option value="inprogress">Inprogress</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit">Add</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
