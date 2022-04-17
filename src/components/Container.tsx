/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { useBackgroundContext } from '../contexts/BackgroundContext';
import SearchWrap from './SearchWrap';
import { IProps } from '../interfaces/standard';
import { StyledContainer } from './styled/StyledContainer';
import { StyledDisplayWrap } from './styled/StyledDisplayWrap';
import Temperature from './Temperature';
import { useDataContext } from '../contexts/DataContext';
import { SpinnerDiamond } from 'spinners-react';
import { initialBackground } from '../config/colors';
import { TemperatureChart } from './TemperatureChart';

export default function Container({ children }: IProps) {
  const bg = useBackgroundContext();
  const weather = useDataContext();

  // TODO:
  // 1) Uraditi testiranje uz Jest
  // 2) Pokusati da sredim malo dizajn Country Select-a

  return (
    <StyledContainer
      bg={weather?.hasData ? bg?.backgroundColor : initialBackground}
    >
      <SearchWrap />
      <StyledDisplayWrap>
        <div className="dataWrap">
          {weather?.isFetching ? (
            <div className="spinner">
              <SpinnerDiamond
                size={90}
                thickness={180}
                speed={138}
                color="rgba(172, 57, 155, 1)"
                secondaryColor="rgba(98, 57, 172, 0.44)"
                className="spinner"
              />
            </div>
          ) : weather?.hasData ? (
            <>
              <Temperature type="average" />
              <div className="dailyWrap">
                <Temperature type="daily" />
                <TemperatureChart />
              </div>
            </>
          ) : Array.isArray(weather?.message) ? (
            <h1 className="message">
              City "{weather?.message[0]}" doesn't exist in "
              {weather?.message[1]}".
              <br />
              Maybe it was a spelling mistake, try again.
            </h1>
          ) : (
            <h1 className="message">{weather?.message}</h1>
          )}
        </div>
      </StyledDisplayWrap>
      {children}
    </StyledContainer>
  );
}
