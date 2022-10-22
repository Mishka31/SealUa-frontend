import { useStyles } from './styles';

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Home Page</h1>
    </div>
  );
};
