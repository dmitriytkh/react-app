import React from "react";
import "./index.scss";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const SideBarItem = ({ route: { icon, label, path } }) => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(push(path))} className="sidebar-item">
      {label}
    </div>
  );
};

export default SideBarItem;
