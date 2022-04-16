import React from 'react';

import { useBackgroundContext } from '../contexts/BackgroundContext';
import SearchWrap from './SearchWrap';
import { IProps } from '../interfaces/standard';
import { StyledContainer } from './styled/StyledContainer';
import { StyledDisplayWrap } from './styled/StyledDisplayWrap';
import Temperature from './Temperature';
import { useDataContext } from '../contexts/DataContext';
import { SpinnerDiamond } from 'spinners-react';

export default function Container({ children }: IProps) {
  const bg = useBackgroundContext();
  const weather = useDataContext();

  // TODO:
  // 1) Obraditi situaciju ako nema rezultata tj. ako je unesen pogresan grad
  // 2) Odraditi responsivnes
  // 3) Pokusati da sredim malo dizajn Country Select-a
  // 4) Feature: Iz celzijusa u farenhajt, i dodati chart js npr da prikaze neke podatke
  // 5) Uraditi testiranje uz Jest

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
            <SpinnerDiamond
              size={90}
              thickness={180}
              speed={138}
              color="rgba(172, 57, 155, 1)"
              secondaryColor="rgba(98, 57, 172, 0.44)"
              className="spinner"
            />
          ) : (
            <h1 className="spinner">No data to show.</h1>
          )}
        </div>
      </StyledDisplayWrap>
      {children}
    </StyledContainer>
  );
}
