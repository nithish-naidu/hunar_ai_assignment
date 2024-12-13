import { createTheme } from '@mui/material';

const myTheme = createTheme({
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976D2',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default myTheme;
