import blue from '@material-ui/core/colors/blue';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export const ThemeProvider = (props: any) => <MuiThemeProvider {...props} theme={theme} />;
