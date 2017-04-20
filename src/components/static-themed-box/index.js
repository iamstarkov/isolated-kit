import React from 'react';
import c from 'color';
import { injectThemedSheet } from 'react-jss';

const styles = theme => ({
  alert: {
    padding: '.75em 1.25em',
    marginBottom: '1em',
    border: '1px solid transparent',
    borderRadius: '.25em',
    display: 'block',
    color: c(theme.colors.variants.success).darken(0.3).hex(),
    'border-color': c(theme.colors.variants.success).lighten(0.4).hex(),
    'background-color': c(theme.colors.variants.success).lighten(0.5).hex(),
    borderRadius: 10,
  }
});

const StaticThemedBox = ({ classes, children }) => (
  <div className={classes.alert}>
    { children }
  </div>
)

export default injectThemedSheet(styles)(StaticThemedBox);
