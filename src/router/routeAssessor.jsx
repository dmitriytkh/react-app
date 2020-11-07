import React from "react";
import { Route, Switch } from "react-router";

const routeAssessor = (parentRoutePath, route) => {
  const { children, component, exact, path, label } = route;

  const fullPath = parentRoutePath ? `${parentRoutePath}${path}` : path;

  if (!children.length) {
    return (
      <Route
        key={fullPath}
        path={fullPath}
        exact={exact}
        component={component}
      />
    );
  } else {
    return (
      <Switch key={`parent-${path}`}>
        <Route key={path} path={path} exact={exact} component={component} />
        {children.map((childRoute) => routeAssessor(path, childRoute))}
      </Switch>
    );
    // return children.map((childRoute) => routeAssessor(path, childRoute));
  }
};

export default routeAssessor;
