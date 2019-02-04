import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';

import MessageBody from './components/body';
import MessageHeader from './components/header';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Message = React.forwardRef(({ children, className, color, size, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('message', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
));

Message.Body = MessageBody;

Message.Header = MessageHeader;

Message.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors)
};

Message.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'article',
  color: null,
  size: null
};

export default Message;
