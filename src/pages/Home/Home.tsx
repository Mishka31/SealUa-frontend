import { useStyles } from './styles';

export const Home = () => {
  const classes = useStyles();

  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 1000);

  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen = docEl.requestFullscreen;
  const cancelFullScreen = doc.exitFullscreen;

  if (!doc.fullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
  return (
    <div className={classes.root}>
      <h1>Home Page</h1>
    </div>
  );
};
