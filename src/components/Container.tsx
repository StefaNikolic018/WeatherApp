import React from 'react';

import { useBackgroundContext } from '../contexts/BackgroundContext';
import SearchWrap from './SearchWrap';
import { IProps } from '../interfaces/standard';
import { StyledContainer } from './styled/StyledContainer';
import { StyledDisplayWrap } from './styled/StyledDisplayWrap';
import Temperature from './Temperature';
import { useDataContext } from '../contexts/DataContext';

export default function Container({ children }: IProps) {
  const bg = useBackgroundContext();
  const weather = useDataContext();

  return (
    <StyledContainer bg={bg?.backgroundColor}>
      <SearchWrap />
      <StyledDisplayWrap>
        <div className="dataWrap">
          {weather?.hasData ? (
            <>
              <Temperature type="average" />
              <Temperature type="daily" />
            </>
          ) : weather?.isFetching ? (
            <h1>Loading</h1>
          ) : (
            <h1>No data to show.</h1>
          )}
        </div>
      </StyledDisplayWrap>
      {children}
    </StyledContainer>
  );
}
