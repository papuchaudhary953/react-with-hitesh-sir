import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(10)
  

  const addValue=()=>{
    console.log("value added",counter)
    if(counter<20)
    {
      setCounter(counter+1)
    }
    
    }
  const removeValue=()=>{
    if(counter>0)
    {
      setCounter(counter-1)
    }
    
  }

 

  
  return (
    <>
     <h1>Chai aur code</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value{counter}</button><br></br>
     <button onClick={removeValue}>Remove value{counter}</button>
     <p>This is america {counter}</p>

    </>
  )
}

export default App
