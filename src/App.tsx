import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className=' text-white bg-red-700'>Hello react + tailwindcss@3.4.17</p>
    </>
  )
}

export default App
