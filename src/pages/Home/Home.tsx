import { createUseStyles } from 'react-jss';

import { Container } from 'components/common/Container';
import { color } from 'theme';

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <h1>main</h1>
      </Container>
    </div>
  );
};

export const useStyles = createUseStyles({
  root: {
    background: color.greyLight,
    height: 'calc(100vh - 100px)',
  },
});
