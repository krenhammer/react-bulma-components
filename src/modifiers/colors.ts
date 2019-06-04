/* eslint-disable no-unused-vars */
import cn from 'classnames';
import { Colors, Greyscale } from '../constants';

export type ColorsModifier = Partial<{
  backgroundColor: Colors & Greyscale;
  textColor: Colors & Greyscale;
}>;

export default {
  defaultProps: {},
  getClassName: (props: any) =>
    cn({
      [`has-background-${props.backgroundColor}`]: props.backgroundColor,
      [`has-text-${props.textColor}`]: props.textColor
    }),
  clean: ({ textColor, backgroundColor, ...props }: ColorsModifier) => props
};
