import React from 'react';
import './App.css';
import Player from './Player.js'

function App(){

    return (<div style ={ { backgroundImage: "url('https://muzikercdn.com/uploads/products/654/65448/thumb_d_gallery_base_04d5bba1.jpg')",  backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'}}>
    <Player />
    <Player/>
    <Player/>
</div>)
}

export default App;