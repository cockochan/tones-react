import React, {useState} from 'react';
import Key from './Key.js';
import './App.css';
import Select from './Select.js'
import * as Tone from "tone";
const synth = new Tone.Synth();
// Set the tone to sine
synth.oscillator.type = "sine";
// connect it to the master output (your speakers)
synth.toMaster();
const pentatonicE=['E', 'F#', 'G#', 'B', 'C#']

function App() {
  const [scale, setScale]=useState(pentatonicE)
  const [octave, setOctave]=useState(4)
  const playNote =(event)=>{
    
    synth.triggerAttackRelease(`${event.target.value}${octave}`, '8n')
  }
const  selOct=(event)=>{
  console.log(event.target.value)
    setOctave(event.target.value)
   
  }
  return (
    <div className="App">
      {scale.map(note=>{
        return <Key note={note}onClick={playNote}/>
      })}
      
    <Select selOct={selOct} />
    </div>
  );
}

export default App;
