import React, { FC } from 'react';

import { IIconsProps } from 'shared/interfaces';
import { color as myColor } from 'theme';

export const like: FC<IIconsProps> = ({ isFilled, width = 32, height = 32, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.9023 9.3955C30.9005 9.40574 30.8989 9.41602 30.8975 9.42631C30.8913 9.46978 30.8863 9.49152 30.8773 9.52977C30.8685 9.56729 30.8561 9.6207 30.8352 9.72607C30.8347 9.72818 30.8333 9.73334 30.8307 9.74252L30.8198 9.78008C30.8154 9.79521 30.8094 9.81583 30.8033 9.8377C30.7864 9.89805 30.7549 10.0137 30.7416 10.1574C30.2945 12.2921 29.1568 14.6047 27.6405 16.9087C26.1148 19.2269 24.2434 21.4807 22.4152 23.4626C20.589 25.4424 18.8191 27.1368 17.5052 28.3365C16.8804 28.907 16.3598 29.3646 15.9867 29.6868C9.03404 23.6939 5.28732 18.6265 3.27918 15.0665C2.24424 13.2318 1.66924 11.7943 1.35493 10.8324C1.21955 10.4181 1.13238 10.0915 1.07762 9.85899C1.12378 9.70846 1.13432 9.54734 1.10576 9.38867C1.04625 9.058 1.01124 8.72324 1.00102 8.38721C0.9715 6.61018 1.58395 4.88552 2.71983 3.53812C3.85669 2.18956 5.43848 1.31271 7.16489 1.06907C8.89115 0.82544 10.6468 1.23109 12.1008 2.21185C13.5552 3.19289 14.6083 4.68254 15.0571 6.4019C15.1713 6.83938 15.5648 7.14581 16.0169 7.1493C16.4691 7.1528 16.8673 6.85249 16.9882 6.41684C17.4579 4.7252 18.5148 3.26685 19.9595 2.30924C21.4039 1.35188 23.1392 0.958716 24.8449 1.20017C26.5508 1.44164 28.1157 2.30214 29.2484 3.62641C30.3794 4.94852 31.0025 6.64313 31 8.39792C30.9919 8.73247 30.9593 9.06593 30.9023 9.3955Z"
        stroke={color ? color : myColor.white}
        fill={isFilled ? (color ? color : myColor.white) : ''}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};