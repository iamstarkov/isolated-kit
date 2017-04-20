import c from 'color';
import { kitInitize, theme } from '../../';

const vColor = (theme, x) => theme.colors.variants[x];

const variant = x => ({
  backgroundColor: ({ theme }) => vColor(theme, x),
  borderColor: ({ theme }) => x !== 'secondary' ? c(vColor(theme, x)).darken(0.1).hex() : '#ccc',
  color: ({ theme }) => theme.colors[x !== 'secondary' ? 'white' : 'grayDark'],
  '&:not($active):not($disabled):hover': {
    backgroundColor: ({ theme }) => c(vColor(theme, x)).darken(0.2).hex(),
  },
  '&:not($active):not($disabled):active, &$active': {
    backgroundColor: ({ theme }) => c(vColor(theme, x)).darken(0.3).hex(),
  },
});

const variantOutline = x => ({
  backgroundColor: ({ theme }) => theme.colors.white,
  borderColor: ({ theme }) => x !== 'secondary' ? c(vColor(theme, x)).darken(0.1).hex() : '#ccc',
  color: ({ theme }) => x !== 'secondary' ? c(vColor(theme, x)).darken(0.1).hex() : '#ccc',
  '&:not($active):not($disabled):hover': {
    backgroundColor: ({ theme }) => c(vColor(theme, x)).darken(0.2).hex(),
    color: ({ theme }) => theme.colors[x !== 'secondary' ? 'white' : 'grayDark'],
  },
  '&:not($active):not($disabled):active, &$active': {
    backgroundColor: ({ theme }) => c(vColor(theme, x)).darken(0.3).hex(),
    color: ({ theme }) => theme.colors[x !== 'secondary' ? 'white' : 'grayDark'],
  },
});

const size = x => ({
  padding: '.75rem 1.5rem',
  fontSize: '1.25rem',
  borderRadius: '.3rem',
})

const styles = {
  kitInitize,
  button: {
    display: 'inline-block',
    fontWeight: 400,
    lineHeight: 1.25,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    userSelect: 'none',
    border: '1px solid transparent',
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',
    '&::-moz-focus-inner': {
      all: 'initial',
    },
  },
  block: {
    display: 'block',
    width: '100%',
  },
  active: {},
  disabled: {
    cursor: 'not-allowed',
    opacity: .65,
  },
  link: {
    fontWeight: 'normal',
    color: ({ theme }) => vColor(theme, 'primary'),
    '&:not($disabled):hover': {
      color: ({ theme }) => c(vColor(theme, 'primary')).darken(0.2).hex(),
      textDecoration: 'underline',
    },
   },
  'link-outline': {
    color: ({ theme }) => vColor(theme, 'primary'),
    '&:not($disabled):hover': {
      color: ({ theme }) => c(vColor(theme, 'primary')).darken(0.2).hex(),
      textDecoration: 'underline',
    },
  },
  primary:   variant('primary'),
  secondary: variant('secondary'),
  success:   variant('success'),
  info:      variant('info'),
  warning:   variant('warning'),
  danger:    variant('danger'),

  'primary-outline':   variantOutline('primary'),
  'secondary-outline': variantOutline('secondary'),
  'success-outline':   variantOutline('success'),
  'info-outline':      variantOutline('info'),
  'warning-outline':   variantOutline('warning'),
  'danger-outline':    variantOutline('danger'),

  'size-l': {
    padding: '.75rem 1.5rem',
    fontSize: '1.25rem',
    borderRadius: '.3rem',
  },

  'size-m': {
    padding: '.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '.25rem',
  },

  'size-s': {
    padding: '.25rem .5rem',
    fontSize: '.875rem',
    borderRadius: '.2rem',
  },

  icon: {
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    color: 'white',
  }
}

export default styles;
