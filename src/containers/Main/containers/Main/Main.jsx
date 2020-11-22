import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Header } from "../../../Header/containers/Header";
import { SideBar } from "../../../SideBar/containers/SideBar";
import { useDispatch } from "react-redux";
import { actions } from "../../../../store/actions";
import { CssBaseline, Grid } from "@material-ui/core";

export default ({ children }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    dispatch(actions.FETCH_ARTICLES.REQUEST());
  }, [dispatch]); //Why? when we load user page, get articles

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer}></div>
        <Grid container spacing={1} className={classes.container}>
          <Grid item>{children}</Grid>
        </Grid>
      </main>
    </div>
  );
};
