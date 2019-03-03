import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { LevelItem } from './components/level-item';
import { LevelSide } from './components/level-side';

const breakpoints = Object.values(CONSTANTS.BREAKPOINTS);

export const Level = React.forwardRef(({ children, className, breakpoint, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('level', className, {
      [`is-${breakpoint}`]: breakpoint
    })}
  >
    {children}
  </Element>
));

Level.Side = LevelSide;
Level.Item = LevelItem;

Level.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  breakpoint: PropTypes.oneOf(breakpoints),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Level.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
