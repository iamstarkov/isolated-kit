import React, { PropTypes } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

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
  const iconComponent = <span className={cn({ [classes.icon]: icon })} >✓</span>;
  return (
    <Tag
      className={cn({
        // [classes.kitInitize]: true,
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
      { isInput
        ? null
        : icon ? iconComponent : null }
      { isInput
        ? null
        : children }
    </Tag>
  );
};

export default injectSheet(styles)(Button);
