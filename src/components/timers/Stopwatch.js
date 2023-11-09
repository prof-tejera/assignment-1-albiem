import React, { useState, useEffect } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import { startTimer, pauseTimer, resumeTimer, resetTimer } from '../../utils/helpers';

const Stopwatch = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
      }, 1000);
    } else if (!isActive && totalSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, totalSeconds]);

  const handleStart = () => startTimer(setIsActive);
  const handlePauseResume = () => (isActive ? pauseTimer(setIsActive) : resumeTimer(setIsActive));
  const handleReset = () => resetTimer(setIsActive, setTotalSeconds);

  
  return (
    <div>
      <TimeDis time={totalSeconds} />

      <ButtonContainer>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handlePauseResume}>{isActive ? 'Pause' : 'Resume'}</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonContainer>
    </div>
  );
};

export default Stopwatch;