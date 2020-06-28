import React from 'react';


const Key = (props)=>{

    return<button value={props.note}style={{height:'100px',width:'50px', backgroundColor:'black', color:'white'}} onClick={props.onClick}>{props.note}</button>
}
export default Key;