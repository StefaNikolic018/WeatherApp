import React from 'react';
import ReactSwitch from 'react-switch';
import { useDataContext } from '../contexts/DataContext';

export default function DegreeSwitch() {
  const weather = useDataContext();

  function handleChange() {
    weather?.changeIsCelsius();
  }

  return (
    <div className="degreeSwitch">
      <ReactSwitch
        onChange={handleChange}
        checked={!weather?.isCelsius!}
        uncheckedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              color: 'orange',
              paddingRight: 2,
              transform: 'rotate(260deg)',
            }}
          >
            &deg;C
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              color: 'white',
              paddingRight: 2,
              transform: 'rotate(270deg)',
            }}
          >
            &deg;F
          </div>
        }
      />
    </div>
  );
}
