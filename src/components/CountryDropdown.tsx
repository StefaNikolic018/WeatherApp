import React, { useState } from 'react';
import Select from 'react-select';
import { countryListWithFlag } from '../config/countries';

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

      name="countryDropdown"
      classNamePrefix="country"
      placeholder="Country"
      options={countryListWithFlag}
      isSearchable={false}
      value={countryListWithFlag.find((country) => {
        if (country.Code === selectedCountry) {
          return country.Code;
        }
      })}
      components={{
        IndicatorSeparator: () => null,
      }}
      formatOptionLabel={(country) => (
        <div className="country__option">
          <div className="flag">
            <img
              src={country.Img}
              alt={country.Name}
              // height="20px"
              width="30px"
            />
          </div>
          <span>{country.Code}</span>
        </div>
      )}
    />
    // <h1>nesto</h1>
  );
}
