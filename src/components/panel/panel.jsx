import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { PanelBlock, PanelHeader, PanelIcon, PanelTabs } from './components';

export const Panel = ({ className, ...props }) => <Element {...props} className={cn('panel', className)} />;

Panel.Header = PanelHeader;
Panel.Tabs = PanelTabs;
Panel.Block = PanelBlock;
Panel.Icon = PanelIcon;

Panel.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Panel.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'nav'
};