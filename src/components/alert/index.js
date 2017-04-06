import React from 'react';
import c from 'color';
import { withTheme, injectSheet} from '../../hocs/';

const styles = {
  alert: {
    padding: '.75em 1.25em',
    marginBottom: '1em',
    border: '1px solid transparent',
    borderRadius: '.25em',
    display: 'block',
    color: ({ theme, variant }) => c(theme.colors.variants[variant] || theme.colors.grayDark).darken(0.3).hex(),
    'border-color': ({ theme, variant }) => c(theme.colors.variants[variant] || theme.colors.grayDark).lighten(0.4).hex(),
    'background-color': ({ theme, variant }) => c(theme.colors.variants[variant] || theme.colors.white).lighten(0.5).hex(),
    borderRadius: 10,
  }
}

export const Alert = ({ classes, children }) => (
  <div className={classes.alert}>
    { children }
  </div>
)

export default withTheme(injectSheet(styles)(Alert));
