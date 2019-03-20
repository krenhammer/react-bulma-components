import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Progress = ({ className, value, max, color, size, ...props }) => (
  <Element
    renderAs="progress"
    {...props}
    value={value}
    max={max}
    className={cn('progress', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  />
);

Progress.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  value: PropTypes.number,
  max: PropTypes.number
};

Progress.defaultProps = {
  ...modifiers.defaultProps,
  max: 100
};