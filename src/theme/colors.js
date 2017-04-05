const colors = {
  // Start with assigning color names to specific hex values.
  white:  '#fff',
  black:  '#000',
  red:    '#d9534f',
  orange: '#f0ad4e',
  yellow: '#ffd500',
  green:  '#5cb85c',
  blue:   '#0275d8',
  teal:   '#5bc0de',
  pink:   '#ff5b77',
  purple: '#613d7c',

  // Create grayscale
  grayDark:     '#292b2c',
  gray:         '#464a4c',
  grayLight:    '#636c72',
  grayLighter:  '#eceeef',
  grayLightest: '#f7f7f9',
};

colors.variants = {
  primary:   colors.blue,
  secondary: colors.white,
  success:   colors.green,
  info:      colors.teal,
  warning:   colors.orange,
  danger:    colors.red,
  inverse:   colors.grayDark,
}

export default colors;
