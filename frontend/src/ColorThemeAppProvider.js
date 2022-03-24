import * as React from 'react';
import App from "./App"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCookies } from "react-cookie";
import Footer from './components/Footer/Footer';

export const ColorModeContext = React.createContext({toggleColorMode: () =>{}});

export const ToggleColorMode = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["user"]);
    const [mode, setMode] = React.useState(cookie.theme);
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          navbar: {
            main: "#FFFFFF"
          },
          background: {
            default: "#F8F8F8"
          },
          footer: {
            primary: "darkgrey"
          }, 
        }
        
      : {
          // palette values for dark mode
          background: {
            default: "#333333"
          },
          footer: {
            primary: "#4D4D4D"
          },
          navbar: {
            main: "#121212"
          },
        }),   
          },
        }),
      [mode],
    );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }