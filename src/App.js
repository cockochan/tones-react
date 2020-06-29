import React, {useState} from 'react';
import useInterval from 'react-useinterval';
import Key from './Key.js';
import './App.css';
import Select from './Select.js'
import SelectScale from './SelScale'
import * as Tone from "tone";
const synth = new Tone.Synth();
// Set the tone to sine
synth.oscillator.type = "sine";
// connect it to the master output (your speakers)
synth.toMaster();
// thisline
function App() {
  const pentatonicE=['E', 'F#', 'G#', 'B', 'C#']
  const majorA=['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
  const [scale, setScale]=useState(pentatonicE)
  const [octave, setOctave]=useState(4)
  const [start, setStart]=useState(false)
  const [activeNote, setActiveNote]=useState(0)

  const playNote =(event)=>{
    
    synth.triggerAttackRelease(`${event.target.value}${octave}`, '8n')
  }
const  selOct=(event)=>{
  
    setOctave(event.target.value)
   
  }
  const selectScale =(event)=>{
  
    setScale(eval(event.target.value))
    
  }

  const removeButton =(event)=>{
    console.log(event.target.value)
    setScale(scale.filter(e => e !==event.target.value))}
  
  const handlePlay=()=>{
    setStart(true)
    if(activeNote<scale.length-1)
    setActiveNote(activeNote+1)
    else(setActiveNote(0))
    synth.triggerAttackRelease(`${scale[activeNote]}${octave}`, '8n')
  }
 

  useInterval(
    () => {
      handlePlay()
    },
    start ? 500 : null
  );
const stop=()=>{
  setStart(false)
}

  return (
    <div className="App">
      <div> {scale}</div>
      <div className='keyboard' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      {scale.map(note=>{
        return <Key key={note} note={note}onClick={playNote} removeButton={removeButton}/>
      })}
      </div>
      
    <Select selOct={selOct} />
    <SelectScale  selectScale={selectScale}/>
    <button onClick={handlePlay}>play</button>
    <button onClick={stop}>stop</button>
    </div>
  );
}

export default App;
