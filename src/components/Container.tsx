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
import Message from './Message';
import { StyledHeader } from './styled/StyledHeader';

export default function Container({ children }: IProps) {
  const bg = useBackgroundContext();
  const weather = useDataContext();

  return (
    <StyledContainer
      bg={weather?.hasData ? bg?.backgroundColor : initialBackground}
    >
      <StyledHeader>
        <a
          href="https://www.linkedin.com/in/stefanikolic18/"
          target="_blank"
          rel="noreferrer"
        >
          stefaNikolic
          <span> &copy;</span>
        </a>
      </StyledHeader>
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
          ) : (
            <Message message={weather?.message} />
          )}
        </div>
      </StyledDisplayWrap>
      {children}
    </StyledContainer>
  );
}
