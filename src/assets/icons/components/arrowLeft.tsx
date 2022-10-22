import React, { FC } from 'react';

import { IIconsProps } from 'shared/interfaces';
import { color as myColor } from 'theme';

export const arrowLeft: FC<IIconsProps> = ({ width = 32, height = 32, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.0383 13.7619C33.5258 14.2494 33.7996 14.9106 33.7996 15.6001C33.7996 16.2895 33.5258 16.9507 33.0383 17.4383L24.4765 26.0001L33.0383 34.5619C33.5119 35.0522 33.774 35.709 33.7681 36.3907C33.7622 37.0724 33.4887 37.7245 33.0067 38.2066C32.5246 38.6886 31.8725 38.9621 31.1908 38.968C30.5091 38.9739 29.8523 38.7119 29.3619 38.2383L18.9619 27.8383C18.4745 27.3507 18.2007 26.6895 18.2007 26.0001C18.2007 25.3106 18.4745 24.6494 18.9619 24.1619L29.3619 13.7619C29.8495 13.2744 30.5107 13.0006 31.2001 13.0006C31.8896 13.0006 32.5508 13.2744 33.0383 13.7619Z"
        fill={color ? color : myColor.white}
      />
    </svg>
  );
};
