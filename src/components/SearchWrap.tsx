import React, { useState } from 'react';
import { useDataContext } from '../contexts/DataContext';

import { StyledSearchWrap } from './styled/StyledSearchWrap';
import Search from './Search';
import CountryDropdown from './CountryDropdown';

export default function SearchWrap() {
  const weather = useDataContext();
  const [countryCode, setCountryCode] = useState('RS');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      weather?.fetchData(`${e.currentTarget.value.toString()},${countryCode}`);
    }
  };

  const handleCountryChange = (code: string) => {
    console.log(code);
    setCountryCode(code);
  };

  return (
    <StyledSearchWrap
      loading={weather?.isFetching ? weather?.isFetching.toString() : undefined}
    >
      <CountryDropdown handleCountryChange={handleCountryChange} />
      <Search handleKeyDown={handleKeyDown} />
    </StyledSearchWrap>
  );
}
