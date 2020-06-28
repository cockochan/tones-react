import React from 'react';
const SelectScale =(props)=>{
const pentatonicE=['E', 'F#', 'G#', 'B', 'C#']
const majorA=['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
return <select onChange={props.selectScale}>
  <option value={pentatonicE}>pentatonicE</option>
  <option value={majorA} >majorA</option>
</select>
}
export default SelectScale;