import React, { useEffect, useState } from 'react';
import { useDataContext } from '../contexts/DataContext';

import { StyledSearchWrap } from './styled/StyledSearchWrap';
import Search from './Search';
import CountryDropdown from './CountryDropdown';
import DegreeSwitch from './DegreeSwitch';
import { belgrade } from '../config/api';

export default function SearchWrap() {
  const weather = useDataContext();
  const [countryCode, setCountryCode] = useState('RS');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === '13' || e.key === '13') {
      console.log(e.code)
      console.log(e.key)
      weather?.fetchData(`${e.currentTarget.value.toString()},${countryCode}`);
    }
  };

  const handleCountryChange = (code: string) => {
    setCountryCode(code);
  };

  useEffect(() => {
    weather?.fetchData(belgrade);
  }, []);

  return (
    <StyledSearchWrap
      loading={weather?.isFetching ? weather?.isFetching.toString() : undefined}
    >
      <CountryDropdown handleCountryChange={handleCountryChange} />
      <Search handleKeyDown={handleKeyDown} />
      <DegreeSwitch />
    </StyledSearchWrap>
  );
}
