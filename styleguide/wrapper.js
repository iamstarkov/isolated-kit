import React, { PropTypes, Component } from 'react';
import theme from '../src/theme';
import ThemeProvider from '../src/hocs/theme-provider';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

export default Wrapper;
