import React, { FC } from 'react';

import { IIconsProps } from 'shared/interfaces';
import { color as myColor } from 'theme';

export const profile: FC<IIconsProps> = ({ width = 28, height = 28, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 13C15.9338 13 17.5 11.4338 17.5 9.5C17.5 7.56625 15.9338 6 14 6C12.0662 6 10.5 7.56625 10.5 9.5C10.5 11.4338 12.0662 13 14 13ZM14 14.75C11.6637 14.75 7 15.9225 7 18.25V20H21V18.25C21 15.9225 16.3363 14.75 14 14.75Z"
        fill="#FFBB38"
      />
      <circle cx="14" cy="14" r="13" stroke={color ? color : myColor.yellow} strokeWidth="2" />
    </svg>
  );
};
