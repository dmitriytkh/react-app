import React from "react";
import "./index.scss";
import { privateRouter } from "../../../../router";
import { SideBarItem } from "../../components/SideBarItem";

export default () => {
  return (
    <aside className="sidebar">
      {privateRouter().map((router) => (
        <SideBarItem key={router.path} route={router} />
      ))}
    </aside>
  );
};
