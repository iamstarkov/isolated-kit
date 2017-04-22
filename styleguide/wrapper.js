import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../src/theme';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

export default Wrapper;
