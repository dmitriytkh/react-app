import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { privateRouter } from "../../../../router";
import { SideBarItem } from "../../components/SideBarItem";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import classnames from "classnames";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default ({ open, setOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openListItem, setOpenListItem] = useState(false);

  const renderListItems = (parentRoutePath, route) => {
    const { children, icon, path, label } = route;
    const fullPath = parentRoutePath ? `${parentRoutePath}${path}` : path;

    const handleClick = (label) => {
      setOpenListItem(openListItem === label ? false : label);
    };

    return (
      <ListItem
        dense={Boolean(parentRoutePath)}
        key={fullPath}
        onClick={() => dispatch(push(fullPath))}
        button
        divider
        className={classnames(classes.nav, {
          [classes.childNav]: parentRoutePath,
        })}
      >
        {parentRoutePath ? null : <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={label} />
      </ListItem>
    );

    if (!children.length) {
      return (
        <ListItem
          dense={Boolean(parentRoutePath)}
          key={fullPath}
          onClick={() => dispatch(push(fullPath))}
          button
          divider
          className={classnames(classes.nav, {
            [classes.childNav]: parentRoutePath,
          })}
        >
          {parentRoutePath ? null : <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText primary={label} />
        </ListItem>
      );
    } else {
      return (
        <React.Fragment key={fullPath}>
          <ListItem
            dense={Boolean(parentRoutePath)}
            key={fullPath}
            onClick={() => dispatch(push(fullPath))}
            button
            divider
            className={classnames(classes.nav, {
              [classes.childNav]: parentRoutePath,
            })}
            onClick={() => handleClick(label)}
          >
            {parentRoutePath ? null : <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={label} />
            {openListItem === label ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openListItem === label} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((childRoute) => renderListItems(path, childRoute))}
            </List>
          </Collapse>
        </React.Fragment>
      );
    }
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classnames(
          classes.drawerPaper,
          !open && classes.drawerPaperClose
        ),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton size="small" onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List
        className={classes.nestedListSubheader}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {privateRouter().map((route) => (
          <React.Fragment key={Math.random()}>
            {renderListItems(null, route)}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
  // return (
  //   <aside className="sidebar">
  //     {privateRouter().map((router) => (
  //       <SideBarItem key={router.path} route={router} />
  //     ))}
  //   </aside>
  // );
};
