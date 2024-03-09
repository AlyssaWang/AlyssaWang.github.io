import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Link,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useWindowDimensions } from '../getWindowDimensions';

const useStyles = makeStyles({
  mobileRoot: {
    opacity: 0.8,
  },
  linksContainer: {
    flexGrow: 1,
    display: 'flex',
  },
  linkContainer: {
    margin: '0 8px',
  },
  link: {
    fontSize: '1em !important',
    textDecoration: 'none',
    display: 'block',
    color: '#24305E !important',
    '&:hover': {
      color: 'white !important',
    },
  },
  mobileLink: {
    fontSize: '1em !important',
    textDecoration: 'none',
    display: 'block',
    color: '#24305E !important',
    '&:hover': {
      color: '#499ecb !important',
    },
  },
});

// TODO: Make mobile header with SwipeableDrawer.

const Header = () => {
  const classes = useStyles();
  const pages = ['Home', 'Resume', 'Projects', 'About'];
  const { width } = useWindowDimensions();
  const fullScreen = width > 500;

  return (
    <>
      <AppBar
        position='fixed'
        color={fullScreen ? 'transparent' : ''}
        elevation={0}
        className={fullScreen ? {} : classes.mobileRoot}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar disableGutters sx={{ margin: '0 16px' }}>
          <Box className={classes.linksContainer}>
            {pages.map((page) => (
              <Box key={page} className={classes.linkContainer}>
                <Link
                  href={`#/${page.toLowerCase()}`}
                  underline='none'
                  variant='overline'
                  className={fullScreen ? classes.link : classes.mobileLink}
                >
                  {page}
                </Link>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
