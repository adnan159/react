import { createContext } from 'react';

const ThemeContex = createContext({ dark: false, toggole: ()=> {} });

export default ThemeContex;