import React from 'react';

import { IIconsProps } from 'shared/interfaces';

export const EyeOpen: React.FC<IIconsProps> = ({ width = 16, height = 16, color }) => (
  <svg width={width} height={height} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM8 7.5C8 5.84 9.34 4.5 11 4.5C12.66 4.5 14 5.84 14 7.5C14 9.16 12.66 10.5 11 10.5C9.34 10.5 8 9.16 8 7.5Z"
      fill={color}
    />
  </svg>
);

export const EyeClosed: React.FC<IIconsProps> = ({ width = 16, height = 16, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20">
    <path d="M9.91 7.51l2.58 2.43A2.5 2.5 0 0 0 10 7.5z" fill={color} />
    <path
      d="M8.2 5.9a4.38 4.38 0 0 1 1.8-.4 4.5 4.5 0 0 1 4.5 4.5 4.34 4.34 0 0 1-.29 1.55L17 14.14A14 14 0 0 0 20 10s-3-7-10-7a9.63 9.63 0 0 0-4 .85zm7.67 9.15L13 12.36l-1-.91-3.56-3.39L7 6.69 4.71 4.55 2 2 1 3l2.55 2.4A13.89 13.89 0 0 0 0 10s3 7 10 7a9.67 9.67 0 0 0 4.64-1.16L18 19l1-1-3.13-2.95zM10 14.5A4.5 4.5 0 0 1 5.5 10a4.45 4.45 0 0 1 .6-2.2l1.53 1.44a2.47 2.47 0 0 0-.13.76 2.49 2.49 0 0 0 3.41 2.32l1.54 1.45a4.47 4.47 0 0 1-2.45.73z"
      fill={color}
    />
  </svg>
);

export default { EyeOpen, EyeClosed };
