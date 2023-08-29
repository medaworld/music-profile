'use client';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import { ThemeStateContext } from './ThemeStateContext';
import { ProviderProps } from '@/types/types';

export const ThemeStateContextProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeStateContext.Provider value={{ theme }}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </ThemeStateContext.Provider>
  );
};
