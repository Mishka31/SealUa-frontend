import React, { FC } from 'react';

import { IIconsProps } from 'shared/interfaces';

export const live: FC<IIconsProps> = ({ width = 59, height = 27 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 59 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11.8125" cy="13.1875" r="10.7125" stroke="#AAB900" strokeWidth="2.2" />
      <path d="M16.875 13.1875L9.28125 17.5718L9.28125 8.80325L16.875 13.1875Z" fill="#AAB900" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 5.98745V3.51245H49.5C54.5327 3.51245 58.6125 7.59226 58.6125 12.625C58.6125 17.6576 54.5327 21.7375 49.5 21.7375H19.125V19.2625H49.5C53.1658 19.2625 56.1375 16.2907 56.1375 12.625C56.1375 8.95916 53.1658 5.98745 49.5 5.98745H27Z"
        fill="#AAB900"
      />
      <path
        d="M27.63 17H30.83V16.19H28.76V8.9H27.63V17ZM33.6646 17H34.7746V8.9H33.6646V17ZM39.4951 17H40.4851L42.2751 8.9H41.2451L40.0251 14.87L38.7451 8.9H37.6851L39.4951 17ZM45.1339 17H48.2939V16.19H46.2639V13.22H47.8939V12.42H46.2639V9.74H48.2739V8.9H45.1339V17Z"
        fill="white"
      />
    </svg>
  );
};
