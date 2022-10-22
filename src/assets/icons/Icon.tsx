import React, { FC } from 'react';

import { IIconsProps } from 'shared/interfaces';

import * as allIcons from './index';

export const Icon: FC<IIconsProps> = ({ type, width, height, color, isFilled }) => {
  const svgItems = [
    {
      name: 'alert',
      component: () => allIcons.alert({ width, height, color }),
    },
    {
      name: 'logo',
      component: () => allIcons.logo({ width, height, color }),
    },
    {
      name: 'live',
      component: () => allIcons.live({ width, height, color }),
    },
    {
      name: 'search',
      component: () => allIcons.search({ width, height, color }),
    },
    {
      name: 'like',
      component: () => allIcons.like({ width, height, color, isFilled: isFilled }),
    },
    {
      name: 'burger',
      component: () => allIcons.burger({ width, height, color }),
    },
    {
      name: 'error',
      component: () => allIcons.error({ width, height, color }),
    },
    {
      name: 'profile',
      component: () => allIcons.profile({ width, height, color }),
    },
    {
      name: 'eyeOpen',
      component: () => allIcons.EyeOpen({ width, height, color }),
    },
    {
      name: 'eyeClosed',
      component: () => allIcons.EyeClosed({ width, height, color }),
    },
    {
      name: 'arrowLeft',
      component: () => allIcons.arrowLeft({ width, height, color }),
    },
    { name: 'home', component: () => allIcons.Home({ width, height, color }) },
    { name: 'user', component: () => allIcons.User({ width, height, color }) },
    { name: 'playButton', component: () => allIcons.playButton({ width, height, color }) },
    { name: 'lock', component: () => allIcons.lock({ width, height }) },
    { name: 'pencil', component: () => allIcons.pencil({ width, height }) },
  ];
  return <>{svgItems.filter((x) => x.name === type)[0].component()}</>;
};
