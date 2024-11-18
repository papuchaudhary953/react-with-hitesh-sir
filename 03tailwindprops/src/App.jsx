import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    name:"papu chaudhary",
    age:21
  }
  let newArr=[1,2,3,4]


  return (
    <>
      <h1 className="bg-green-400 rounded text-black mb-4">tailwind test</h1>
     <Card name="papu chaudhary" newObj={obj} arr={newArr}/>
     <Card name="hakaman"/> 
     <Card name="jargon"/>
    </>
  )
}

export default App
