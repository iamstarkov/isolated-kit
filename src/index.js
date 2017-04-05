import components from './components';
import theme from './theme';
import hocs from './hocs';

const kit = Object.assign({},
  components,
  { theme },
  hocs
);

export default kit;
