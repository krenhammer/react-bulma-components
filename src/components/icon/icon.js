import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Icon = React.forwardRef(({ icon, size, color, className, align, children, ...allProps }, ref) => {
  const props = modifiers.clean(allProps);
  return (
    <span
      {...props}
      className={cn('icon', modifiers.classnames(allProps), className, {
        [`is-${size}`]: size,
        [`is-${align}`]: align,
        [`has-text-${color}`]: color
      })}
    >
      {children || (
        <i
          ref={ref}
          className={cn('rbc', {
            [`rbc-${icon}`]: icon
          })}
        />
      )}
    </span>
  );
});

Icon.propTypes = {
  ...modifiers.propTypes,
  icon: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  align: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.oneOf(colors)
};

Icon.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  style: {},
  size: null,
  color: null,
  children: null,
  align: null,
  icon: null
};

export default Icon;
