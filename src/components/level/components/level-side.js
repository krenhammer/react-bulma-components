import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import Element from '../../element';

const LevelSide = React.forwardRef(({ children, className, align, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn(className, {
      [`level-${align}`]: align
    })}
  >
    {children}
  </Element>
));
LevelSide.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  align: PropTypes.string
};

LevelSide.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  align: 'left'
};

export default LevelSide;
