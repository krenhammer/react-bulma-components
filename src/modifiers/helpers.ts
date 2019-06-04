import cn from 'classnames';

export type HelpersModifier = Partial<{
  clearfix: boolean;
  clipped: boolean;
  hidden: boolean;
  invisible: boolean;
  marginless: boolean;
  overlay: boolean;
  paddingless: boolean;
  pull: 'right' | 'left';
  radiusless: boolean;
  shadowless: boolean;
  unselectable: boolean;
}>;

export default {
  defaultProps: {
    clearfix: false,
    clipped: false,
    hidden: false,
    invisible: false,
    marginless: false,
    overlay: false,
    paddingless: false,
    radiusless: false,
    shadowless: false,
    unselectable: false
  },
  getClassName: (props: any) =>
    cn({
      'is-clearfix': props.clearfix,
      'is-clipped': props.clipped,
      'is-hidden': props.hidden,
      'is-invisible': props.invisible,
      'is-marginless': props.marginless,
      'is-overlay': props.overlay,
      'is-paddingless': props.paddingless,
      'is-radiusless': props.radiusless,
      'is-shadowless': props.shadowless,
      'is-unselectable': props.unselectable,
      [`is-pulled-${props.pull}`]: props.pull
    }),
  clean: ({
    clearfix,
    clipped,
    hidden,
    invisible,
    marginless,
    overlay,
    paddingless,
    pull,
    radiusless,
    shadowless,
    unselectable,
    ...props
  }: HelpersModifier) => props
};
