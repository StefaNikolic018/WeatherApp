import React, { useState } from 'react';

interface IProps {
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Search({ handleKeyDown }: IProps) {
  const [city, setCity] = useState('Belgrade');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  return (
    <span id="searchIcon">
      <input
        autoFocus
        autoComplete="off"
        placeholder="Enter city"
        type="text"
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        name="search"
        value={city}
      />
    </span>
  );
}
