import React from "react";
import "./index.scss";

import classname from "classname";

import { Header } from "../../../Header/containers/Header";
import { SideBar } from "../../../SideBar/containers/SideBar";

export default ({ children }) => {
  return (
    <main className="main-container">
      <Header />
      <div className="content">
        <SideBar />
        {children}
      </div>
    </main>
  );
};
