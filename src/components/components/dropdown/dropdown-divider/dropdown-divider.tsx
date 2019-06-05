import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';

type DropdownDividerProps = Partial<Omit<React.ComponentProps<'hr'>, 'unselectable'>> & ElementModifier;

export const DropdownDivider: React.FunctionComponent<DropdownDividerProps> = ({
  className,
  ...allProps
}: DropdownDividerProps) => {
  const props = modifiers.clean(allProps);
  return <hr {...props} className={cn('dropdown-divider', modifiers.getClassName(allProps), className)} />;
};

DropdownDivider.defaultProps = {
  ...modifiers.defaultProps
};
