import React, { useState } from 'react';
import Select from 'react-select';
import { countryList } from '../config/countries';

interface IProps {
  handleCountryChange: (code: string) => void;
}

export default function CountryDropdown({ handleCountryChange }: IProps) {
  const [selectedCountry, setSelectedCountry] = useState('RS');

  return (
    <Select
      className="country__dropdown"
      onChange={(value) => {
        setSelectedCountry(value?.Code!);
        handleCountryChange(value?.Code!);
      }}
      classNamePrefix="country"
      placeholder="Country"
      options={countryList}
      isSearchable={false}
      value={countryList.find((country) => {
        if (country.Code === selectedCountry) {
          return country.Code;
        }
      })}
      components={{
        IndicatorSeparator: () => null,
      }}
      formatOptionLabel={(country) => (
        <div className="country__option">
          <img
            src={`https://flagcdn.com/h24/${country.Code.toLowerCase()}.jpg`}
            alt={`${country.Name}`}
            // height="20px"
            width="30px"
          />
          <span>{country.Code}</span>
        </div>
      )}
    />
    // <h1>nesto</h1>
  );
}