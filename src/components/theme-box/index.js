import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'react-jss';

const ThemeBox = (props, context) => (
  <pre>{JSON.stringify({ props, context }, null, 2)}</pre>
);

export default withTheme(ThemeBox);
