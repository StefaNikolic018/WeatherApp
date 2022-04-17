import React, { useState, createContext, useContext } from 'react';

import { initialBackground } from '../config/colors';
import { IBackgroundContext } from '../interfaces/contexts';
import { IProps } from '../interfaces/standard';
import { calculateColors } from '../utils/calculateColors';

const BackgroundContext = createContext<IBackgroundContext | null>({
  backgroundColor: initialBackground,
  changeBackground: () => {
    return;
  },
});

export function useBackgroundContext() {
  return useContext(BackgroundContext);
}

export default function BackgroundProvider({ children }: IProps) {
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    initialBackground
  );

  function changeBackground(degree: number) {
    const newBackground = calculateColors(degree);
    setBackgroundColor(newBackground);
  }

  return (
    <BackgroundContext.Provider value={{ backgroundColor, changeBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}
