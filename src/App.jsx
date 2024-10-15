import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import TimePage from './Pages/TimePage'
import RealTimeClock from './Components/RealTimeClock'
import StopWatch from './Components/StopWatch'
import TimerInput from './Components/TimerInput'
import TimerDisplay from './Components/TimerDisplay'

export const App = () => {
  return (
   
        <div className='min-h-screen bg-black  text-white font-sans'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/real-time" element={<RealTimeClock/>} />
            <Route path="/stopwatch" element={<StopWatch />} />
            <Route path='/timerDisplay' element={<TimerDisplay />} />
            <Route path='/timerInput' element={<TimerInput />} />

          </Routes>
        </div>
  )
}

export default App