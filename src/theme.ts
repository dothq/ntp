import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    htmlFontSize: 18,
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'system-ui',
      'sans-serif'
    ].join(','),

    button: {
      textTransform: 'unset',
      fontSize: '14px',
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 8
  },
  props: {
    MuiButtonBase: {
      disableRipple: false
    }
  }
});
