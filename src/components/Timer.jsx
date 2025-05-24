import React from 'react'

const Timer = () => {
  return (
    <>
        <div className='timer-box'>
            <button>Pomodoro</button>
            <button>Break</button>
            <div className="timer">
                <h3>25:00</h3>
            </div>
            <button>Start</button>
        </div>
    </>
  )
}

export default Timer;
