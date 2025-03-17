import React from "react";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input type="text" className="task_input" placeholder="Enter a task" />
        <div className="task_form_bottom_line">
          <button className="tag">HTML</button>
          <button className="tag">CSS</button>
          <button className="tag">JS</button>
          <button className="tag">REACT</button>
          <select className="task_status">
            <option value="todo">TO Do</option>
            <option value="inprogress">Inprogress</option>
            <option value="done">Done</option>
          </select>
          <button className="task_add">Add</button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
