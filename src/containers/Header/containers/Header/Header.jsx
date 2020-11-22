import React, { useState, useEffect } from "react";
import { withRouter, matchPath } from "react-router";
import { privateRouter } from "../../../../router";
import useStyles from "./styles";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  AppBar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classnames from "classnames";

const Header = ({ location: { pathname }, open, setOpen }) => {
  const classes = useStyles();
  const [headerTitle, setTitle] = useState("");
  useEffect(() => {
    const activeRoute = privateRouter().find((route) =>
      matchPath(pathname, route.path)
    );
    if (activeRoute) {
      setTitle(activeRoute.label);
    }
  }, [pathname]);

  return (
    <AppBar
      color="secondary"
      position="absolute"
      className={classnames(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar} variant="dense">
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          arial-label="open drawer"
          onClick={() => setOpen(true)}
          className={classnames(
            classes.menuButton,
            open && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {headerTitle ? headerTitle.label : ""}
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="default"
          onClick={() => {}}
        >
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
