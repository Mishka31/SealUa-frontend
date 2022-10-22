import React from 'react';

import { IIconsProps } from 'shared/interfaces';

export const User: React.FC<IIconsProps> = ({ width = 28, height = 28, color }) => (
  <svg width={width} height={height} viewBox="0 0 21 20" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.1562 10C12.9187 10 15.1562 7.7625 15.1562 5C15.1562 2.2375 12.9187 0 10.1562 0C7.39375 0 5.15625 2.2375 5.15625 5C5.15625 7.7625 7.39375 10 10.1562 10ZM10.1562 12.5C6.81875 12.5 0.15625 14.175 0.15625 17.5V20H20.1562V17.5C20.1562 14.175 13.4937 12.5 10.1562 12.5Z"
      fill={color}
    />
  </svg>
);
