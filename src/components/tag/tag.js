import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';
import TagGroup from './components/tag-group';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Tag = React.forwardRef(({ children, className, color, size, rounded, remove, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('tag', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
      'is-rounded': rounded,
      'is-delete': remove
    })}
  >
    {!remove && children}
  </Element>
));

Tag.Group = TagGroup;

Tag.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(['medium', 'large']),
  rounded: PropTypes.bool,
  remove: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Tag.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  color: null,
  size: null,
  rounded: false,
  remove: false,
  renderAs: 'span'
};

export default Tag;
