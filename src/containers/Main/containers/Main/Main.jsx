import React, { useEffect } from "react";
import "./index.scss";
import classname from "classname";
import { Header } from "../../../Header/containers/Header";
import { SideBar } from "../../../SideBar/containers/SideBar";
import { useDispatch } from "react-redux";
// import * as actions from "../../../Articles/store/actions";
import { actions } from "../../../../store/actions";

export default ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.FETCH_ARTICLES.REQUEST());
  }, [dispatch]); //Why? when we load user page, get articles

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
