import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyApp()
{
  return(
    <div>
      <h1>satguru rampal ji maharaj</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://google.com" target="_blank">visit google</a>
)
const reactElement=react.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
  
)


createRoot(document.getElementById('root')).render(
 
  reactElement
)
