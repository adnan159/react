import { createContext } from 'react';

const ThemeContex = createContext({ dark: false, toggle: ()=> {} });

export default ThemeContex;