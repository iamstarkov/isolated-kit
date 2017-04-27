import React from 'react';
import c from 'color';
import injectSheet from 'react-jss';

const styles = theme => ({
  alert: {
    padding: '.75em 1.25em',
    marginBottom: '1em',
    border: '1px solid transparent',
    borderRadius: '.25em',
    display: 'block',
    // color: ({ variant }) => c(theme.colors.variants[variant] || theme.colors.grayDark).darken(0.3).hex(),
    // borderColor: ({ variant }) => c(theme.colors.variants[variant] || theme.colors.grayDark).lighten(0.4).hex(),
    // backgroundColor: ({ variant }) => c(theme.colors.variants[variant] || theme.colors.white).lighten(0.5).hex(),
    borderRadius: 10,
  },
});

const Alert = ({ classes, children }) => (
  <div className={classes.alert}>
    {children}
  </div>
);

export default injectSheet(styles)(Alert);
