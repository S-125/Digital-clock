import React from 'react'
import Clock from './Clock'

function App() {
  return (
    <div className='bg-[#5a5f7f] w-screen h-screen flex justify-center items-center flex-col'>
      <h1 className='text-[40px] sm:text-[60px] text-white p-4 drop-shadow-[2px_2px_0_black] drop-shadow-[-2px_-2px_0_black] drop-shadow-[-2px_2px_0_black] drop-shadow-[2px_-2px_0_black]'>
        Digital Clock</h1>
      <Clock/>
    </div>
  )
}

export default App
