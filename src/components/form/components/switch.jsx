import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Switch = ({ className, style, disabled, value, children, checked, color, size, name, ...allProps }) => {
  const props = modifiers.clean(allProps);
  const [isMouseDown, setMouseDown] = useState(false);
  return (
    <label
      className={cn('switch', modifiers.getClassName(allProps), className)}
      style={style}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseOut={() => setMouseDown(false)}
      disabled={disabled}
      data-testid="switch-label"
    >
      <input
        {...props}
        name={name}
        type="checkbox"
        value={value}
        disabled={disabled}
        checked={checked}
        data-testid="switch-input"
      />
      <span
        className={cn('check', {
          'is-elastic': isMouseDown && !disabled,
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
        data-testid="switch-check"
      />
      <span className="control-label">{children}</span>
    </label>
  );
};

Switch.propTypes = {
  ...modifiers.propTypes,
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  value: PropTypes.string
};

Switch.defaultProps = {
  ...modifiers.defaultProps,
  checked: false,
  value: ''
};