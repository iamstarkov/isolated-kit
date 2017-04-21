import React from 'react';
import c from 'color';
import { withTheme } from 'react-jss';

const ThemeBox = (props) => (
  <pre> { JSON.stringify(props, null, 2) } </pre>
)

export default withTheme(ThemeBox);
