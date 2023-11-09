import React from 'react';
import styled from 'styled-components';
import { TimeInput, RoundsInput } from '../generic/Input'


const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6AC7FC;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

const TimeInputsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

const RoundsInputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  display: flex;
  justify-content: center;
  color: pink;
`;


const Panel = ({ hours, minutes, seconds, restHours, restMinutes, restSeconds, updateTime, updateRestTime, isActive, showRounds, setRounds, rounds }) => {
  return (
    <PanelContainer>
      <InputsContainer>
        <Label>Duration entry</Label>
        <TimeInputsRow>
          <TimeInput
            unit="hours"
            value={hours}
            onChange={(value) => updateTime('hours', value)}
            disabled={isActive}
            placeholder="HH"
          />
          <TimeInput
            unit="minutes"
            value={minutes}
            onChange={(value) => updateTime('minutes', value)}
            disabled={isActive}
            placeholder="MM"
          />
          <TimeInput
            unit="seconds"
            value={seconds}
            onChange={(value) => updateTime('seconds', value)}
            disabled={isActive}
            placeholder="SS"
          />
        </TimeInputsRow>
        <Label>Rounds entry</Label>
        {showRounds && (
          <RoundsInputRow>
            <RoundsInput
              value={rounds}
              onChange={(value) => setRounds(value)}
              placeholder="Rounds"
              disabled={isActive}
            />
          </RoundsInputRow>
        )}
      </InputsContainer>
    </PanelContainer>
  );
};

export default Panel;
