import initize from 'initize';
import theme from '../theme';

const defaultStyles = {
  direction: 'ltr',
  color: theme.colors.grayDark,
}

const kitInitize = Object.assign({}, initize, defaultStyles);

export default kitInitize;
