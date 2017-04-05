import React from 'react';
import { injectSheet, withTheme } from '../../';

const styles = {
  'alert': {
    display: 'block',
    color: 'red',
    backgroundColor: '#bababa',
  }
}

const Alert = ({ classes, children }) => (
  <button>{ children }</button>
)

export default withTheme(injectSheet(styles)(Alert));
