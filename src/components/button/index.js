import React from 'react';
import styles from './styles';
import { injectSheet, withTheme } from '../../';

const Button = ({
  classes,
  children,
  variant,
  tag: Tag,
  type,
  href,
  outline,
  size,
  block,
  active,
  disabled,
  onClick,
  icon
}) => {
  const isInput = Tag === 'input';
  const isLink = Tag === 'a';
  const iconComponent = <span className={cn({ [classes.icon]: true })} >✓</span>;
  return (
    <Tag
      className={cn({
        [classes.initize]: true,
        [classes.button]: true,
        [classes[variant]]: !outline,
        [classes[variant+'-outline']]: outline,
        [classes['size-'+size]]: size,
        [classes.block]: block,
        [classes.active]: active,
        [classes.disabled]: disabled,
      })}
      onClick={ onClick }
      type={ type }
      value={ isInput ? children : null  }
      href={ href ? href : null  }
      role={ isLink ? 'button' : null }
      disabled={ disabled ? true : null }
      aria-pressed={ (isLink && active) ? true : null }
      aria-disabled={ (isLink && disabled) ? true : null }
    >
      { !isInput
        ? ( icon ? [ iconComponent, ' ' ] : [] ).concat(children)
        : null
      }
    </Tag>
  );
};

Button.propTypes = {
  /**
   * JSS stylesheet's classes object
   */
  sheet: PropTypes.object,
  /**
   * Anything that can be rendered for Buttons and Text for tag="inputs" placed in `value` attribute
   */
  children: PropTypes.node,
  /**
   * onClick handler
   */
  onClick: PropTypes.func,
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger']).isRequired,
  /**
  * Outline
  */
  outline: PropTypes.bool,
  /**
  * Size
  */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /**
   * Tag
   */
  tag: PropTypes.string,
  /**
   * type attribute for tag="inputs"
   */
  type: PropTypes.string,
  /**
   * href attribute for tag="a"
   */
  href: PropTypes.string,
  /**
   * Block
   */
  block: PropTypes.bool,
  /**
   * Active state
   */
  active: PropTypes.bool,
  /**
   * Disabled state
   */
  disabled: PropTypes.bool,
  /**
   * Icon
   */
  icon: PropTypes.bool,
};

Button.defaultProps = {
  tag: 'button',
  type: 'button',
  outline: false,
  size: 'm',
  block: false,
  href: null,
  active: false,
  icon: false,
  disabled: false,
  onClick: ()=>{},
};

export default withTheme(injectSheet(styles)(Button));
