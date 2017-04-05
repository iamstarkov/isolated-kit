import React from 'react';
import hocs from '../../hocs/';
const { withTheme, injectSheet} = hocs;

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
