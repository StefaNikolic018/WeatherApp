import React, { useState } from 'react';

interface IProps {
  handleSearch: (city: string) => void;
}

export default function Search({ handleSearch }: IProps) {
  const [city, setCity] = useState('Belgrade');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  function handleCitySearch(input: string | React.KeyboardEvent<HTMLInputElement>) {
    if (typeof input === 'string') {
      handleSearch(input);
    } else {
      if (input.code === 'Enter') {
        handleSearch(input.currentTarget.value.toString());
      }
    }
  }

  return (
    <span id="searchIcon">
      <input
        autoFocus
        autoComplete="off"
        placeholder="Enter city"
        type="text"
        onKeyDown={handleCitySearch}
        onChange={handleOnChange}
        name="search"
        value={city}
      />
      {/* HACK FOR MOBILE SEARCH BECAUSE OF CHROME BUG WITH onKeyDown */}
      <span id="iconClick" onClick={() => handleCitySearch(city)}></span>
    </span>
  );
}
