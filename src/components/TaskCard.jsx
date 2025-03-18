import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">Lorem ipsum dolor sit amet</p>
      <div className="task_card_bottom_line">
        <div className="task_cards_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
          <Tag tagName="JS" />
          <Tag tagName="React" />
        </div>
        <div className="task_delete">
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
