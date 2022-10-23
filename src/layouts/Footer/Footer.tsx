import React from 'react';
import { createUseStyles } from 'react-jss';

import { Container } from 'components/common/Container';
import { color } from 'theme';

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <h1>footer</h1>
      </Container>
    </footer>
  );
};

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    padding: '10px 0px',
    background: color.darkGrey,
    marginBottom: '0px',
  },
});
