import React from "react";

const Key = (props) => {
  return (
      <div className='blackkey' style={{display:'flex',flexDirection:'column',width:'50px'}}>
    <button
    value={props.note}
    onClick={props.removeButton}
    style={{ backgroundColor: "grey", color:'white' }}
  >
 close
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
    </button></div>
  );
};
export default Key;
