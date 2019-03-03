/* eslint-disable no-unused-vars */
import cn from 'classnames';
import PropTypes from 'prop-types';

export default {
  propTypes: {
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    textAlignment: PropTypes.oneOf(['centered', 'justified', 'left', 'right']),
    textTransform: PropTypes.oneOf(['capitalized', 'lowercase', 'uppercase']),
    textWeight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
    italic: PropTypes.bool
  },
  defaultProps: {
    italic: false
  },
  getClassName: props =>
    cn({
      [`has-text-${props.textAlignment}`]: props.textAlignment,
      [`has-text-weight-${props.textWeight}`]: props.textWeight,
      [`is-size-${props.textSize}`]: props.textSize,
      [`is-${props.textTransform}`]: props.textTransform,
      'is-italic': props.italic
    }),
  clean: ({ textWeight, textTransform, italic, textSize, textAlignment, ...props }) => props
};
