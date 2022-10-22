import { useStyles } from './styles';

export const Home = () => {
  const classes = useStyles();

  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 1000);

  return (
    <div className={classes.root}>
      <h1>Home Page</h1>
    </div>
  );
};
