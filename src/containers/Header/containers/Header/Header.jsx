import React, { useState, useEffect } from "react";
import { withRouter, matchPath } from "react-router";
import { privateRouter } from "../../../../router";
import "./index.scss";

const Header = (props) => {
  const [headerTitle, setTitle] = useState("");
  useEffect(() => {
    const {
      location: { pathname },
    } = props;
    const activeRoute = privateRouter().find((route) =>
      matchPath(pathname, route.path)
    );
    if (activeRoute) {
      setTitle(activeRoute.label);
    }
  }, [props]);

  return <header className="header">Header: {headerTitle}</header>;
};

export default withRouter(Header);
