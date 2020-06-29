import React, {useState} from 'react';
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

function App() {
  const pentatonicE=['E', 'F#', 'G#', 'B', 'C#']
  const majorA=['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
  const [scale, setScale]=useState(majorA)
  const [octave, setOctave]=useState(4)

  const playNote =(event)=>{
    
    synth.triggerAttackRelease(`${event.target.value}${octave}`, '8n')
  }
const  selOct=(event)=>{
  
    setOctave(event.target.value)
   
  }
  const selectScale =(event)=>{
  
    setScale(eval(event.target.value))

  }
  return (
    <div className="App">
      <div> {scale}</div>
      {scale.map(note=>{
        return <Key key={note} note={note}onClick={playNote}/>
      })}
      
    <Select selOct={selOct} />
    <SelectScale  selectScale={selectScale}/>
    </div>
  );
}

export default App;
