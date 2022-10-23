import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { Icon } from 'assets/icons/Icon';

import { typeIcons } from './interfaces';

interface IIconButton {
  iconType?: typeIcons;
  text?: string;
  color?: string;
  isFilled?: boolean;
  margin?: string;
  disabled?: boolean;
  onClick?: any;
  width?: number;
  height?: number;
  className?: any;
}

export const IconButton: FC<IIconButton> = ({ disabled = false, width, height, margin, onClick, iconType, text, color, isFilled }) => {
  const classes = useStyles();
  return (
    <div style={{ margin }} className={classes.root} role="button" tabIndex={0} onClick={disabled ? '' : onClick} onKeyPress={onClick}>
      {text ? text : <Icon width={width} height={height} type={iconType} color={color} isFilled={isFilled} />}
    </div>
  );
};

const useStyles = createUseStyles({
  root: () => ({
    cursor: 'pointer',
  }),
});
