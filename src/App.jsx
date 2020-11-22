import React from "react";
import { Switch } from "react-router";
import { privateRouter, publicRouter } from "./router";
import routeAssessor from "./router/routeAssessor";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Main } from "./containers/Main/containers";
import { Auth } from "./containers/Auth/containers/Auth";

const theme = createMuiTheme({});

export default () => (
  <MuiThemeProvider theme={theme}>
    <Switch>
      {/*<Auth>{publicRouter.map((route) => routeAssessor(null, route))}</Auth>*/}
      <Main>{privateRouter().map((route) => routeAssessor(null, route))}</Main>
    </Switch>
  </MuiThemeProvider>
);
