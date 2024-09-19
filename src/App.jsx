import { useState } from 'react'

import  Company from './TodoListFolder/Company.jsx'
import {Brouserrouter, Routes, Rout} from ''

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Test starts from here */}
      <h2>Account management System</h2>
      
       <Company/>

    </>
      
  )
}

export default App
