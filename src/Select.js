import React from 'react';
const Select =(props)=>{
return (
<div>
  <span style={{fontWeight:'bolder', color:'red'}}>select octave  </span>
<select onChange={props.selOct}>
  <option value="1">1</option>
  <option value="2" >2</option>
  <option value="3" >3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
</div>)
}
export default Select;