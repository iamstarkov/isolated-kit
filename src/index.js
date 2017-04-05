import components from './components';
import theme from './theme';
import hocs from './hocs';
import kitInitize from './kit-initize';

const kit = Object.assign({},
  components,
  { theme },
  hocs,
  { kitInitize }
);

export default kit;
