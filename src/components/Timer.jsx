import React, { useRef, useState } from 'react'

const Timer = () => {

  const [remainingTime, setRemainingTime] = useState(null);
  const timerRef = useRef(null);

  const handleTimer = (min, sec) => {
    const totalTime = (min * 60) + sec;
    setRemainingTime(totalTime * 1000);
    if(timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1000) {
          console.log("timer up")
          clearInterval(timerRef.current);
          return 0;
        }
        console.log(`${prevTime - 1000} remaining `)
        return prevTime - 1000;
      })
    }, 1000);
  }

  return (
    <>
      <div className='timer-box'>
        <button>Pomodoro</button>
        <button>Break</button>
        <div className="timer">
          <h3>25:00</h3>
        </div>
        <button onClick={() => handleTimer(0, 3)}>Start</button>
      </div>
    </>
  )
}

export default Timer;
