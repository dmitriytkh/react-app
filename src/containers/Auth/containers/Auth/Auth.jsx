import React from "react";
import "./index.scss";
import { CssBaseline, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Auth = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>{children}</Paper>
    </main>
  );
};

export default Auth;
