import React, { useState } from 'react'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import Gameplay from './components/Gameplay';

const App = () => {
  const[isGameStarted,setIsGameStarted] =useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted(prev=>!prev)
  }

  return (
    <div>
      {
        isGameStarted? <Gameplay/>:<StartGame toggle={toggleGamePlay}/>
      }
    </div>
  )
}

export default App
