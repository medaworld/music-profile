import { createContext } from 'react';

interface ThemeStateContextProps {
  theme: any;
}

export const ThemeStateContext = createContext<ThemeStateContextProps>({
  theme: undefined,
});
