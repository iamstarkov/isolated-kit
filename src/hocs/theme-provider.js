import React, { PropTypes } from 'react';
import withContext from 'recompose/withContext';

const Provider = ({ children }) => children;

const provideTheme = withContext(
  { theme: PropTypes.object.isRequired },
  ({ theme }) => ({ theme })
);

const ThemeProvider = provideTheme(Provider)

export default ThemeProvider;
