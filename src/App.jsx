import { useState } from 'react'
import WeatherApp from './WeatherApp'
import './Style.css'
 
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div><WeatherApp /></div>
    </div>
         
    
  )
}

export default App
