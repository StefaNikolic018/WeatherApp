/* eslint-disable react/no-unescaped-entities */
import React from 'react'

interface IProps {
  message: string[] | string | undefined
}

export default function Message({ message }: IProps) {
  if (Array.isArray(message)) {
    return message[0] !== '' ? (
      <h1 className="message" id="mispell">
        City "{message[0]}" doesn't exist in "
        {message[1]}".
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
