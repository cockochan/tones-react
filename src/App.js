import React from 'react';
import './App.css';
import Player from './Player.js'

function App(){

    return (<div style ={ { backgroundImage: "url('https://images3.alphacoders.com/157/thumb-1920-157265.jpg')", width:'100%', height:'100vh',  backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto'}}>
    <Player />
    <Player/>
    <Player/>
</div>)
}

export default App;