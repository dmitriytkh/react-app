import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100%",
  },
  container: {
    margin: theme.spacing(0),
    padding: theme.spacing(0, 2),
    height: "100%",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  margin: {
    margin: theme.spacing(1),
    color: "#fff",
  },
}));
