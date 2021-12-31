import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  linksContainer: {
    flexGrow: 1,
    display: "flex",
  },
  linkContainer: {
    margin: "0 8px",
  },
  link: {
    fontSize: "1em !important",
    textDecoration: "none",
    display: "block",
    color: "#24305E !important",
    '&:hover': {
       color: "white !important",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const pages = ["Home", "Projects", "Resume", "About"];

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      className={classes.root}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className={classes.linksContainer}>
            {pages.map((page) => (
              <Box key={page} className={classes.linkContainer}>
                <Link
                  href={`#/${page.toLowerCase()}`}
                  underline="none"
                  variant="overline"
                  className={classes.link}
                >
                  {page}
                </Link>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
