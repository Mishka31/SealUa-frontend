import React from 'react';

import { IIconsProps } from 'shared/interfaces';

export const Facebook: React.FC<IIconsProps> = ({ width = 16, height = 16, color }) => (
  <svg width={width} height={height} viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.80666 26V14.1668H12.8439L13.4216 9.54632H8.80666V6.65346C8.80666 5.35459 9.23962 4.3439 11.1162 4.3439H13.5706V0.152172C12.9928 0.152172 11.5547 0.012958 9.96214 0.012958C9.15784 -0.0420058 8.35121 0.0783205 7.59797 0.365622C6.84473 0.652923 6.16286 1.10035 5.59947 1.67698C5.03608 2.2536 4.60461 2.94568 4.33487 3.70539C4.06514 4.4651 3.96358 5.27431 4.0372 6.07711V9.54075H0V14.1613H4.0372V25.9944L8.80666 26Z"
      fill={color}
    />
  </svg>
);
