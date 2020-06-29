import React from "react";

const Key = (props) => {
  return (
      <blackkey>
    <button
    value={props.note}
    onClick={props.removeButton}
    style={{ backgroundColor: "red" }}
  >
  {props.note}
  </button>
    <button
      value={props.note}
      style={{
        height: "100px",
        width: "50px",
        backgroundColor: "black",
        color: "white",
      }}
      onClick={props.onClick}
    >
      
      {props.note}
    </button></blackkey>
  );
};
export default Key;
