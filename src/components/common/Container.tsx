import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { theme } from 'theme';

export interface IContainer {
  children: JSX.Element | JSX.Element[] | undefined;
}

export const Container: FC<IContainer> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

const useStyles = createUseStyles({
  root: {
    padding: '0 20px',
    margin: '0 auto',
    [theme.breakpoints.sm]: {
      maxWidth: '576px',
    },
    [theme.breakpoints.lg]: {
      maxWidth: '768px',
    },
    [theme.breakpoints.xl]: {
      maxWidth: '1100px',
    },
  },
});
