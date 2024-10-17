import { useState } from 'react'
import './App.css'
import Posts from './Posts'
import Users from './users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React Core Components</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>

        <hr />
      </ol>

      
      <Posts></Posts>
      <Users></Users>
    </>
  )
}

export default App
