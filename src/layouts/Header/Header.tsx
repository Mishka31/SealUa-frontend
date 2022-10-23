import { createUseStyles } from 'react-jss';

import { Container } from 'components/common/Container';
import { IconButton } from 'shared/IconButton';
import { flex } from 'shared/styles/styles';
import { color } from 'theme';

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Container>
        <nav className={classes.navContainer}>
          <a className={classes.logo} href="/">
            SEAL<span className={classes.uTitle}>U</span>
            <span className={classes.aTitle}>A</span>
          </a>
          <ul>
            <li>
              <a href="tel:+380507620564">
                <svg width="10" height="16">
                  <use href="./sprite.svg#icon-phone"></use>
                </svg>
                + 38 (050) 762 05 64
              </a>
            </li>
            <li>
              <a href="tel:+380931564327">
                <svg width="10" height="16">
                  <use href="./sprite.svg#icon-phone"></use>
                </svg>
                + 38 (093) 156 43 27
              </a>
            </li>
          </ul>
          <div className={classes.avatarContainer}>
            <h2 className={classes.nameTitle}>
              {`Ім'я `}
              {'Прізвище'}
            </h2>
            <IconButton width={40} height={40} margin="0px 0px" iconType="profile" onClick={() => alert('Тут буде Дропдаун')} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

const useStyles = createUseStyles({
  root: {
    background: color.darkGrey,
    padding: '20px 0px',
  },
  navContainer: {
    ...flex(),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Shadows Into Light',
    fontWeight: '700',
    fontSize: '56px',
    lineHeight: '1.014',
    letterSpacing: '0.16em',
    textDecoration: 'none',
    color: color.black,
    '&:hover': {
      textShadow: '0px 8px 12px rgba(153, 0, 0, 0.75)',
      transition: 'text-shadow 0.3s',
    },
  },
  avatarContainer: {
    ...flex(),
    fontFamily: 'cursive',
    alignItems: 'center',
  },
  nameTitle: {
    marginRight: 15,
    marginBottom: 7,
    '&:hover': {
      textShadow: '0px 8px 12px rgba(153, 0, 0, 0.75)',
      transition: 'text-shadow 0.3s',
    },
  },
  uTitle: {
    fontFamily: 'Shadows Into Light',
    color: color.yellow,
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '0.13em',
  },
  aTitle: {
    fontFamily: 'Shadows Into Light',
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '0.13em',
    color: 'rgb(40, 133, 255)',
  },
});
