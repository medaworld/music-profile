'use client';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes/themes';
import { ThemeStateContext } from './ThemeStateContext';

interface ContextProps {
  children: React.ReactNode;
}

export const ThemeStateContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeStateContext.Provider value={{ theme }}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </ThemeStateContext.Provider>
  );
};
