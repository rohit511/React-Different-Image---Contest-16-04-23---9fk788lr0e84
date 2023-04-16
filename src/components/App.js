import React from 'react'
import '../styles/App.css';
import programmingGif from "../assets/programming.gif";

const GIF = () => {
  return (
    <img src= {programmingGif} alt='programming-gif'className='import-image' height={200}/>
  )
}

const App = () => {

  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF />
      <img src="https://picsum.photos/id/400/200" alt="A random image" className='url-image' />
    </div>
  )
}


export default App;
