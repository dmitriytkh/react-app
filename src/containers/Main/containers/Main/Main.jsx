import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Header } from "../../../Header/containers/Header";
import { SideBar } from "../../../SideBar/containers/SideBar";
import { useDispatch, connect } from "react-redux";
import { CssBaseline, Grid } from "@material-ui/core";
import { A_FetchAllArticlesRequest } from "../../../../store/actions";
import { bindActionCreators } from "redux";

const MainComponent = ({
  children,
  actions: { A_FetchAllArticlesRequest },
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // dispatch(actions.FETCH_ARTICLES.REQUEST());
    A_FetchAllArticlesRequest();
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

const mapdispatchtoProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        A_FetchAllArticlesRequest,
      },
      dispatch
    ),
  };
};

export default connect(null, mapdispatchtoProps)(MainComponent);
