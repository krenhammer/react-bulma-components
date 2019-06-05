import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type LoaderProps = Partial<Modifiers> & {
  onClick?: (...args: any[]) => any;
};

export const Loader: React.FunctionComponent<LoaderProps> = ({
  overlay,
  onClick,
  className,
  ...props
}: LoaderProps) => (
  <Element
    {...props}
    className={cn('loader', className, {
      'is-overlay': overlay
    })}
  >
    <div className="loader-background" onClick={onClick} />
    <div className="loader-icon" />
  </Element>
);

Loader.defaultProps = {
  ...modifiers.defaultProps,
  overlay: false
};