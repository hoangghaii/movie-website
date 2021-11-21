import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

export const ThemeColor = {
  gray: '#8395a7',
  grayLight: '#95a5a6',
  red: '#e74c3c',
  black: '#2c3e50',
};
