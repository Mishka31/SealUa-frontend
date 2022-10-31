import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from 'components/common/Container';
import { IconButton as IconProfile } from 'shared/IconButton';
import { flex, textShadow } from 'shared/styles/styles';
import { color } from 'theme';

import { Context } from '../../context';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    // width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Header = () => {
  const { screenWidth } = useContext(Context);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <header className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            padding: `${screenWidth > 992 ? '10px' : undefined} ${screenWidth < 992 ? '10%' : '15%'}`,
            // paddingRight: screenWidth < 992 ? '10%' : '20%',
            // paddingTop: screenWidth > 992 ? '10px' : undefined,
            // paddingBottom: screenWidth > 992 ? '10px' : undefined,
          }}
        >
          <Toolbar>
            {screenWidth < 992 ? (
              <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                <MenuIcon sx={{ marginRight: '-20px' }} />
              </IconButton>
            ) : (
              <a className={classes.logo} href="/">
                SEAL<span className={classes.uTitle}>U</span>
                <span className={classes.aTitle}>A</span>
              </a>
            )}

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      {/* <nav className={classes.navContainer}>
          <a className={classes.logo} href="/">
            SEAL<span className={classes.uTitle}>U</span>
            <span className={classes.aTitle}>A</span>
          </a>
          <ul>
            <li className={classes.mobilItem}>
              <a className={classes.mobNum} href="tel:+380507620564">
                <svg width="10" height="16">
                  <use href="./sprite.svg#icon-phone"></use>
                </svg>
                (050) 762 05 64
              </a>
            </li>
            <li className={classes.mobilItem}>
              <a className={classes.mobNum} href="tel:+380931564327">
                <svg width="10" height="16">
                  <use href="./sprite.svg#icon-phone"></use>
                </svg>
                (093) 156 43 27
              </a>
            </li>
          </ul>
          <div className={classes.avatarContainer}>
            <h2 className={classes.nameTitle}>{`Misha Krasnonos`}</h2>
            <IconProfile
              color={color.blueUKR}
              width={40}
              height={40}
              margin="0px 0px"
              iconType="profile"
              onClick={() => alert('Тут буде Дропдаун')}
            />
          </div>
        </nav> */}
    </header>
  );
};

const useStyles = createUseStyles({
  root: {
    background: color.gray,
    // padding: '20px 0px',
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
      ...textShadow(),
      transition: 'text-shadow 0.3s',
    },
  },
  mobilItem: {
    fontFamily: 'Oswald-light',
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '0.13em',
    listStyle: 'none',
    '&:hover': {
      ...textShadow(),
      transition: 'text-shadow 0.3s',
    },
  },
  mobNum: {
    color: color.blueUKR,
    textDecoration: 'none',
  },
  avatarContainer: {
    ...flex(),
    alignItems: 'center',
    '&:hover': {
      filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
      transition: 'filter 0.3s',
    },
  },

  nameTitle: {
    fontFamily: 'Oswald-light',
    fontSize: '22px',
    fontWeight: 700,
    letterSpacing: '0.13em',
    color: color.blueUKR,
    marginRight: 15,
    marginBottom: 7,
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
