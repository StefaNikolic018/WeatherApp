/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { countryListWithFlag } from '../config/countries'

interface IProps {
  message: string[] | string | undefined
}

export default function Message({ message }: IProps) {

  const nameOfCountry = (code: string) => {
    return countryListWithFlag.find((country) => country.Code === code);
  }

  if (Array.isArray(message)) {
    return message[0] !== '' ? (
      <h1 className="message" id="mispell">
        City "{message[0]}" doesn't exist in "
        {nameOfCountry(message[1])?.Name}".
        <br />
        Maybe it was a spelling mistake, try again.
      </h1>
    ) : (
      <h1 className="message" id="mess">It's not so nice to mess with search input!</h1>
    )
  } else {
    return <h1 className="message" id="no-data">{message}</h1>
  }
}
