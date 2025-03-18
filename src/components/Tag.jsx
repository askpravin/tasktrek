import React from "react";
import "./tag.css";

const Tag = (props) => {
  return <button className="tag">{props.tagName}</button>;
};

export default Tag;
