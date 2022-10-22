import React, { FC } from 'react';

import { IIconsProps } from 'shared/interfaces';
import { color as myColor } from 'theme';

export const burger: FC<IIconsProps> = ({ width = 30, height = 30, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="1.5" x2="30" y2="1.5" stroke={color ? color : myColor.grey} strokeWidth="3" />
      <line y1="9.5" x2="30" y2="9.5" stroke={color ? color : myColor.grey} strokeWidth="3" />
      <line y1="17.5" x2="30" y2="17.5" stroke={color ? color : myColor.grey} strokeWidth="3" />
    </svg>
  );
};
