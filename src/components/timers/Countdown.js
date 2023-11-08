import React, { useState, useEffect } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import Panel from '../generic/Panel';

const Countdown = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      let interval = null;
      if (isActive && time > 0) {
        interval = setInterval(() => {
          setTime((time) => time - 1);
        }, 1000);
      } else if (!isActive || time === 0) {
        clearInterval(interval);
        if (time === 0) {
          setIsActive(false);
        }
      }
      return () => clearInterval(interval);
    }, [isActive, time]);
  
    const getTotalSeconds = () => {
      const hrs = hours === '' ? 0 : parseInt(hours, 10);
      const mins = minutes === '' ? 0 : parseInt(minutes, 10);
      const secs = seconds === '' ? 0 : parseInt(seconds, 10);
      return hrs * 3600 + mins * 60 + secs;
    };
  
    const handleStart = () => {
      setTime(getTotalSeconds());
      setIsActive(true);
    };
  
    const handlePauseResume = () => {
      setIsActive(!isActive);
    };
  
    const handleReset = () => {
      setIsActive(false);
      setTime(0);
      setHours('');
      setMinutes('');
      setSeconds('');
    };
  
    const updateTime = (type, value) => {
        const updateFunctions = {
          hours: setHours,
          minutes: setMinutes,
          seconds: setSeconds,
        };
      
        const updateFunction = updateFunctions[type];
        if (updateFunction) {
          updateFunction(value);
        }
      };
      
      return (
        <div>
          <Panel
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            updateTime={updateTime}
            isActive={isActive}
          />
          <TimeDis time={time} />
          <ButtonContainer>
            <Button onClick={handleStart} disabled={isActive}>Start</Button>
            <Button onClick={handlePauseResume} disabled={!isActive}>{isActive ? 'Pause' : 'Resume'}</Button>
            <Button onClick={handleReset}>Reset</Button>
          </ButtonContainer>
        </div>
      );
    };
  
  export default Countdown;